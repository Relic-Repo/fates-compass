// Fate's Compass Effect Methods

import  nodeSkillsData  from './node-skills-data.js';
import { nodeSpecializationData } from './node-specialization-data.js';
import { nodeRacialData } from './node-racial-data.js';
import { nodeMagicTrainingData } from './node-magic-training-data.js';
import { nodeWeaponTrainingData } from './node-weapon-training-data.js';
import { nodeToolsData } from './node-tools-data.js';
import { ITEM_TYPES, ATTRIBUTES, CHAT_MESSAGE_TYPES } from './compassConfig.js'; // Imported constants from compassConfig

/** Effect Methods */
export const EFFECT_METHODS = {

  /**
   * Shows a dialog with a list of available actions the player can take during a long rest.
   * @param {Actor} actor - The actor for whom the dialog is displayed.
   * @param {Array} actions - An array of available actions (strings) to display in the dialog.
   */
  SHOW_LONG_REST_ACTION_DIALOG: async (actor, actions) => {
    if (!actions || actions.length === 0) {
      console.log(`No actions available for ${actor.name}`);
      return;
    }
    const actionList = actions.map(action => `<li>${action}</li>`).join('');
    const content = `<p>During your long rest, you may take the following actions:</p><ul>${actionList}</ul>`;
    new Dialog({
      title: `${actor.name}'s Available Actions`,
      content: content,
      buttons: {
        ok: {
          icon: "<i class='fas fa-check'></i>",
          label: "OK"
        }
      },
      default: "ok",
    }).render(true);
  },

  /**
   * Adds an item to the actor's inventory.
   * @param {Actor} actor - The actor to modify.
   * @param {Object} params - Parameters for the method.
   * @param {Object} params.itemData - The data of the item to add.
   */
  ADD_ITEM: async (actor, params) => {
    const { itemData } = params;
    if (!itemData) {
      console.error("No item data provided to ADD_ITEM method.");
      return;
    }
    await actor.createEmbeddedDocuments("Item", [itemData]);
    console.log(`Added item ${itemData.name} to actor ${actor.name}.`);
  },

  /**
   * Removes an item from the actor's inventory.
   * @param {Actor} actor - The actor to modify.
   * @param {Object} params - Parameters for the method.
   * @param {string} params.itemName - The name of the item to remove.
   */
  REMOVE_ITEM: async (actor, params) => {
    const { itemName } = params;
    if (!itemName) {
      console.error("No item name provided to REMOVE_ITEM method.");
      return;
    }
    const items = actor.items.filter(i => i.name === itemName);
    for (let item of items) {
      const flagModule = item.getFlag('fates-compass', 'module');
      if (flagModule === 'fates-compass') {
        const sourceActorId = item.getFlag('fates-compass', 'sourceActorId');
        if (sourceActorId === actor.id) {
          await item.delete();
          console.log(`Removed item ${item.name} from actor ${actor.name}.`);
        } else {
          // If the item is transferred, remove only the 'fates-compass' flag.
          await item.unsetFlag('fates-compass', 'module');
          await item.unsetFlag('fates-compass', 'sourceActorId');
          console.log(`Removed 'fates-compass' flag from item ${item.name} on actor ${actor.name}.`);
        }
      }
    }
  },

  /**
   * Adds an active effect to the actor.
   * @param {Actor} actor - The actor to modify.
   * @param {Object} params - Parameters for the method.
   * @param {Object} params.effect - The effect data to apply.
   */
  ADD_ACTIVE_EFFECT: async (actor, params) => {
    const { effect } = params;
    if (!effect) {
      console.error("No effect provided to ADD_ACTIVE_EFFECT method.");
      return;
    }
    await actor.createEmbeddedDocuments('ActiveEffect', [effect]);
  },

  /**
   * Removes an active effect from the actor.
   * @param {Actor} actor - The actor to modify.
   * @param {Object} params - Parameters for the method.
   * @param {string} params.effectName - The name of the effect to remove.
   */
  REMOVE_ACTIVE_EFFECT: async (actor, params) => {
    const { effectName } = params;
    if (!effectName) {
      console.error("No effect name provided to REMOVE_ACTIVE_EFFECT method.");
      return;
    }
    const effects = actor.effects.filter(e => e.label === effectName);
    for (let effect of effects) {
      const flagModule = effect.getFlag('fates-compass', 'module');
      if (flagModule === 'fates-compass') {
        const sourceActorId = effect.getFlag('fates-compass', 'sourceActorId');
        if (sourceActorId === actor.id) {
          await effect.delete();
          console.log(`Removed effect ${effect.label} from actor ${actor.name}.`);
        } else {
          // If the effect is transferred, remove only the 'fates-compass' flag.
          await effect.unsetFlag('fates-compass', 'module');
          await effect.unsetFlag('fates-compass', 'sourceActorId');
          console.log(`Removed 'fates-compass' flag from effect ${effect.label} on actor ${actor.name}.`);
        }
      }
    }
  },

  /**
   * Adds a skill proficiency to the actor using an active effect.
   * @param {Actor} actor - The actor to modify.
   * @param {Object} params - Parameters for the method.
   * @param {string} params.skill - The skill to modify.
   * @param {number} params.value - The proficiency value to add.
   * @param {Object} [params.duration={}] - The duration of the effect.
   * @param {string} [params.icon="icons/svg/upgrade.svg"] - The icon for the effect.
   * @param {Array} [params.specialDuration=[]] - Special duration settings.
   */
  ADD_SKILL_PROFICIENCY: async (actor, params) => {
    const { skill, value, duration = {}, icon = "icons/svg/upgrade.svg", specialDuration = [] } = params;
    if (!actor.system.skills[skill]) {
      console.error(`Skill ${skill} not found on actor ${actor.name}.`);
      return;
    }
    const effect = {
      changes: [{
        key: `system.skills.${skill}.value`,
        mode: CONST.ACTIVE_EFFECT_MODES.ADD,
        value: value.toString(),
        priority: 20
      }],
      disabled: false,
      duration,
      img: icon,
      name: `${skill.toUpperCase()} Proficiency`,
      flags: {
        dae: {
          specialDuration
        }
      }
    };
    await actor.createEmbeddedDocuments("ActiveEffect", [effect]);
  },

  /**
   * Removes a skill proficiency from the actor.
   * @param {Actor} actor - The actor to modify.
   * @param {Object} params - Parameters for the method.
   * @param {string} params.skill - The skill to remove proficiency from.
   */
  REMOVE_SKILL_PROFICIENCY: async (actor, params) => {
    const { skill } = params;
    if (!skill) {
      console.error("No skill provided to REMOVE_SKILL_PROFICIENCY method.");
      return;
    }
    const effectName = `${skill.toUpperCase()} Proficiency`;
    const effect = actor.effects.find(e =>
      e.label === effectName &&
      e.changes.some(c => c.key === `system.skills.${skill}.value`)
    );
    if (effect) {
      await effect.delete();
    } else {
      console.warn(`Effect ${effectName} not found on actor ${actor.name}.`);
    }
  },

  /**
   * Modifies a skill proficiency on the actor.
   * @param {Actor} actor - The actor to modify.
   * @param {Object} params - Parameters for the method.
   */
  MODIFY_SKILL_PROFICIENCY: async (actor, params) => {
    await EFFECT_METHODS.REMOVE_SKILL_PROFICIENCY(actor, params);
    await EFFECT_METHODS.ADD_SKILL_PROFICIENCY(actor, params);
  },

  CREATE_CHAT_MESSAGE: async (params) => {
    const { content, speaker, type = CHAT_MESSAGE_TYPES.OOC } = params;
    
    if (!content) {
      console.error("No content provided to CREATE_CHAT_MESSAGE method.");
      return;
    }
  
    const messageData = {
      content: content,
      speaker: speaker,
      type: type
    };
  
    return await ChatMessage.create(messageData);
  },

  /**
   * Sends a whisper chat message to the player controlling the actor.
   * @param {Actor} actor - The actor to send the message for.
   * @param {Object} params - Parameters for the method.
   * @param {string} params.nodeId - The ID of the node.
   * @param {string} params.nodeType - The type of the node.
   */
  WHISPER_CHAT_MESSAGE: async (actor, params) => {
    const { nodeId, nodeType } = params;
    let content;
    switch (nodeType) {
      case 'skills':
        content = nodeSkillsData[nodeId]?.description || 'Description not found.';
        break;
      case 'specialization':
        content = nodeSpecializationData[nodeId]?.description || 'Description not found.';
        break;
      case 'racial':
        content = nodeRacialData[nodeId]?.description || 'Description not found.';
        break;
      case 'magicTraining':
        content = nodeMagicTrainingData[nodeId]?.description || 'Description not found.';
        break;
      case 'weaponTraining':
        content = nodeWeaponTrainingData[nodeId]?.description || 'Description not found.';
        break;
      case 'tools':
        content = nodeToolsData[nodeId]?.description || 'Description not found.';
        break;
      default:
        content = 'Description not found.';
    }
    const user = game.users.players.find(u => u.character?.id === actor.id);
    if (!user) {
      console.error(`No user found controlling actor ${actor.name}.`);
      return;
    }
    const userId = user.id;
    const messageId = randomID();
    const buttonHtml = `<button class="share-button" data-node-id="${nodeId}" data-message-id="${messageId}">Share with Everyone</button>`;

    const chatData = {
      content: `${content}<br><br>${buttonHtml}`,
      whisper: [userId],
      speaker: {
        alias: actor.name
      },
      type: CHAT_MESSAGE_TYPES.OOC,
      flags: {
        'fates-compass': {
          messageId: messageId,
          content: content,
          actorName: actor.name
        }
      }
    };
    const chatMessage = await ChatMessage.create(chatData);
    Hooks.once('renderChatMessage', (message, html, data) => {
      if (message.id !== chatMessage.id) return;
      html.find(`.share-button[data-message-id="${messageId}"]`).on('click', function () {
        EFFECT_METHODS.SHARE_CHAT_MESSAGE(content, actor.name);
      });
    });
  },

  /**
   * Sends a custom whisper chat message to a specific user.
   * @param {Actor} actor - The actor sending the message.
   * @param {Object} params - Parameters for the method.
   * @param {string} params.message - The message content.
   * @param {string} params.userId - The ID of the user to whisper to.
   * @param {string} [params.alias] - The alias of the speaker (defaults to actor's name).
   */
  WHISPER_CUSTOM_MESSAGE: async (actor, params) => {
    const { message, userId, alias = actor.name } = params;
    if (!message || !userId) {
      console.error("Message content or userId not provided to WHISPER_CUSTOM_MESSAGE method.");
      return;
    }

    const chatData = {
      content: message,
      whisper: [userId],
      speaker: {
        alias: alias
      },
      type: CHAT_MESSAGE_TYPES.OOC,
    };
    await ChatMessage.create(chatData);
  },

  /**
   * Shares a chat message with everyone.
   * @param {string} content - The content of the message.
   * @param {string} alias - The alias of the speaker.
   */
  SHARE_CHAT_MESSAGE: async (content, alias) => {
    await ChatMessage.create({
      content: content,
      speaker: { alias: alias },
      type: CHAT_MESSAGE_TYPES.OOC
    });
  },

  /**
   * Adds a weapon property to specified weapons.
   * @param {Actor} actor - The actor to modify.
   * @param {Object} params - Parameters for the method.
   * @param {Array} params.weapons - List of weapon names.
   * @param {string} params.property - The property to add.
   */
  ADD_WEAPON_PROPERTY: async (actor, params) => {
    const { weapons: weaponNames, property } = params;
    if (!weaponNames || !property) {
      console.error("Weapon names or property not provided to ADD_WEAPON_PROPERTY method.");
      return;
    }
    const weapons = actor.items.filter(i => i.type === ITEM_TYPES.WEAPON && weaponNames.includes(i.name));
    for (let w of weapons) {
      await w.update({ "system.properties": { ...w.system.properties, [property]: true } });
    }
  },

  /**
   * Modifies an ability score of the actor.
   * @param {Actor} actor - The actor to modify.
   * @param {Object} params - Parameters for the method.
   * @param {string} params.ability - The ability to modify (e.g., 'str', 'dex').
   * @param {number} params.value - The value to add to the ability score.
   */
  MODIFY_ABILITY_SCORE: async (actor, params) => {
    const abilityKey = params.ability.toLowerCase();
    if (!actor.system.abilities[abilityKey]) {
      console.error(`Ability ${params.ability} not found on actor ${actor.name}.`);
      return;
    }
    const abilityPath = `system.abilities.${abilityKey}.value`;
    const currentValue = actor.system.abilities[abilityKey].value || 0;
    const newValue = currentValue + params.value;
    await actor.update({ [abilityPath]: newValue });
  },

  /**
   * Applies a condition to the actor using an Active Effect.
   * @param {Actor} actor - The actor to modify.
   * @param {Object} params - Parameters for the method.
   * @param {string} params.condition - The condition ID to apply.
   * @param {Array} [params.changes=[]] - Changes to apply with the condition.
   */
  APPLY_CONDITION: async (actor, params) => {
    const { condition, changes = [] } = params;
    const effectData = CONFIG.statusEffects.find(se => se.id === condition);
    if (!effectData) {
      console.error(`Condition ${condition} not found in CONFIG.statusEffects.`);
      return;
    }
    const effect = {
      label: effectData.name,
      icon: effectData.icon,
      origin: actor.uuid,
      disabled: false,
      changes: changes,
      flags: {
        core: {
          statusId: effectData.id
        }
      }
    };
    await actor.createEmbeddedDocuments('ActiveEffect', [effect]);
  },

  /**
   * Removes a condition from the actor.
   * @param {Actor} actor - The actor to modify.
   * @param {Object} params - Parameters for the method.
   * @param {string} params.condition - The condition ID to remove.
   */
  REMOVE_CONDITION: async (actor, params) => {
    const { condition } = params;
    const effect = actor.effects.find(e => e.getFlag('core', 'statusId') === condition);
    if (effect) {
      await effect.delete();
    } else {
      console.log(`Condition ${condition} not found on actor ${actor.name}.`);
    }
  },

  /**
   * Increases weapon damage for specified weapon types.
   * @param {Actor} actor - The actor to modify.
   * @param {Object} params - Parameters for the method.
   * @param {string} params.weaponType - The type of weapon.
   * @param {string} params.damageIncrease - The damage formula to add (e.g., "1d6").
   */
  INCREASE_WEAPON_DAMAGE: async (actor, params) => {
    const { weaponType, damageIncrease } = params;
    const weapons = actor.items.filter(i => i.type === ITEM_TYPES.WEAPON && i.system.damageType === weaponType);
    for (let w of weapons) {
      const originalFormula = w.system.damage.parts[0][0];
      const newFormula = `${originalFormula} + ${damageIncrease}`;
      await w.update({ "system.damage.parts": [[newFormula, w.system.damage.parts[0][1]]] });
    }
  },

  /**
   * Grants a spell to the actor's spellbook.
   * @param {Actor} actor - The actor to modify.
   * @param {Object} params - Parameters for the method.
   * @param {string} params.spellName - The name of the spell to grant.
   */
  GRANT_SPELLCASTING: async (actor, params) => {
    const { spellName } = params;
    const spell = game.items.getName(spellName);
    if (spell) {
      await actor.createEmbeddedDocuments('Item', [spell.toObject()]);
    } else {
      console.error(`Spell ${spellName} not found in game items.`);
    }
  },

  /**
   * Applies damage to the actor.
   * @param {Actor} actor - The actor to modify.
   * @param {Object} params - Parameters for the method.
   * @param {number} params.damage - The amount of damage to apply.
   */
  APPLY_DAMAGE: async (actor, params) => {
    const { damage } = params;
    const currentHP = actor.system.attributes.hp.value || 0;
    const newHP = currentHP - damage;
    await actor.update({ [ATTRIBUTES.HP]: newHP });
  },

  /**
   * Heals the actor.
   * @param {Actor} actor - The actor to modify.
   * @param {Object} params - Parameters for the method.
   * @param {number} params.heal - The amount of healing to apply.
   */
  HEAL_ACTOR: async (actor, params) => {
    const { heal } = params;
    const currentHP = actor.system.attributes.hp.value || 0;
    const maxHP = actor.system.attributes.hp.max || 0;
    const newHP = Math.min(currentHP + heal, maxHP);
    await actor.update({ [ATTRIBUTES.HP]: newHP });
  },

  /**
   * Applies temporary hit points to the actor.
   * @param {Actor} actor - The actor to modify.
   * @param {Object} params - Parameters for the method.
   * @param {number} params.tempHP - The amount of temporary HP to apply.
   */
  APPLY_TEMP_HP: async (actor, params) => {
    const { tempHP } = params;
    await actor.update({ "system.attributes.hp.temp": tempHP });
  },

  /**
   * Modifies the actor's armor class.
   * @param {Actor} actor - The actor to modify.
   * @param {Object} params - Parameters for the method.
   * @param {number} params.value - The value to add to the AC.
   */
  MODIFY_ARMOR_CLASS: async (actor, params) => {
    const { value } = params;
    const currentAC = actor.system.attributes.ac.value || 0;
    const newAC = currentAC + value;
    await actor.update({ [ATTRIBUTES.AC]: newAC });
  },

  /**
   * Changes the vision settings of the actor's token.
   * @param {Actor} actor - The actor whose token to modify.
   * @param {Object} params - Parameters for the method.
   * @param {Object} params.vision - The vision settings to apply.
   */
  CHANGE_TOKEN_VISION: async (actor, params) => {
    const { vision } = params;
    const token = actor.getActiveTokens()[0];
    if (token) {
      await token.update({ vision });
    } else {
      console.error(`No active token found for actor ${actor.name}.`);
    }
  },

  /**
   * Changes the size of the actor's token.
   * @param {Actor} actor - The actor whose token to modify.
   * @param {Object} params - Parameters for the method.
   * @param {number} params.size - The new size for the token.
   */
  CHANGE_TOKEN_SIZE: async (actor, params) => {
    const { size } = params;
    const token = actor.getActiveTokens()[0];
    if (token) {
      await token.update({ width: size, height: size });
    } else {
      console.error(`No active token found for actor ${actor.name}.`);
    }
  },

  /**
   * Teleports the actor's token to specified coordinates.
   * @param {Actor} actor - The actor whose token to modify.
   * @param {Object} params - Parameters for the method.
   * @param {number} params.x - The x-coordinate to teleport to.
   * @param {number} params.y - The y-coordinate to teleport to.
   */
  TELEPORT_ACTOR: async (actor, params) => {
    const { x, y } = params;
    const token = actor.getActiveTokens()[0];
    if (token) {
      await token.update({ x, y });
    } else {
      console.error(`No active token found for actor ${actor.name}.`);
    }
  },

  /**
   * Adjusts a resource value for the actor.
   * @param {Actor} actor - The actor to modify.
   * @param {Object} params - Parameters for the method.
   * @param {string} params.resource - The resource to adjust (e.g., 'primary', 'secondary').
   * @param {number} params.value - The value to add to the resource.
   */
  ADJUST_RESOURCE: async (actor, params) => {
    const { resource, value } = params;
    if (!resource || typeof value !== 'number') {
      console.error("Resource or value not provided correctly to ADJUST_RESOURCE method.");
      return;
    }
    const resourceData = actor.system.resources[resource];
    if (!resourceData) {
      console.error(`Resource ${resource} not found on actor ${actor.name}.`);
      return;
    }
    const resourcePath = `system.resources.${resource}.value`;
    const currentValue = resourceData.value || 0;
    const newValue = currentValue + value;
    await actor.update({ [resourcePath]: newValue });
  },

  /**
   * Grants proficiency in a skill to the actor.
   * @param {Actor} actor - The actor to modify.
   * @param {Object} params - Parameters for the method.
   * @param {string} params.skill - The skill to grant proficiency in.
   */
  GRANT_PROFICIENCY: async (actor, params) => {
    const { skill } = params;
    if (!skill) {
      console.error("No skill provided to GRANT_PROFICIENCY method.");
      return;
    }
    const skillData = actor.system.skills[skill];
    if (!skillData) {
      console.error(`Skill ${skill} not found on actor ${actor.name}.`);
      return;
    }
    const profPath = `system.skills.${skill}.proficient`;
    await actor.update({ [profPath]: true });
  },

  /**
   * Removes proficiency in a skill from the actor.
   * @param {Actor} actor - The actor to modify.
   * @param {Object} params - Parameters for the method.
   * @param {string} params.skill - The skill to remove proficiency from.
   */
  REMOVE_PROFICIENCY: async (actor, params) => {
    const { skill } = params;
    if (!skill) {
      console.error("No skill provided to REMOVE_PROFICIENCY method.");
      return;
    }
    const skillData = actor.system.skills[skill];
    if (!skillData) {
      console.error(`Skill ${skill} not found on actor ${actor.name}.`);
      return;
    }
    const profPath = `system.skills.${skill}.proficient`;
    await actor.update({ [profPath]: false });
  },

  /**
   * Modifies the actor's initiative value.
   * @param {Actor} actor - The actor to modify.
   * @param {Object} params - Parameters for the method.
   * @param {number} params.value - The value to add to the initiative.
   */
  MODIFY_INITIATIVE: async (actor, params) => {
    const { value } = params;
    if (typeof value !== 'number') {
      console.error("Invalid value provided to MODIFY_INITIATIVE method.");
      return;
    }
    const currentInit = actor.system.attributes.init.value || 0;
    const newInit = currentInit + value;
    await actor.update({ "system.attributes.init.value": newInit });
  },

  /**
   * Modifies the actor's movement speed.
   * @param {Actor} actor - The actor to modify.
   * @param {Object} params - Parameters for the method.
   * @param {number} params.value - The value to add to the movement speed.
   */
  MODIFY_MOVEMENT_SPEED: async (actor, params) => {
    const { value } = params;
    if (typeof value !== 'number') {
      console.error("Invalid value provided to MODIFY_MOVEMENT_SPEED method.");
      return;
    }
    const currentSpeed = actor.system.attributes.movement.walk || 0;
    const newSpeed = currentSpeed + value;
    await actor.update({ "system.attributes.movement.walk": newSpeed });
  },

  /**
   * Applies healing over time to the actor.
   * Note: This method may need to be scheduled or triggered repeatedly.
   * @param {Actor} actor - The actor to heal.
   * @param {Object} params - Parameters for the method.
   * @param {number} params.heal - The amount of healing to apply.
   */
  APPLY_HEALING_OVER_TIME: async (actor, params) => {
    const { heal } = params;
    if (typeof heal !== 'number') {
      console.error("Invalid heal amount provided to APPLY_HEALING_OVER_TIME method.");
      return;
    }
    const currentHP = actor.system.attributes.hp.value || 0;
    const maxHP = actor.system.attributes.hp.max || 0;
    const newHP = Math.min(currentHP + heal, maxHP);
    await actor.update({ [ATTRIBUTES.HP]: newHP });
  },

  /**
   * Applies damage over time to the actor.
   * Note: This method may need to be scheduled or triggered repeatedly.
   * @param {Actor} actor - The actor to damage.
   * @param {Object} params - Parameters for the method.
   * @param {number} params.damage - The amount of damage to apply.
   */
  APPLY_DAMAGE_OVER_TIME: async (actor, params) => {
    const { damage } = params;
    if (typeof damage !== 'number') {
      console.error("Invalid damage amount provided to APPLY_DAMAGE_OVER_TIME method.");
      return;
    }
    const currentHP = actor.system.attributes.hp.value || 0;
    const newHP = currentHP - damage;
    await actor.update({ [ATTRIBUTES.HP]: newHP });
  },

  /**
   * Toggles the invisibility status of the actor's token.
   * @param {Actor} actor - The actor whose token to modify.
   */
  TOGGLE_INVISIBLE: async (actor) => {
    const token = actor.getActiveTokens()[0];
    if (token) {
      const currentInvisible = token.document.hidden;
      await token.update({ hidden: !currentInvisible });
    } else {
      console.error(`No active token found for actor ${actor.name}.`);
    }
  },

  /**
   * Toggles the restrained condition on the actor.
   * @param {Actor} actor - The actor to modify.
   */
  TOGGLE_RESTRAINED: async (actor) => {
    const restrainedCondition = "Restrained";
    const effect = actor.effects.find(e => e.label === restrainedCondition);
    if (effect) {
      await effect.delete();
    } else {
      const effectData = CONFIG.statusEffects.find(se => se.label === restrainedCondition);
      if (effectData) {
        const newEffect = {
          label: effectData.label,
          icon: effectData.icon,
          origin: actor.uuid,
          disabled: false,
          changes: [],
          flags: {
            core: {
              statusId: effectData.id
            }
          }
        };
        await actor.createEmbeddedDocuments('ActiveEffect', [newEffect]);
      } else {
        console.error(`Condition ${restrainedCondition} not found in CONFIG.statusEffects.`);
      }
    }
  },

  /**
   * Modifies a saving throw bonus for the actor.
   * @param {Actor} actor - The actor to modify.
   * @param {Object} params - Parameters for the method.
   * @param {string} params.save - The saving throw to modify (e.g., 'str', 'dex').
   * @param {number} params.value - The bonus value to add.
   */
  MODIFY_SAVING_THROW: async (actor, params) => {
    const { save, value } = params;
    const saveKey = save.toLowerCase();
    if (!actor.system.abilities[saveKey]) {
      console.error(`Saving throw ${save} not found on actor ${actor.name}.`);
      return;
    }
    const savePath = `system.abilities.${saveKey}.bonuses.save`;
    const currentBonus = actor.system.abilities[saveKey].bonuses?.save || 0;
    const newBonus = currentBonus + value;
    await actor.update({ [savePath]: newBonus });
  },

  /**
   * Modifies a skill check bonus for the actor.
   * @param {Actor} actor - The actor to modify.
   * @param {Object} params - Parameters for the method.
   * @param {string} params.skill - The skill to modify.
   * @param {number} params.value - The bonus value to add.
   */
  MODIFY_SKILL_CHECK: async (actor, params) => {
    const { skill, value } = params;
    if (!actor.system.skills[skill]) {
      console.error(`Skill ${skill} not found on actor ${actor.name}.`);
      return;
    }
    const skillPath = `system.skills.${skill}.bonuses.check`;
    const currentBonus = actor.system.skills[skill].bonuses?.check || 0;
    const newBonus = currentBonus + value;
    await actor.update({ [skillPath]: newBonus });
  },

  /**
   * Modifies the actor's spell save DC.
   * @param {Actor} actor - The actor to modify.
   * @param {Object} params - Parameters for the method.
   * @param {number} params.value - The value to add to the spell save DC.
   */
  MODIFY_SPELL_DC: async (actor, params) => {
    const { value } = params;
    if (typeof value !== 'number') {
      console.error("Invalid value provided to MODIFY_SPELL_DC method.");
      return;
    }
    const currentDC = actor.system.attributes.spelldc || 0;
    const newDC = currentDC + value;
    await actor.update({ "system.attributes.spelldc": newDC });
  },

  /**
   * Modifies the actor's proficiency bonus.
   * @param {Actor} actor - The actor to modify.
   * @param {Object} params - Parameters for the method.
   * @param {number} params.value - The value to add to the proficiency bonus.
   */
  MODIFY_PROFICIENCY_BONUS: async (actor, params) => {
    const { value } = params;
    if (typeof value !== 'number') {
      console.error("Invalid value provided to MODIFY_PROFICIENCY_BONUS method.");
      return;
    }
    const currentProf = actor.system.attributes.prof || 0;
    const newProf = currentProf + value;
    await actor.update({ "system.attributes.prof": newProf });
  },

  /**
   * Applies exhaustion to the actor.
   * @param {Actor} actor - The actor to modify.
   * @param {Object} params - Parameters for the method.
   * @param {number} params.level - The exhaustion level to add.
   */
  APPLY_EXHAUSTION: async (actor, params) => {
    const { level } = params;
    if (typeof level !== 'number') {
      console.error("Invalid level provided to APPLY_EXHAUSTION method.");
      return;
    }
    const currentExhaustion = actor.system.attributes.exhaustion || 0;
    const newExhaustion = currentExhaustion + level;
    await actor.update({ "system.attributes.exhaustion": newExhaustion });
  },

  /**
   * Removes exhaustion from the actor.
   * @param {Actor} actor - The actor to modify.
   * @param {Object} params - Parameters for the method.
   * @param {number} params.level - The exhaustion level to remove.
   */
  REMOVE_EXHAUSTION: async (actor, params) => {
    const { level } = params;
    if (typeof level !== 'number') {
      console.error("Invalid level provided to REMOVE_EXHAUSTION method.");
      return;
    }
    const currentExhaustion = actor.system.attributes.exhaustion || 0;
    const newExhaustion = Math.max(currentExhaustion - level, 0);
    await actor.update({ "system.attributes.exhaustion": newExhaustion });
  },

  /**
   * Applies damage resistance to the actor.
   * @param {Actor} actor - The actor to modify.
   * @param {Object} params - Parameters for the method.
   * @param {string} params.resistance - The type of damage resistance to apply.
   */
  APPLY_DAMAGE_RESISTANCE: async (actor, params) => {
    const { resistance } = params;
    if (!resistance) {
      console.error("No resistance type provided to APPLY_DAMAGE_RESISTANCE method.");
      return;
    }
    const currentResistances = actor.system.traits.dr.value || [];
    if (!currentResistances.includes(resistance)) {
      const newResistances = [...currentResistances, resistance];
      await actor.update({ "system.traits.dr.value": newResistances });
    }
  },

  /**
   * Applies damage vulnerability to the actor.
   * @param {Actor} actor - The actor to modify.
   * @param {Object} params - Parameters for the method.
   * @param {string} params.vulnerability - The type of damage vulnerability to apply.
   */
  APPLY_DAMAGE_VULNERABILITY: async (actor, params) => {
    const { vulnerability } = params;
    if (!vulnerability) {
      console.error("No vulnerability type provided to APPLY_DAMAGE_VULNERABILITY method.");
      return;
    }
    const currentVulnerabilities = actor.system.traits.dv.value || [];
    if (!currentVulnerabilities.includes(vulnerability)) {
      const newVulnerabilities = [...currentVulnerabilities, vulnerability];
      await actor.update({ "system.traits.dv.value": newVulnerabilities });
    }
  },

  /**
   * Applies damage immunity to the actor.
   * @param {Actor} actor - The actor to modify.
   * @param {Object} params - Parameters for the method.
   * @param {string} params.immunity - The type of damage immunity to apply.
   */
  APPLY_DAMAGE_IMMUNITY: async (actor, params) => {
    const { immunity } = params;
    if (!immunity) {
      console.error("No immunity type provided to APPLY_DAMAGE_IMMUNITY method.");
      return;
    }
    const currentImmunities = actor.system.traits.di.value || [];
    if (!currentImmunities.includes(immunity)) {
      const newImmunities = [...currentImmunities, immunity];
      await actor.update({ "system.traits.di.value": newImmunities });
    }
  },

  /**
   * Applies a condition immunity to the actor.
   * @param {Actor} actor - The actor to modify.
   * @param {Object} params - Parameters for the method.
   * @param {string} params.condition - The condition to make the actor immune to.
   */
  APPLY_CONDITION_IMMUNITY: async (actor, params) => {
    const { condition } = params;
    if (!condition) {
      console.error("No condition provided to APPLY_CONDITION_IMMUNITY method.");
      return;
    }
    const currentImmunities = actor.system.traits.ci.value || [];
    if (!currentImmunities.includes(condition)) {
      const newImmunities = [...currentImmunities, condition];
      await actor.update({ "system.traits.ci.value": newImmunities });
    }
  },

  /**
   * Modifies the actor's initiative advantage setting.
   * @param {Actor} actor - The actor to modify.
   * @param {Object} params - Parameters for the method.
   * @param {boolean} params.value - True to grant advantage, false otherwise.
   */
  MODIFY_INITIATIVE_ADVANTAGE: async (actor, params) => {
    const { value } = params;
    if (typeof value !== 'boolean') {
      console.error("Invalid value provided to MODIFY_INITIATIVE_ADVANTAGE method.");
      return;
    }
    await actor.update({ "system.attributes.init.adv": value });
  },

  /**
   * Modifies the actor's death save bonus.
   * @param {Actor} actor - The actor to modify.
   * @param {Object} params - Parameters for the method.
   * @param {number} params.value - The bonus value to add.
   */
  MODIFY_DEATH_SAVE_BONUSES: async (actor, params) => {
    const { value } = params;
    if (typeof value !== 'number') {
      console.error("Invalid value provided to MODIFY_DEATH_SAVE_BONUSES method.");
      return;
    }
    const currentBonus = actor.system.bonuses?.death?.value || 0;
    const newBonus = currentBonus + value;
    await actor.update({ "system.bonuses.death.value": newBonus });
  },

  /**
   * Modifies the actor's spell slots temporarily.
   * @param {Actor} actor - The actor to modify.
   * @param {Object} params - Parameters for the method.
   * @param {number} params.level - The spell level to modify.
   * @param {number} params.count - The number of slots to add or remove.
   */
  MODIFY_SPELL_SLOTS_TEMPORARILY: async (actor, params) => {
    const { level, count } = params;
    if (typeof level !== 'number' || typeof count !== 'number') {
      console.error("Invalid level or count provided to MODIFY_SPELL_SLOTS_TEMPORARILY method.");
      return;
    }
    const spellSlotKey = `spell${level}`;
    const currentOverride = actor.system.spells[spellSlotKey]?.override || 0;
    const newOverride = currentOverride + count;
    await actor.update({ [`system.spells.${spellSlotKey}.override`]: newOverride });
  },

  /**
   * Modifies the actor's resource recovery settings.
   * @param {Actor} actor - The actor to modify.
   * @param {Object} params - Parameters for the method.
   * @param {string} params.resource - The resource to modify.
   * @param {number} params.value - The value to set for recovery.
   */
  MODIFY_RESOURCE_RECOVERY: async (actor, params) => {
    const { resource, value } = params;
    if (!resource || typeof value !== 'number') {
      console.error("Invalid resource or value provided to MODIFY_RESOURCE_RECOVERY method.");
      return;
    }
    const recoveryPath = `system.resources.${resource}.recovery`;
    await actor.update({ [recoveryPath]: value });
  },

  /**
   * Modifies the actor's spell preparation count.
   * @param {Actor} actor - The actor to modify.
   * @param {Object} params - Parameters for the method.
   * @param {number} params.value - The number of additional spells the actor can prepare.
   */
  MODIFY_SPELL_PREPARATION: async (actor, params) => {
    const { value } = params;
    if (typeof value !== 'number') {
      console.error("Invalid value provided to MODIFY_SPELL_PREPARATION method.");
      return;
    }
    const currentPrep = actor.system.attributes.spellprep?.max || 0;
    const newPrep = currentPrep + value;
    await actor.update({ "system.attributes.spellprep.max": newPrep });
  },

  /**
   * Calculates the distance between two tokens.
   * @param {Token|TokenDocument|string} token1 - The first token.
   * @param {Token|TokenDocument|string} token2 - The second token.
   * @returns {number|null} The distance in grid units, or null if calculation fails.
   */
  CALCULATE_TOKEN_DISTANCE: (token1, token2) => {
    token1 = EFFECT_METHODS.RESOLVE_TOKEN(token1);
    token2 = EFFECT_METHODS.RESOLVE_TOKEN(token2);
    if (!token1 || !token2) {
      console.error("One or both tokens could not be resolved.");
      return null;
    }
    const ray = new Ray(token1.center, token2.center);
    const distance = canvas.grid.measureDistances([{ ray }], { gridSpaces: true })[0];
    return distance;
  },

  /**
   * Resolves a token reference to a Token object.
   * @param {Token|TokenDocument|string} token - The token reference.
   * @returns {Token|null} The Token object, or null if not found.
   */
  RESOLVE_TOKEN: (token) => {
    if (typeof token === "string") {
      return canvas.tokens.get(token);
    } else if (token instanceof TokenDocument) {
      return token.object;
    } else if (token instanceof Token) {
      return token;
    } else {
      return null;
    }
  },

  /**
   * Gets nearby tokens within a certain range.
   * @param {Actor} actor - The actor whose position is the reference.
   * @param {Object} params - Parameters for the method.
   * @param {number} params.range - The range to search within.
   * @returns {Array} An array of Token objects within the specified range.
   */
  GET_NEARBY_TOKENS: (actor, params) => {
    const { range } = params;
    if (typeof range !== 'number') {
      console.error("Invalid range provided to GET_NEARBY_TOKENS method.");
      return [];
    }
    const originToken = actor.getActiveTokens()[0];
    if (!originToken) {
      console.error(`No active token found for actor ${actor.name}.`);
      return [];
    }
    const tokens = canvas.tokens.placeables.filter(t => {
      if (t === originToken) return false;
      const distance = EFFECT_METHODS.CALCULATE_TOKEN_DISTANCE(originToken, t);
      return distance !== null && distance <= range;
    });
    return tokens;
  },

  /**
   * Applies an area effect to nearby tokens.
   * @param {Actor} actor - The actor from which the effect originates.
   * @param {Object} params - Parameters for the method.
   * @param {number} params.range - The range of the area effect.
   * @param {Object} params.effect - The effect to apply.
   */
  APPLY_AREA_EFFECT: async (actor, params) => {
    const { range, effect } = params;
    if (!effect || typeof effect.method !== 'string') {
      console.error("Invalid effect provided to APPLY_AREA_EFFECT method.");
      return;
    }
    const tokens = EFFECT_METHODS.GET_NEARBY_TOKENS(actor, { range });
    for (let token of tokens) {
      const methodName = effect.method;
      const methodParams = effect.params || {};
      if (typeof EFFECT_METHODS[methodName] === 'function') {
        await EFFECT_METHODS[methodName](token.actor, methodParams);
      } else {
        console.error(`Method ${methodName} not found in EFFECT_METHODS.`);
      }
    }
  }
};

export default EFFECT_METHODS;
