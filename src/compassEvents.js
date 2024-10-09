import COMPASS_HANDLERS from './compassHandlers.js';
import EFFECT_METHODS from './compassEffectMethods.js';
import COMPASS_ITEMS from './compassItems.js';
import { SKILL_TYPES, MODULE_NAME, ABILITY_SCORES, ITEM_TYPES } from './compassConfig.js';

export const compassEvents = {
    onActivateEvents: [],
    onDeactivateEvents: [],
    actorUpdateEvents: [],
    updateCombatEvents: [],
    preLongRestEvents: [],
    preAttackRollEvents: [],
    attackRollCompleteEvents: [],
    damageRollCompleteEvents: [],
    preCheckSaveEvents: [],
    postCheckSaveEvents: [],
    preCheckHitsEvents: [],
    spellCastEvents: [],
    preItemRollEvents: [],
    rollCompleteEvents: [],

    FC_ACTOR_UPDATE: async (actor, updateData, options, userId) => {
        for (const event of compassEvents.actorUpdateEvents) {
            await event(actor, updateData, options, userId);
        }

        // Detect creation and deletion of active effects
        if (updateData.effects) {
            for (const effect of updateData.effects) {
                const handler = COMPASS_HANDLERS[effect.name];
                if (effect.deleted) {
                    if (handler && typeof handler.FC_ON_REMOVED_ACTIVE_EFFECT === 'function') {
                        await handler.FC_ON_REMOVED_ACTIVE_EFFECT(effect, actor);
                    }
                } else {
                    if (handler && typeof handler.FC_ON_CREATE_ACTIVE_EFFECT === 'function') {
                        await handler.FC_ON_CREATE_ACTIVE_EFFECT({ actor, effect, userId });
                    }
                }
            }
        }

        // Activate skills
        const skills = actor.flags[MODULE_NAME]?.activeTalents?.skills;
        if (skills) {
            for (const skill of skills) {
                const handler = COMPASS_HANDLERS[skill];
                if (handler) {
                    if (typeof handler === 'function') {
                        await handler({ actor });
                    } else if (typeof handler.FC_ON_ACTIVATE === 'function') {
                        await handler.FC_ON_ACTIVATE({ actor });
                    }
                } else {
                    console.warn(`No handler found for skill: ${skill}`);
                }
            }
        }
        await compassEvents.FC_CLEAN_UP_TALENTS(actor);
    },

    FC_UPDATE_COMBAT: async (combat, updateData, options, userId) => {
        for (const event of compassEvents.updateCombatEvents) {
            await event(combat, updateData, options, userId);
        }

        if (!('turn' in updateData)) return;
        const combatant = combat.combatant;
        if (!combatant) return;
        const actor = combatant.actor;
        if (!actor) return;
        const skills = getProperty(actor.flags, `${MODULE_NAME}.activeTalents.skills`) || [];
        const user = game.users.players.find(u => u.character?.id === actor.id);
        if (!user) {
            console.error(`No user found controlling actor ${actor.name}.`);
            return;
        }
        const controllingUserId = user.id;
        for (const skill of skills) {
            const handler = COMPASS_HANDLERS[skill];
            if (handler && typeof handler.FC_UPDATE_COMBAT_EVENT === 'function') {
                await handler.FC_UPDATE_COMBAT_EVENT({ actor, userId: controllingUserId });
            }
        }
    },

    FC_PRE_LONG_REST: async (actor, data, options, userId) => {
        for (const event of compassEvents.preLongRestEvents) {
            await event(actor, data, options, userId);
        }

        const skills = getProperty(actor.flags, `${MODULE_NAME}.activeTalents.skills`) || [];
        let availableActions = [];
        if (skills.includes(SKILL_TYPES.ANIMAL_HANDLING) && COMPASS_HANDLERS[SKILL_TYPES.ANIMAL_HANDLING]?.FC_PRE_LONG_REST_EVENT) {
            const trainAnimalActions = await COMPASS_HANDLERS[SKILL_TYPES.ANIMAL_HANDLING].FC_PRE_LONG_REST_EVENT({ actor });
            availableActions = availableActions.concat(trainAnimalActions);
        }
        if (skills.includes('complex-training') && COMPASS_HANDLERS['complex-training']?.FC_PRE_LONG_REST_EVENT) {
            const complexTrainingActions = await COMPASS_HANDLERS['complex-training'].FC_PRE_LONG_REST_EVENT({ actor });
            availableActions = availableActions.concat(complexTrainingActions);
        }

        if (availableActions.length > 0) {
            EFFECT_METHODS.SHOW_LONG_REST_ACTION_DIALOG(actor, availableActions);
        }
    },

    FC_PRE_ATTACK_ROLL: async (workflow) => {
        for (const event of compassEvents.preAttackRollEvents) {
            await event(workflow);
        }

        const actor = workflow.actor;
        if (!actor) return;

        const skills = actor.flags[MODULE_NAME]?.activeTalents?.skills || [];
        for (const skill of skills) {
            const handler = COMPASS_HANDLERS[skill];
            if (handler && typeof handler.FC_PRE_ATTACK_ROLL_EVENT === 'function') {
                await handler.FC_PRE_ATTACK_ROLL_EVENT(workflow);
            }
        }
    },

    FC_ATTACK_ROLL_COMPLETE: async (workflow) => {
        for (const event of compassEvents.attackRollCompleteEvents) {
            await event(workflow);
        }
    },

    FC_DAMAGE_ROLL_COMPLETE: async (workflow) => {
        for (const event of compassEvents.damageRollCompleteEvents) {
            await event(workflow);
        }
    },

    FC_PRE_CHECK_SAVES: async (workflow) => {
        for (const event of compassEvents.preCheckSaveEvents) {
            await event(workflow);
        }
    },

    FC_POST_CHECK_SAVES: async (workflow) => {
        for (const event of compassEvents.postCheckSaveEvents) {
            await event(workflow);
        }
    },

    FC_PRE_CHECK_HITS: async (workflow) => {
        for (const event of compassEvents.preCheckHitsEvents) {
            await event(workflow);
        }
    },

    FC_SPELL_CAST: async (workflow) => {
        for (const event of compassEvents.spellCastEvents) {
            await event(workflow);
        }
    },

    FC_PRE_ITEM_ROLL: async (workflow) => {
        for (const event of compassEvents.preItemRollEvents) {
            await event(workflow);
        }
    },

    FC_ROLL_COMPLETE: async (workflow) => {
        for (const event of compassEvents.rollCompleteEvents) {
            await event(workflow);
        }

        if (workflow.item?.type === ITEM_TYPES.WEAPON) {
            await compassEvents.FC_ATTACK_ROLL_COMPLETE(workflow);
        }
        if (workflow.item?.type === ITEM_TYPES.SPELL || workflow.item?.system.actionType === 'damage') {
            await compassEvents.FC_DAMAGE_ROLL_COMPLETE(workflow);
        }
        if (workflow.saveType === ABILITY_SCORES.DEX) {
            await compassEvents.FC_PRE_CHECK_SAVES(workflow);
        }
        if (workflow.item?.type === ITEM_TYPES.SPELL) {
            await compassEvents.FC_SPELL_CAST(workflow);
        }
    },

    FC_CLEAN_UP_TALENTS: async (actor) => {
        const allTalentNames = Object.keys(COMPASS_HANDLERS);
        const skillFlags = actor.flags[MODULE_NAME]?.activeTalents?.skills || [];

        for (const talentName of allTalentNames) {
            if (!skillFlags.includes(talentName)) {
                const effectName = talentName.replace(/-/g, ' ').toTitleCase();
                const itemName = COMPASS_ITEMS[talentName.toUpperCase()]?.name;

                if (effectName) {
                    await EFFECT_METHODS.REMOVE_ACTIVE_EFFECT(actor, { effectName });
                }
                if (itemName) {
                    await EFFECT_METHODS.REMOVE_ITEM(actor, { itemName });
                }
            }
        }
    },

    registerHooks: () => {
        // Midi-QOL hooks
        Hooks.on('midi-qol.DamageRollComplete', compassEvents.FC_DAMAGE_ROLL_COMPLETE);
        Hooks.on('midi-qol.preItemRoll', compassEvents.FC_PRE_ITEM_ROLL);
        Hooks.on('midi-qol.RollComplete', compassEvents.FC_ROLL_COMPLETE);
        Hooks.on('midi-qol.preCheckSaves', compassEvents.FC_PRE_CHECK_SAVES);
        Hooks.on('midi-qol.postCheckSaves', compassEvents.FC_POST_CHECK_SAVES);
        Hooks.on('midi-qol.preCheckHits', compassEvents.FC_PRE_CHECK_HITS);
    
        // Foundry hooks
        Hooks.on('updateActor', compassEvents.FC_ACTOR_UPDATE);
        Hooks.on('updateCombat', compassEvents.FC_UPDATE_COMBAT);
        Hooks.on('dnd5e.preLongRest', compassEvents.FC_PRE_LONG_REST);
    }
};

