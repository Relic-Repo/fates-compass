// Fate's Compass Items

const COMPASS_ITEMS = {
    LONGSWORD: {
        name: "Longsword",
        type: "weapon",
        img: "icons/weapons/swords/sword-longsword-steel.webp",
        system: {
            description: { value: "A versatile slashing weapon" },
            weaponType: "martial",
            damage: { parts: [["1d8", "slashing"]] },
            properties: { ver: true },
            weight: 3,
            equipped: false
        }
    },
    HEALING_POTION: {
        name: "Potion of Healing",
        type: "consumable",
        img: "icons/consumables/potions/potion-bottle-round-corked-red.webp",
        system: {
            description: { value: "Heals 2d4+2 hit points when consumed" },
            consumableType: "potion",
            uses: { value: 1, max: 1, per: "charges", autoDestroy: true },
            weight: 0.5,
            actionType: "heal",
            activation: { type: "action", cost: 1 }
        }
    },
    CHAIN_MAIL: {
        name: "Chain Mail",
        type: "equipment",
        img: "icons/equipment/chest/breastplate-layered-steel.webp",
        system: {
            description: { value: "Heavy armor that provides good protection" },
            armor: { value: 16 },
            strength: 13,
            stealth: true,
            weight: 55,
            equipped: false,
            armorType: "heavy"
        }
    },
    FIREBALL_SCROLL: {
        name: "Scroll of Fireball",
        type: "consumable",
        img: "icons/magic/fire/explosion-fireball-large-red-yellow.webp",
        system: {
            description: { value: "A scroll containing the Fireball spell" },
            consumableType: "scroll",
            uses: { value: 1, max: 1, per: "charges", autoDestroy: true },
            spell: { level: 3, id: "fireball" },
            weight: 0.1,
            actionType: "spell",
            activation: { type: "action", cost: 1 }
        }
    },
    THIEVES_TOOLS: {
        name: "Thieves' Tools",
        type: "tool",
        img: "icons/tools/hand/lockpick-metal.webp",
        system: {
            description: { value: "A set of tools for picking locks and disarming traps" },
            toolType: "thievesTools",
            proficient: 0,
            weight: 1,
            actionType: "tool"
        }
    },
    GOLD_COINS: {
        name: "Gold Coins",
        type: "loot",
        img: "icons/commodities/currency/coin-inset-mint-gold.webp",
        system: {
            description: { value: "A pile of gold coins" },
            quantity: 100,
            weight: 2,
            price: { value: 1, denomination: "gp" }
        }
    },
    LIGHT_CROSSBOW: {
        name: "Light Crossbow",
        type: "weapon",
        img: "icons/weapons/crossbows/crossbow-light-brown.webp",
        system: {
            description: { value: "A ranged weapon that fires bolts" },
            weaponType: "simple",
            damage: { parts: [["1d8", "piercing"]] },
            properties: { amm: true, loa: true, two: true },
            range: { value: 80, long: 320, units: "ft" },
            weight: 5,
            equipped: false
        }
    },
    SPELLBOOK: {
        name: "Spellbook",
        type: "backpack",
        img: "icons/magic/books/book-worn-brown-purple.webp",
        system: {
            description: { value: "A book for recording and preparing spells" },
            capacity: { type: "weight", value: 3, weightless: false },
            weight: 3,
            equipped: false
        }
    },
    HOLY_SYMBOL: {
        name: "Holy Symbol",
        type: "equipment",
        img: "icons/sundries/misc/holy-symbol-gold.webp",
        system: {
            description: { value: "A religious symbol used as a spellcasting focus" },
            weight: 1,
            equipped: false,
            focus: true
        }
    },
    BEDROLL: {
        name: "Bedroll",
        type: "equipment",
        img: "icons/environment/wilderness/camp-bedroll-brown.webp",
        system: {
            description: { value: "A portable bedding for resting outdoors" },
            weight: 7,
            equipped: false
        }
    },
    KIP_UP: {
        name: "Kip-Up",
        type: "feat",
        img: "systems/dnd5e/icons/svg/items/feature.svg",
        flags: {
             dae: {
                macro: {
                    command:    `const lastArg = args[args.length - 1];
                                const actor = lastArg.actor;
                                if (!actor) { ui.notifications.warn("No valid actor found.");
                                    return;
                                }
                                const proneEffect = actor.effects.find(e => e.label === "Prone");
                                if (proneEffect) {
                                    await proneEffect.delete();
                                    ui.notifications.info("Prone condition removed.");
                                } else {
                                    ui.notifications.warn("The actor is not prone.");
                                }`
                }
            },
            "midi-qol": {
                effectCondition: "",
                itemCondition: "",
                onUseMacroName: "[postActiveEffects]ItemMacro",
                rollAttackPerTarget: "default"
            }
        },
        system: {
            ability: "",
            actionType: "util",
            activation: {
                condition: "",
                cost: null,
                type: "special"
            },
            chatFlavor: "",
            description: {
                value: "While prone, the act of standing only requires 10 feet of your available movement."
            },
            type: "feat"
        }
    },
    EVASIVE_TUMBLE: {
        name: "Evasive Tumble",
        type: "feat",
        img: "systems/dnd5e/icons/svg/items/feature.svg",
        system: {
            ability: "",
            actionType: "util",
            activation: {
                condition: "",
                cost: null,
                type: "special"
            },
            chatFlavor: "",
            description: {
                value: "Moving through another creature's space doesn't count as difficult terrain. You gain advantage when using Acrobatics to tumble through creatures larger than you. Fall damage reduced by 20ft."
            },
            type: "feat"
        }
    },
    STABILIZE_ANIMAL: {
        name: "Stabilize Animal",
        type: "feat",
        img: "systems/dnd5e/icons/svg/items/feature.svg",
        system: {
            description: {
                value: `<div><div><p>Stabilize a beast that has been reduced to 0 hp, calming and soothing the animal under your care, the beast then regains 1 hit point. Additionally, you have advantage on Animal Handling checks related to approaching or pacifying frightened or injured beasts.</p></div></div>`
            },
            activation: {
                type: "action",
                cost: 1,
                condition: ""
            },
            range: {
                value: null,
                long: null,
                units: "touch"
            },
            duration: {
                value: null,
                units: "inst"
            },
            target: {
                value: 1,
                type: "creature",
                units: ""
            },
            actionType: "heal",
            damage: {
                parts: [["1", "healing"]],
                versatile: ""
            }
        },
    },
    ANIMAL_FRIENDSHIP: {
        name: "Animal Friendship",
        type: "spell",
        img: "icons/magic/nature/wolf-paw-glow-teal-blue.webp",
        system: {
            description: {
                value: "<p>This spell lets you convince a beast that you mean it no harm. Choose a beast that you can see within range. It must see and hear you. If the beast's Intelligence is 4 or higher, the spell fails. Otherwise, the beast must succeed on a Wisdom saving throw or be charmed by you for the spell's duration. If you or one of your companions harms the target, the spell ends.</p><p><strong>At Higher Levels.</strong> When you cast this spell using a spell slot of 2nd level or higher, you can affect one additional beast for each slot level above 1st.</p>",
            },
            source: {
                custom: "",
                book: "SRD 5.1",
                page: "",
                license: "CC-BY-4.0"
            },
            activation: {
                type: "action",
                cost: 1,
                condition: ""
            },
            duration: {
                value: "24",
                units: "hour"
            },
            cover: null,
            target: {
                value: "1",
                width: null,
                units: "",
                type: "creature",
                prompt: true
            },
            range: {
                value: 30,
                long: null,
                units: "ft"
            },
            uses: {
                value: 1,
                max: "1",
                per: "lr",
                recovery: "",
                prompt: true
            },
            consume: {
                type: "",
                target: null,
                amount: null,
                scale: false
            },
            actionType: "save",
            save: {
                ability: "wis",
                dc: null,
                scaling: "spell"
            },
            level: 1,
            school: "enc",
            materials: {
                value: "A morsel of food.",
                consumed: false,
                cost: 0,
                supply: 0
            },
            preparation: {
                mode: "innate",
                prepared: true
            },
            scaling: {
                mode: "level",
                formula: ""
            },
            properties: {
                vocal: true,
                somatic: false,
                material: false
            }
        },
        flags: {
            'fates-compass': { sourceActorId: '', module: 'fates-compass' } 
        },
        effects: [],
    },
    ANIMAL_GUARDIAN: {
        name: "Animal Guardian",
        type: "feat",
        img: "systems/dnd5e/icons/svg/items/feature.svg",
        system: {
            description: {
                value: "<div><div><p>Animals thrive with your nurturing care. By spending an hour or more training with a friendly beast, which can be included in a short or long rest, you can grant it temporary hit points equal to 3 times your level plus your Wisdom modifier until its next rest. Additionally, the beast gains advantage on its first saving throw until its next rest. This benefit can only be given to a creature once per rest.</p></div></div>",
                chat: ""
            },
            activation: {
                type: "hour",
                cost: 1,
                condition: ""
            },
            duration: {
                value: "",
                units: "inst"
            },
            target: {
                value: "1",
                units: "",
                type: "creature",
                prompt: true
            },
            range: {
                value: null,
                units: "touch"
            },
            uses: {
                value: 1,
                max: 1,
                per: "lr"
            },
            actionType: "heal",
            damage: {
                parts: [
                    ["3 * @details.level + @abilities.wis.mod", "temphp"]
                ]
            },
            effects: [
                {
                    name: "Animal Guardian",
                    changes: [
                        {
                            key: "flags.midi-qol.advantage.ability.save.all",
                            mode: 0,
                            value: "1",
                            priority: 20
                        }
                    ],
                    duration: {
                        specialDuration: ["isSave"]
                    },
                    icon: "systems/dnd5e/icons/svg/items/feature.svg",
                    label: "Animal Guardian (Advantage on First Save)"
                }
            ]
        },
        flags: {
            'fates-compass': { sourceActorId: '', module: 'fates-compass' }
        }
    },
    BEAST_MASTER_COMMAND: {
        name: "Beast Master Command",
        type: "feat",
        img: "systems/dnd5e/icons/svg/items/feature.svg",
        system: {
            description: {
                value: "<div><div><p>Give commands to trained animals using a bonus action.</p></div></div>",
                chat: ""
            },
            activation: {
                type: "bonus",
                cost: 1,
                condition: ""
            },
            range: {
                value: 60,
                long: 300,
                units: "ft"
            },
            uses: null,
            target: {
                value: "",
                type: "creature",
                prompt: true
            },
            actionType: "",
        },
        flags: {
            'fates-compass': { sourceActorId: '', module: 'fates-compass' }
        }
    },

    BOND_KINDRED: {
        name: "Bond Kindred",
        type: "feat",
        img: "modules/fates-compass/image/bondKindred.webp",
        system: {
            description: {
                value: "<p>You can designate one trained creature as your <strong>Kindred</strong>, increasing its maximum hit points by twice your proficiency bonus. While it remains your Kindred, it is under the effect of <strong>Death Ward</strong> once per long rest, provided you are conscious. You can only have one Kindred at a time, and it acts immediately after you without needing a command.</p>",
                chat: ""
            },
            activation: {
                type: "action",
                cost: null,
                condition: ""
            },
            uses: {
                value: 1,
                max: "1",
                per: "lr"
            },
            effects: [
                {
                    name: "Kindred",
                    origin: "Item.xvFvGZS9tpD21f7w",
                    changes: [
                        { key: "system.attributes.hp.bonuses.overall", mode: 2, value: "", priority: 20 }
                    ],
                    flags: { 'fates-compass': { sourceActorId: '', module: 'fates-compass' } },
                    duration: { specialDuration: ["longRest"] },
                    icon: "modules/fates-compass/image/kindred.webp"
                },
                {
                    name: "Death Ward",
                    origin: "Item.xvFvGZS9tpD21f7w",
                    flags: { 'fates-compass': { sourceActorId: '', module: 'fates-compass' } },
                    duration: { specialDuration: ["longRest"] },
                    icon: "icons/magic/control/fear-fright-monster-purple-blue.webp"
                }
            ]
        },
        flags: {
            'fates-compass': { sourceActorId: '', module: 'fates-compass' }
        }
    },
    SPELL_RECALL: {
        name: "Spell Recall",
        type: "feat",
        img: "systems/dnd5e/icons/svg/items/feature.svg",
        system: {
            description: {
                value: "<div><div><p><span style=\"font-family:Times New Roman\">Once per long rest, you can recall a spell you have already cast, allowing you to cast it again without expending a spell slot.</span></p></div></div>",
                chat: ""
            },
            source: {
                custom: ""
            },
            activation: {
                type: "special",
                cost: null,
                condition: ""
            },
            duration: {
                value: "",
                units: ""
            },
            target: {
                value: "",
                width: null,
                units: "self",
                type: "self",
                prompt: true
            },
            range: {
                value: null,
                long: null,
                units: "self"
            },
            uses: {
                value: null,
                max: "",
                per: null,
                recovery: "",
                prompt: true
            },
            ability: null,
            actionType: "",
            save: {
                ability: "",
                dc: null,
                scaling: "spell"
            }
        },
        effects: [],
        flags: {
            "fates-compass": { sourceActorId: '', module: 'fates-compass' }
        }
    },
    SECRETS_FROM_BEYOND: {
        name: "Secrets from Beyond",
        type: "feat",
        img: "systems/dnd5e/icons/svg/items/feature.svg",
        system: {
            description: {
                value: `<p>You have detailed knowledge of extraplanar creatures.</p>
                        <p><strong>Creature Knowledge:</strong> You can recall additional details about aberrations, celestials, elementals, fey, or fiends, such as their common attacks, abilities, and whether they are dangerous to a party of your level.</p>
                        <p><strong>Portal Identification:</strong> After studying an open portal for one minute, you can determine whether it leads to another plane and, if known, which plane it leads to.</p>`,
            },
            activation: {
                type: "special",
                cost: null,
                condition: "",
            },
            uses: {
                value: 1,
                max: 1,
                per: "longRest",
            },
            consume: {
                type: "",
                target: null,
                amount: null,
            },
        },
        flags: {
            'fates-compass': {
                module: 'fates-compass',
                sourceActorId: '',
            },
        },
    },
    JUMP: {
        name: "Jump",
        type: "feat",
        img: "icons/skills/movement/feet-winged-boots-brown.webp",
        system: {
            description: {
                value: "Perform a long jump or high jump without a running start."
            },
            activation: {
                type: "special",
                cost: null,
                condition: ""
            },
            target: {
                type: "self"
            }
        },
        flags: {
            "fates-compass": { sourceActorId: '', module: 'fates-compass' }
        }
    },
    CHOKEHOLD: {
        name: "Chokehold",
        type: "feat",
        img: "icons/skills/melee/hand-grip-white-red.webp",
        system: {
            description: {
                value: "Attempt to restrain a grappled creature."
            },
            activation: {
                type: "action",
                cost: 1
            },
            target: {
                type: "creature",
                value: 1
            },
            range: {
                value: null,
                units: "touch"
            },
            actionType: "abil"
        },
        flags: {
            "midi-qol": {
                onUseMacroName: "ItemMacro"
            },
            "dnd5e": {
                itemMacro: {
                    command: `
                        // Ensure there's only one target
                        if (!game.user.targets.size || game.user.targets.size > 1) {
                            ui.notifications.warn("Please target exactly one creature for Chokehold.");
                            return;
                        }
    
                        const target = game.user.targets.first().actor;
                        const actor = this.actor;
    
                        // Get the relevant skills
                        const athleticsRoll = await actor.rollSkill("ath");
                        const targetRoll = await target.rollAbilitySave(target.system.abilities.str.value > target.system.abilities.dex.value ? "str" : "dex");
    
                        // Compare the rolls
                        const success = athleticsRoll.total > targetRoll.total;
    
                        // Create the result message
                        let content = \`<h2>Chokehold Attempt</h2>
                        <p>\${actor.name}: \${athleticsRoll.total} (Athletics)</p>
                        <p>\${target.name}: \${targetRoll.total} (Strength or Dexterity)</p>
                        <p>\${success ? "Success! The target is restrained." : "Failure. The target resists the chokehold."}</p>\`;
    
                        // Send the message
                        ChatMessage.create({
                            content: content,
                            speaker: ChatMessage.getSpeaker({actor: actor})
                        });
    
                        // If successful, apply effects
                        if (success) {
                            // Set actor's speed to 0
                            await actor.update({"system.attributes.movement.walk": 0});
    
                            // Apply the Restrained condition to the target
                            const restrainedEffect = {
                                label: "Restrained",
                                icon: "icons/svg/net.svg",
                                changes: [],
                                flags: {
                                    core: {
                                        statusId: "restrained"
                                    }
                                }
                            };
                            await target.createEmbeddedDocuments("ActiveEffect", [restrainedEffect]);
                        }
                    `
                }
            }
        }
    }
    
};

export default COMPASS_ITEMS;


