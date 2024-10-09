// compassHandlers.js

import EFFECT_METHODS from './compassEffectMethods.js';
import COMPASS_ITEMS from './compassItems.js';
import { SKILL_TYPES, MODULE_NAME } from './compassConfig.js';

import { 
  FC_ON_ACTIVATE_EVENT, 
  FC_ON_DEACTIVATE_EVENT, 
  FC_ACTOR_UPDATE_EVENT, 
  FC_UPDATE_COMBAT_EVENT,
  FC_PRE_LONG_REST_EVENT, 
  FC_PRE_ATTACK_ROLL_EVENT,
  FC_ATTACK_ROLL_COMPLETE_EVENT, 
  FC_DAMAGE_ROLL_COMPLETE_EVENT,
  FC_PRE_CHECK_SAVE_EVENT,
  FC_POST_CHECK_SAVE_EVENT,
  FC_PRE_CHECK_HITS_EVENT,
  FC_SPELL_CAST_EVENT,
  FC_PRE_ITEM_ROLL_EVENT,
  FC_ROLL_COMPLETE_EVENT
} from './compassEvents.js';

// Primary Skills
const COMPASS_HANDLERS = {

    [SKILL_TYPES.ACROBATICS]: {
        /**
         * Activates the Acrobatics talent for the specified actor.
         * Grants proficiency in the Acrobatics skill.
         * @param {Object} params - The parameters object.
         * @param {Actor5e} params.actor - The actor activating the talent.
         */
        FC_ON_ACTIVATE: async ({ actor }) => {
          try {
            console.log("Acrobatics talent activated", actor);
            await EFFECT_METHODS.ADD_SKILL_PROFICIENCY(actor, {
              skill: 'acr',
              value: 1,
              flags: {
                [MODULE_NAME]: {
                  sourceActorId: actor.id,
                  module: MODULE_NAME
                }
              }
            });
            ui.notifications.warn(`${actor.name} has gained the Acrobatics Skill`);
          } catch (error) {
            console.error("Error activating Acrobatics talent", error);
          }
        },
        /**
         * Deactivates the Acrobatics talent for the specified actor.
         * Removes proficiency in the Acrobatics skill.
         * @param {Object} params - The parameters object.
         * @param {Actor5e} params.actor - The actor deactivating the talent.
         */
        FC_ON_DEACTIVATE: async ({ actor }) => {
          try {
            console.log("Acrobatics talent deactivated", actor);
            await EFFECT_METHODS.REMOVE_SKILL_PROFICIENCY(actor, {
              skill: 'acr'
            });
            ui.notifications.warn(`${actor.name} has lost the Acrobatics Skill`);
          } catch (error) {
            console.error("Error deactivating Acrobatics talent", error);
          }
        }
    },      
    [SKILL_TYPES.ANIMAL_HANDLING]: {
        /**
         * Activates the Animal Handling talent for the specified actor.
         * Grants proficiency in the Animal Handling skill.
         * @param {Object} params - The parameters object.
         * @param {Actor5e} params.actor - The actor activating the talent.
         */
        FC_ON_ACTIVATE: async ({ actor }) => {
          try {
            console.log("Animal Handling talent activated", actor);
            await EFFECT_METHODS.ADD_SKILL_PROFICIENCY(actor, {
              skill: 'ani',
              value: 1,
              flags: {
                [MODULE_NAME]: {
                  sourceActorId: actor.id,
                  module: MODULE_NAME,
                },
              },
            });
          } catch (error) {
            console.error("Error activating Animal Handling talent", error);
          }
        },
        /**
         * Deactivates the Animal Handling talent for the specified actor.
         * Removes proficiency in the Animal Handling skill.
         * @param {Object} params - The parameters object.
         * @param {Actor5e} params.actor - The actor deactivating the talent.
         */
        FC_ON_DEACTIVATE: async ({ actor }) => {
          try {
            console.log("Animal Handling talent deactivated", actor);
            await EFFECT_METHODS.REMOVE_SKILL_PROFICIENCY(actor, {
              skill: 'ani',
            });
          } catch (error) {
            console.error("Error deactivating Animal Handling talent", error);
          }
        },
    },      
    [SKILL_TYPES.ARCANA]: {
        /**
         * Activates the Arcana talent for the specified actor.
         * Grants proficiency in the Arcana skill.
         * @param {Object} params - The parameters object.
         * @param {Actor5e} params.actor - The actor activating the talent.
         */
        FC_ON_ACTIVATE: async ({ actor }) => {
          try {
            console.log("Arcana talent activated", actor);
            await EFFECT_METHODS.ADD_SKILL_PROFICIENCY(actor, {
              skill: 'arc',
              value: 1,
              flags: {
                [MODULE_NAME]: {
                  sourceActorId: actor.id,
                  module: MODULE_NAME,
                },
              },
            });
          } catch (error) {
            console.error("Error activating Arcana talent", error);
          }
        },
        /**
         * Deactivates the Arcana talent for the specified actor.
         * Removes proficiency in the Arcana skill.
         * @param {Object} params - The parameters object.
         * @param {Actor5e} params.actor - The actor deactivating the talent.
         */
        FC_ON_DEACTIVATE: async ({ actor }) => {
          try {
            console.log("Arcana talent deactivated", actor);
            await EFFECT_METHODS.REMOVE_SKILL_PROFICIENCY(actor, {
              skill: 'arc',
            });
          } catch (error) {
            console.error("Error deactivating Arcana talent", error);
          }
        },
    },      
    [SKILL_TYPES.ATHLETICS]: {
        FC_ON_ACTIVATE: async ({ actor }) => {
            try {
                console.log("Athletics talent activated", actor);
                await EFFECT_METHODS.ADD_SKILL_PROFICIENCY(actor, {
                    skill: 'ath',
                    value: 1,
                    flags: { [MODULE_NAME]: { sourceActorId: actor.id, module: MODULE_NAME } }
                });
            } catch (error) {
                console.error("Error activating Athletics talent", error);
            }
        },
        FC_ON_DEACTIVATE: async ({ actor }) => {
            try {
                console.log("Athletics talent deactivated", actor);
                await EFFECT_METHODS.REMOVE_SKILL_PROFICIENCY(actor, { skill: 'ath' });
            } catch (error) {
                console.error("Error deactivating Athletics talent", error);
            }
        }
    },
    [SKILL_TYPES.DECEPTION]: {
        FC_ON_ACTIVATE: async ({ actor }) => {
            try {
                console.log("Deception talent activated", actor);
                await EFFECT_METHODS.ADD_SKILL_PROFICIENCY(actor, {
                    skill: 'dec',
                    value: 1,
                    flags: { [MODULE_NAME]: { sourceActorId: actor.id, module: MODULE_NAME } }
                });
            } catch (error) {
                console.error("Error activating Deception talent", error);
            }
        },
        FC_ON_DEACTIVATE: async ({ actor }) => {
            try {
                console.log("Deception talent deactivated", actor);
                await EFFECT_METHODS.REMOVE_SKILL_PROFICIENCY(actor, { skill: 'dec' });
            } catch (error) {
                console.error("Error deactivating Deception talent", error);
            }
        }
    },
    [SKILL_TYPES.HISTORY]: {
        FC_ON_ACTIVATE: async ({ actor }) => {
            try {
                console.log("History talent activated", actor);
                await EFFECT_METHODS.ADD_SKILL_PROFICIENCY(actor, {
                    skill: 'his',
                    value: 1,
                    flags: { [MODULE_NAME]: { sourceActorId: actor.id, module: MODULE_NAME } }
                });
            } catch (error) {
                console.error("Error activating History talent", error);
            }
        },
        FC_ON_DEACTIVATE: async ({ actor }) => {
            try {
                console.log("History talent deactivated", actor);
                await EFFECT_METHODS.REMOVE_SKILL_PROFICIENCY(actor, { skill: 'his' });
            } catch (error) {
                console.error("Error deactivating History talent", error);
            }
        }
    },
    [SKILL_TYPES.INSIGHT]: {
        FC_ON_ACTIVATE: async ({ actor }) => {
            try {
                console.log("Insight talent activated", actor);
                await EFFECT_METHODS.ADD_SKILL_PROFICIENCY(actor, {
                    skill: 'ins',
                    value: 1,
                    flags: { [MODULE_NAME]: { sourceActorId: actor.id, module: MODULE_NAME } }
                });
            } catch (error) {
                console.error("Error activating Insight talent", error);
            }
        },
        FC_ON_DEACTIVATE: async ({ actor }) => {
            try {
                console.log("Insight talent deactivated", actor);
                await EFFECT_METHODS.REMOVE_SKILL_PROFICIENCY(actor, { skill: 'ins' });
            } catch (error) {
                console.error("Error deactivating Insight talent", error);
            }
        }
    },
    [SKILL_TYPES.INTIMIDATION]: {
        FC_ON_ACTIVATE: async ({ actor }) => {
            try {
                console.log("Intimidation talent activated", actor);
                await EFFECT_METHODS.ADD_SKILL_PROFICIENCY(actor, {
                    skill: 'itm',
                    value: 1,
                    flags: { [MODULE_NAME]: { sourceActorId: actor.id, module: MODULE_NAME } }
                });
            } catch (error) {
                console.error("Error activating Intimidation talent", error);
            }
        },
        FC_ON_DEACTIVATE: async ({ actor }) => {
            try {
                console.log("Intimidation talent deactivated", actor);
                await EFFECT_METHODS.REMOVE_SKILL_PROFICIENCY(actor, { skill: 'itm' });
            } catch (error) {
                console.error("Error deactivating Intimidation talent", error);
            }
        }
    },
    [SKILL_TYPES.INVESTIGATION]: {
        FC_ON_ACTIVATE: async ({ actor }) => {
            try {
                console.log("Investigation talent activated", actor);
                await EFFECT_METHODS.ADD_SKILL_PROFICIENCY(actor, {
                    skill: 'inv',
                    value: 1,
                    flags: { [MODULE_NAME]: { sourceActorId: actor.id, module: MODULE_NAME } }
                });
            } catch (error) {
                console.error("Error activating Investigation talent", error);
            }
        },
        FC_ON_DEACTIVATE: async ({ actor }) => {
            try {
                console.log("Investigation talent deactivated", actor);
                await EFFECT_METHODS.REMOVE_SKILL_PROFICIENCY(actor, { skill: 'inv' });
            } catch (error) {
                console.error("Error deactivating Investigation talent", error);
            }
        }
    },
    [SKILL_TYPES.MEDICINE]: {
        FC_ON_ACTIVATE: async ({ actor }) => {
            try {
                console.log("Medicine talent activated", actor);
                await EFFECT_METHODS.ADD_SKILL_PROFICIENCY(actor, {
                    skill: 'med',
                    value: 1,
                    flags: { [MODULE_NAME]: { sourceActorId: actor.id, module: MODULE_NAME } }
                });
            } catch (error) {
                console.error("Error activating Medicine talent", error);
            }
        },
        FC_ON_DEACTIVATE: async ({ actor }) => {
            try {
                console.log("Medicine talent deactivated", actor);
                await EFFECT_METHODS.REMOVE_SKILL_PROFICIENCY(actor, { skill: 'med' });
            } catch (error) {
                console.error("Error deactivating Medicine talent", error);
            }
        }
    },
    [SKILL_TYPES.NATURE]: {
        FC_ON_ACTIVATE: async ({ actor }) => {
            try {
                console.log("Nature talent activated", actor);
                await EFFECT_METHODS.ADD_SKILL_PROFICIENCY(actor, {
                    skill: 'nat',
                    value: 1,
                    flags: { [MODULE_NAME]: { sourceActorId: actor.id, module: MODULE_NAME } }
                });
            } catch (error) {
                console.error("Error activating Nature talent", error);
            }
        },
        FC_ON_DEACTIVATE: async ({ actor }) => {
            try {
                console.log("Nature talent deactivated", actor);
                await EFFECT_METHODS.REMOVE_SKILL_PROFICIENCY(actor, { skill: 'nat' });
            } catch (error) {
                console.error("Error deactivating Nature talent", error);
            }
        }
    },
    [SKILL_TYPES.PERCEPTION]: {
        FC_ON_ACTIVATE: async ({ actor }) => {
            try {
                console.log("Perception talent activated", actor);
                await EFFECT_METHODS.ADD_SKILL_PROFICIENCY(actor, {
                    skill: 'prc',
                    value: 1,
                    flags: { [MODULE_NAME]: { sourceActorId: actor.id, module: MODULE_NAME } }
                });
            } catch (error) {
                console.error("Error activating Perception talent", error);
            }
        },
        FC_ON_DEACTIVATE: async ({ actor }) => {
            try {
                console.log("Perception talent deactivated", actor);
                await EFFECT_METHODS.REMOVE_SKILL_PROFICIENCY(actor, { skill: 'prc' });
            } catch (error) {
                console.error("Error deactivating Perception talent", error);
            }
        }
    },
    [SKILL_TYPES.PERFORMANCE]: {
        FC_ON_ACTIVATE: async ({ actor }) => {
            try {
                console.log("Performance talent activated", actor);
                await EFFECT_METHODS.ADD_SKILL_PROFICIENCY(actor, {
                    skill: 'pfr',
                    value: 1,
                    flags: { [MODULE_NAME]: { sourceActorId: actor.id, module: MODULE_NAME } }
                });
            } catch (error) {
                console.error("Error activating Performance talent", error);
            }
        },
        FC_ON_DEACTIVATE: async ({ actor }) => {
            try {
                console.log("Performance talent deactivated", actor);
                await EFFECT_METHODS.REMOVE_SKILL_PROFICIENCY(actor, { skill: 'pfr' });
            } catch (error) {
                console.error("Error deactivating Performance talent", error);
            }
        }
    },
    [SKILL_TYPES.PERSUASION]: {
        FC_ON_ACTIVATE: async ({ actor }) => {
            try {
                console.log("Persuasion talent activated", actor);
                await EFFECT_METHODS.ADD_SKILL_PROFICIENCY(actor, {
                    skill: 'per',
                    value: 1,
                    flags: { [MODULE_NAME]: { sourceActorId: actor.id, module: MODULE_NAME } }
                });
            } catch (error) {
                console.error("Error activating Persuasion talent", error);
            }
        },
        FC_ON_DEACTIVATE: async ({ actor }) => {
            try {
                console.log("Persuasion talent deactivated", actor);
                await EFFECT_METHODS.REMOVE_SKILL_PROFICIENCY(actor, { skill: 'per' });
            } catch (error) {
                console.error("Error deactivating Persuasion talent", error);
            }
        }
    },
    [SKILL_TYPES.RELIGION]: {
        FC_ON_ACTIVATE: async ({ actor }) => {
            try {
                console.log("Religion talent activated", actor);
                await EFFECT_METHODS.ADD_SKILL_PROFICIENCY(actor, {
                    skill: 'rel',
                    value: 1,
                    flags: { [MODULE_NAME]: { sourceActorId: actor.id, module: MODULE_NAME } }
                });
            } catch (error) {
                console.error("Error activating Religion talent", error);
            }
        },
        FC_ON_DEACTIVATE: async ({ actor }) => {
            try {
                console.log("Religion talent deactivated", actor);
                await EFFECT_METHODS.REMOVE_SKILL_PROFICIENCY(actor, { skill: 'rel' });
            } catch (error) {
                console.error("Error deactivating Religion talent", error);
            }
        }
    },
    [SKILL_TYPES.SLEIGHT_OF_HAND]: {
        FC_ON_ACTIVATE: async ({ actor }) => {
            try {
                console.log("Sleight of Hand talent activated", actor);
                await EFFECT_METHODS.ADD_SKILL_PROFICIENCY(actor, {
                    skill: 'sle',
                    value: 1,
                    flags: { [MODULE_NAME]: { sourceActorId: actor.id, module: MODULE_NAME } }
                });
            } catch (error) {
                console.error("Error activating Sleight of Hand talent", error);
            }
        },
        FC_ON_DEACTIVATE: async ({ actor }) => {
            try {
                console.log("Sleight of Hand talent deactivated", actor);
                await EFFECT_METHODS.REMOVE_SKILL_PROFICIENCY(actor, { skill: 'sle' });
            } catch (error) {
                console.error("Error deactivating Sleight of Hand talent", error);
            }
        }
    },
    [SKILL_TYPES.STEALTH]: {
        FC_ON_ACTIVATE: async ({ actor }) => {
            try {
                console.log("Stealth talent activated", actor);
                await EFFECT_METHODS.ADD_SKILL_PROFICIENCY(actor, {
                    skill: 'ste',
                    value: 1,
                    flags: { [MODULE_NAME]: { sourceActorId: actor.id, module: MODULE_NAME } }
                });
            } catch (error) {
                console.error("Error activating Stealth talent", error);
            }
        },
        FC_ON_DEACTIVATE: async ({ actor }) => {
            try {
                console.log("Stealth talent deactivated", actor);
                await EFFECT_METHODS.REMOVE_SKILL_PROFICIENCY(actor, { skill: 'ste' });
            } catch (error) {
                console.error("Error deactivating Stealth talent", error);
            }
        }
    },
    [SKILL_TYPES.SURVIVAL]: {
        FC_ON_ACTIVATE: async ({ actor }) => {
            try {
                console.log("Survival talent activated", actor);
                await EFFECT_METHODS.ADD_SKILL_PROFICIENCY(actor, {
                    skill: 'sur',
                    value: 1,
                    flags: { [MODULE_NAME]: { sourceActorId: actor.id, module: MODULE_NAME } }
                });
            } catch (error) {
                console.error("Error activating Survival talent", error);
            }
        },
        FC_ON_DEACTIVATE: async ({ actor }) => {
            try {
                console.log("Survival talent deactivated", actor);
                await EFFECT_METHODS.REMOVE_SKILL_PROFICIENCY(actor, { skill: 'sur' });
            } catch (error) {
                console.error("Error deactivating Survival talent", error);
            }
        }
    },
    // Acrobatics Talents
    "kip-up": {
        FC_ON_ACTIVATE: async ({ actor }) => {
            try {
                console.log("Kip-Up talent activated", actor);
                await EFFECT_METHODS.ADD_ACTIVE_EFFECT(actor, {
                    effectName: 'Kip-Up',
                    changes: [{ key: 'system.attributes.prone', mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE, value: false }],
                    duration: { rounds: 1 },
                    flags: { [MODULE_NAME]: { sourceActorId: actor.id, module: MODULE_NAME } }
                });
                ui.notifications.warn(`${actor.name} has gained the Kip Up Talent`);
            } catch (error) {
                console.error("Error activating Kip-Up talent", error);
            }
        },
        FC_ON_DEACTIVATE: async ({ actor }) => {
            try {
                console.log("Kip-Up talent deactivated", actor);
                await EFFECT_METHODS.REMOVE_ACTIVE_EFFECT(actor, { effectName: 'Kip-Up' });
                ui.notifications.warn(`${actor.name} has lost the Kip Up Talent`);
            } catch (error) {
                console.error("Error deactivating Kip-Up talent", error);
            }
        }
    },
   "fleetfoot": {
        FC_ON_ACTIVATE: async ({ actor }) => {
            try {
                console.log("Fleetfoot talent activated", actor);
                const fleetfootEffect = {
                    changes: [
                        { key: "system.attributes.movement.all", mode: 0, value: "+5", priority: 20 }
                    ],
                    disabled: false,
                    duration: {
                        startTime: game.time.worldTime,
                        rounds: null,
                        startRound: game.combat ? game.combat.round : null,
                    },
                    icon: "icons/svg/aura.svg",
                    label: "Fleetfoot",
                    flags: {
                        [MODULE_NAME]: { sourceActorId: actor.id, module: MODULE_NAME },
                        dae: {},
                        ActiveAuras: {}
                    },
                    origin: actor.uuid,
                    transfer: false
                };
                await EFFECT_METHODS.ADD_ACTIVE_EFFECT(actor, { effect: fleetfootEffect });
                await actor.setFlag(MODULE_NAME, 'fleetfoot', true);
            } catch (error) {
                console.error("Error activating Fleetfoot talent", error);
            }
        },
        FC_ON_DEACTIVATE: async ({ actor }) => {
            try {
                await EFFECT_METHODS.REMOVE_ACTIVE_EFFECT(actor, { effectName: "Fleetfoot" });
                await actor.unsetFlag(MODULE_NAME, 'fleetfoot');
            } catch (error) {
                console.error("Error deactivating Fleetfoot talent", error);
            }
        }
    },
    "evasive-tumble": {
        FC_ON_ACTIVATE: async ({ actor }) => {
            try {
                console.log("Evasive Tumble talent activated", actor);
                await EFFECT_METHODS.ADD_ITEM(actor, {
                    itemData: {
                        ...COMPASS_ITEMS.EVASIVE_TUMBLE,
                        flags: { [MODULE_NAME]: { sourceActorId: actor.id, module: MODULE_NAME } }
                    }
                });
                await actor.setFlag(MODULE_NAME, 'evasiveTumble', true);
            } catch (error) {
                console.error("Error activating Evasive Tumble talent", error);
            }
        },
        FC_ON_DEACTIVATE: async ({ actor }) => {
            try {
                await EFFECT_METHODS.REMOVE_ITEM(actor, { itemName: COMPASS_ITEMS.EVASIVE_TUMBLE.name });
                await actor.unsetFlag(MODULE_NAME, 'evasiveTumble');
            } catch (error) {
                console.error("Error deactivating Evasive Tumble talent", error);
            }
        }
    },
    "slippery": {
        /**
         * Activates the Slippery talent for the specified actor.
         * Registers event listeners for pre-check saves and damage roll completion.
         * @param {Object} params - The parameters object.
         * @param {Actor5e} params.actor - The actor activating the talent.
         */
        FC_ON_ACTIVATE: async ({ actor }) => {
            try {
            console.log("Slippery talent activated", actor);
            await actor.setFlag(MODULE_NAME, 'slippery', true);
            FC_PRE_CHECK_SAVE_EVENT.register(this.slipperyPreCheckSaves.bind(this));
            FC_DAMAGE_ROLL_COMPLETE_EVENT.register(this.slipperyDamageRollComplete.bind(this));
            } catch (error) {
            console.error("Error activating Slippery talent", error);
            }
        },

        /**
         * Deactivates the Slippery talent for the specified actor.
         * Unregisters event listeners and removes the 'slippery' flag.
         * @param {Object} params - The parameters object.
         * @param {Actor5e} params.actor - The actor deactivating the talent.
         */
        FC_ON_DEACTIVATE: async ({ actor }) => {
            try {
            await actor.unsetFlag(MODULE_NAME, 'slippery');
            FC_PRE_CHECK_SAVE_EVENT.unregister(this.slipperyPreCheckSaves.bind(this));
            FC_DAMAGE_ROLL_COMPLETE_EVENT.unregister(this.slipperyDamageRollComplete.bind(this));
            } catch (error) {
            console.error("Error deactivating Slippery talent", error);
            }
        },

        /**
         * Handler for pre-check saves event.
         * Grants advantage on Dexterity saving throws against traps.
         * @param {Object} workflow - The Midi-QoL workflow object.
         */
        slipperyPreCheckSaves: function (workflow) {
            try {
            const actor = workflow.actor;
            if (!actor.getFlag(MODULE_NAME, 'slippery')) return;
            if (workflow.saveType !== "dex") return;
            const itemName = workflow.item?.name?.toLowerCase() || "";
            if (itemName.includes('trap')) {
                workflow.advantage = true;
                console.log(`${actor.name} has advantage on saving throws against traps due to Slippery talent.`);
                ui.notifications.warn(`${actor.name} has advantage on saving throws against traps due to Slippery talent.`);
            }
            } catch (error) {
            console.error("Error in slipperyPreCheckSaves", error);
            }
        },

        /**
         * Handler for damage roll completion event.
         * Halves damage taken from traps for the actor.
         * @param {Object} workflow - The Midi-QoL workflow object.
         */
        slipperyDamageRollComplete: function (workflow) {
            try {
            if (!workflow.targets || workflow.targets.size === 0) return;
            const itemName = workflow.item?.name?.toLowerCase() || "";
            if (!itemName.includes('trap')) return;
            if (!workflow.damageList) {
                console.error("No damage list available in workflow.");
                return;
            }
            for (let targetToken of workflow.targets) {
                const actor = targetToken.actor;
                if (!actor.getFlag(MODULE_NAME, 'slippery')) continue;
                let damageEntry = workflow.damageList.find(i => i.tokenId === targetToken.id);
                if (damageEntry) {
                damageEntry.appliedDamage = Math.floor(damageEntry.appliedDamage / 2);
                damageEntry.hpDamage = Math.floor(damageEntry.hpDamage / 2);
                damageEntry.totalDamage = Math.floor(damageEntry.totalDamage / 2);
                workflow.damageList = workflow.damageList.map(d => d.tokenId === targetToken.id ? damageEntry : d);
                EFFECT_METHODS.CREATE_CHAT_MESSAGE({
                    speaker: { alias: actor.name },
                    content: `${actor.name} uses **Slippery** to resist trap damage!`
                });
                }
            }
            } catch (error) {
            console.error("Error in slipperyDamageRollComplete", error);
            }
        }
    },

    "withdraw": {
        FC_ON_ACTIVATE: async ({ actor }) => {
            console.log("Withdraw talent activated", actor);
            await actor.setFlag(MODULE_NAME, 'withdraw', true);
            FC_ATTACK_ROLL_COMPLETE_EVENT.register(this.withdrawAttackRollComplete.bind(this));
        },
        FC_ON_DEACTIVATE: async ({ actor }) => {
            await actor.unsetFlag(MODULE_NAME, 'withdraw');
            FC_ATTACK_ROLL_COMPLETE_EVENT.unregister(this.withdrawAttackRollComplete.bind(this));
        },
        withdrawAttackRollComplete: (workflow) => {
            if (!workflow.actor.getFlag(MODULE_NAME, 'withdraw')) return;
            if (!workflow.item || workflow.item.type !== "weapon") return;
            const user = game.users.players.find(u => u.character?.id === workflow.actor.id);
            if (user) {
                const params = {
                    message: `${workflow.actor.name} can use the **Withdraw** talent to disengage without provoking an attack of opportunity this turn.`,
                    userId: user.id,
                    alias: workflow.actor.name
                };
                EFFECT_METHODS.WHISPER_CUSTOM_MESSAGE(workflow.actor, params);
                console.log("%c" + `${workflow.actor.name} uses Withdraw talent to avoid opportunity attacks.`, "color:green; background-color:#A3A6B4; font-size:9pt; font-weight:bold; padding:1pt;");
            } else {
                console.error(`No user found controlling actor ${workflow.actor.name}.`);
            }
        }
    },
    "slip-away": {
        FC_ON_ACTIVATE: async ({ actor }) => {
            console.log("Slip Away talent activated", actor);
            await actor.setFlag(MODULE_NAME, 'slipAway', true);
            FC_ACTOR_UPDATE_EVENT.register(this.slipAwayCreateActiveEffect.bind(this));
        },
        FC_ON_DEACTIVATE: async ({ actor }) => {
            await actor.unsetFlag(MODULE_NAME, 'slipAway');
            FC_ACTOR_UPDATE_EVENT.unregister(this.slipAwayCreateActiveEffect.bind(this));
        },
        slipAwayCreateActiveEffect: ({ actor, effect, userId }) => {
            if (!actor.getFlag(MODULE_NAME, 'slipAway')) return;
            if (effect.label !== "Dodge") return;
            const params = {
                message: `You use **Slip Away**! You can immediately move 5 feet in any direction without provoking opportunity attacks, in addition to your normal movement.`,
                userId: userId,
                alias: actor.name
            };
            EFFECT_METHODS.WHISPER_CUSTOM_MESSAGE(actor, params);
        },
    },
    "escape-artist": {
        FC_ON_ACTIVATE: async ({ actor }) => {
            console.log("Escape Artist talent activated", actor);
            await actor.setFlag(MODULE_NAME, 'escapeArtist', true);
            FC_ACTOR_UPDATE_EVENT.register(this.escapeArtistCreateActiveEffect.bind(this));
            FC_UPDATE_COMBAT_EVENT.register(this.escapeArtistUpdateCombat.bind(this));
        },
        FC_ON_DEACTIVATE: async ({ actor }) => {
            await actor.unsetFlag(MODULE_NAME, 'escapeArtist');
            FC_ACTOR_UPDATE_EVENT.unregister(this.escapeArtistCreateActiveEffect.bind(this));
            FC_UPDATE_COMBAT_EVENT.unregister(this.escapeArtistUpdateCombat.bind(this));
        },
        escapeArtistCreateActiveEffect: ({ actor, effect, userId }) => {
            if (!actor.getFlag(MODULE_NAME, 'escapeArtist')) return;
            const conditionLabels = ["Grappled", "Restrained"];
            if (!conditionLabels.includes(effect.label)) return;
            const params = {
                message: `You are now **${effect.label}** and have the **Escape Artist** talent! On your turn, you can forego all of your movement to automatically escape from nonmagical restraints such as manacles or a creature that has you grappled.`,
                userId: userId,
                alias: actor.name
            };
            EFFECT_METHODS.WHISPER_CUSTOM_MESSAGE(actor, params);
        },
        escapeArtistUpdateCombat: ({ combat, update, options }) => {
            if (!update.turn) return;
            const combatant = combat.combatants.get(update.turn);
            if (!combatant) return;
            const actor = combatant.actor;
            if (!actor || !actor.getFlag(MODULE_NAME, 'escapeArtist')) return;
            const conditionLabels = ["Grappled", "Restrained"];
            const activeConditions = actor.effects.filter(e => conditionLabels.includes(e.label));
            if (activeConditions.length === 0) return;
            const user = game.users.players.find(u => u.character?.id === actor.id);
            if (!user) return;
            const params = {
                message: `It's your turn, and you're affected by **${activeConditions.map(e => e.label).join(' and ')}**. Remember, you have the **Escape Artist** talent! You can forego all of your movement to automatically escape from nonmagical restraints such as manacles or a creature that has you grappled.`,
                userId: user.id,
                alias: actor.name
            };
            EFFECT_METHODS.WHISPER_CUSTOM_MESSAGE(actor, params);
        },
    },    
   "superior-acrobatics": {
        FC_ON_ACTIVATE: async ({ actor }) => {
            console.log("Superior Acrobatics talent activated", actor);
            const existingEffect = actor.effects.find(effect =>
                effect.changes.some(change =>
                    change.key === 'system.skills.acr.value' && change.value === '1'
                )
            );
            if (!existingEffect) {
                console.error(`No regular Acrobatics proficiency found on actor ${actor.name}. Cannot apply Superior Acrobatics.`);
                return;
            }
            const updatedChanges = existingEffect.changes.map(change => {
                if (change.key === 'system.skills.acr.value') {
                    return { ...change, value: '2' };
                }
                return change;
            });
            await existingEffect.update({ changes: updatedChanges });
            console.log(`Upgraded Acrobatics proficiency to expertise (double proficiency) for ${actor.name}.`);
            await actor.setFlag(MODULE_NAME, 'superiorAcrobatics', true);
        },
        FC_ON_DEACTIVATE: async ({ actor }) => {
            const existingEffect = actor.effects.find(effect =>
                effect.changes.some(change =>
                    change.key === 'system.skills.acr.value' && change.value === '2'
                )
            );
            if (existingEffect) {
                const updatedChanges = existingEffect.changes.map(change => {
                    if (change.key === 'system.skills.acr.value') {
                        return { ...change, value: '1' };
                    }
                    return change;
                });
                await existingEffect.update({ changes: updatedChanges });
                console.log(`Reverted Acrobatics proficiency to regular proficiency for ${actor.name}.`);
            }
            await actor.unsetFlag(MODULE_NAME, 'superiorAcrobatics');
        }
    },
    "wall-runner": {
        FC_ON_ACTIVATE: async ({ actor }) => {
            console.log("Wall Runner talent activated", actor);
            await actor.setFlag(MODULE_NAME, 'wallRunner', true);
            FC_ACTOR_UPDATE_EVENT.register(this.wallRunnerCreateActiveEffect.bind(this));
        },
        FC_ON_DEACTIVATE: async ({ actor }) => {
            await actor.unsetFlag(MODULE_NAME, 'wallRunner');
            FC_ACTOR_UPDATE_EVENT.unregister(this.wallRunnerCreateActiveEffect.bind(this));
        },
        wallRunnerCreateActiveEffect: ({ actor, effect, userId }) => {
            if (!actor.getFlag(MODULE_NAME, 'wallRunner')) return;
            if (effect.label !== "Dash") return;
            const equippedArmor = actor.system.attributes.ac.equippedArmor;
            const armorType = equippedArmor?.system?.armor?.type || "none";

            if (armorType === "light" || armorType === "none") {
                const params = {
                    message: `Taking the Dash action allows you to run along vertical surfaces, the edges of thin barriers, or leap between outcroppings as if on regular terrain. If you halt while running across a wall, you will start to fall. Running straight up a wall is treated as difficult terrain.`,
                    userId: userId,
                    alias: actor.name
                };
                EFFECT_METHODS.WHISPER_CUSTOM_MESSAGE(actor, params);
            } else {
                console.log(`Wall Runner cannot be used because ${actor.name} is wearing armor heavier than light.`);
            }
        },
    },
    // Animal Handling Talents
    "stabilize-animal": {
        FC_ON_ACTIVATE: async ({ actor }) => {
            try {
                console.log("Stabilize Animal talent activated", actor);
                await EFFECT_METHODS.ADD_ITEM(actor, {
                    itemData: {
                        ...COMPASS_ITEMS.STABILIZE_ANIMAL,
                        flags: { [MODULE_NAME]: { sourceActorId: actor.id, module: MODULE_NAME } }
                    }
                });
                await actor.setFlag(MODULE_NAME, 'stabilizeAnimal', true);
            } catch (error) {
                console.error("Error activating Stabilize Animal talent", error);
            }
        },
        FC_ON_DEACTIVATE: async ({ actor }) => {
            try {
                await EFFECT_METHODS.REMOVE_ITEM(actor, { itemName: COMPASS_ITEMS.STABILIZE_ANIMAL.name });
                await actor.unsetFlag(MODULE_NAME, 'stabilizeAnimal');
            } catch (error) {
                console.error("Error deactivating Stabilize Animal talent", error);
            }
        }
    },
    "train-animal": {
        FC_ON_ACTIVATE: async ({ actor }) => {
            console.log("Train Animal talent activated", actor);
            await actor.setFlag(MODULE_NAME, 'trainAnimal', true);
            FC_PRE_LONG_REST_EVENT.register(this.trainAnimalLongRest.bind(this));
        },
        FC_ON_DEACTIVATE: async ({ actor }) => {
            await actor.unsetFlag(MODULE_NAME, 'trainAnimal');
            FC_PRE_LONG_REST_EVENT.unregister(this.trainAnimalLongRest.bind(this));
        },
        trainAnimalLongRest: async ({ actor }) => {
            if (!actor.getFlag(MODULE_NAME, 'trainAnimal')) return;
            const params = {
                message: `${actor.name} can train a willing beast with a CR of 1/8 or less to follow a simple command.`,
                userId: user.id,
                alias: actor.name
            }
            EFFECT_METHODS.WHISPER_CHAT_MESSAGE (actor, params);
        },
    },
    "mounted-combat": {
        FC_ON_ACTIVATE: async ({ actor }) => {
            try {
                console.log("Mounted Combat talent activated", actor);
                await actor.setFlag(MODULE_NAME, 'mountedCombat', true);
                FC_PRE_CHECK_SAVE_EVENT.register(this.mountedCombatDexteritySave);
                FC_PRE_ATTACK_ROLL_EVENT.register(this.mountedCombatPreAttackRoll);
            } catch (error) {
                console.error("Error activating Mounted Combat talent", error);
            }
        },
        FC_ON_DEACTIVATE: async ({ actor }) => {
            try {
                console.log("Mounted Combat talent deactivated", actor);
                await actor.unsetFlag(MODULE_NAME, 'mountedCombat');
                FC_PRE_CHECK_SAVE_EVENT.unregister(this.mountedCombatDexteritySave);
                FC_PRE_ATTACK_ROLL_EVENT.unregister(this.mountedCombatPreAttackRoll);
            } catch (error) {
                console.error("Error deactivating Mounted Combat talent", error);
            }
        },
        mountedCombatPreAttackRoll: async (workflow) => {
            const actor = workflow.actor;
            if (!actor.getFlag(MODULE_NAME, 'mountedCombat')) return;
            const target = workflow.targets.first().actor;
            const isMounted = actor.effects.some(effect => effect.label === "Mounted");
            if (!isMounted) return;
            const attackerSize = actor.system.traits.size;
            const targetSize = target.system.traits.size;
            if (attackerSize === targetSize) {
                workflow.advantage = true;
            }
        },
        mountedCombatDexteritySave: async (workflow) => {
            const actor = workflow.actor;
            if (!actor.getFlag(MODULE_NAME, 'mountedCombat')) return;
            const isMounted = actor.effects.some(effect => effect.label === "Mounted");
            if (!isMounted) return;
            if (workflow.saveItem.system.save.ability === "dex") {
                if (workflow.saveRoll.total >= workflow.saveItem.system.save.dc) {
                    workflow.damageList.forEach(d => d.appliedDamage = 0);
                } else {
                    workflow.damageList.forEach(d => d.appliedDamage = Math.floor(d.appliedDamage / 2));
                }
            }
        }
    },
    "wild-friend": {
        FC_ON_ACTIVATE: async ({ actor }) => {
            console.log("Wild Friend talent activated", actor);
            await EFFECT_METHODS.ADD_ITEM(actor, {
                itemData: {
                    ...COMPASS_ITEMS.ANIMAL_FRIENDSHIP,
                    flags: { [MODULE_NAME]: { sourceActorId: actor.id, module: MODULE_NAME } }
                }
            });
            await actor.setFlag(MODULE_NAME, 'wildFriend', true);
        },
        FC_ON_DEACTIVATE: async ({ actor }) => {
            await EFFECT_METHODS.REMOVE_ITEM(actor, { itemName: COMPASS_ITEMS.ANIMAL_FRIENDSHIP.name });
            await actor.unsetFlag(MODULE_NAME, 'wildFriend');
        }
    },
    "complex-training": {
        FC_ON_ACTIVATE: async ({ actor }) => {
            try {
                console.log("Complex Training talent activated", actor);
                await actor.setFlag(MODULE_NAME, 'complexTraining', true);
            } catch (error) {
                console.error("Error activating Complex Training talent", error);
            }
        },
        FC_ON_DEACTIVATE: async ({ actor }) => {
            try {
                console.log("Complex Training talent deactivated", actor);
                await actor.unsetFlag(MODULE_NAME, 'complexTraining');
            } catch (error) {
                console.error("Error deactivating Complex Training talent", error);
            }
        },
        FC_PRE_LONG_REST: async ({ actor }) => {
            if (!actor.getFlag(MODULE_NAME, 'complexTraining')) return;
            return [`Train a willing beast with a CR of 1/4 or less to follow a complex command (e.g., "fetch a healing potion," "watch for intruders," or "follow the scent").`];
        }
    },
    "one-with-the-rider": {
        FC_ON_ACTIVATE: async ({ actor }) => {
            try {
                console.log("One with the Rider talent activated", actor);
                await actor.setFlag(MODULE_NAME, 'oneWithTheRider', true);
                FC_CREATE_ACTIVE_EFFECT_EVENT.register(this.oneWithTheRiderCreateActiveEffect);
                FC_PRE_CHECK_HITS_EVENT.register(this.oneWithTheRiderPreCheckHits);
                FC_POST_CHECK_SAVES_EVENT.register(this.oneWithTheRiderPostCheckSaves);
            } catch (error) {
                console.error("Error activating One with the Rider talent", error);
            }
        },
        FC_ON_DEACTIVATE: async ({ actor }) => {
            try {
                console.log("One with the Rider talent deactivated", actor);
                await actor.unsetFlag(MODULE_NAME, 'oneWithTheRider');
                await actor.unsetFlag(MODULE_NAME, 'mountId');
                FC_CREATE_ACTIVE_EFFECT_EVENT.unregister(this.oneWithTheRiderCreateActiveEffect);
                FC_PRE_CHECK_HITS_EVENT.unregister(this.oneWithTheRiderPreCheckHits);
                FC_POST_CHECK_SAVES_EVENT.unregister(this.oneWithTheRiderPostCheckSaves);
            } catch (error) {
                console.error("Error deactivating One with the Rider talent", error);
            }
        },
        oneWithTheRiderCreateActiveEffect: async ({ actor, effect, userId }) => {
            if (!actor.getFlag(MODULE_NAME, 'oneWithTheRider')) return;
            if (effect.data.label !== "Mounted") return;
            const mount = await canvas.tokens.hud.selectTargets({prompt: "Select your mount", quantity: 1});
            if (!mount) return;
            await actor.setFlag(MODULE_NAME, 'mountId', mount[0].id);
            console.log(`${actor.name} has selected ${mount[0].name} as their mount.`);
        },
        oneWithTheRiderPreCheckHits: async (workflow) => {
            const actor = workflow.actor;
            if (!actor.getFlag(MODULE_NAME, 'oneWithTheRider')) return;
            const mountId = actor.getFlag(MODULE_NAME, 'mountId');            
            if (!mountId) return;
            const mount = canvas.tokens.get(mountId);
            const isMountTargeted = workflow.targets.has(mount);

            if (isMountTargeted) {
                const user = game.users.players.find(u => u.character?.id === actor.id);
                const params = {
                    message: `${actor.name}, do you want to redirect the attack/spell from your mount to yourself?`,
                    userId: user.id,
                    buttons: [
                        { label: "Yes", callback: async () => { workflow.targets = new Set([actor.token]); }},
                        { label: "No", callback: () => { /* Do nothing, let the mount take the hit */ }},
                    ]
                };
                await EFFECT_METHODS.WHISPER_CUSTOM_MESSAGE(actor, params);
            }
        },
        oneWithTheRiderPostCheckSaves: async (workflow) => {
            const actor = workflow.actor;
            if (!actor.getFlag(MODULE_NAME, 'oneWithTheRider')) return;
            const mountId = actor.getFlag(MODULE_NAME, 'mountId');            
            if (!mountId) return;
            const mount = canvas.tokens.get(mountId);
            const isMounted = actor.effects.some(effect => effect.data.label === "Mounted");
            if (isMounted && workflow.item?.type === 'spell' && workflow.item?.system?.level <= 2 && workflow.item?.system.actionType === 'heal') {
                const user = game.users.players.find(u => u.character?.id === actor.id);
                const params = {
                    message: `${actor.name}, do you want to extend the healing spell to your mount as well?`,
                    userId: user.id,
                    buttons: [
                        { label: "Yes", callback: async () => {
                            await actor.item.useSpell({ token: mount, actor: mount.actor });
                        }},
                        { label: "No", callback: () => { /* Do nothing */ }}
                    ]
                };
                await EFFECT_METHODS.WHISPER_CUSTOM_MESSAGE(actor, params);
            }
        }
    },
    "animal-guardian": {
        FC_ON_ACTIVATE: async ({ actor }) => {
            console.log("Animal Guardian talent activated", actor);
            await EFFECT_METHODS.ADD_ITEM(actor, {
                itemData: {
                    ...COMPASS_ITEMS.ANIMAL_GUARDIAN,
                    flags: { [MODULE_NAME]: { sourceActorId: actor.id, module: MODULE_NAME } }
                }
            });
            await actor.setFlag(MODULE_NAME, 'animalGuardian', true);
        },
        FC_ON_DEACTIVATE: async ({ actor }) => {
            await EFFECT_METHODS.REMOVE_ITEM(actor, { itemName: COMPASS_ITEMS.ANIMAL_GUARDIAN.name });
            await actor.unsetFlag(MODULE_NAME, 'animalGuardian');
        }
    },
    "superior-animal-handling": {
        FC_ON_ACTIVATE: async ({ actor }) => {
            console.log("Superior Animal Handling talent activated", actor);
            const existingEffect = actor.effects.find(effect =>
                effect.changes.some(change =>
                    change.key === 'system.skills.ani.value' && change.value === '1')
            );
            if (!existingEffect) {
                console.error(`No regular Animal Handling proficiency found on actor ${actor.name}. Cannot apply Superior Animal Handling.`);
                return;
            }
            const updatedChanges = existingEffect.changes.map(change => {
                if (change.key === 'system.skills.ani.value') {
                    return { ...change, value: '2' };
                }
                return change;
            });
            await existingEffect.update({ changes: updatedChanges });
            console.log(`Upgraded Animal Handling proficiency to expertise (double proficiency) for ${actor.name}.`);
            await actor.setFlag(MODULE_NAME, 'superiorAnimalHandling', true);
        },
        FC_ON_DEACTIVATE: async ({ actor }) => {
            const existingEffect = actor.effects.find(effect =>
                effect.changes.some(change =>
                    change.key === 'system.skills.ani.value' && change.value === '2')
            );
            if (existingEffect) {
                const updatedChanges = existingEffect.changes.map(change => {
                    if (change.key === 'system.skills.ani.value') {
                        return { ...change, value: '1' };
                    }
                    return change;
                });
                await existingEffect.update({ changes: updatedChanges });
                console.log(`Reverted Animal Handling proficiency to regular proficiency for ${actor.name}.`);
            }
            await actor.unsetFlag(MODULE_NAME, 'superiorAnimalHandling');
        }
    },
    "beast-master": {
        FC_ON_ACTIVATE: async ({ actor }) => {
            try {
                console.log("Beast Master talent activated", actor);
                await EFFECT_METHODS.ADD_ITEM(actor, {
                    itemData: {
                        ...COMPASS_ITEMS.BEAST_MASTER_COMMAND,
                        flags: { [MODULE_NAME]: { sourceActorId: actor.id, module: MODULE_NAME } }
                    }
                });
                await EFFECT_METHODS.ADD_ITEM(actor, {
                    itemData: {
                        ...COMPASS_ITEMS.BOND_KINDRED,
                        flags: { [MODULE_NAME]: { sourceActorId: actor.id, module: MODULE_NAME } }
                    }
                });
                await actor.setFlag(MODULE_NAME, 'beastMaster', true);
            } catch (error) {
                console.error("Error activating Beast Master talent", error);
            }
        },
        FC_ON_DEACTIVATE: async ({ actor }) => {
            try {
                await EFFECT_METHODS.REMOVE_ITEM(actor, { itemName: COMPASS_ITEMS.BEAST_MASTER_COMMAND.name });
                await EFFECT_METHODS.REMOVE_ITEM(actor, { itemName: COMPASS_ITEMS.BOND_KINDRED.name });
                await actor.unsetFlag(MODULE_NAME, 'beastMaster');
            } catch (error) {
                console.error("Error deactivating Beast Master talent", error);
            }
        }
    },
    // Arcana Talents
    "magical-intuition": {
        FC_ON_ACTIVATE: async ({ actor }) => {
            console.log("Magical Intuition talent activated", actor);
            const magicInsightEffect = {
                label: "Magical Intuition",
                icon: "icons/magic/symbols/rune-star-glow-yellow.webp",
                origin: actor.uuid,
                disabled: false,
                changes: [
                    { key: "flags.midi-qol.advantage.ability.save.all", mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM, value: 1, priority: 20 }
                ],
                flags: { [MODULE_NAME]: { sourceActorId: actor.id, module: MODULE_NAME } },
            };
            FC_SPELL_CAST_EVENT.register(this.magicalIntuitionSpellCast);
            await EFFECT_METHODS.ADD_ACTIVE_EFFECT(actor, { effect: magicInsightEffect });
            await actor.setFlag(MODULE_NAME, 'magicalIntuition', true);
        },
        FC_ON_DEACTIVATE: async ({ actor }) => {
            await EFFECT_METHODS.REMOVE_ACTIVE_EFFECT(actor, { effectName: "Magical Intuition" });
            await actor.unsetFlag(MODULE_NAME, 'magicalIntuition');
            FC_SPELL_CAST_EVENT.unregister(this.magicalIntuitionSpellCast);
        },
        magicalIntuitionSpellCast: async (workflow) => {
            const caster = workflow.actor;
            const actors = canvas.tokens.placeables
                .filter(t => t.actor && t.actor.getFlag(MODULE_NAME, 'magicalIntuition'))
                .map(t => t.actor);

            for (let actor of actors) {
                if (actor.id === caster.id) continue;

                const actorToken = actor.getActiveTokens()[0];
                const casterToken = caster.getActiveTokens()[0];
                if (!actorToken || !casterToken) continue;

                const maxSightRange = actorToken.vision?.distance || 0;
                const distance = canvas.grid.measureDistance(actorToken.center, casterToken.center);

                const hasLineOfSight = !canvas.walls.checkCollision(actorToken.center, casterToken.center, { type: "sight", mode: "any" });

                if (distance <= maxSightRange && hasLineOfSight) {
                    const user = game.users.players.find(u => u.character?.id === actor.id);
                    if (user) {
                        const params = {
                            message: `${actor.name} notices a spell being cast by ${caster.name} within their line of sight!`,
                            userId: user.id,
                            alias: actor.name
                        };
                        await EFFECT_METHODS.WHISPER_CUSTOM_MESSAGE(actor, params);
                    }
                }
            }
        }
    },
    "ritual-caster": {
        /**
         * Activates the Ritual Caster talent for the specified actor.
         * Sets the 'ritualCaster' flag on the actor.
         * @param {Object} params - Parameters object.
         * @param {Actor5e} params.actor - The actor activating the talent.
         */
        FC_ON_ACTIVATE: async ({ actor }) => {
            try {
            console.log("Ritual Caster talent activated", actor);
            await actor.setFlag(MODULE_NAME, 'ritualCaster', true);
            } catch (error) {
            console.error("Error activating Ritual Caster talent", error);
            }
        },

        /**
         * Deactivates the Ritual Caster talent for the specified actor.
         * Unsets relevant flags and clears ritual books.
         * @param {Object} params - Parameters object.
         * @param {Actor5e} params.actor - The actor deactivating the talent.
         */
        FC_ON_DEACTIVATE: async ({ actor }) => {
            try {
            console.log("Ritual Caster talent deactivated", actor);
            await actor.unsetFlag(MODULE_NAME, 'ritualCaster');
            await actor.unsetFlag(MODULE_NAME, 'ritualBooks');
            } catch (error) {
            console.error("Error deactivating Ritual Caster talent", error);
            }
        },

        /**
         * Handles the usage of the Ritual Caster talent.
         * Opens the ritual casting dialog or collector dialog as appropriate.
         * @param {Object} params - Parameters object.
         * @param {Actor5e} params.actor - The actor using the talent.
         */
        FC_ON_USE: async ({ actor }) => {
            try {
            if (!actor.getFlag(MODULE_NAME, 'ritualCaster')) return;
            let ritualBooks = actor.getFlag(MODULE_NAME, 'ritualBooks') || {};
            let ritualBook = ritualBooks["ritualCaster"] || [];
            if (ritualBook.length >= 2) {
                await this.openRitualCastingDialog(actor, ritualBook);
            } else {
                await this.openRitualCollectorDialog(actor);
            }
            } catch (error) {
            console.error("Error using Ritual Caster talent", error);
            }
        },

        /**
         * Opens the ritual casting dialog for the actor.
         * Updated for Foundry VTT v12 compatibility.
         * @param {Actor5e} actor - The actor casting the ritual spell.
         * @param {Array} ritualBook - The list of ritual spells.
         */
        openRitualCastingDialog: async function (actor, ritualBook) {
            try {
            const spellsList = ritualBook.map(spellId => {
                const spell = actor.items.get(spellId);
                return `<option value="${spell.id}">${spell.name}</option>`;
            }).join('');

            const content = `
                <form>
                <div class="form-group">
                    <label for="spell">Select a spell to cast:</label>
                    <select id="spell">${spellsList}</select>
                </div>
                <p><a href="#" id="resetSpells">Reset Spells</a></p>
                </form>
            `;

            const hasRitualCollector = actor.getFlag(MODULE_NAME, 'ritualCollector');

            const buttons = {
                cast: {
                icon: '<i class="fas fa-check"></i>',
                label: "Cast",
                callback: async (html) => {
                    const spellId = html.find('#spell').val();
                    const spell = actor.items.get(spellId);

                    if (!spell) {
                    ui.notifications.error(`Unable to find the spell.`);
                    return;
                    }

                    ui.notifications.info(`${actor.name} casts ${spell.name} as a ritual.`);
                    if (game.modules.get("midi-qol")?.active) {
                    await MidiQOL.completeItemUse(spell, { configureDialog: false, consumeSlot: false });
                    } else {
                    const config = { consumeSlot: false };
                    await spell.use(config);
                    }
                }
                },
                cancel: {
                icon: '<i class="fas fa-times"></i>',
                label: "Cancel",
                callback: () => { }
                }
            };

            if (hasRitualCollector) {
                buttons.addMore = {
                icon: '<i class="fas fa-plus"></i>',
                label: "Add More Spells",
                callback: () => this.openRitualCollectorDialog(actor)
                };
            }

            const dialog = new Dialog({
                title: "Ritual Spell Casting",
                content: content,
                buttons: buttons,
                default: "cast",
                render: (html) => {
                html.find('#resetSpells').click(async (event) => {
                    event.preventDefault();
                    let ritualBooks = actor.getFlag(MODULE_NAME, 'ritualBooks') || {};
                    ritualBooks["ritualCaster"] = [];
                    await actor.setFlag(MODULE_NAME, 'ritualBooks', ritualBooks);
                    ui.notifications.info("Ritual spells have been reset.");
                    dialog.close();
                });
                }
            });
            dialog.render(true);
            } catch (error) {
            console.error("Error in openRitualCastingDialog", error);
            }
        },

        /**
         * Opens the ritual collector dialog for the actor.
         * Allows the actor to add new ritual spells to their ritual book.
         * Updated for Foundry VTT v12 compatibility.
         * @param {Actor5e} actor - The actor collecting ritual spells.
         */
        openRitualCollectorDialog: async function (actor) {
            try {
            const actorLevel = actor.system.details.level;
            const maxSpellLevel = Math.ceil(actorLevel / 2);
            const hasRitualCollector = actor.getFlag(MODULE_NAME, 'ritualCollector');

            const content = `
                <p>Drag and drop ritual spells into this dialog.</p>
                <p>Maximum spell level: ${maxSpellLevel}</p>
                ${!hasRitualCollector ? '<p>You can only add up to 2 spells without the Ritual Collector talent.</p>' : ''}
                <div id="ritual-book-drop" style="border: 1px solid #000; padding: 10px; height: 100px;"></div>
            `;

            const dialog = new Dialog({
                title: "Ritual Caster - Select Ritual Spells",
                content: content,
                buttons: {
                ok: {
                    icon: '<i class="fas fa-check"></i>',
                    label: "OK",
                    callback: () => { }
                }
                },
                render: (html) => {
                let dropArea = html.find('#ritual-book-drop');
                dropArea.on('drop', async (event) => {
                    event.preventDefault();
                    const data = JSON.parse(event.originalEvent.dataTransfer.getData("text/plain"));
                    const spell = await fromUuid(data.uuid);
                    if (spell.type === "spell" && spell.system.components.ritual) {
                    if (spell.system.level > maxSpellLevel) {
                        ui.notifications.error(`This spell is too high level. Maximum allowed: ${maxSpellLevel}`);
                        return;
                    }

                    let ritualBooks = actor.getFlag(MODULE_NAME, 'ritualBooks') || {};
                    let ritualBook = ritualBooks["ritualCaster"] || [];

                    if (!hasRitualCollector && ritualBook.length >= 2) {
                        ui.notifications.error("You can't add more spells without the Ritual Collector talent.");
                        return;
                    }

                    if (!ritualBook.includes(spell.id)) {
                        const copyCost = hasRitualCollector ? 50 * spell.system.level : 0;
                        const actorGold = actor.system.currency.gp;

                        if (copyCost > 0 && actorGold < copyCost) {
                        ui.notifications.error(`You need ${copyCost} gp to copy this spell.`);
                        return;
                        }

                        if (copyCost > 0) {
                        await actor.update({ "system.currency.gp": actorGold - copyCost });
                        }

                        ritualBook.push(spell.id);
                        ritualBooks["ritualCaster"] = ritualBook;
                        await actor.setFlag(MODULE_NAME, 'ritualBooks', ritualBooks);
                        ui.notifications.info(`${spell.name} added to ritual book. ${copyCost > 0 ? `Cost: ${copyCost} gp` : ''}`);
                    } else {
                        ui.notifications.warn(`${spell.name} is already in your ritual book.`);
                    }
                    } else {
                    ui.notifications.warn("Only ritual spells can be added to the ritual book.");
                    }
                });
                }
            });
            dialog.render(true);
            } catch (error) {
            console.error("Error in openRitualCollectorDialog", error);
            }
        }
    },

    "secrets-from-beyond": {
        FC_ON_ACTIVATE: async ({ actor }) => {
            console.log(`${actor.name} has activated Secrets from Beyond.`);
            const featureExists = actor.items.some(i => i.name === COMPASS_ITEMS.SECRETS_FROM_BEYOND.name);
            if (!featureExists) {
                await EFFECT_METHODS.ADD_ITEM(actor, { itemData: COMPASS_ITEMS.SECRETS_FROM_BEYOND });
                console.log(`Secrets from Beyond feature added to ${actor.name}.`);
            } else {
                console.log(`${actor.name} already has the Secrets from Beyond feature.`);
            }
            await actor.setFlag(MODULE_NAME, 'secretsFromBeyond', true);
        },
        FC_ON_DEACTIVATE: async ({ actor }) => {
            await EFFECT_METHODS.REMOVE_ITEM(actor, { itemName: COMPASS_ITEMS.SECRETS_FROM_BEYOND.name });
            await actor.unsetFlag(MODULE_NAME, 'secretsFromBeyond');
        }
    },
    "mystic-arts": {
        FC_ON_ACTIVATE: async ({ actor }) => {
            console.log("Mystic Arts talent activated", actor);
            await actor.setFlag(MODULE_NAME, 'mysticArts', true);
        },
        FC_ON_DEACTIVATE: async ({ actor }) => {
            await actor.unsetFlag(MODULE_NAME, 'mysticArts');
        },
        onPreItemRoll: (workflow) => {
            const actor = workflow.actor;
            if (!actor || !actor.getFlag(MODULE_NAME, 'mysticArts')) return;
            if (workflow.item?.type !== "spell" || workflow.item.system.level !== 0) return;

            console.log("Mystic Arts talent detected cantrip cast", workflow.item.name);
            workflow.item.system.components = {
                value: false,
                vocal: false,
                somatic: false,
                material: false
            };
            console.log("Mystic Arts talent removed components for cantrip cast", workflow.item.name);
        }
    },
    "ritual-collector": {
        FC_ON_ACTIVATE: async ({ actor }) => {
            console.log("Ritual Collector talent activated", actor);
            await actor.setFlag(MODULE_NAME, 'ritualCollector', true);
        },
        FC_ON_DEACTIVATE: async ({ actor }) => {
            await actor.unsetFlag(MODULE_NAME, 'ritualCollector');
        },
        modifyRitualCasterDialog: (dialog, actor) => {
            if (!actor.getFlag(MODULE_NAME, 'ritualCollector')) return;

            const ritualCollectorButton = $(`
                <button class="dialog-button ritual-collector">
                    <i class="fas fa-book-spells"></i> Add More Ritual Spells
                </button>
            `);

            ritualCollectorButton.on('click', (event) => {
                event.preventDefault();
                this.openRitualCollectorDialog(actor);
            });

            dialog.find('.dialog-buttons').append(ritualCollectorButton);
        },
        openRitualCollectorDialog: (actor) => {
            const actorLevel = actor.system.details.level;
            const maxSpellLevel = Math.ceil(actorLevel / 2);
            new Dialog({
                title: "Ritual Collector - Add New Spells",
                content: `
                    <p>Drag and drop ritual spells here to add them to your ritual book.</p>
                    <p>Maximum spell level: ${maxSpellLevel}</p>
                    <div id="ritual-collector-drop" style="border: 1px solid #000; padding: 10px; height: 100px;"></div>
                `,
                buttons: {
                    close: {
                        icon: '<i class="fas fa-times"></i>',
                        label: "Close"
                    }
                },
                render: (html) => {
                    let dropArea = html.find('#ritual-collector-drop');
                    dropArea.on('drop', async (event) => {
                        event.preventDefault();
                        const data = JSON.parse(event.originalEvent.dataTransfer.getData("text/plain"));
                        const item = await fromUuid(data.uuid);
                        
                        if (item.type === "spell" && item.system.components.ritual) {
                            if (item.system.level > maxSpellLevel) {
                                ui.notifications.error(`This spell is too high level. Maximum allowed: ${maxSpellLevel}`);
                                return;
                            }
                            const copyCost = 50 * item.system.level;
                            const actorGold = actor.system.currency.gp;
                            if (actorGold < copyCost) {
                                ui.notifications.error(`You need ${copyCost} gp to copy this spell.`);
                                return;
                            }
                            await actor.update({"system.currency.gp": actorGold - copyCost});
                            let ritualBooks = actor.getFlag(MODULE_NAME, 'ritual-books') || {};
                            let ritualBook = ritualBooks["ritual-caster"] || [];
                            
                            if (!ritualBook.includes(item.id)) {
                                ritualBook.push(item.id);
                                ritualBooks["ritual-caster"] = ritualBook;
                                await actor.setFlag(MODULE_NAME, 'ritual-books', ritualBooks);
                                ui.notifications.info(`${item.name} added to ritual book. Cost: ${copyCost} gp`);
                            } else {
                                ui.notifications.warn(`${item.name} is already in your ritual book.`);
                            }
                        } else {
                            ui.notifications.warn("Only ritual spells can be added to the ritual book.");
                        }
                    });
                }
            }).render(true);
        }
    },
    "planar-disruptor": {
        /**
         * Activates the Planar Disruptor talent for the specified actor.
         * Sets the 'planarDisruptor' flag on the actor.
         * @param {Object} params - Parameters object.
         * @param {Actor5e} params.actor - The actor activating the talent.
         */
        FC_ON_ACTIVATE: async ({ actor }) => {
            try {
            console.log("Planar Disruptor talent activated", actor);
            await actor.setFlag(MODULE_NAME, 'planarDisruptor', true);
            } catch (error) {
            console.error("Error activating Planar Disruptor talent", error);
            }
        },

        /**
         * Deactivates the Planar Disruptor talent for the specified actor.
         * Unsets the 'planarDisruptor' flag on the actor.
         * @param {Object} params - Parameters object.
         * @param {Actor5e} params.actor - The actor deactivating the talent.
         */
        FC_ON_DEACTIVATE: async ({ actor }) => {
            try {
            await actor.unsetFlag(MODULE_NAME, 'planarDisruptor');
            } catch (error) {
            console.error("Error deactivating Planar Disruptor talent", error);
            }
        },

        /**
         * Handler for damage roll completion event.
         * Adds additional damage to specific creature types.
         * @param {Object} workflow - The Midi-QoL workflow object.
         */
        onDamageRollComplete: async (workflow) => {
            try {
            const actor = workflow.actor;
            if (!actor.getFlag(MODULE_NAME, 'planarDisruptor')) return;

            const validTypes = ['elemental', 'aberration', 'celestial', 'fiend'];
            const target = workflow.hitTargets.first()?.actor;
            if (!target || !validTypes.includes(target.system.details.type?.value)) return;

            const intMod = Math.max(1, actor.system.abilities.int.mod);
            const damageType = workflow.item.system.damage.parts[0][1];

            await this.showPlanarDisruptorDialog(actor, intMod, damageType, target, workflow);
            } catch (error) {
            console.error("Error in onDamageRollComplete", error);
            }
        },

        /**
         * Displays a dialog to confirm the use of Planar Disruptor.
         * Updated for Foundry VTT v12 compatibility.
         * @param {Actor5e} actor - The actor using the talent.
         * @param {number} intMod - The Intelligence modifier of the actor.
         * @param {string} damageType - The type of damage to be dealt.
         * @param {Actor5e} target - The target actor.
         * @param {Object} workflow - The Midi-QoL workflow object.
         */
        showPlanarDisruptorDialog: async function (actor, intMod, damageType, target, workflow) {
            try {
            const dialogContent = `<p>Do you want to use Planar Disruptor to deal an additional ${intMod} ${damageType} damage?</p>`;
            const buttons = {
                yes: {
                icon: '<i class="fas fa-check"></i>',
                label: "Yes",
                callback: async (html) => {
                    await this.applyAdditionalDamage(actor, intMod, damageType, workflow);
                    await this.promptKnowledgeCheck(actor, target);
                }
                },
                no: {
                icon: '<i class="fas fa-times"></i>',
                label: "No",
                callback: () => {}
                }
            };
            new Dialog({
                title: "Planar Disruptor",
                content: dialogContent,
                buttons: buttons,
                default: "yes"
            }).render(true);
            } catch (error) {
            console.error("Error in showPlanarDisruptorDialog", error);
            }
        },

        /**
         * Applies the additional damage to the target.
         * @param {Actor5e} actor - The actor using the talent.
         * @param {number} intMod - The Intelligence modifier of the actor.
         * @param {string} damageType - The type of damage to be dealt.
         * @param {Object} workflow - The Midi-QoL workflow object.
         */
        applyAdditionalDamage: async function (actor, intMod, damageType, workflow) {
            try {
            // Create a new damage roll for the additional damage
            const bonusDamageRoll = await new Roll(`${intMod}`).evaluate({ async: true });
            await game.dice3d?.showForRoll(bonusDamageRoll);

            // Apply the additional damage to the workflow's damage total
            workflow.damageRoll = workflow.damageRoll.combine(bonusDamageRoll);
            workflow.damageTotal += bonusDamageRoll.total;

            // Update the damage list entries for each target
            for (let damageData of workflow.damageList) {
                damageData.appliedDamage += bonusDamageRoll.total;
                damageData.totalDamage += bonusDamageRoll.total;
            }

            // Send a chat message indicating the additional damage
            await ChatMessage.create({
                content: `${actor.name} disrupts the planar entity, dealing an additional ${intMod} ${damageType} damage!`,
                speaker: ChatMessage.getSpeaker({ actor: actor })
            });
            } catch (error) {
            console.error("Error in applyAdditionalDamage", error);
            }
        },

        /**
         * Prompts the actor to perform a knowledge check on the target creature.
         * @param {Actor5e} actor - The actor performing the check.
         * @param {Actor5e} targetActor - The target actor.
         */
        promptKnowledgeCheck: async function (actor, targetActor) {
            try {
            const dialogContent = `<p>Do you want to attempt to gain knowledge about the creature? (DC 15 Arcana check)</p>`;
            const buttons = {
                yes: {
                icon: '<i class="fas fa-check"></i>',
                label: "Yes",
                callback: () => this.performKnowledgeCheck(actor, targetActor)
                },
                no: {
                icon: '<i class="fas fa-times"></i>',
                label: "No",
                callback: () => {}
                }
            };
            new Dialog({
                title: "Planar Knowledge",
                content: dialogContent,
                buttons: buttons,
                default: "yes"
            }).render(true);
            } catch (error) {
            console.error("Error in promptKnowledgeCheck", error);
            }
        },

        /**
         * Performs an Arcana check to gain knowledge about the target creature.
         * @param {Actor5e} actor - The actor performing the check.
         * @param {Actor5e} targetActor - The target actor.
         */
        performKnowledgeCheck: async function (actor, targetActor) {
            try {
            const roll = await new Roll('1d20 + @abilities.int.mod', actor.getRollData()).evaluate({ async: true });
            await game.dice3d?.showForRoll(roll);
            const success = roll.total >= 15;

            if (success) {
                const validStats = ['ac', 'hp', 'speed', 'str', 'dex', 'con', 'int', 'wis', 'cha'];
                const stat = validStats[Math.floor(Math.random() * validStats.length)];
                let value;

                switch (stat) {
                case 'ac':
                    value = targetActor.system.attributes.ac.value;
                    break;
                case 'hp':
                    value = targetActor.system.attributes.hp.value;
                    break;
                case 'speed':
                    value = targetActor.system.attributes.movement.walk;
                    break;
                default:
                    value = targetActor.system.abilities[stat].value;
                }

                await ChatMessage.create({
                content: `${actor.name} successfully discerns the ${stat.toUpperCase()} of the creature: ${value}`,
                speaker: ChatMessage.getSpeaker({ actor: actor }),
                whisper: [game.user.id]
                });
            } else {
                await ChatMessage.create({
                content: `${actor.name} fails to discern any information about the creature.`,
                speaker: ChatMessage.getSpeaker({ actor: actor }),
                whisper: [game.user.id]
                });
            }
            await roll.toMessage({
                speaker: ChatMessage.getSpeaker({ actor: actor }),
                flavor: "Arcana check for Planar Knowledge"
            });
            } catch (error) {
            console.error("Error in performKnowledgeCheck", error);
            }
        }
    },

    "arcane-mastery": {
        FC_ON_ACTIVATE: async ({ actor }) => {
            console.log("Arcane Mastery talent activated", actor);
            const arcaneMasteryEffect = {
                changes: [
                    {
                        key: "system.bonuses.msak.attack",
                        mode: CONST.ACTIVE_EFFECT_MODES.ADD,
                        value: "1",
                        priority: 20
                    },
                    {
                        key: "system.bonuses.rsak.attack",
                        mode: CONST.ACTIVE_EFFECT_MODES.ADD,
                        value: "1",
                        priority: 20
                    },
                    {
                        key: "system.bonuses.spell.dc",
                        mode: CONST.ACTIVE_EFFECT_MODES.ADD,
                        value: "1",
                        priority: 20
                    }
                ],
                disabled: false,
                duration: {
                    startTime: game.time.worldTime
                },
                icon: "icons/magic/fire/explosion-embers-blue.webp",
                label: "Arcane Mastery",
                flags: {
                    [MODULE_NAME]: { sourceActorId: actor.id, module: MODULE_NAME }
                },
                origin: actor.uuid
            };
            await EFFECT_METHODS.ADD_ACTIVE_EFFECT(actor, { effect: arcaneMasteryEffect });
            await actor.setFlag(MODULE_NAME, 'arcaneMastery', true);
        },
        FC_ON_DEACTIVATE: async ({ actor }) => {
            await EFFECT_METHODS.REMOVE_ACTIVE_EFFECT(actor, { effectName: "Arcane Mastery" });
            await actor.unsetFlag(MODULE_NAME, 'arcaneMastery');
        }
    },
    "superior-arcana": {
        FC_ON_ACTIVATE: async ({ actor }) => {
            console.log("Superior Arcana talent activated", actor);
            const existingEffect = actor.effects.find(effect =>
                effect.changes.some(change =>
                    change.key === 'system.skills.arc.value' && change.value === '1'
                )
            );
            if (!existingEffect) {
                console.error(`No regular Arcana proficiency found on actor ${actor.name}. Cannot apply Superior Arcana.`);
                return;
            }
            const updatedChanges = existingEffect.changes.map(change => {
                if (change.key === 'system.skills.arc.value') {
                    return { ...change, value: '2' };
                }
                return change;
            });
            await existingEffect.update({ changes: updatedChanges });
            console.log(`Upgraded Arcana proficiency to expertise (double proficiency) for ${actor.name}.`);
            await actor.setFlag(MODULE_NAME, 'superiorArcana', true);
        },
        FC_ON_DEACTIVATE: async ({ actor }) => {
            const existingEffect = actor.effects.find(effect =>
                effect.changes.some(change =>
                    change.key === 'system.skills.arc.value' && change.value === '2'
                )
            );
            if (existingEffect) {
                const updatedChanges = existingEffect.changes.map(change => {
                    if (change.key === 'system.skills.arc.value') {
                        return { ...change, value: '1' };
                    }
                    return change;
                });
                await existingEffect.update({ changes: updatedChanges });
                console.log(`Reverted Arcana proficiency to regular proficiency for ${actor.name}.`);
            }
            await actor.unsetFlag(MODULE_NAME, 'superiorArcana');
        }
    },
   "spell-recall": {
        /**
         * Activates the Spell Recall talent for the specified actor.
         * Sets the 'spellRecall' flag on the actor.
         * @param {Object} params - Parameters object.
         * @param {Actor5e} params.actor - The actor activating the talent.
         */
        FC_ON_ACTIVATE: async ({ actor }) => {
            try {
            console.log("Spell Recall talent activated", actor);
            await EFFECT_METHODS.ADD_ITEM_ITEM(actor, { itemName: COMPASS_ITEMS.SPELL_RECALL });
            await actor.setFlag(MODULE_NAME, 'spellRecall', true);
            } catch (error) {
            console.error("Error activating Spell Recall talent", error);
            }
        },

        /**
         * Deactivates the Spell Recall talent for the specified actor.
         * Unsets the 'spellRecall' flag and removes the Spell Recall item.
         * @param {Object} params - Parameters object.
         * @param {Actor5e} params.actor - The actor deactivating the talent.
         */
        FC_ON_DEACTIVATE: async ({ actor }) => {
            try {
            console.log("Spell Recall talent deactivated", actor);
            await actor.unsetFlag(MODULE_NAME, 'spellRecall');
            await EFFECT_METHODS.REMOVE_ITEM(actor, { itemName: COMPASS_ITEMS.SPELL_RECALL });
            } catch (error) {
            console.error("Error deactivating Spell Recall talent", error);
            }
        },

        /**
         * Handles the usage of the Spell Recall ability.
         * Opens a dialog to select a spell to recall.
         * @param {Object} params - Parameters object.
         * @param {Actor5e} params.actor - The actor using the ability.
         */
        FC_ON_USE: async ({ actor }) => {
            try {
            if (!actor.getFlag(MODULE_NAME, 'spellRecall')) return;
            await this.openSpellRecallDialog(actor);
            } catch (error) {
            console.error("Error using Spell Recall talent", error);
            }
        },

        /**
         * Opens the Spell Recall dialog for the actor to select a spell to recall.
         * @param {Actor5e} actor - The actor recalling a spell.
         */
        openSpellRecallDialog: async function (actor) {
            try {
            const spells = actor.items.filter(item => item.type === "spell" && item.system.preparation.mode !== "atwill");
            if (spells.length === 0) {
                ui.notifications.warn("No spells available to recall.");
                return;
            }

            const spellsOptions = spells.map(spell => `<option value="${spell.id}">${spell.name}</option>`).join('');

            const content = `
                <form>
                <div class="form-group">
                    <label for="spell">Select a spell to recall:</label>
                    <select id="spell">${spellsOptions}</select>
                </div>
                </form>
            `;

            const buttons = {
                recall: {
                icon: '<i class="fas fa-check"></i>',
                label: "Recall",
                callback: async (html) => {
                    const spellId = html.find('#spell').val();
                    const spell = actor.items.get(spellId);
                    if (spell) {
                    await this.recallSpell(actor, spell);
                    } else {
                    ui.notifications.error("Selected spell not found.");
                    }
                }
                },
                cancel: {
                icon: '<i class="fas fa-times"></i>',
                label: "Cancel",
                callback: () => {}
                }
            };

            new Dialog({
                title: "Spell Recall",
                content: content,
                buttons: buttons,
                default: "recall"
            }).render(true);
            } catch (error) {
            console.error("Error in openSpellRecallDialog", error);
            }
        },

        /**
         * Recalls the selected spell, resetting its preparation status.
         * @param {Actor5e} actor - The actor recalling the spell.
         * @param {Item5e} spell - The spell to recall.
         */
        recallSpell: async function (actor, spell) {
            try {
            const updatedData = {
                [`system.preparation.prepared`]: true
            };
            await spell.update(updatedData);
            await ChatMessage.create({
                content: `${actor.name} recalls the spell ${spell.name}.`,
                speaker: ChatMessage.getSpeaker({ actor: actor })
            });
            } catch (error) {
            console.error("Error in recallSpell", error);
            }
        },
    },

    // Athletics Talents
    "jumper": {
    /**
     * Activates the Jumper talent for the specified actor.
     * Adds the "Jump" feat to the actor's items.
     * @param {Object} params - The parameters object.
     * @param {Actor5e} params.actor - The actor activating the talent.
     */
    FC_ON_ACTIVATE: async ({ actor }) => {
        try {
            console.log("Jumper talent activated", actor);
            await actor.setFlag(MODULE_NAME, 'jumper', true);
            await EFFECT_METHODS.ADD_ITEM(actor, {
                itemData: {
                    ...COMPASS_ITEMS.JUMP,
                    flags: { [MODULE_NAME]: { sourceActorId: actor.id, module: MODULE_NAME } }
                }
            });
        } catch (error) {
            console.error("Error activating Jumper talent", error);
        }
    },

    /**
     * Deactivates the Jumper talent for the specified actor.
     * Removes the "Jump" feat from the actor's items.
     * @param {Object} params - The parameters object.
     * @param {Actor5e} params.actor - The actor deactivating the talent.
     */
    FC_ON_DEACTIVATE: async ({ actor }) => {
        try {
            console.log("Jumper talent deactivated", actor);
            await actor.unsetFlag(MODULE_NAME, 'jumper');
            await EFFECT_METHODS.REMOVE_ITEM(actor, { itemName: COMPASS_ITEMS.JUMP.name });
        } catch (error) {
            console.error("Error deactivating Jumper talent", error);
        }
    },        

    /**
     * Handles the usage of the "Jump" item by the actor.
     * Opens a dialog to choose the type of jump.
     * @param {Item5e} item - The item being used.
     * @param {Actor5e} actor - The actor using the item.
     */
    onItemUse: async function (item, actor) {
        try {
            if (item.name !== "Jump") return;
            const token = actor.getActiveTokens()[0];
            if (!token) {
                ui.notifications.error("No active token found for the actor.");
                return;
            }
            const strengthScore = actor.system.abilities.str.value;
            const strengthMod = actor.system.abilities.str.mod;
            const movement = actor.system.attributes.movement.walk;

            const dialogContent = `<p>Choose the type of jump you want to perform:</p>`;
            const buttons = {
                longJump: {
                    icon: '<i class="fas fa-arrows-alt-h"></i>',
                    label: "Long Jump",
                    callback: async () => {
                        await this.performLongJump(actor, token, strengthScore, movement);
                    }
                },
                highJump: {
                    icon: '<i class="fas fa-arrows-alt-v"></i>',
                    label: "High Jump",
                    callback: async () => {
                        await this.performHighJump(actor, token, strengthMod, movement);
                    }
                },
                cancel: {
                    icon: '<i class="fas fa-times"></i>',
                    label: "Cancel",
                    callback: () => {}
                }
            };

            new Dialog({
                title: "Jump",
                content: dialogContent,
                buttons: buttons,
                default: "longJump"
            }).render(true);
        } catch (error) {
            console.error("Error in onItemUse", error);
        }
    },

    /**
     * Performs a long jump for the actor.
     * Opens a dialog to handle jump placement.
     * @param {Actor5e} actor - The actor performing the jump.
     * @param {TokenDocument} token - The actor's token.
     * @param {number} strengthScore - The actor's Strength score.
     * @param {number} movement - The actor's movement speed.
     */
    performLongJump: async function (actor, token, strengthScore, movement) {
        try {
            const maxDistance = strengthScore;
            const dialogContent = `
                <p>You can jump up to ${maxDistance} feet.</p>
                <p>Click "Place" to select your jump destination on the map.</p>
            `;

            const dialog = new Dialog({
                title: "Long Jump",
                content: dialogContent,
                buttons: {
                    place: {
                        icon: '<i class="fas fa-map-marker-alt"></i>',
                        label: "Place",
                        callback: () => {
                            EFFECT_METHODS.INITIATE_TOKEN_MOVEMENT(actor, token, maxDistance, movement, "jump");
                        }
                    },
                    cancel: {
                        icon: '<i class="fas fa-times"></i>',
                        label: "Cancel",
                        callback: () => {}
                    }
                },
                default: "place"
            });
            dialog.render(true);
        } catch (error) {
            console.error("Error in performLongJump", error);
        }
    },

    /**
     * Performs a high jump for the actor.
     * Opens a dialog to choose jump height and direction.
     * @param {Actor5e} actor - The actor performing the jump.
     * @param {TokenDocument} token - The actor's token.
     * @param {number} strengthMod - The actor's Strength modifier.
     * @param {number} movement - The actor's movement speed.
     */
    performHighJump: async function (actor, token, strengthMod, movement) {
        try {
            const maxHeight = 3 + strengthMod;
            const dialogContent = `
                <p>You can jump up to ${maxHeight} feet high.</p>
                <p>Enter the height you want to jump (1-${maxHeight}):</p>
                <input type="number" id="jumpHeight" min="1" max="${maxHeight}" value="${maxHeight}">
            `;

            const dialog = new Dialog({
                title: "High Jump",
                content: dialogContent,
                buttons: {
                    jump: {
                        icon: '<i class="fas fa-check"></i>',
                        label: "Jump",
                        callback: async (html) => {
                            const height = Math.min(parseInt(html.find('#jumpHeight').val()), maxHeight);
                            await this.chooseHighJumpDirection(actor, token, height, movement);
                        }
                    },
                    cancel: {
                        icon: '<i class="fas fa-times"></i>',
                        label: "Cancel",
                        callback: () => {}
                    }
                },
                default: "jump"
            });
            dialog.render(true);
        } catch (error) {
            console.error("Error in performHighJump", error);
        }
    },

    /**
     * Allows the actor to choose the direction for a high jump.
     * @param {Actor5e} actor - The actor performing the jump.
     * @param {TokenDocument} token - The actor's token.
     * @param {number} height - The height of the jump.
     * @param {number} movement - The actor's movement speed.
     */
    chooseHighJumpDirection: async function (actor, token, height, movement) {
        try {
            const directions = [
                { label: "Up", x: 0, y: -1 },
                { label: "Up-Right", x: 1, y: -1 },
                { label: "Right", x: 1, y: 0 },
                { label: "Down-Right", x: 1, y: 1 },
                { label: "Down", x: 0, y: 1 },
                { label: "Down-Left", x: -1, y: 1 },
                { label: "Left", x: -1, y: 0 },
                { label: "Up-Left", x: -1, y: -1 },
                { label: "Vertical", x: 0, y: 0 }
            ];

            const directionButtons = directions.reduce((buttons, dir) => {
                buttons[dir.label] = {
                    label: dir.label,
                    callback: async () => {
                        const additionalChecks = async (distance) => {
                            const totalMovement = distance + height;
                            if (totalMovement > movement) {
                                ui.notifications.warn("The jump distance exceeds your movement speed.");
                                return false;
                            }
                            return true;
                        };
                        await EFFECT_METHODS.INITIATE_TOKEN_MOVEMENT(actor, token, 5, movement, "jump", additionalChecks);
                    }
                };
                return buttons;
            }, {});

            new Dialog({
                title: "High Jump Direction",
                content: `<p>Select the direction of your high jump:</p>`,
                buttons: directionButtons,
                default: "Vertical"
            }).render(true);
        } catch (error) {
            console.error("Error in chooseHighJumpDirection", error);
        }
    }
},

    "strapping": {
        FC_ON_ACTIVATE: async ({ actor }) => {
            try {
                console.log("Strapping talent activated", actor);
                await actor.setFlag(MODULE_NAME, 'strapping', true);
                const walkingSpeed = actor.system.attributes.movement.walk;
                const strappingEffect = {
                    label: "Strapping",
                    icon: "icons/skills/melee/unarmed-punch-fist-yellow.webp",
                    changes: [
                        {
                            key: "system.attributes.movement.swim",
                            mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
                            value: walkingSpeed
                        },
                        {
                            key: "system.attributes.movement.climb",
                            mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
                            value: walkingSpeed
                        }
                    ],
                    flags: {
                        [MODULE_NAME]: {
                            sourceActorId: actor.id,
                            module: MODULE_NAME
                        }
                    }
                };
                await EFFECT_METHODS.ADD_ACTIVE_EFFECT(actor, { effect: strappingEffect });
                await EFFECT_METHODS.ADD_ITEM(actor, {
                    itemData: {
                        name: "Strapping",
                        type: "feat",
                        img: "icons/skills/melee/unarmed-punch-fist-yellow.webp",
                        system: {
                            description: {
                                value: "You're an exemplary athlete. You have a swimming and climbing speed equal to your walking speed. You have advantage on Constitution saving throws against exhaustion due to forced marches while traveling."
                            }
                        },
                        flags: { [MODULE_NAME]: { sourceActorId: actor.id, module: MODULE_NAME } }
                    }
                });
                ui.notifications.warn(`${actor.name} has become Strapping! They now have swimming and climbing speeds equal to their walking speed (${walkingSpeed} feet).`);
            } catch (error) {
                console.error("Error activating Strapping talent", error);
            }
        },
        FC_ON_DEACTIVATE: async ({ actor }) => {
            try {
                console.log("Strapping talent deactivated", actor);
                await actor.unsetFlag(MODULE_NAME, 'strapping');
                await EFFECT_METHODS.REMOVE_ACTIVE_EFFECT(actor, { effectName: "Strapping" });
                await EFFECT_METHODS.REMOVE_ITEM(actor, { itemName: "Strapping" });
                ui.notifications.warn(`${actor.name} is no longer Strapping. Their swimming and climbing speeds have been reset.`);
            } catch (error) {
                console.error("Error deactivating Strapping talent", error);
            }
        }
    },
   "chokehold": {
        FC_ON_ACTIVATE: async ({ actor }) => {
            try {
                console.log("Chokehold talent activated", actor);
                await actor.setFlag(MODULE_NAME, 'chokehold', true);
            } catch (error) {
                console.error("Error activating Chokehold talent", error);
            }
        },
        FC_ON_DEACTIVATE: async ({ actor }) => {
            try {
                console.log("Chokehold talent deactivated", actor);
                await actor.unsetFlag(MODULE_NAME, 'chokehold');
                await EFFECT_METHODS.REMOVE_ITEM(actor, { itemName: "Chokehold" });
            } catch (error) {
                console.error("Error deactivating Chokehold talent", error);
            }
        },
        FC_ON_CREATE_ACTIVE_EFFECT: async ({ actor, effect }) => {
            try {
                if (effect.name.includes("Grappling") && actor.getFlag(MODULE_NAME, 'chokehold')) {
                    const target = effect.name.replace("Grappling ", "");
                    const user = game.users.find(u => u.character === actor);
                    if (user) {
                        const content = `
                            <p>You are now grappling ${target}. You can use your Chokehold ability to attempt to restrain the target.</p>
                            <h3>Chokehold Talent Rules</h3>
                            <p>You can use your attack action to try to pin a grappled creature. To do so, make another grapple check. If you succeed:</p>
                            <ul>
                                <li>Your speed becomes 0.</li>
                                <li>The grappled creature becomes restrained until the grapple ends.</li>
                            </ul>
                        `;
                        await EFFECT_METHODS.WHISPER_CHAT_MESSAGE(actor, {
                            nodeId: "chokehold",
                            nodeType: "skills",
                            content: content
                        });
                        await EFFECT_METHODS.ADD_ITEM(actor, {
                            itemData: {
                                ...COMPASS_ITEMS.CHOKEHOLD,
                                flags: { [MODULE_NAME]: { sourceActorId: actor.id, module: MODULE_NAME } }
                            }
                        });
                    }
                }
            } catch (error) {
                console.error("Error in FC_ON_CREATE_ACTIVE_EFFECT for Chokehold", error);
            }
        },
        FC_ON_REMOVED_ACTIVE_EFFECT: async (effect, actor) => {
            try {
                if (effect.name.includes("Grappling")) {
                    await EFFECT_METHODS.REMOVE_ITEM(actor, { itemName: "Chokehold" });
                }
            } catch (error) {
                console.error("Error in FC_ON_REMOVED_ACTIVE_EFFECT for Chokehold", error);
            }
        }
    }
};




export default COMPASS_HANDLERS;