// Event registration functions
const compassEventRegistrationHandler = (eventArray) => {
    return {
        register: (event) => eventArray.push(event),
        unregister: (event) => {
            const index = eventArray.indexOf(event);
            if (index > -1) eventArray.splice(index, 1);
        }
    };
};

export const FC_ON_ACTIVATE_EVENT = compassEventRegistrationHandler(compassEvents.onActivateEvents);
export const FC_ON_DEACTIVATE_EVENT = compassEventRegistrationHandler(compassEvents.onDeactivateEvents);
export const FC_ACTOR_UPDATE_EVENT = compassEventRegistrationHandler(compassEvents.actorUpdateEvents);
export const FC_UPDATE_COMBAT_EVENT = compassEventRegistrationHandler(compassEvents.updateCombatEvents);
export const FC_PRE_LONG_REST_EVENT = compassEventRegistrationHandler(compassEvents.preLongRestEvents);
export const FC_PRE_ATTACK_ROLL_EVENT = compassEventRegistrationHandler(compassEvents.preAttackRollEvents);
export const FC_ATTACK_ROLL_COMPLETE_EVENT = compassEventRegistrationHandler(compassEvents.attackRollCompleteEvents);
export const FC_DAMAGE_ROLL_COMPLETE_EVENT = compassEventRegistrationHandler(compassEvents.damageRollCompleteEvents);
export const FC_PRE_CHECK_SAVE_EVENT = compassEventRegistrationHandler(compassEvents.preCheckSaveEvents);
export const FC_POST_CHECK_SAVE_EVENT = compassEventRegistrationHandler(compassEvents.postCheckSaveEvents);
export const FC_PRE_CHECK_HITS_EVENT = compassEventRegistrationHandler(compassEvents.preCheckHitsEvents);
export const FC_SPELL_CAST_EVENT = compassEventRegistrationHandler(compassEvents.spellCastEvents);
export const FC_PRE_ITEM_ROLL_EVENT = compassEventRegistrationHandler(compassEvents.preItemRollEvents);
export const FC_ROLL_COMPLETE_EVENT = compassEventRegistrationHandler(compassEvents.rollCompleteEvents);



compassEvents.registerHooks();