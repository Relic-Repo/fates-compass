// src/node-skills-data.js for Fate's Compass

import { SKILL_TIERS, SKILL_TYPES } from './compassConfig.js';

const nodeSkillsData = {
  skills: {
    [SKILL_TYPES.ACROBATICS]: {
      displayName: "Acrobatics",
      branches: [
        {
          nodes: [
            { 
              name: "Acrobatics", 
              tier: SKILL_TIERS.TIER_1, 
              id: "acrobatics", 
              top: 20,
              left: 50,
              connections: [
                { to: "kip-up", direction: 90, length: 15 }
              ]
            }
          ]
        },
        {
          nodes: [            
            { 
              name: "Kip-Up", 
              tier: SKILL_TIERS.TIER_2, 
              id: "kip-up", 
              top: 30, 
              left: 50,
              connections: [
                { to: "fleetfoot", direction: 35, length: 30},
                { to: "evasive-tumble", direction: 90, length: 15 },
                { to: "slippery", direction: 145, length: 30 }
              ]
            }
          ]
        },
        {
          nodes: [
            { 
              name: "Fleetfoot", 
              tier: SKILL_TIERS.TIER_3_1, 
              id: "fleetfoot", 
              top: 40, 
              left: 27,
              connections: [
                { to: "withdraw", direction: 90, length: 15 }
              ]
            },
            { 
              name: "Evasive Tumble", 
              tier: SKILL_TIERS.TIER_3_2, 
              id: "evasive-tumble", 
              top: 40, 
              left: 50,
              connections: [
                { to: "slip-away", direction: 90, length: 15 }
              ]
            },
            { 
              name: "Slippery", 
              tier: SKILL_TIERS.TIER_3_3, 
              id: "slippery", 
              top: 40, 
              left: 73,
              connections: [
                { to: "escape-artist", direction: 90, length: 15 }
              ]
            }
          ]
        },
        {
          nodes: [
            { 
              name: "Withdraw", 
              tier: SKILL_TIERS.TIER_4_1, 
              id: "withdraw", 
              top: 50, 
              left: 27,
              connections: [
                { to: "superior-acrobatics", direction: 35, length: 30 }
              ]
            },
            { 
              name: "Slip Away", 
              tier: SKILL_TIERS.TIER_4_2, 
              id: "slip-away", 
              top: 50, 
              left: 50,
              connections: [
                { to: "superior-acrobatics", direction: 90, length: 15 }
              ]
            },
            { 
              name: "Escape Artist", 
              tier: SKILL_TIERS.TIER_4_3, 
              id: "escape-artist", 
              top: 50, 
              left: 73,
              connections: [
                { to: "superior-acrobatics", direction: 145, length: 30 }
              ]
            }
          ]
        },
        {
          nodes: [
            {
            name: "Superior Acrobatics",
            tier: SKILL_TIERS.TIER_5,
            id: "superior-acrobatics",
            top: 60,
            left: 50,
            connections: [
              { to: "wall-runner", direction: 90, length: 15}
            ]
            }
          ]
        },
        {
          nodes: [
            { 
              name: "Wall Runner", 
              tier: SKILL_TIERS.TIER_6, 
              id: "wall-runner", 
              top: 70, 
              left: 50 
            }
          ]
        }
      ],
      details: {
        [SKILL_TIERS.TIER_1]: {
          name: "Acrobatics",
          id: "acrobatics",
          pointCost: 1,
          prerequisites: ["None"],
          description: "A proficiency in acrobatics represent deft control over your body. Whether you are sliding across a sheet of ice, balancing on a tightrope, or trying to stay upright amid the fury of the raging sea, your proficiency in acrobatics helps you stay on your toes. Continuing to improve your skill lets you learn to tumble your way through danger, evade aimed blows and reckless volleys, stride through all manner of terrain and accomplish gravity-defying feats of dexterity.",
          featureAdded: "Proficiency in Acrobatics"
        },
        [SKILL_TIERS.TIER_2]: {
          name: "Kip-Up",
          id: "kip-up",
          pointCost: 1,
          prerequisites: ["Acrobatics"],
          description: "While prone, the act of standing only requires 10 feet of your available movement.",
          featureAdded: "Kip-Up"
        },
        [SKILL_TIERS.TIER_3_1]: {
          name: "Fleetfoot",
          id: "fleetfoot",
          pointCost: 1,
          prerequisites: ["Kip-Up"],
          description: "Your swift stride allows you to navigate through challenging terrain with care. Your movement speed increases by 10 feet. When you use the Dash action, difficult terrain doesn't require extra movement for this turn.",
          featureAdded: "None"
        },
        [SKILL_TIERS.TIER_3_2]: {
          name: "Evasive Tumble",
          id: "evasive-tumble",
          pointCost: 1,
          prerequisites: ["Kip-Up"],
          description: "Moving through another creature's space doesn't count as difficult terrain. You gain advantage when using Acrobatics to tumble through creatures larger than you. Fall damage reduced by 20ft.",
          featureAdded: "Evasive Tumble"
        },
        [SKILL_TIERS.TIER_3_3]: {
          name: "Slippery",
          id: "slippery",
          pointCost: 1,
          prerequisites: ["Kip-Up"],
          description: "You have advantage on saving throws made to avoid or resist traps and you have resistance to the damage dealt by traps. Whenever you succeed on a Dexterity saving throw, you can use your reaction to move up to half your movement.",
          featureAdded: "None"
        },
        [SKILL_TIERS.TIER_4_1]: {
          name: "Withdraw",
          id: "withdraw",
          pointCost: 1,
          prerequisites: ["Fleetfoot"],
          description: "Upon hitting a creature with an attack, you avoid provoking opportunity attacks from that creature for the rest of the turn.",
          featureAdded: "None"
        },
        [SKILL_TIERS.TIER_4_2]: {
          name: "Slip Away",
          id: "slip-away",
          pointCost: 1,
          prerequisites: ["Evasive Tumble"],
          description: "When you perform the Dodge action, you can promptly move 5 feet in any direction without inciting opportunity attacks, along with your standard movement.",
          featureAdded: "None"
        },
        [SKILL_TIERS.TIER_4_3]: {
          name: "Escape Artist",
          id: "escape-artist",
          pointCost: 1,
          prerequisites: ["Slippery"],
          description: "During your turn, you can choose to relinquish all of your movement in order to automatically escape from nonmagical restraints, including manacles or a creature's grapple.",
          featureAdded: "None"
        },
        [SKILL_TIERS.TIER_5]: {
          name: "Superior Acrobatics",
          id: "superior-acrobatics",
          pointCost: 1,
          prerequisites: ["Withdraw", "Slip Away", "Escape Artist"],
          description: "You gain expertise in the Acrobatics skill.",
          featureAdded: "None"
        },
        [SKILL_TIERS.TIER_6]: {
          name: "Wall Runner",
          id: "wall-runner",
          pointCost: 1,
          prerequisites: ["Superior Acrobatics"],
          description: "While wearing light or no armor, taking the Dash action allows you to run along vertical surfaces, the edges of thin barriers, or leap between outcroppings as if on regular terrain. If you halt while running across a wall, you will start to fall. Running straight up a wall is treated as difficult terrain.",
          featureAdded: "None"
        }
      }
    },
    [SKILL_TYPES.ANIMAL_HANDLING]: {
      displayName: "Animal Handling",
      branches: [
        {
          nodes: [
            { 
              name: "Animal Handling", 
              tier: SKILL_TIERS.TIER_1, 
              id: "animal-handling", 
              top: 20,
              left: 51,
              connections: [
                { to: "stabilize-animal", direction: 90, length: 15 }
              ]
            }
          ]
        },
        {
          nodes: [            
            { 
              name: "Stabilize Animal", 
              tier: SKILL_TIERS.TIER_2, 
              id: "stabilize-animal", 
              top: 30, 
              left: 51,
              connections: [
                { to: "train-animal", direction: 36, length: 31},
                { to: "mounted-combat", direction: 90, length: 15 },
                { to: "wild-friend", direction: 143, length: 31 }
              ]
            }
          ]
        },
        {
          nodes: [
            { 
              name: "Train Animal", 
              tier: SKILL_TIERS.TIER_3_1, 
              id: "train-animal", 
              top: 40, 
              left: 28,
              connections: [
                { to: "complex-training", direction: 90, length: 15 }
              ]
            },
            { 
              name: "Mounted Combat", 
              tier: SKILL_TIERS.TIER_3_2, 
              id: "mounted-combat", 
              top: 40, 
              left: 51,
              connections: [
                { to: "one-with-the-rider", direction: 90, length: 15 }
              ]
            },
            { 
              name: "Wild Friend", 
              tier: SKILL_TIERS.TIER_3_3, 
              id: "wild-friend", 
              top: 40, 
              left: 74,
              connections: [
                { to: "animal-guardian", direction: 90, length: 15 }
              ]
            }
          ]
        },
        {
          nodes: [
            { 
              name: "Complex Training", 
              tier: SKILL_TIERS.TIER_4_1, 
              id: "complex-training", 
              top: 50, 
              left: 28,
              connections: [
                { to: "superior-animal-handling", direction: 36, length: 31 }
              ]
            },
            { 
              name: "One with the Rider", 
              tier: SKILL_TIERS.TIER_4_2, 
              id: "one-with-the-rider", 
              top: 50, 
              left: 51,
              connections: [
                { to: "superior-animal-handling", direction: 90, length: 15 }
              ]
            },
            { 
              name: "Animal Guardian", 
              tier: SKILL_TIERS.TIER_4_3, 
              id: "animal-guardian", 
              top: 50, 
              left: 74,
              connections: [
                { to: "superior-animal-handling", direction: 143, length: 31 }
              ]
            }
          ]
        },
        {
          nodes: [
            {
            name: "Superior Animal Handling",
            tier: SKILL_TIERS.TIER_5,
            id: "superior-animal-handling",
            top: 60,
            left: 51,
            connections: [
              { to: "beast-master", direction: 90, length: 15}
            ]
            }
          ]
        },
        {
          nodes: [
            { 
              name: "Beast Master", 
              tier: SKILL_TIERS.TIER_6, 
              id: "beast-master", 
              top: 70, 
              left: 51 
            }
          ]
        }
      ],
      details: {
        [SKILL_TIERS.TIER_1]: {
          name: "Animal Handling",
          id: "animal-handling",
          pointCost: 1,
          prerequisites: ["None"],
          description: "A proficiency in animal handling represents a special camaraderie with, control over, and empathy for animals. Whether you're raising a puppy, riding a warhorse, or rescuing an injured eagle, both tame and wild beasts tend to respect, trust, and listen to you, and you know how to care for them. Continuing to hone your skill lets you learn to teach animals to communicate and follow your commands, masterfully control your mount in the heat of battle, and even stabilize or bolster them against harm.",
          featureAdded: "None"
        },
        [SKILL_TIERS.TIER_2]: {
          name: "Stabilize Animal",
          id: "stabilize-animal",
          pointCost: 1,
          prerequisites: ["Animal Handling"],
          description: "Stabilize a beast that has been reduced to 0 hp, calming and soothing the animal under your care, the beast then regains 1 hit point. Additionally, you have advantage on Animal Handling checks related to approaching or pacifying frightened or injuried beasts.",
          featureAdded: "Stabalize Animal"
        },
        [SKILL_TIERS.TIER_3_1]: {
          name: "Train Animal",
          id: "train-animal",
          pointCost: 1,
          prerequisites: ["Stabilize Animal"],
          description: "During a long rest, you have the opportunity to train a willing beast with a CR of 1/8 or less. Choose a simple command (such as jump, bite, charge, or fetch) and make a DC 10 Wisdom (Animal Handling) check. If you succeed, the beast will learn to follow the command. You can then use your action to shout the command, and the animal will attempt to follow it if it can hear you, but it won't obey commands that might injure or kill it. A beast can know a number of simple commands up to its Intelligence score.",
          featureAdded: "None"
        },
        [SKILL_TIERS.TIER_3_2]: {
          name: "Mounted Combat",
          id: "mounted-combat",
          pointCost: 1,
          prerequisites: ["Stabilize Animal"],
          description: "While mounted, you have advantage on both melee weapon and melee spell attacks against unmounted creatures smaller than your mount. If your mount faces an effect that requires a Dexterity saving throw to reduce damage by half, it takes no damage on a successful save and half damage on a failed save.",
          featureAdded: "None"
        },
        [SKILL_TIERS.TIER_3_3]: {
          name: "Wild Friend",
          id: "wild-friend",
          pointCost: 1,
          prerequisites: ["Stabilize Animal"],
          description: "Once per long rest, you can cast Animal Friendship without consumingspell slot or requiring material components, using your Wisdom score for spellcasting.",
          featureAdded: "Animal Friendship"
        },
        [SKILL_TIERS.TIER_4_1]: {
          name: "Complex Training",
          id: "complex-training",
          pointCost: 1,
          prerequisites: ["Train Animal"],
          description: "When training an animal, you can teach it more intricate commands. Choose a complex command (such as fetch a healing potion from my bag, watch for intruders, or follow the scent on this rag) and make a DC 15 Wisdom (Animal Handling) check. If you pass, the beast will learn to follow the command as if it were a simple one. Moreover, you can now train animals with a CR of 1/4 or less.",
          featureAdded: "None"
        },
        [SKILL_TIERS.TIER_4_2]: {
          name: "One with the Rider",
          id: "one-with-the-rider",
          pointCost: 1,
          prerequisites: ["Mounted Combat"],
          description: "Should a creature aim an attack or spell at your mount, you have the option to redirect it to target you instead. Moreover, when you or an ally cast a spell of 2nd level or lower that targets only you while you are on your mount, you can choose to have the spell also affect your mount.",
          featureAdded: "None"
        },
        [SKILL_TIERS.TIER_4_3]: {
          name: "Animal Guardian",
          id: "animal-guardian",
          pointCost: 1,
          prerequisites: ["Wild Friend"],
          description: "Animals thrive with your nurturing care. By spending an hour or more training with a friendly beast, which can be included in a short or long rest, you can grant it temporary hit points equal to 3 times your level plus your Wisdom modifier until it's next rest. Additionally, the beast gains advantage on its first saving throw until its next rest. This benefit can only be given to a creature once per rest.",
          featureAdded: "None"
        },
        [SKILL_TIERS.TIER_5]: {
          name: "Superior Animal Handling",
          id: "superior-animal-handling",
          pointCost: 1,
          prerequisites: ["Animal Guardian", "One with the Rider", "Complex Training"],
          description: "You gain expertise in the Animal Handling skill.",
          featureAdded: "None"
        },
        [SKILL_TIERS.TIER_6]: {
          name: "Beast Master",
          id: "beast-master",
          pointCost: 1,
          prerequisites: ["Superior Animal Handling"],
          description: "You are able to give commands to trained animals using a bonus action. Furthermore, you can select one creature you have trained to become your Kindred. The chosen creature's maximum hit points are increased by twice your proficiency bonus while it remains your Kindred. You can only have one Kindred at a time and you may only choose one Kindred per day. This Kindred is considered under the effect of Death Ward once per long rest, provided you are conscious. The Kindred can act right after you and requires no action to command.",
          featureAdded: "Bond Kindred, Beast Master Command"
        }
      }
    },
    [SKILL_TYPES.ARCANA]: {
      displayName: "Arcana",
      branches: [
        {
          nodes: [
            { 
              name: "Arcana", 
              tier: SKILL_TIERS.TIER_1, 
              id: "arcana", 
              top: 20,
              left: 51,
              connections: [
                { to: "magical-intuition", direction: 90, length: 15 }
              ]
            }
          ]
        },
        {
          nodes: [            
            { 
              name: "Magical Intuition", 
              tier: SKILL_TIERS.TIER_2, 
              id: "magical-intuition", 
              top: 30, 
              left: 51,
              connections: [
                { to: "ritual-caster", direction: 36, length: 31},
                { to: "secrets-from-beyond", direction: 90, length: 15 },
                { to: "mystic-arts", direction: 143, length: 31 }
              ]
            }
          ]
        },
        {
          nodes: [
            { 
              name: "Ritual Caster", 
              tier: SKILL_TIERS.TIER_3_1, 
              id: "ritual-caster", 
              top: 40, 
              left: 28,
              connections: [
                { to: "ritual-collector", direction: 90, length: 15 }
              ]
            },
            { 
              name: "Secrets from Beyond", 
              tier: SKILL_TIERS.TIER_3_2, 
              id: "secrets-from-beyond", 
              top: 40, 
              left: 51,
              connections: [
                { to: "planar-disruptor", direction: 90, length: 15 }
              ]
            },
            { 
              name: "Mystic Arts", 
              tier: SKILL_TIERS.TIER_3_3, 
              id: "mystic-arts", 
              top: 40, 
              left: 74,
              connections: [
                { to: "arcane-mastery", direction: 90, length: 15 }
              ]
            }
          ]
        },
        {
          nodes: [
            { 
              name: "Ritual Collector", 
              tier: SKILL_TIERS.TIER_4_1, 
              id: "ritual-collector", 
              top: 50, 
              left: 28,
              connections: [
                { to: "superior-arcana", direction: 36, length: 31 }
              ]
            },
            { 
              name: "Planar Disruptor", 
              tier: SKILL_TIERS.TIER_4_2, 
              id: "planar-disruptor", 
              top: 50, 
              left: 51,
              connections: [
                { to: "superior-arcana", direction: 90, length: 15 }
              ]
            },
            { 
              name: "Arcane Mastery", 
              tier: SKILL_TIERS.TIER_4_3, 
              id: "arcane-mastery", 
              top: 50, 
              left: 74,
              connections: [
                { to: "superior-arcana", direction: 143, length: 31 }
              ]
            }
          ]
        },
        {
          nodes: [
            {
            name: "Superior Arcana",
            tier: SKILL_TIERS.TIER_5,
            id: "superior-arcana",
            top: 60,
            left: 51,
            connections: [
              { to: "spell-recall", direction: 90, length: 15}
            ]
            }
          ]
        },
        {
          nodes: [
            { 
              name: "Spell Recall", 
              tier: SKILL_TIERS.TIER_6, 
              id: "spell-recall", 
              top: 70, 
              left: 51 
            }
          ]
        }
      ],
      details: {
        [SKILL_TIERS.TIER_1]: {
          name: "Arcana",
          id: "arcana",
          pointCost: 1,
          prerequisites: ["None"],
          description: "A proficiency in arcana represents deep understanding of magical theory and history. Whether you're identifying a spell, understanding a magical effect, or recalling lore about magical traditions, your proficiency in arcana helps you navigate the mysteries of the arcane. Continuing to improve your skill lets you delve into more advanced magical knowledge and practice.",
          featureAdded: "None"
        },
        [SKILL_TIERS.TIER_2]: {
          name: "Magical Intuition",
          id: "magical-intuition",
          pointCost: 1,
          prerequisites: ["Arcana"],
          description: "You can identify spells cast within your line of sight, and you have advantage on saving throws against spells.",
          featureAdded: "None"
        },
        [SKILL_TIERS.TIER_3_1]: {
          name: "Ritual Caster",
          id: "ritual-caster",
          pointCost: 1,
          prerequisites: ["Magical Intuition"],
          description: "Choose a class: bard, sorcerer, warlock, or wizard. You acquire a ritual book containing two 1st-level ritual spells of your choice from the chosen class and you learn to cast these spells as rituals. You must be holding the book to do so. Your spellcasting ability for these spells is the same as that of the chosen class.",
          featureAdded: "None"
        },
        [SKILL_TIERS.TIER_3_2]: {
          name: "Secrets from Beyond",
          id: "secrets-from-beyond",
          pointCost: 1,
          prerequisites: ["Magical Intuition"],
          description: "You have detailed knowledge of extraplanar creatures. When you make a check to recall information about an aberration, celestial, elemental, fey, or fiend, in addition to what you would normally learn, you can also determine the creature’s skills and abilities, common attacks, and if the creature is considered especially dangerous to a party of your level, though you don’t necessarily learn the specifics of the creature’s statistics. In addition, studying an opened portal for one minute lets you identify if it leads to another plane of existence and what that plane is, if you know it.",
          featureAdded: "None"
        },
        [SKILL_TIERS.TIER_3_3]: {
          name: "Mystic Arts",
          id: "mystic-arts",
          pointCost: 1,
          prerequisites: ["Magical Intuition"],
          description: "You can cast a cantrip you know without using any components.",
          featureAdded: "None"
        },
        [SKILL_TIERS.TIER_4_1]: {
          name: "Ritual Collector",
          id: "ritual-collector",
          pointCost: 1,
          prerequisites: ["Ritual Caster"],
          description: "If you come across a ritual spell in written form, such as a spell scroll or a wizard’s spellbook, you might be able to add it to your ritual book if it is on the spell list of a class you’ve chosen with ritual caster and the spell’s level is no higher than half your level (rounded up). The process of copying the spell into your ritual book takes 2 hours and 50 gp per level of the spell.",
          featureAdded: "None"
        },
        [SKILL_TIERS.TIER_4_2]: {
          name: "Planar Disruptor",
          id: "planar-disruptor",
          pointCost: 1,
          prerequisites: ["Secrets from Beyond"],
          description: "Once per turn when you deal damage to an elemental, aberration, celestial, fiend you can deal it additional damage of the same type equal to your Intelligence modifier (minimum 1 damage). In addition, you may use a bonus action to try to gain knowledge about one numerical value of the creature's statblock by succeeding a DC15 arcana check.",
          featureAdded: "None"
        },
        [SKILL_TIERS.TIER_4_3]: {
          name: "Arcane Mastery",
          id: "arcane-mastery",
          pointCost: 1,
          prerequisites: ["Mystic Arts"],
          description: "You gain a +1 bonus to spell attack rolls and your spell save DC increases by 1.",
          featureAdded: "None"
        },
        [SKILL_TIERS.TIER_5]: {
          name: "Superior Arcana",
          id: "superior-arcana",
          pointCost: 1,
          prerequisites: ["Ritual Collector", "Secrets from Beyond", "Arcane Mastery"],
          description: "You gain expertise in the Arcana skill.",
          featureAdded: "None"
        },
        [SKILL_TIERS.TIER_6]: {
          name: "Spell Recall",
          id: "spell-recall",
          pointCost: 1,
          prerequisites: ["Superior Arcana"],
          description: "Once per long rest, you can recall a spell you have already cast, allowing you to cast it again without expending a spell slot.",
          featureAdded: "None"
        },
      }
    },
    [SKILL_TYPES.ATHLETICS]: {
      displayName: "Athletics",
      branches: [
        {
          nodes: [
            { 
              name: "Athletics", 
              tier: SKILL_TIERS.TIER_1, 
              id: "athletics", 
              top: 20,
              left: 51,
              connections: [
                { to: "jumper", direction: 90, length: 15 }
              ]
            }
          ]
        },
        {
          nodes: [            
            { 
              name: "Jumper", 
              tier: SKILL_TIERS.TIER_2, 
              id: "jumper", 
              top: 30, 
              left: 51,
              connections: [
                { to: "strapping", direction: 36, length: 31},
                { to: "chokehold", direction: 90, length: 15 },
                { to: "stamina", direction: 143, length: 31 }
              ]
            }
          ]
        },
        {
          nodes: [
            { 
              name: "Strapping", 
              tier: SKILL_TIERS.TIER_3_1, 
              id: "strapping", 
              top: 40, 
              left: 28,
              connections: [
                { to: "indomitable", direction: 90, length: 15 }
              ]
            },
            { 
              name: "Chokehold", 
              tier: SKILL_TIERS.TIER_3_2, 
              id: "chokehold", 
              top: 40, 
              left: 51,
              connections: [
                { to: "no-slip", direction: 90, length: 15 }
              ]
            },
            { 
              name: "Stamina", 
              tier: SKILL_TIERS.TIER_3_3, 
              id: "stamina", 
              top: 40, 
              left: 74,
              connections: [
                { to: "enduring", direction: 90, length: 15 }
              ]
            }
          ]
        },
        {
          nodes: [
            { 
              name: "Indomitable", 
              tier: SKILL_TIERS.TIER_4_1, 
              id: "indomitable", 
              top: 50, 
              left: 28,
              connections: [
                { to: "superior-athletics", direction: 36, length: 31 }
              ]
            },
            { 
              name: "No Slip", 
              tier: SKILL_TIERS.TIER_4_2, 
              id: "no-slip", 
              top: 50, 
              left: 51,
              connections: [
                { to: "superior-athletics", direction: 90, length: 15 }
              ]
            },
            { 
              name: "Enduring", 
              tier: SKILL_TIERS.TIER_4_3, 
              id: "enduring", 
              top: 50, 
              left: 74,
              connections: [
                { to: "superior-athletics", direction: 143, length: 31 }
              ]
            }
          ]
        },
        {
          nodes: [
            {
              name: "Superior Athletics",
              tier: SKILL_TIERS.TIER_5,
              id: "superior-athletics",
              top: 60,
              left: 51,
              connections: [
                { to: "heroic-feats", direction: 90, length: 15 }
              ]
            }
          ]
        },
        {
          nodes: [
            { 
              name: "Heroic Feats", 
              tier: SKILL_TIERS.TIER_6, 
              id: "heroic-feats", 
              top: 70, 
              left: 51 
            }
          ]
        }
      ],
      details: {
        [SKILL_TIERS.TIER_1]: {
          name: "Athletics",
          id: "athletics",
          pointCost: 1,
          prerequisites: ["None"],
          description: "Proficiency in Athletics represents strength and physical endurance. From climbing and swimming to lifting heavy objects and maintaining a strenuous pace, your proficiency in athletics covers all these physical activities. As you advance, you become capable of performing more impressive feats of strength and endurance.",
          featureAdded: "Proficiency in Athletics"
        },
        [SKILL_TIERS.TIER_2]: {
          name: "Jumper",
          id: "jumper",
          pointCost: 1,
          prerequisites: ["Athletics"],
          description: "No running start is needed to perform long jumps.",
          featureAdded: "Jump"
        },
        [SKILL_TIERS.TIER_3_1]: {
          name: "Strapping",
          id: "strapping",
          pointCost: 1,
          prerequisites: ["Jumper"],
          description: "You’re an exemplary athlete. You gain the following benefits: A swimming speed equal to your walking speed. A climbing speed equal to your walking speed. Advantage on Constitution saving throws against exhaustion due to forced marches while traveling.",
          featureAdded: "None"
        },
        [SKILL_TIERS.TIER_3_2]: {
          name: "Chokehold",
          id: "chokehold",
          pointCost: 1,
          prerequisites: ["Power Lift"],
          description: "You can use your attack action to try to pin a grappled creature. To do so, make another grapple check. If you succeed, your speed becomes 0 and the creature you are grappling becomes restrained until the grapple ends.",
          featureAdded: "None"
        },
        [SKILL_TIERS.TIER_3_3]: {
          name: "Stamina",
          id: "stamina",
          pointCost: 1,
          prerequisites: ["Power Lift"],
          description: "You gain proficiency in Constitution saving throws.",
          featureAdded: "None"
        },
        [SKILL_TIERS.TIER_4_1]: {
          name: "Indomitable",
          id: "indomitable",
          pointCost: 1,
          prerequisites: ["Strapping"],
          description: "When you are reduced to 0 hit points but not killed outright, you can drop to 1 hit point instead. You can't use this feature again until you finish a long rest.",
          featureAdded: "None"
        },
        [SKILL_TIERS.TIER_4_2]: {
          name: "No Slip",
          id: "no-slip",
          pointCost: 1,
          prerequisites: ["Chokehold"],
          description: "You cannot be disarmed, and attempts to disarm you automatically fail.",
          featureAdded: "None"
        },
        [SKILL_TIERS.TIER_4_3]: {
          name: "Enduring",
          id: "enduring",
          pointCost: 1,
          prerequisites: ["Stamina"],
          description: "You gain an additional 5 hit points for each level you have.",
          featureAdded: "None"
        },
        [SKILL_TIERS.TIER_5]: {
          name: "Superior Athletics",
          id: "superior-athletics",
          pointCost: 1,
          prerequisites: ["Indomitable", "No Slip", "Enduring"],
          description: "You gain expertise in the Athletics skill.",
          featureAdded: "None"
        },
        [SKILL_TIERS.TIER_6]: {
          name: "Heroic Feats",
          id: "heroic-feats",
          pointCost: 1,
          prerequisites: ["Superior Athletics"],
          description: "Your strength and endurance know no bounds. You can use your action to perform a feat of strength or endurance that would normally be beyond your capabilities. Once you use this feature, you can't use it again until you finish a long rest.",
          featureAdded: "None"
        }
      }
    },
    [SKILL_TYPES.DECEPTION]: {
      displayName: "Deception",
      branches: [
        {
          nodes: [
            { 
              name: "Deception", 
              tier: SKILL_TIERS.TIER_1, 
              id: "deception", 
              top: 20,
              left: 51,
              connections: [
                { to: "feint", direction: 90, length: 15 }
              ]
            }
          ]
        },
        {
          nodes: [            
            { 
              name: "Feint", 
              tier: SKILL_TIERS.TIER_2, 
              id: "feint", 
              top: 30, 
              left: 51,
              connections: [
                { to: "double-cross", direction: 36, length: 31},
                { to: "mislead", direction: 90, length: 15 },
                { to: "bluff", direction: 143, length: 31 }
              ]
            }
          ]
        },
        {
          nodes: [
            { 
              name: "Double Cross", 
              tier: SKILL_TIERS.TIER_3_1, 
              id: "double-cross", 
              top: 40, 
              left: 28,
              connections: [
                { to: "treachery", direction: 90, length: 15 }
              ]
            },
            { 
              name: "Mislead", 
              tier: SKILL_TIERS.TIER_3_2, 
              id: "mislead", 
              top: 40, 
              left: 51,
              connections: [
                { to: "false-friends", direction: 90, length: 15 }
              ]
            },
            { 
              name: "Bluff", 
              tier: SKILL_TIERS.TIER_3_3, 
              id: "bluff", 
              top: 40, 
              left: 74,
              connections: [
                { to: "convincing", direction: 90, length: 15 }
              ]
            }
          ]
        },
        {
          nodes: [
            { 
              name: "Treachery", 
              tier: SKILL_TIERS.TIER_4_1, 
              id: "treachery", 
              top: 50, 
              left: 28,
              connections: [
                { to: "superior-deception", direction: 36, length: 31 }
              ]
            },
            { 
              name: "False Friends", 
              tier: SKILL_TIERS.TIER_4_2, 
              id: "false-friends", 
              top: 50, 
              left: 51,
              connections: [
                { to: "superior-deception", direction: 90, length: 15 }
              ]
            },
            { 
              name: "Convincing", 
              tier: SKILL_TIERS.TIER_4_3, 
              id: "convincing", 
              top: 50, 
              left: 74,
              connections: [
                { to: "superior-deception", direction: 143, length: 31 }
              ]
            }
          ]
        },
        {
          nodes: [
            {
              name: "Superior Deception",
              tier: SKILL_TIERS.TIER_5,
              id: "superior-deception",
              top: 60,
              left: 51,
              connections: [
                { to: "master-of-lies", direction: 90, length: 15 }
              ]
            }
          ]
        },
        {
          nodes: [
            { 
              name: "Master of Lies", 
              tier: SKILL_TIERS.TIER_6, 
              id: "master-of-lies", 
              top: 70, 
              left: 51 
            }
          ]
        }
      ],
      details: {
        [SKILL_TIERS.TIER_1]: {
          name: "Deception",
          id: "deception",
          pointCost: 1,
          prerequisites: ["None"],
          description: "Proficiency in Deception represents your ability to convincingly lie, bluff, and mislead others. As you improve, you become better at maintaining falsehoods, creating elaborate ruses, and manipulating others without being detected.",
          featureAdded: "Proficiency in Deception"
        },
        [SKILL_TIERS.TIER_2]: {
          name: "Feint",
          id: "feint",
          pointCost: 1,
          prerequisites: ["Deception"],
          description: "You can feint during combat as a bonus action, gaining advantage on your next attack roll against the target.",
          featureAdded: "None"
        },
        [SKILL_TIERS.TIER_3_1]: {
          name: "Double Cross",
          id: "double-cross",
          pointCost: 1,
          prerequisites: ["Feint"],
          description: "When you successfully deceive a creature, you can use your reaction to impose disadvantage on the next attack roll it makes against you.",
          featureAdded: "None"
        },
        [SKILL_TIERS.TIER_3_2]: {
          name: "Mislead",
          id: "mislead",
          pointCost: 1,
          prerequisites: ["Feint"],
          description: "You can use your action to create a distraction, allowing you to hide as a bonus action.",
          featureAdded: "None"
        },
        [SKILL_TIERS.TIER_3_3]: {
          name: "Bluff",
          id: "bluff",
          pointCost: 1,
          prerequisites: ["Feint"],
          description: "You can convince others of things that are not true with ease, gaining advantage on Charisma (Deception) checks for the next hour.",
          featureAdded: "None"
        },
        [SKILL_TIERS.TIER_4_1]: {
          name: "Treachery",
          id: "treachery",
          pointCost: 1,
          prerequisites: ["Double Cross"],
          description: "You can deal an extra 1d6 damage to any creature you have successfully deceived in the last 24 hours.",
          featureAdded: "None"
        },
        [SKILL_TIERS.TIER_4_2]: {
          name: "False Friends",
          id: "false-friends",
          pointCost: 1,
          prerequisites: ["Mislead"],
          description: "You can disguise yourself as an ally to any creature that you have successfully deceived within the last 24 hours.",
          featureAdded: "None"
        },
        [SKILL_TIERS.TIER_4_3]: {
          name: "Convincing",
          id: "convincing",
          pointCost: 1,
          prerequisites: ["Bluff"],
          description: "You can make others believe your lies without question, gaining expertise in the Deception skill.",
          featureAdded: "None"
        },
        [SKILL_TIERS.TIER_5]: {
          name: "Superior Deception",
          id: "superior-deception",
          pointCost: 1,
          prerequisites: ["Treachery", "False Friends", "Convincing"],
          description: "Your deceptive abilities are unparalleled, allowing you to create elaborate and believable lies with ease.",
          featureAdded: "None"
        },
        [SKILL_TIERS.TIER_6]: {
          name: "Master of Lies",
          id: "master-of-lies",
          pointCost: 1,
          prerequisites: ["Superior Deception"],
          description: "You can weave a web of lies so intricate that even magic cannot discern your true intentions. You have advantage on saving throws against spells and abilities that would compel you to tell the truth.",
          featureAdded: "None"
        }
      }
    },
    [SKILL_TYPES.HISTORY]: {
      displayName: "History",
      branches: [
        {
          nodes: [
            { 
              name: "History", 
              tier: SKILL_TIERS.TIER_1, 
              id: "history", 
              top: 20,
              left: 51,
              connections: [
                { to: "keen-mind", direction: 90, length: 15 }
              ]
            }
          ]
        },
        {
          nodes: [            
            { 
              name: "Keen Mind", 
              tier: SKILL_TIERS.TIER_2, 
              id: "keen-mind", 
              top: 30, 
              left: 51,
              connections: [
                { to: "lorekeeper", direction: 36, length: 31},
                { to: "researcher", direction: 90, length: 15 },
                { to: "chronologist", direction: 143, length: 31 }
              ]
            }
          ]
        },
        {
          nodes: [
            { 
              name: "Lorekeeper", 
              tier: SKILL_TIERS.TIER_3_1, 
              id: "lorekeeper", 
              top: 40, 
              left: 28,
              connections: [
                { to: "sage", direction: 90, length: 15 }
              ]
            },
            { 
              name: "Researcher", 
              tier: SKILL_TIERS.TIER_3_2, 
              id: "researcher", 
              top: 40, 
              left: 51,
              connections: [
                { to: "historian", direction: 90, length: 15 }
              ]
            },
            { 
              name: "Chronologist", 
              tier: SKILL_TIERS.TIER_3_3, 
              id: "chronologist", 
              top: 40, 
              left: 74,
              connections: [
                { to: "timekeeper", direction: 90, length: 15 }
              ]
            }
          ]
        },
        {
          nodes: [
            { 
              name: "Sage", 
              tier: SKILL_TIERS.TIER_4_1, 
              id: "sage", 
              top: 50, 
              left: 28,
              connections: [
                { to: "superior-history", direction: 36, length: 31 }
              ]
            },
            { 
              name: "Historian", 
              tier: SKILL_TIERS.TIER_4_2, 
              id: "historian", 
              top: 50, 
              left: 51,
              connections: [
                { to: "superior-history", direction: 90, length: 15 }
              ]
            },
            { 
              name: "Timekeeper", 
              tier: SKILL_TIERS.TIER_4_3, 
              id: "timekeeper", 
              top: 50, 
              left: 74,
              connections: [
                { to: "superior-history", direction: 143, length: 31 }
              ]
            }
          ]
        },
        {
          nodes: [
            {
              name: "Superior History",
              tier: SKILL_TIERS.TIER_5,
              id: "superior-history",
              top: 60,
              left: 51,
              connections: [
                { to: "master-historian", direction: 90, length: 15 }
              ]
            }
          ]
        },
        {
          nodes: [
            { 
              name: "Master Historian", 
              tier: SKILL_TIERS.TIER_6, 
              id: "master-historian", 
              top: 70, 
              left: 51 
            }
          ]
        }
      ],
      details: {
        [SKILL_TIERS.TIER_1]: {
          name: "History",
          id: "history",
          pointCost: 1,
          prerequisites: ["None"],
          description: "Proficiency in History represents your knowledge of historical events, cultures, and legends. As you improve, you become a repository of ancient knowledge and forgotten lore.",
          featureAdded: "Proficiency in History"
        },
        [SKILL_TIERS.TIER_2]: {
          name: "Keen Mind",
          id: "keen-mind",
          pointCost: 1,
          prerequisites: ["History"],
          description: "You have an excellent memory for detail and trivia. You can recall anything you have seen or heard within the past month.",
          featureAdded: "None"
        },
        [SKILL_TIERS.TIER_3_1]: {
          name: "Lorekeeper",
          id: "lorekeeper",
          pointCost: 1,
          prerequisites: ["Keen Mind"],
          description: "You gain advantage on Intelligence checks to recall historical information.",
          featureAdded: "None"
        },
        [SKILL_TIERS.TIER_3_2]: {
          name: "Researcher",
          id: "researcher",
          pointCost: 1,
          prerequisites: ["Keen Mind"],
          description: "You can quickly find information in libraries and archives. You gain advantage on Intelligence (Investigation) checks to research information.",
          featureAdded: "None"
        },
        [SKILL_TIERS.TIER_3_3]: {
          name: "Chronologist",
          id: "chronologist",
          pointCost: 1,
          prerequisites: ["Keen Mind"],
          description: "You have a keen sense of the passage of time and can accurately keep track of time without a timepiece.",
          featureAdded: "None"
        },
        [SKILL_TIERS.TIER_4_1]: {
          name: "Sage",
          id: "sage",
          pointCost: 1,
          prerequisites: ["Lorekeeper"],
          description: "You have dedicated your life to studying history. You gain proficiency in another Intelligence-based skill of your choice.",
          featureAdded: "None"
        },
        [SKILL_TIERS.TIER_4_2]: {
          name: "Historian",
          id: "historian",
          pointCost: 1,
          prerequisites: ["Researcher"],
          description: "You can craft detailed and convincing narratives based on historical facts. You gain proficiency in the Persuasion skill.",
          featureAdded: "None"
        },
        [SKILL_TIERS.TIER_4_3]: {
          name: "Timekeeper",
          id: "timekeeper",
          pointCost: 1,
          prerequisites: ["Chronologist"],
          description: "You can accurately predict celestial events, weather patterns, and other time-based phenomena.",
          featureAdded: "None"
        },
        [SKILL_TIERS.TIER_5]: {
          name: "Superior History",
          id: "superior-history",
          pointCost: 1,
          prerequisites: ["Sage", "Historian", "Timekeeper"],
          description: "Your historical knowledge is unparalleled. You gain expertise in the History skill.",
          featureAdded: "None"
        },
        [SKILL_TIERS.TIER_6]: {
          name: "Master Historian",
          id: "master-historian",
          pointCost: 1,
          prerequisites: ["Superior History"],
          description: "You can call upon your vast knowledge of history to gain advantage on any Intelligence check related to historical events or figures.",
          featureAdded: "None"
        }
      }
    },
    [SKILL_TYPES.INSIGHT]: {
      displayName: "Insight",
      branches: [
        {
          nodes: [
            { 
              name: "Insight", 
              tier: SKILL_TIERS.TIER_1, 
              id: "insight", 
              top: 20,
              left: 51,
              connections: [
                { to: "empathy", direction: 90, length: 15 }
              ]
            }
          ]
        },
        {
          nodes: [            
            { 
              name: "Empathy", 
              tier: SKILL_TIERS.TIER_2, 
              id: "empathy", 
              top: 30, 
              left: 51,
              connections: [
                { to: "truth-detection", direction: 36, length: 31},
                { to: "psychology", direction: 90, length: 15 },
                { to: "perceptive", direction: 143, length: 31 }
              ]
            }
          ]
        },
        {
          nodes: [
            { 
              name: "Truth Detection", 
              tier: SKILL_TIERS.TIER_3_1, 
              id: "truth-detection", 
              top: 40, 
              left: 28,
              connections: [
                { to: "mind-reader", direction: 90, length: 15 }
              ]
            },
            { 
              name: "Psychology", 
              tier: SKILL_TIERS.TIER_3_2, 
              id: "psychology", 
              top: 40, 
              left: 51,
              connections: [
                { to: "emotional-insight", direction: 90, length: 15 }
              ]
            },
            { 
              name: "Perceptive", 
              tier: SKILL_TIERS.TIER_3_3, 
              id: "perceptive", 
              top: 40, 
              left: 74,
              connections: [
                { to: "keen-observation", direction: 90, length: 15 }
              ]
            }
          ]
        },
        {
          nodes: [
            { 
              name: "Mind Reader", 
              tier: SKILL_TIERS.TIER_4_1, 
              id: "mind-reader", 
              top: 50, 
              left: 28,
              connections: [
                { to: "superior-insight", direction: 36, length: 31 }
              ]
            },
            { 
              name: "Emotional Insight", 
              tier: SKILL_TIERS.TIER_4_2, 
              id: "emotional-insight", 
              top: 50, 
              left: 51,
              connections: [
                { to: "superior-insight", direction: 90, length: 15 }
              ]
            },
            { 
              name: "Keen Observation", 
              tier: SKILL_TIERS.TIER_4_3, 
              id: "keen-observation", 
              top: 50, 
              left: 74,
              connections: [
                { to: "superior-insight", direction: 143, length: 31 }
              ]
            }
          ]
        },
        {
          nodes: [
            {
              name: "Superior Insight",
              tier: SKILL_TIERS.TIER_5,
              id: "superior-insight",
              top: 60,
              left: 51,
              connections: [
                { to: "omniscient", direction: 90, length: 15 }
              ]
            }
          ]
        },
        {
          nodes: [
            { 
              name: "Omniscient", 
              tier: SKILL_TIERS.TIER_6, 
              id: "omniscient", 
              top: 70, 
              left: 51 
            }
          ]
        }
      ],
      details: {
        [SKILL_TIERS.TIER_1]: {
          name: "Insight",
          id: "insight",
          pointCost: 1,
          prerequisites: ["None"],
          description: "Proficiency in Insight represents your ability to read people and situations accurately. As you improve, you become adept at discerning lies, understanding motivations, and predicting behavior.",
          featureAdded: "Proficiency in Insight"
        },
        [SKILL_TIERS.TIER_2]: {
          name: "Empathy",
          id: "empathy",
          pointCost: 1,
          prerequisites: ["Insight"],
          description: "You can sense the emotions of others with ease. You gain advantage on Wisdom (Insight) checks to understand a creature's emotional state.",
          featureAdded: "None"
        },
        [SKILL_TIERS.TIER_3_1]: {
          name: "Truth Detection",
          id: "truth-detection",
          pointCost: 1,
          prerequisites: ["Empathy"],
          description: "You can tell when someone is lying. You gain advantage on Wisdom (Insight) checks to detect lies.",
          featureAdded: "None"
        },
        [SKILL_TIERS.TIER_3_2]: {
          name: "Psychology",
          id: "psychology",
          pointCost: 1,
          prerequisites: ["Empathy"],
          description: "You understand the underlying motivations of others. You gain advantage on checks to understand a creature's motivations.",
          featureAdded: "None"
        },
        [SKILL_TIERS.TIER_3_3]: {
          name: "Perceptive",
          id: "perceptive",
          pointCost: 1,
          prerequisites: ["Empathy"],
          description: "You notice things that others might miss. You gain advantage on Wisdom (Perception) checks to spot hidden objects or creatures.",
          featureAdded: "None"
        },
        [SKILL_TIERS.TIER_4_1]: {
          name: "Mind Reader",
          id: "mind-reader",
          pointCost: 1,
          prerequisites: ["Truth Detection"],
          description: "You can read surface thoughts of creatures. Once per day, you can cast the spell Detect Thoughts without using a spell slot.",
          featureAdded: "None"
        },
        [SKILL_TIERS.TIER_4_2]: {
          name: "Emotional Insight",
          id: "emotional-insight",
          pointCost: 1,
          prerequisites: ["Psychology"],
          description: "You can understand the deeper emotions and motivations of others. You gain expertise in the Insight skill.",
          featureAdded: "None"
        },
        [SKILL_TIERS.TIER_4_3]: {
          name: "Keen Observation",
          id: "keen-observation",
          pointCost: 1,
          prerequisites: ["Perceptive"],
          description: "Your keen senses allow you to notice even the slightest details. You gain expertise in the Perception skill.",
          featureAdded: "None"
        },
        [SKILL_TIERS.TIER_5]: {
          name: "Superior Insight",
          id: "superior-insight",
          pointCost: 1,
          prerequisites: ["Mind Reader", "Emotional Insight", "Keen Observation"],
          description: "Your insight into the thoughts and motivations of others is unparalleled. You can use your action to gain advantage on all Insight checks for the next hour.",
          featureAdded: "None"
        },
        [SKILL_TIERS.TIER_6]: {
          name: "Omniscient",
          id: "omniscient",
          pointCost: 1,
          prerequisites: ["Superior Insight"],
          description: "Your understanding of others' thoughts and emotions is so profound that you can anticipate their actions. You gain advantage on all Wisdom checks.",
          featureAdded: "None"
        }
      }
    },
    [SKILL_TYPES.INTIMIDATION]: {
      displayName: "Intimidation",
      branches: [
        {
          nodes: [
            { 
              name: "Intimidation", 
              tier: SKILL_TIERS.TIER_1, 
              id: "intimidation", 
              top: 20,
              left: 51,
              connections: [
                { to: "menacing-glare", direction: 90, length: 15 }
              ]
            }
          ]
        },
        {
          nodes: [            
            { 
              name: "Menacing Glare", 
              tier: SKILL_TIERS.TIER_2, 
              id: "menacing-glare", 
              top: 30, 
              left: 51,
              connections: [
                { to: "fearsome-presence", direction: 36, length: 31},
                { to: "intimidating-shout", direction: 90, length: 15 },
                { to: "scare-tactics", direction: 143, length: 31 }
              ]
            }
          ]
        },
        {
          nodes: [
            { 
              name: "Fearsome Presence", 
              tier: SKILL_TIERS.TIER_3_1, 
              id: "fearsome-presence", 
              top: 40, 
              left: 28,
              connections: [
                { to: "terrifying-roar", direction: 90, length: 15 }
              ]
            },
            { 
              name: "Intimidating Shout", 
              tier: SKILL_TIERS.TIER_3_2, 
              id: "intimidating-shout", 
              top: 40, 
              left: 51,
              connections: [
                { to: "commanding-voice", direction: 90, length: 15 }
              ]
            },
            { 
              name: "Scare Tactics", 
              tier: SKILL_TIERS.TIER_3_3, 
              id: "scare-tactics", 
              top: 40, 
              left: 74,
              connections: [
                { to: "overwhelming-fear", direction: 90, length: 15 }
              ]
            }
          ]
        },
        {
          nodes: [
            { 
              name: "Terrifying Roar", 
              tier: SKILL_TIERS.TIER_4_1, 
              id: "terrifying-roar", 
              top: 50, 
              left: 28,
              connections: [
                { to: "superior-intimidation", direction: 36, length: 31 }
              ]
            },
            { 
              name: "Commanding Voice", 
              tier: SKILL_TIERS.TIER_4_2, 
              id: "commanding-voice", 
              top: 50, 
              left: 51,
              connections: [
                { to: "superior-intimidation", direction: 90, length: 15 }
              ]
            },
            { 
              name: "Overwhelming Fear", 
              tier: SKILL_TIERS.TIER_4_3, 
              id: "overwhelming-fear", 
              top: 50, 
              left: 74,
              connections: [
                { to: "superior-intimidation", direction: 143, length: 31 }
              ]
            }
          ]
        },
        {
          nodes: [
            {
              name: "Superior Intimidation",
              tier: SKILL_TIERS.TIER_5,
              id: "superior-intimidation",
              top: 60,
              left: 51,
              connections: [
                { to: "awe-inspiring", direction: 90, length: 15 }
              ]
            }
          ]
        },
        {
          nodes: [
            { 
              name: "Awe Inspiring", 
              tier: SKILL_TIERS.TIER_6, 
              id: "awe-inspiring", 
              top: 70, 
              left: 51 
            }
          ]
        }
      ],
      details: {
        [SKILL_TIERS.TIER_1]: {
          name: "Intimidation",
          id: "intimidation",
          pointCost: 1,
          prerequisites: ["None"],
          description: "Proficiency in Intimidation represents your ability to influence others through threats and fear. As you improve, you become better at causing fear and bending others to your will.",
          featureAdded: "Proficiency in Intimidation"
        },
        [SKILL_TIERS.TIER_2]: {
          name: "Menacing Glare",
          id: "menacing-glare",
          pointCost: 1,
          prerequisites: ["Intimidation"],
          description: "You can use your action to glare menacingly at a creature within 30 feet. The target must succeed on a Wisdom saving throw (DC equal to 8 + your proficiency bonus + your Charisma modifier) or be frightened of you until the end of your next turn.",
          featureAdded: "None"
        },
        [SKILL_TIERS.TIER_3_1]: {
          name: "Fearsome Presence",
          id: "fearsome-presence",
          pointCost: 1,
          prerequisites: ["Menacing Glare"],
          description: "You can use your action to exude an aura of fear. Each creature of your choice within 30 feet of you must succeed on a Wisdom saving throw (DC equal to 8 + your proficiency bonus + your Charisma modifier) or be frightened of you for 1 minute. A frightened target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
          featureAdded: "None"
        },
        [SKILL_TIERS.TIER_3_2]: {
          name: "Intimidating Shout",
          id: "intimidating-shout",
          pointCost: 1,
          prerequisites: ["Menacing Glare"],
          description: "You can use your action to shout intimidatingly. Each creature of your choice within 60 feet that can hear you must succeed on a Wisdom saving throw (DC equal to 8 + your proficiency bonus + your Charisma modifier) or be frightened of you until the end of your next turn.",
          featureAdded: "None"
        },
        [SKILL_TIERS.TIER_3_3]: {
          name: "Scare Tactics",
          id: "scare-tactics",
          pointCost: 1,
          prerequisites: ["Menacing Glare"],
          description: "You have learned to use fear to your advantage in combat. When you hit a creature that is frightened of you with an attack, you can deal an extra 1d6 damage.",
          featureAdded: "None"
        },
        [SKILL_TIERS.TIER_4_1]: {
          name: "Terrifying Roar",
          id: "terrifying-roar",
          pointCost: 1,
          prerequisites: ["Fearsome Presence"],
          description: "You can use your action to let out a terrifying roar. Each creature of your choice within 60 feet that can hear you must succeed on a Wisdom saving throw (DC equal to 8 + your proficiency bonus + your Charisma modifier) or be frightened of you for 1 minute. A frightened target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
          featureAdded: "None"
        },
        [SKILL_TIERS.TIER_4_2]: {
          name: "Commanding Voice",
          id: "commanding-voice",
          pointCost: 1,
          prerequisites: ["Intimidating Shout"],
          description: "Your voice commands authority and fear. You gain advantage on Charisma (Intimidation) checks.",
          featureAdded: "None"
        },
        [SKILL_TIERS.TIER_4_3]: {
          name: "Overwhelming Fear",
          id: "overwhelming-fear",
          pointCost: 1,
          prerequisites: ["Scare Tactics"],
          description: "Your ability to instill fear is overwhelming. When a creature fails a saving throw against being frightened by you, it is also paralyzed until the end of its next turn.",
          featureAdded: "None"
        },
        [SKILL_TIERS.TIER_5]: {
          name: "Superior Intimidation",
          id: "superior-intimidation",
          pointCost: 1,
          prerequisites: ["Terrifying Roar", "Commanding Voice", "Overwhelming Fear"],
          description: "Your ability to intimidate is unparalleled. You gain expertise in the Intimidation skill.",
          featureAdded: "None"
        },
        [SKILL_TIERS.TIER_6]: {
          name: "Awe Inspiring",
          id: "awe-inspiring",
          pointCost: 1,
          prerequisites: ["Superior Intimidation"],
          description: "Your presence is so commanding that others find it hard to resist your will. You gain advantage on all Charisma checks.",
          featureAdded: "None"
        }
      }
    },
    [SKILL_TYPES.MEDICINE]: {
      displayName: "Medicine",
      branches: [
        {
          nodes: [
            { 
              name: "Medicine", 
              tier: SKILL_TIERS.TIER_1, 
              id: "medicine", 
              top: 20,
              left: 51,
              connections: [
                { to: "first-aid", direction: 90, length: 15 }
              ]
            }
          ]
        },
        {
          nodes: [            
            { 
              name: "First Aid", 
              tier: SKILL_TIERS.TIER_2, 
              id: "first-aid", 
              top: 30, 
              left: 51,
              connections: [
                { to: "herbal-remedies", direction: 36, length: 31},
                { to: "clinical-diagnosis", direction: 90, length: 15 },
                { to: "anatomical-knowledge", direction: 143, length: 31 }
              ]
            }
          ]
        },
        {
          nodes: [
            { 
              name: "Herbal Remedies", 
              tier: SKILL_TIERS.TIER_3_1, 
              id: "herbal-remedies", 
              top: 40, 
              left: 28,
              connections: [
                { to: "potent-medicines", direction: 90, length: 15 }
              ]
            },
            { 
              name: "Clinical Diagnosis", 
              tier: SKILL_TIERS.TIER_3_2, 
              id: "clinical-diagnosis", 
              top: 40, 
              left: 51,
              connections: [
                { to: "master-surgeon", direction: 90, length: 15 }
              ]
            },
            { 
              name: "Anatomical Knowledge", 
              tier: SKILL_TIERS.TIER_3_3, 
              id: "anatomical-knowledge", 
              top: 40, 
              left: 74,
              connections: [
                { to: "life-saver", direction: 90, length: 15 }
              ]
            }
          ]
        },
        {
          nodes: [
            { 
              name: "Potent Medicines", 
              tier: SKILL_TIERS.TIER_4_1, 
              id: "potent-medicines", 
              top: 50, 
              left: 28,
              connections: [
                { to: "superior-medicine", direction: 36, length: 31 }
              ]
            },
            { 
              name: "Master Surgeon", 
              tier: SKILL_TIERS.TIER_4_2, 
              id: "master-surgeon", 
              top: 50, 
              left: 51,
              connections: [
                { to: "superior-medicine", direction: 90, length: 15 }
              ]
            },
            { 
              name: "Life Saver", 
              tier: SKILL_TIERS.TIER_4_3, 
              id: "life-saver", 
              top: 50, 
              left: 74,
              connections: [
                { to: "superior-medicine", direction: 143, length: 31 }
              ]
            }
          ]
        },
        {
          nodes: [
            {
              name: "Superior Medicine",
              tier: SKILL_TIERS.TIER_5,
              id: "superior-medicine",
              top: 60,
              left: 51,
              connections: [
                { to: "miracle-worker", direction: 90, length: 15 }
              ]
            }
          ]
        },
        {
          nodes: [
            { 
              name: "Miracle Worker", 
              tier: SKILL_TIERS.TIER_6, 
              id: "miracle-worker", 
              top: 70, 
              left: 51 
            }
          ]
        }
      ],
      details: {
        [SKILL_TIERS.TIER_1]: {
          name: "Medicine",
          id: "medicine",
          pointCost: 1,
          prerequisites: ["None"],
          description: "Proficiency in Medicine represents your knowledge of diagnosing and treating illnesses and injuries. As you improve, you become adept at providing medical care and even performing surgeries.",
          featureAdded: "Proficiency in Medicine"
        },
        [SKILL_TIERS.TIER_2]: {
          name: "First Aid",
          id: "first-aid",
          pointCost: 1,
          prerequisites: ["Medicine"],
          description: "You can use your action to stabilize a creature that has 0 hit points without needing to make a Wisdom (Medicine) check.",
          featureAdded: "None"
        },
        [SKILL_TIERS.TIER_3_1]: {
          name: "Herbal Remedies",
          id: "herbal-remedies",
          pointCost: 1,
          prerequisites: ["First Aid"],
          description: "You can create herbal remedies that provide various benefits. You gain proficiency with the herbalism kit.",
          featureAdded: "None"
        },
        [SKILL_TIERS.TIER_3_2]: {
          name: "Clinical Diagnosis",
          id: "clinical-diagnosis",
          pointCost: 1,
          prerequisites: ["First Aid"],
          description: "You can diagnose diseases and conditions with precision. You gain advantage on Wisdom (Medicine) checks to diagnose illnesses.",
          featureAdded: "None"
        },
        [SKILL_TIERS.TIER_3_3]: {
          name: "Anatomical Knowledge",
          id: "anatomical-knowledge",
          pointCost: 1,
          prerequisites: ["First Aid"],
          description: "You have a deep understanding of anatomy, allowing you to treat injuries more effectively. When you use a healer's kit to stabilize a dying creature, that creature also regains 1 hit point.",
          featureAdded: "None"
        },
        [SKILL_TIERS.TIER_4_1]: {
          name: "Potent Medicines",
          id: "potent-medicines",
          pointCost: 1,
          prerequisites: ["Herbal Remedies"],
          description: "You can create potent medicines that provide greater healing. When you use a healer's kit or herbalism kit, the creature regains additional hit points equal to your proficiency bonus.",
          featureAdded: "None"
        },
        [SKILL_TIERS.TIER_4_2]: {
          name: "Master Surgeon",
          id: "master-surgeon",
          pointCost: 1,
          prerequisites: ["Clinical Diagnosis"],
          description: "You can perform complex surgeries with great skill. You gain advantage on Wisdom (Medicine) checks to perform surgeries or treat severe injuries.",
          featureAdded: "None"
        },
        [SKILL_TIERS.TIER_4_3]: {
          name: "Life Saver",
          id: "life-saver",
          pointCost: 1,
          prerequisites: ["Anatomical Knowledge"],
          description: "You can bring creatures back from the brink of death. When you stabilize a creature with 0 hit points, it regains hit points equal to your proficiency bonus + your Wisdom modifier.",
          featureAdded: "None"
        },
        [SKILL_TIERS.TIER_5]: {
          name: "Superior Medicine",
          id: "superior-medicine",
          pointCost: 1,
          prerequisites: ["Potent Medicines", "Master Surgeon", "Life Saver"],
          description: "Your medical knowledge is unparalleled. You gain expertise in the Medicine skill.",
          featureAdded: "None"
        },
        [SKILL_TIERS.TIER_6]: {
          name: "Miracle Worker",
          id: "miracle-worker",
          pointCost: 1,
          prerequisites: ["Superior Medicine"],
          description: "You can perform miraculous medical feats. Once per long rest, you can cast the spell Raise Dead without using a spell slot or material components.",
          featureAdded: "None"
        }
      }
    },
    [SKILL_TYPES.NATURE]: {
      displayName: "Nature",
      branches: [
        {
          nodes: [
            { 
              name: "Nature", 
              tier: SKILL_TIERS.TIER_1, 
              id: "nature", 
              top: 20,
              left: 51,
              connections: [
                { to: "naturalist", direction: 90, length: 15 }
              ]
            }
          ]
        },
        {
          nodes: [            
            { 
              name: "Naturalist", 
              tier: SKILL_TIERS.TIER_2, 
              id: "naturalist", 
              top: 30, 
              left: 51,
              connections: [
                { to: "flora-expert", direction: 36, length: 31},
                { to: "fauna-expert", direction: 90, length: 15 },
                { to: "weather-watcher", direction: 143, length: 31 }
              ]
            }
          ]
        },
        {
          nodes: [
            { 
              name: "Flora Expert", 
              tier: SKILL_TIERS.TIER_3_1, 
              id: "flora-expert", 
              top: 40, 
              left: 28,
              connections: [
                { to: "herbalist", direction: 90, length: 15 }
              ]
            },
            { 
              name: "Fauna Expert", 
              tier: SKILL_TIERS.TIER_3_2, 
              id: "fauna-expert", 
              top: 40, 
              left: 51,
              connections: [
                { to: "beast-master", direction: 90, length: 15 }
              ]
            },
            { 
              name: "Weather Watcher", 
              tier: SKILL_TIERS.TIER_3_3, 
              id: "weather-watcher", 
              top: 40, 
              left: 74,
              connections: [
                { to: "storm-caller", direction: 90, length: 15 }
              ]
            }
          ]
        },
        {
          nodes: [
            { 
              name: "Herbalist", 
              tier: SKILL_TIERS.TIER_4_1, 
              id: "herbalist", 
              top: 50, 
              left: 28,
              connections: [
                { to: "superior-nature", direction: 36, length: 31 }
              ]
            },
            { 
              name: "Beast Master", 
              tier: SKILL_TIERS.TIER_4_2, 
              id: "beast-master", 
              top: 50, 
              left: 51,
              connections: [
                { to: "superior-nature", direction: 90, length: 15 }
              ]
            },
            { 
              name: "Storm Caller", 
              tier: SKILL_TIERS.TIER_4_3, 
              id: "storm-caller", 
              top: 50, 
              left: 74,
              connections: [
                { to: "superior-nature", direction: 143, length: 31 }
              ]
            }
          ]
        },
        {
          nodes: [
            {
              name: "Superior Nature",
              tier: SKILL_TIERS.TIER_5,
              id: "superior-nature",
              top: 60,
              left: 51,
              connections: [
                { to: "master-naturalist", direction: 90, length: 15 }
              ]
            }
          ]
        },
        {
          nodes: [
            { 
              name: "Master Naturalist", 
              tier: SKILL_TIERS.TIER_6, 
              id: "master-naturalist", 
              top: 70, 
              left: 51 
            }
          ]
        }
      ],
      details: {
        [SKILL_TIERS.TIER_1]: {
          name: "Nature",
          id: "nature",
          pointCost: 1,
          prerequisites: ["None"],
          description: "Proficiency in Nature represents your knowledge of the natural world, including plants, animals, and weather. As you improve, you become better at understanding and predicting natural phenomena.",
          featureAdded: "Proficiency in Nature"
        },
        [SKILL_TIERS.TIER_2]: {
          name: "Naturalist",
          id: "naturalist",
          pointCost: 1,
          prerequisites: ["Nature"],
          description: "You have a broad understanding of the natural world. You gain advantage on Intelligence (Nature) checks.",
          featureAdded: "None"
        },
        [SKILL_TIERS.TIER_3_1]: {
          name: "Flora Expert",
          id: "flora-expert",
          pointCost: 1,
          prerequisites: ["Naturalist"],
          description: "You have extensive knowledge of plants and their uses. You gain proficiency with the herbalism kit.",
          featureAdded: "None"
        },
        [SKILL_TIERS.TIER_3_2]: {
          name: "Fauna Expert",
          id: "fauna-expert",
          pointCost: 1,
          prerequisites: ["Naturalist"],
          description: "You have extensive knowledge of animals and their behavior. You gain proficiency in the Animal Handling skill.",
          featureAdded: "None"
        },
        [SKILL_TIERS.TIER_3_3]: {
          name: "Weather Watcher",
          id: "weather-watcher",
          pointCost: 1,
          prerequisites: ["Naturalist"],
          description: "You can accurately predict the weather for the next 24 hours. You gain advantage on Wisdom (Survival) checks to track weather patterns.",
          featureAdded: "None"
        },
        [SKILL_TIERS.TIER_4_1]: {
          name: "Herbalist",
          id: "herbalist",
          pointCost: 1,
          prerequisites: ["Flora Expert"],
          description: "You can create potent herbal remedies. When you use a healer's kit or herbalism kit, the creature regains additional hit points equal to your proficiency bonus.",
          featureAdded: "None"
        },
        [SKILL_TIERS.TIER_4_2]: {
          name: "Beast Master",
          id: "beast-master",
          pointCost: 1,
          prerequisites: ["Fauna Expert"],
          description: "You can communicate with beasts and even tame them. You gain the ability to cast the spell Speak with Animals at will.",
          featureAdded: "None"
        },
        [SKILL_TIERS.TIER_4_3]: {
          name: "Storm Caller",
          id: "storm-caller",
          pointCost: 1,
          prerequisites: ["Weather Watcher"],
          description: "You can call upon the forces of nature to create storms. Once per day, you can cast the spell Call Lightning without using a spell slot.",
          featureAdded: "None"
        },
        [SKILL_TIERS.TIER_5]: {
          name: "Superior Nature",
          id: "superior-nature",
          pointCost: 1,
          prerequisites: ["Herbalist", "Beast Master", "Storm Caller"],
          description: "Your knowledge of the natural world is unparalleled. You gain expertise in the Nature skill.",
          featureAdded: "None"
        },
        [SKILL_TIERS.TIER_6]: {
          name: "Master Naturalist",
          id: "master-naturalist",
          pointCost: 1,
          prerequisites: ["Superior Nature"],
          description: "Your understanding of nature is so profound that you can influence it with ease. You gain the ability to cast the spell Control Weather once per day without using a spell slot.",
          featureAdded: "None"
        }
      }
    },
    [SKILL_TYPES.PERCEPTION]: {
      displayName: "Perception",
      branches: [
        {
          nodes: [
            { 
              name: "Perception", 
              tier: SKILL_TIERS.TIER_1, 
              id: "perception", 
              top: 20,
              left: 51,
              connections: [
                { to: "eagle-eye", direction: 90, length: 15 }
              ]
            }
          ]
        },
        {
          nodes: [            
            { 
              name: "Eagle Eye", 
              tier: SKILL_TIERS.TIER_2, 
              id: "eagle-eye", 
              top: 30, 
              left: 51,
              connections: [
                { to: "keen-senses", direction: 36, length: 31},
                { to: "observant", direction: 90, length: 15 },
                { to: "heightened-awareness", direction: 143, length: 31 }
              ]
            }
          ]
        },
        {
          nodes: [
            { 
              name: "Keen Senses", 
              tier: SKILL_TIERS.TIER_3_1, 
              id: "keen-senses", 
              top: 40, 
              left: 28,
              connections: [
                { to: "sharpshooter", direction: 90, length: 15 }
              ]
            },
            { 
              name: "Observant", 
              tier: SKILL_TIERS.TIER_3_2, 
              id: "observant", 
              top: 40, 
              left: 51,
              connections: [
                { to: "vigilant", direction: 90, length: 15 }
              ]
            },
            { 
              name: "Heightened Awareness", 
              tier: SKILL_TIERS.TIER_3_3, 
              id: "heightened-awareness", 
              top: 40, 
              left: 74,
              connections: [
                { to: "clairvoyant", direction: 90, length: 15 }
              ]
            }
          ]
        },
        {
          nodes: [
            { 
              name: "Sharpshooter", 
              tier: SKILL_TIERS.TIER_4_1, 
              id: "sharpshooter", 
              top: 50, 
              left: 28,
              connections: [
                { to: "superior-perception", direction: 36, length: 31 }
              ]
            },
            { 
              name: "Vigilant", 
              tier: SKILL_TIERS.TIER_4_2, 
              id: "vigilant", 
              top: 50, 
              left: 51,
              connections: [
                { to: "superior-perception", direction: 90, length: 15 }
              ]
            },
            { 
              name: "Clairvoyant", 
              tier: SKILL_TIERS.TIER_4_3, 
              id: "clairvoyant", 
              top: 50, 
              left: 74,
              connections: [
                { to: "superior-perception", direction: 143, length: 31 }
              ]
            }
          ]
        },
        {
          nodes: [
            {
              name: "Superior Perception",
              tier: SKILL_TIERS.TIER_5,
              id: "superior-perception",
              top: 60,
              left: 51,
              connections: [
                { to: "omniscient-sight", direction: 90, length: 15 }
              ]
            }
          ]
        },
        {
          nodes: [
            { 
              name: "Omniscient Sight", 
              tier: SKILL_TIERS.TIER_6, 
              id: "omniscient-sight", 
              top: 70, 
              left: 51 
            }
          ]
        }
      ],
      details: {
        [SKILL_TIERS.TIER_1]: {
          name: "Perception",
          id: "perception",
          pointCost: 1,
          prerequisites: ["None"],
          description: "Proficiency in Perception represents your keen senses and ability to notice things that others might miss. As you improve, you become better at detecting hidden objects, sounds, and movements.",
          featureAdded: "Proficiency in Perception"
        },
        [SKILL_TIERS.TIER_2]: {
          name: "Eagle Eye",
          id: "eagle-eye",
          pointCost: 1,
          prerequisites: ["Perception"],
          description: "You can see distant objects with great clarity. You gain advantage on Wisdom (Perception) checks that rely on sight.",
          featureAdded: "None"
        },
        [SKILL_TIERS.TIER_3_1]: {
          name: "Keen Senses",
          id: "keen-senses",
          pointCost: 1,
          prerequisites: ["Eagle Eye"],
          description: "Your senses are finely tuned. You gain advantage on Wisdom (Perception) checks that rely on hearing.",
          featureAdded: "None"
        },
        [SKILL_TIERS.TIER_3_2]: {
          name: "Observant",
          id: "observant",
          pointCost: 1,
          prerequisites: ["Eagle Eye"],
          description: "You are quick to notice details of your environment. You gain a +5 bonus to your passive Wisdom (Perception) score.",
          featureAdded: "None"
        },
        [SKILL_TIERS.TIER_3_3]: {
          name: "Heightened Awareness",
          id: "heightened-awareness",
          pointCost: 1,
          prerequisites: ["Eagle Eye"],
          description: "You are always on high alert. You can't be surprised while you are conscious.",
          featureAdded: "None"
        },
        [SKILL_TIERS.TIER_4_1]: {
          name: "Sharpshooter",
          id: "sharpshooter",
          pointCost: 1,
          prerequisites: ["Keen Senses"],
          description: "You can make ranged attacks with great accuracy. You gain a +2 bonus to attack rolls you make with ranged weapons.",
          featureAdded: "None"
        },
        [SKILL_TIERS.TIER_4_2]: {
          name: "Vigilant",
          id: "vigilant",
          pointCost: 1,
          prerequisites: ["Observant"],
          description: "You are always on the lookout for danger. You gain advantage on initiative rolls.",
          featureAdded: "None"
        },
        [SKILL_TIERS.TIER_4_3]: {
          name: "Clairvoyant",
          id: "clairvoyant",
          pointCost: 1,
          prerequisites: ["Heightened Awareness"],
          description: "You can use your senses to gain information from afar. Once per day, you can cast the spell Clairvoyance without using a spell slot.",
          featureAdded: "None"
        },
        [SKILL_TIERS.TIER_5]: {
          name: "Superior Perception",
          id: "superior-perception",
          pointCost: 1,
          prerequisites: ["Sharpshooter", "Vigilant", "Clairvoyant"],
          description: "Your perception skills are unparalleled. You gain expertise in the Perception skill.",
          featureAdded: "None"
        },
        [SKILL_TIERS.TIER_6]: {
          name: "Omniscient Sight",
          id: "omniscient-sight",
          pointCost: 1,
          prerequisites: ["Superior Perception"],
          description: "Your senses are so sharp that you can perceive the unseen. You gain truesight out to a range of 30 feet.",
          featureAdded: "None"
        }
      }
    },
    [SKILL_TYPES.PERFORMANCE]: {
      displayName: "Performance",
      branches: [
        {
          nodes: [
            { 
              name: "Performance", 
              tier: SKILL_TIERS.TIER_1, 
              id: "performance", 
              top: 20,
              left: 51,
              connections: [
                { to: "entertainer", direction: 90, length: 15 }
              ]
            }
          ]
        },
        {
          nodes: [            
            { 
              name: "Entertainer", 
              tier: SKILL_TIERS.TIER_2, 
              id: "entertainer", 
              top: 30, 
              left: 51,
              connections: [
                { to: "inspiring-song", direction: 36, length: 31},
                { to: "captivating-story", direction: 90, length: 15 },
                { to: "mesmerizing-dance", direction: 143, length: 31 }
              ]
            }
          ]
        },
        {
          nodes: [
            { 
              name: "Inspiring Song", 
              tier: SKILL_TIERS.TIER_3_1, 
              id: "inspiring-song", 
              top: 40, 
              left: 28,
              connections: [
                { to: "bardic-inspiration", direction: 90, length: 15 }
              ]
            },
            { 
              name: "Captivating Story", 
              tier: SKILL_TIERS.TIER_3_2, 
              id: "captivating-story", 
              top: 40, 
              left: 51,
              connections: [
                { to: "master-storyteller", direction: 90, length: 15 }
              ]
            },
            { 
              name: "Mesmerizing Dance", 
              tier: SKILL_TIERS.TIER_3_3, 
              id: "mesmerizing-dance", 
              top: 40, 
              left: 74,
              connections: [
                { to: "graceful-movements", direction: 90, length: 15 }
              ]
            }
          ]
        },
        {
          nodes: [
            { 
              name: "Bardic Inspiration", 
              tier: SKILL_TIERS.TIER_4_1, 
              id: "bardic-inspiration", 
              top: 50, 
              left: 28,
              connections: [
                { to: "superior-performance", direction: 36, length: 31 }
              ]
            },
            { 
              name: "Master Storyteller", 
              tier: SKILL_TIERS.TIER_4_2, 
              id: "master-storyteller", 
              top: 50, 
              left: 51,
              connections: [
                { to: "superior-performance", direction: 90, length: 15 }
              ]
            },
            { 
              name: "Graceful Movements", 
              tier: SKILL_TIERS.TIER_4_3, 
              id: "graceful-movements", 
              top: 50, 
              left: 74,
              connections: [
                { to: "superior-performance", direction: 143, length: 31 }
              ]
            }
          ]
        },
        {
          nodes: [
            {
              name: "Superior Performance",
              tier: SKILL_TIERS.TIER_5,
              id: "superior-performance",
              top: 60,
              left: 51,
              connections: [
                { to: "virtuoso", direction: 90, length: 15 }
              ]
            }
          ]
        },
        {
          nodes: [
            { 
              name: "Virtuoso", 
              tier: SKILL_TIERS.TIER_6, 
              id: "virtuoso", 
              top: 70, 
              left: 51 
            }
          ]
        }
      ],
      details: {
        [SKILL_TIERS.TIER_1]: {
          name: "Performance",
          id: "performance",
          pointCost: 1,
          prerequisites: ["None"],
          description: "Proficiency in Performance represents your ability to captivate an audience through music, storytelling, or other forms of entertainment. As you improve, you become better at inspiring and mesmerizing others.",
          featureAdded: "Proficiency in Performance"
        },
        [SKILL_TIERS.TIER_2]: {
          name: "Entertainer",
          id: "entertainer",
          pointCost: 1,
          prerequisites: ["Performance"],
          description: "You have a natural talent for entertaining others. You gain advantage on Charisma (Performance) checks.",
          featureAdded: "None"
        },
        [SKILL_TIERS.TIER_3_1]: {
          name: "Inspiring Song",
          id: "inspiring-song",
          pointCost: 1,
          prerequisites: ["Entertainer"],
          description: "You can inspire others through your music. Once per short rest, you can use a bonus action to grant an ally within 60 feet a bonus equal to your Charisma modifier to their next ability check, attack roll, or saving throw.",
          featureAdded: "None"
        },
        [SKILL_TIERS.TIER_3_2]: {
          name: "Captivating Story",
          id: "captivating-story",
          pointCost: 1,
          prerequisites: ["Entertainer"],
          description: "Your storytelling can captivate an audience. You can use your action to tell a story, causing all creatures within 30 feet to make a Wisdom saving throw (DC equal to 8 + your proficiency bonus + your Charisma modifier). On a failed save, they are charmed by you until the end of your next turn.",
          featureAdded: "None"
        },
        [SKILL_TIERS.TIER_3_3]: {
          name: "Mesmerizing Dance",
          id: "mesmerizing-dance",
          pointCost: 1,
          prerequisites: ["Entertainer"],
          description: "Your dancing can mesmerize those who watch. You can use your action to perform a dance, causing all creatures within 30 feet to make a Wisdom saving throw (DC equal to 8 + your proficiency bonus + your Charisma modifier). On a failed save, they are stunned until the end of your next turn.",
          featureAdded: "None"
        },
        [SKILL_TIERS.TIER_4_1]: {
          name: "Bardic Inspiration",
          id: "bardic-inspiration",
          pointCost: 1,
          prerequisites: ["Inspiring Song"],
          description: "You can use your musical talent to inspire others. You gain the Bardic Inspiration feature, allowing you to use a bonus action to grant an ally within 60 feet an inspiration die (1d6). The ally can add the die to one ability check, attack roll, or saving throw they make. The inspiration die lasts for 10 minutes.",
          featureAdded: "None"
        },
        [SKILL_TIERS.TIER_4_2]: {
          name: "Master Storyteller",
          id: "master-storyteller",
          pointCost: 1,
          prerequisites: ["Captivating Story"],
          description: "Your stories are legendary. You gain expertise in the Performance skill.",
          featureAdded: "None"
        },
        [SKILL_TIERS.TIER_4_3]: {
          name: "Graceful Movements",
          id: "graceful-movements",
          pointCost: 1,
          prerequisites: ["Mesmerizing Dance"],
          description: "Your movements are incredibly graceful. You gain a +2 bonus to AC while you are not wearing armor or wielding a shield.",
          featureAdded: "None"
        },
        [SKILL_TIERS.TIER_5]: {
          name: "Superior Performance",
          id: "superior-performance",
          pointCost: 1,
          prerequisites: ["Bardic Inspiration", "Master Storyteller", "Graceful Movements"],
          description: "Your performance skills are unparalleled. You gain the ability to use your Performance skill to cast the spell Enthrall once per day without using a spell slot.",
          featureAdded: "None"
        },
        [SKILL_TIERS.TIER_6]: {
          name: "Virtuoso",
          id: "virtuoso",
          pointCost: 1,
          prerequisites: ["Superior Performance"],
          description: "Your talent is unmatched, making you a true virtuoso. You gain advantage on all Charisma checks.",
          featureAdded: "None"
        }
      }
    },
    [SKILL_TYPES.PERSUASION]: {
      displayName: "Persuasion",
      branches: [
        {
          nodes: [
            { 
              name: "Persuasion", 
              tier: SKILL_TIERS.TIER_1, 
              id: "persuasion", 
              top: 20,
              left: 51,
              connections: [
                { to: "silver-tongue", direction: 90, length: 15 }
              ]
            }
          ]
        },
        {
          nodes: [            
            { 
              name: "Silver Tongue", 
              tier: SKILL_TIERS.TIER_2, 
              id: "silver-tongue", 
              top: 30, 
              left: 51,
              connections: [
                { to: "charming-demeanor", direction: 36, length: 31},
                { to: "compelling-argument", direction: 90, length: 15 },
                { to: "smooth-talk", direction: 143, length: 31 }
              ]
            }
          ]
        },
        {
          nodes: [
            { 
              name: "Charming Demeanor", 
              tier: SKILL_TIERS.TIER_3_1, 
              id: "charming-demeanor", 
              top: 40, 
              left: 28,
              connections: [
                { to: "master-charm", direction: 90, length: 15 }
              ]
            },
            { 
              name: "Compelling Argument", 
              tier: SKILL_TIERS.TIER_3_2, 
              id: "compelling-argument", 
              top: 40, 
              left: 51,
              connections: [
                { to: "diplomat", direction: 90, length: 15 }
              ]
            },
            { 
              name: "Smooth Talk", 
              tier: SKILL_TIERS.TIER_3_3, 
              id: "smooth-talk", 
              top: 40, 
              left: 74,
              connections: [
                { to: "eloquence", direction: 90, length: 15 }
              ]
            }
          ]
        },
        {
          nodes: [
            { 
              name: "Master Charm", 
              tier: SKILL_TIERS.TIER_4_1, 
              id: "master-charm", 
              top: 50, 
              left: 28,
              connections: [
                { to: "superior-persuasion", direction: 36, length: 31 }
              ]
            },
            { 
              name: "Diplomat", 
              tier: SKILL_TIERS.TIER_4_2, 
              id: "diplomat", 
              top: 50, 
              left: 51,
              connections: [
                { to: "superior-persuasion", direction: 90, length: 15 }
              ]
            },
            { 
              name: "Eloquence", 
              tier: SKILL_TIERS.TIER_4_3, 
              id: "eloquence", 
              top: 50, 
              left: 74,
              connections: [
                { to: "superior-persuasion", direction: 143, length: 31 }
              ]
            }
          ]
        },
        {
          nodes: [
            {
              name: "Superior Persuasion",
              tier: SKILL_TIERS.TIER_5,
              id: "superior-persuasion",
              top: 60,
              left: 51,
              connections: [
                { to: "master-negotiator", direction: 90, length: 15 }
              ]
            }
          ]
        },
        {
          nodes: [
            { 
              name: "Master Negotiator", 
              tier: SKILL_TIERS.TIER_6, 
              id: "master-negotiator", 
              top: 70, 
              left: 51 
            }
          ]
        }
      ],
      details: {
        [SKILL_TIERS.TIER_1]: {
          name: "Persuasion",
          id: "persuasion",
          pointCost: 1,
          prerequisites: ["None"],
          description: "Proficiency in Persuasion represents your ability to influence others through words and charm. As you improve, you become better at convincing and negotiating with others.",
          featureAdded: "Proficiency in Persuasion"
        },
        [SKILL_TIERS.TIER_2]: {
          name: "Silver Tongue",
          id: "silver-tongue",
          pointCost: 1,
          prerequisites: ["Persuasion"],
          description: "You have a way with words that makes others more inclined to listen to you. You gain advantage on Charisma (Persuasion) checks.",
          featureAdded: "None"
        },
        [SKILL_TIERS.TIER_3_1]: {
          name: "Charming Demeanor",
          id: "charming-demeanor",
          pointCost: 1,
          prerequisites: ["Silver Tongue"],
          description: "Your charming demeanor makes others more likely to trust you. When you successfully persuade a creature, you gain a +2 bonus to your next Charisma (Persuasion) check.",
          featureAdded: "None"
        },
        [SKILL_TIERS.TIER_3_2]: {
          name: "Compelling Argument",
          id: "compelling-argument",
          pointCost: 1,
          prerequisites: ["Silver Tongue"],
          description: "Your arguments are compelling and difficult to refute. You can use your action to make a Charisma (Persuasion) check against a creature's Wisdom (Insight) check. If you succeed, the creature is charmed by you for 1 minute.",
          featureAdded: "None"
        },
        [SKILL_TIERS.TIER_3_3]: {
          name: "Smooth Talk",
          id: "smooth-talk",
          pointCost: 1,
          prerequisites: ["Silver Tongue"],
          description: "Your smooth talking can get you out of tricky situations. You can use your action to make a Charisma (Persuasion) check against a creature's Wisdom (Insight) check. If you succeed, the creature is unable to attack you until the end of your next turn.",
          featureAdded: "None"
        },
        [SKILL_TIERS.TIER_4_1]: {
          name: "Master Charm",
          id: "master-charm",
          pointCost: 1,
          prerequisites: ["Charming Demeanor"],
          description: "Your charm is irresistible. You gain expertise in the Persuasion skill.",
          featureAdded: "None"
        },
        [SKILL_TIERS.TIER_4_2]: {
          name: "Diplomat",
          id: "diplomat",
          pointCost: 1,
          prerequisites: ["Compelling Argument"],
          description: "Your diplomatic skills are unmatched. You can use your action to make a Charisma (Persuasion) check to resolve conflicts without violence. If you succeed, the creature is convinced to negotiate or stand down.",
          featureAdded: "None"
        },
        [SKILL_TIERS.TIER_4_3]: {
          name: "Eloquence",
          id: "eloquence",
          pointCost: 1,
          prerequisites: ["Smooth Talk"],
          description: "Your eloquence can sway even the most stubborn minds. You gain advantage on Charisma checks made to change a creature's attitude or beliefs.",
          featureAdded: "None"
        },
        [SKILL_TIERS.TIER_5]: {
          name: "Superior Persuasion",
          id: "superior-persuasion",
          pointCost: 1,
          prerequisites: ["Master Charm", "Diplomat", "Eloquence"],
          description: "Your persuasion skills are unparalleled. You gain the ability to cast the spell Suggestion once per day without using a spell slot.",
          featureAdded: "None"
        },
        [SKILL_TIERS.TIER_6]: {
          name: "Master Negotiator",
          id: "master-negotiator",
          pointCost: 1,
          prerequisites: ["Superior Persuasion"],
          description: "You are a master negotiator, able to broker deals with ease. You gain advantage on all Charisma checks.",
          featureAdded: "None"
        }
      }
    },
    [SKILL_TYPES.RELIGION]: {
      displayName: "Religion",
      branches: [
        {
          nodes: [
            { 
              name: "Religion", 
              tier: SKILL_TIERS.TIER_1, 
              id: "religion", 
              top: 20,
              left: 51,
              connections: [
                { to: "theologian", direction: 90, length: 15 }
              ]
            }
          ]
        },
        {
          nodes: [            
            { 
              name: "Theologian", 
              tier: SKILL_TIERS.TIER_2, 
              id: "theologian", 
              top: 30, 
              left: 51,
              connections: [
                { to: "divine-insight", direction: 36, length: 31},
                { to: "holy-ritualist", direction: 90, length: 15 },
                { to: "faithful-disciple", direction: 143, length: 31 }
              ]
            }
          ]
        },
        {
          nodes: [
            { 
              name: "Divine Insight", 
              tier: SKILL_TIERS.TIER_3_1, 
              id: "divine-insight", 
              top: 40, 
              left: 28,
              connections: [
                { to: "holy-scholar", direction: 90, length: 15 }
              ]
            },
            { 
              name: "Holy Ritualist", 
              tier: SKILL_TIERS.TIER_3_2, 
              id: "holy-ritualist", 
              top: 40, 
              left: 51,
              connections: [
                { to: "ritual-master", direction: 90, length: 15 }
              ]
            },
            { 
              name: "Faithful Disciple", 
              tier: SKILL_TIERS.TIER_3_3, 
              id: "faithful-disciple", 
              top: 40, 
              left: 74,
              connections: [
                { to: "divine-champion", direction: 90, length: 15 }
              ]
            }
          ]
        },
        {
          nodes: [
            { 
              name: "Holy Scholar", 
              tier: SKILL_TIERS.TIER_4_1, 
              id: "holy-scholar", 
              top: 50, 
              left: 28,
              connections: [
                { to: "superior-religion", direction: 36, length: 31 }
              ]
            },
            { 
              name: "Ritual Master", 
              tier: SKILL_TIERS.TIER_4_2, 
              id: "ritual-master", 
              top: 50, 
              left: 51,
              connections: [
                { to: "superior-religion", direction: 90, length: 15 }
              ]
            },
            { 
              name: "Divine Champion", 
              tier: SKILL_TIERS.TIER_4_3, 
              id: "divine-champion", 
              top: 50, 
              left: 74,
              connections: [
                { to: "superior-religion", direction: 143, length: 31 }
              ]
            }
          ]
        },
        {
          nodes: [
            {
              name: "Superior Religion",
              tier: SKILL_TIERS.TIER_5,
              id: "superior-religion",
              top: 60,
              left: 51,
              connections: [
                { to: "divine-avatar", direction: 90, length: 15 }
              ]
            }
          ]
        },
        {
          nodes: [
            { 
              name: "Divine Avatar", 
              tier: SKILL_TIERS.TIER_6, 
              id: "divine-avatar", 
              top: 70, 
              left: 51 
            }
          ]
        }
      ],
      details: {
        [SKILL_TIERS.TIER_1]: {
          name: "Religion",
          id: "religion",
          pointCost: 1,
          prerequisites: ["None"],
          description: "Proficiency in Religion represents your knowledge of religious practices, deities, and divine lore. As you improve, you become better at understanding and utilizing divine magic and rituals.",
          featureAdded: "Proficiency in Religion"
        },
        [SKILL_TIERS.TIER_2]: {
          name: "Theologian",
          id: "theologian",
          pointCost: 1,
          prerequisites: ["Religion"],
          description: "You have a deep understanding of religious texts and teachings. You gain advantage on Intelligence (Religion) checks.",
          featureAdded: "None"
        },
        [SKILL_TIERS.TIER_3_1]: {
          name: "Divine Insight",
          id: "divine-insight",
          pointCost: 1,
          prerequisites: ["Theologian"],
          description: "You gain insight from the divine. Once per day, you can use your action to gain advantage on one ability check, attack roll, or saving throw.",
          featureAdded: "None"
        },
        [SKILL_TIERS.TIER_3_2]: {
          name: "Holy Ritualist",
          id: "holy-ritualist",
          pointCost: 1,
          prerequisites: ["Theologian"],
          description: "You are skilled in performing holy rituals. You gain proficiency in the Ritual Caster feat.",
          featureAdded: "None"
        },
        [SKILL_TIERS.TIER_3_3]: {
          name: "Faithful Disciple",
          id: "faithful-disciple",
          pointCost: 1,
          prerequisites: ["Theologian"],
          description: "Your faith is unwavering. You gain advantage on saving throws against being frightened or charmed.",
          featureAdded: "None"
        },
        [SKILL_TIERS.TIER_4_1]: {
          name: "Holy Scholar",
          id: "holy-scholar",
          pointCost: 1,
          prerequisites: ["Divine Insight"],
          description: "Your knowledge of holy texts is unparalleled. You gain expertise in the Religion skill.",
          featureAdded: "None"
        },
        [SKILL_TIERS.TIER_4_2]: {
          name: "Ritual Master",
          id: "ritual-master",
          pointCost: 1,
          prerequisites: ["Holy Ritualist"],
          description: "You can perform rituals with greater efficiency. You can cast any spell you know as a ritual if that spell has the ritual tag, without needing to prepare it.",
          featureAdded: "None"
        },
        [SKILL_TIERS.TIER_4_3]: {
          name: "Divine Champion",
          id: "divine-champion",
          pointCost: 1,
          prerequisites: ["Faithful Disciple"],
          description: "You are a champion of your faith. You gain the ability to cast the spell Divine Favor once per day without using a spell slot.",
          featureAdded: "None"
        },
        [SKILL_TIERS.TIER_5]: {
          name: "Superior Religion",
          id: "superior-religion",
          pointCost: 1,
          prerequisites: ["Holy Scholar", "Ritual Master", "Divine Champion"],
          description: "Your religious knowledge and skills are unmatched. You gain the ability to cast the spell Commune once per day without using a spell slot.",
          featureAdded: "None"
        },
        [SKILL_TIERS.TIER_6]: {
          name: "Divine Avatar",
          id: "divine-avatar",
          pointCost: 1,
          prerequisites: ["Superior Religion"],
          description: "You are a true avatar of your deity. You gain the ability to cast the spell Divine Intervention once per day without using a spell slot.",
          featureAdded: "None"
        }
      }
    },
    [SKILL_TYPES.SLEIGHT_OF_HAND]: {
      displayName: "Sleight of Hand",
      branches: [
        {
          nodes: [
            {
              name: "Sleight of Hand",
              tier: SKILL_TIERS.TIER_1,
              id: "sleight-of-hand",
              top: 20,
              left: 50,
              connections: [
                { to: "pickpocket", direction: 90, length: 15 }
              ]
            }
          ]
        },
        {
          nodes: [
            {
              name: "Pickpocket",
              tier: SKILL_TIERS.TIER_2,
              id: "pickpocket",
              top: 30,
              left: 50,
              connections: [
                { to: "quick-fingers", direction: 35, length: 30 },
                { to: "nimble-hands", direction: 90, length: 15 },
                { to: "deft-movement", direction: 145, length: 30 }
              ]
            }
          ]
        },
        {
          nodes: [
            {
              name: "Quick Fingers",
              tier: SKILL_TIERS.TIER_3_1,
              id: "quick-fingers",
              top: 40,
              left: 27,
              connections: [
                { to: "sticky-fingers", direction: 90, length: 15 }
              ]
            },
            {
              name: "Nimble Hands",
              tier: SKILL_TIERS.TIER_3_2,
              id: "nimble-hands",
              top: 40,
              left: 50,
              connections: [
                { to: "dexterous-movements", direction: 90, length: 15 }
              ]
            },
            {
              name: "Deft Movement",
              tier: SKILL_TIERS.TIER_3_3,
              id: "deft-movement",
              top: 40,
              left: 73,
              connections: [
                { to: "superior-agility", direction: 90, length: 15 }
              ]
            }
          ]
        },
        {
          nodes: [
            {
              name: "Sticky Fingers",
              tier: SKILL_TIERS.TIER_4_1,
              id: "sticky-fingers",
              top: 50,
              left: 27,
              connections: [
                { to: "superior-sleight-of-hand", direction: 35, length: 30 }
              ]
            },
            {
              name: "Dexterous Movements",
              tier: SKILL_TIERS.TIER_4_2,
              id: "dexterous-movements",
              top: 50,
              left: 50,
              connections: [
                { to: "superior-sleight-of-hand", direction: 90, length: 15 }
              ]
            },
            {
              name: "Superior Agility",
              tier: SKILL_TIERS.TIER_4_3,
              id: "superior-agility",
              top: 50,
              left: 73,
              connections: [
                { to: "superior-sleight-of-hand", direction: 145, length: 30 }
              ]
            }
          ]
        },
        {
          nodes: [
            {
              name: "Superior Sleight of Hand",
              tier: SKILL_TIERS.TIER_5,
              id: "superior-sleight-of-hand",
              top: 60,
              left: 50,
              connections: [
                { to: "master-thief", direction: 90, length: 15 }
              ]
            }
          ]
        },
        {
          nodes: [
            {
              name: "Master Thief",
              tier: SKILL_TIERS.TIER_6,
              id: "master-thief",
              top: 70,
              left: 50
            }
          ]
        }
      ],
      details: {
        [SKILL_TIERS.TIER_1]: {
          name: "Sleight of Hand",
          id: "sleight-of-hand",
          pointCost: 1,
          prerequisites: ["None"],
          description: "A proficiency in Sleight of Hand allows you to manipulate objects with ease.",
          featureAdded: "Proficiency in Sleight of Hand"
        },
        [SKILL_TIERS.TIER_2]: {
          name: "Pickpocket",
          id: "pickpocket",
          pointCost: 1,
          prerequisites: ["Sleight of Hand"],
          description: "You have advantage on Dexterity (Sleight of Hand) checks made to steal from a creature.",
          featureAdded: "None"
        },
        [SKILL_TIERS.TIER_3_1]: {
          name: "Quick Fingers",
          id: "quick-fingers",
          pointCost: 1,
          prerequisites: ["Pickpocket"],
          description: "You can perform actions with your hands faster than usual, allowing you to attempt to steal or perform similar tasks more efficiently.",
          featureAdded: "None"
        },
        [SKILL_TIERS.TIER_3_2]: {
          name: "Nimble Hands",
          id: "nimble-hands",
          pointCost: 1,
          prerequisites: ["Pickpocket"],
          description: "You gain proficiency in Dexterity (Sleight of Hand) checks involving intricate object manipulation.",
          featureAdded: "None"
        },
        [SKILL_TIERS.TIER_3_3]: {
          name: "Deft Movement",
          id: "deft-movement",
          pointCost: 1,
          prerequisites: ["Pickpocket"],
          description: "You can move with swiftness and agility, gaining advantage on Dexterity saving throws.",
          featureAdded: "None"
        },
        [SKILL_TIERS.TIER_4_1]: {
          name: "Sticky Fingers",
          id: "sticky-fingers",
          pointCost: 1,
          prerequisites: ["Quick Fingers"],
          description: "Your fingers seem to have a mind of their own when it comes to stealing or holding onto items.",
          featureAdded: "None"
        },
        [SKILL_TIERS.TIER_4_2]: {
          name: "Dexterous Movements",
          id: "dexterous-movements",
          pointCost: 1,
          prerequisites: ["Nimble Hands"],
          description: "Your Dexterity-based actions become smoother and faster.",
          featureAdded: "None"
        },
        [SKILL_TIERS.TIER_4_3]: {
          name: "Superior Agility",
          id: "superior-agility",
          pointCost: 1,
          prerequisites: ["Deft Movement"],
          description: "You gain advantage on all Dexterity checks, and your movement increases by 10 feet.",
          featureAdded: "None"
        },
        [SKILL_TIERS.TIER_5]: {
          name: "Superior Sleight of Hand",
          id: "superior-sleight-of-hand",
          pointCost: 1,
          prerequisites: ["Sticky Fingers", "Dexterous Movements", "Superior Agility"],
          description: "You gain expertise in the Sleight of Hand skill.",
          featureAdded: "None"
        },
        [SKILL_TIERS.TIER_6]: {
          name: "Master Thief",
          id: "master-thief",
          pointCost: 1,
          prerequisites: ["Superior Sleight of Hand"],
          description: "You become a master of thievery, able to bypass locks and traps with ease.",
          featureAdded: "None"
        }
      }
    },
    [SKILL_TYPES.STEALTH]: {
      displayName: "Stealth",
      branches: [
        {
          nodes: [
            { 
              name: "Stealth", 
              tier: SKILL_TIERS.TIER_1, 
              id: "stealth", 
              top: 20,
              left: 51,
              connections: [
                { to: "shadow-step", direction: 90, length: 15 }
              ]
            }
          ]
        },
        {
          nodes: [            
            { 
              name: "Shadow Step", 
              tier: SKILL_TIERS.TIER_2, 
              id: "shadow-step", 
              top: 30, 
              left: 51,
              connections: [
                { to: "silent-movement", direction: 36, length: 31},
                { to: "invisible-stalker", direction: 90, length: 15 },
                { to: "ghostly-presence", direction: 143, length: 31 }
              ]
            }
          ]
        },
        {
          nodes: [
            { 
              name: "Silent Movement", 
              tier: SKILL_TIERS.TIER_3_1, 
              id: "silent-movement", 
              top: 40, 
              left: 28,
              connections: [
                { to: "master-of-shadows", direction: 90, length: 15 }
              ]
            },
            { 
              name: "Invisible Stalker", 
              tier: SKILL_TIERS.TIER_3_2, 
              id: "invisible-stalker", 
              top: 40, 
              left: 51,
              connections: [
                { to: "shadow-master", direction: 90, length: 15 }
              ]
            },
            { 
              name: "Ghostly Presence", 
              tier: SKILL_TIERS.TIER_3_3, 
              id: "ghostly-presence", 
              top: 40, 
              left: 74,
              connections: [
                { to: "phantom", direction: 90, length: 15 }
              ]
            }
          ]
        },
        {
          nodes: [
            { 
              name: "Master of Shadows", 
              tier: SKILL_TIERS.TIER_4_1, 
              id: "master-of-shadows", 
              top: 50, 
              left: 28,
              connections: [
                { to: "superior-stealth", direction: 36, length: 31 }
              ]
            },
            { 
              name: "Shadow Master", 
              tier: SKILL_TIERS.TIER_4_2, 
              id: "shadow-master", 
              top: 50, 
              left: 51,
              connections: [
                { to: "superior-stealth", direction: 90, length: 15 }
              ]
            },
            { 
              name: "Phantom", 
              tier: SKILL_TIERS.TIER_4_3, 
              id: "phantom", 
              top: 50, 
              left: 74,
              connections: [
                { to: "superior-stealth", direction: 143, length: 31 }
              ]
            }
          ]
        },
        {
          nodes: [
            {
              name: "Superior Stealth",
              tier: SKILL_TIERS.TIER_5,
              id: "superior-stealth",
              top: 60,
              left: 51,
              connections: [
                { to: "legendary-shadow", direction: 90, length: 15 }
              ]
            }
          ]
        },
        {
          nodes: [
            { 
              name: "Legendary Shadow", 
              tier: SKILL_TIERS.TIER_6, 
              id: "legendary-shadow", 
              top: 70, 
              left: 51 
            }
          ]
        }
      ],
      details: {
        [SKILL_TIERS.TIER_1]: {
          name: "Stealth",
          id: "stealth",
          pointCost: 1,
          prerequisites: ["None"],
          description: "Proficiency in Stealth represents your ability to move quietly and hide effectively. As you improve, you become better at avoiding detection and moving silently.",
          featureAdded: "Proficiency in Stealth"
        },
        [SKILL_TIERS.TIER_2]: {
          name: "Shadow Step",
          id: "shadow-step",
          pointCost: 1,
          prerequisites: ["Stealth"],
          description: "You can move from shadow to shadow with ease. You gain advantage on Dexterity (Stealth) checks.",
          featureAdded: "None"
        },
        [SKILL_TIERS.TIER_3_1]: {
          name: "Silent Movement",
          id: "silent-movement",
          pointCost: 1,
          prerequisites: ["Shadow Step"],
          description: "Your movements are completely silent. You can take the Hide action as a bonus action on your turn.",
          featureAdded: "None"
        },
        [SKILL_TIERS.TIER_3_2]: {
          name: "Invisible Stalker",
          id: "invisible-stalker",
          pointCost: 1,
          prerequisites: ["Shadow Step"],
          description: "You can move unseen like an invisible stalker. You can use your action to become invisible until the start of your next turn. You can use this ability a number of times equal to your proficiency bonus, regaining all uses after a long rest.",
          featureAdded: "None"
        },
        [SKILL_TIERS.TIER_3_3]: {
          name: "Ghostly Presence",
          id: "ghostly-presence",
          pointCost: 1,
          prerequisites: ["Shadow Step"],
          description: "Your presence is ghostly and hard to detect. You gain advantage on checks made to hide or disguise yourself.",
          featureAdded: "None"
        },
        [SKILL_TIERS.TIER_4_1]: {
          name: "Master of Shadows",
          id: "master-of-shadows",
          pointCost: 1,
          prerequisites: ["Silent Movement"],
          description: "You are a master of using shadows to your advantage. You gain expertise in the Stealth skill.",
          featureAdded: "None"
        },
        [SKILL_TIERS.TIER_4_2]: {
          name: "Shadow Master",
          id: "shadow-master",
          pointCost: 1,
          prerequisites: ["Invisible Stalker"],
          description: "You have mastered the art of moving through shadows. You can use your action to cast the spell Pass Without Trace without using a spell slot. You can use this ability a number of times equal to your proficiency bonus, regaining all uses after a long rest.",
          featureAdded: "None"
        },
        [SKILL_TIERS.TIER_4_3]: {
          name: "Phantom",
          id: "phantom",
          pointCost: 1,
          prerequisites: ["Ghostly Presence"],
          description: "You move like a phantom in the night. You can use your action to cast the spell Greater Invisibility without using a spell slot. You can use this ability a number of times equal to your proficiency bonus, regaining all uses after a long rest.",
          featureAdded: "None"
        },
        [SKILL_TIERS.TIER_5]: {
          name: "Superior Stealth",
          id: "superior-stealth",
          pointCost: 1,
          prerequisites: ["Master of Shadows", "Shadow Master", "Phantom"],
          description: "Your stealth skills are unparalleled. You gain the ability to cast the spell Invisibility at will without using a spell slot.",
          featureAdded: "None"
        },
        [SKILL_TIERS.TIER_6]: {
          name: "Legendary Shadow",
          id: "legendary-shadow",
          pointCost: 1,
          prerequisites: ["Superior Stealth"],
          description: "You are a legendary shadow, able to move undetected and unseen. You gain advantage on all Dexterity checks.",
          featureAdded: "None"
        }
      }
    },
    [SKILL_TYPES.SURVIVAL]: {
      displayName: "Survival",
      branches: [
        {
          nodes: [
            { 
              name: "Survival", 
              tier: SKILL_TIERS.TIER_1, 
              id: "survival", 
              top: 20,
              left: 51,
              connections: [
                { to: "tracker", direction: 90, length: 15 }
              ]
            }
          ]
        },
        {
          nodes: [            
            { 
              name: "Tracker", 
              tier: SKILL_TIERS.TIER_2, 
              id: "tracker", 
              top: 30, 
              left: 51,
              connections: [
                { to: "hunter", direction: 36, length: 31},
                { to: "forager", direction: 90, length: 15 },
                { to: "survivalist", direction: 143, length: 31 }
              ]
            }
          ]
        },
        {
          nodes: [
            { 
              name: "Hunter", 
              tier: SKILL_TIERS.TIER_3_1, 
              id: "hunter", 
              top: 40, 
              left: 28,
              connections: [
                { to: "expert-hunter", direction: 90, length: 15 }
              ]
            },
            { 
              name: "Forager", 
              tier: SKILL_TIERS.TIER_3_2, 
              id: "forager", 
              top: 40, 
              left: 51,
              connections: [
                { to: "wilderness-survival", direction: 90, length: 15 }
              ]
            },
            { 
              name: "Survivalist", 
              tier: SKILL_TIERS.TIER_3_3, 
              id: "survivalist", 
              top: 40, 
              left: 74,
              connections: [
                { to: "wilderness-expert", direction: 90, length: 15 }
              ]
            }
          ]
        },
        {
          nodes: [
            { 
              name: "Expert Hunter", 
              tier: SKILL_TIERS.TIER_4_1, 
              id: "expert-hunter", 
              top: 50, 
              left: 28,
              connections: [
                { to: "superior-survival", direction: 36, length: 31 }
              ]
            },
            { 
              name: "Wilderness Survival", 
              tier: SKILL_TIERS.TIER_4_2, 
              id: "wilderness-survival", 
              top: 50, 
              left: 51,
              connections: [
                { to: "superior-survival", direction: 90, length: 15 }
              ]
            },
            { 
              name: "Wilderness Expert", 
              tier: SKILL_TIERS.TIER_4_3, 
              id: "wilderness-expert", 
              top: 50, 
              left: 74,
              connections: [
                { to: "superior-survival", direction: 143, length: 31 }
              ]
            }
          ]
        },
        {
          nodes: [
            {
              name: "Superior Survival",
              tier: SKILL_TIERS.TIER_5,
              id: "superior-survival",
              top: 60,
              left: 51,
              connections: [
                { to: "master-tracker", direction: 90, length: 15 }
              ]
            }
          ]
        },
        {
          nodes: [
            { 
              name: "Master Tracker", 
              tier: SKILL_TIERS.TIER_6, 
              id: "master-tracker", 
              top: 70, 
              left: 51 
            }
          ]
        }
      ],
      details: {
        [SKILL_TIERS.TIER_1]: {
          name: "Survival",
          id: "survival",
          pointCost: 1,
          prerequisites: ["None"],
          description: "Proficiency in Survival represents your ability to survive in the wilderness, track creatures, and find food and water. As you improve, you become better at enduring harsh conditions and navigating through the wild.",
          featureAdded: "Proficiency in Survival"
        },
        [SKILL_TIERS.TIER_2]: {
          name: "Tracker",
          id: "tracker",
          pointCost: 1,
          prerequisites: ["Survival"],
          description: "You can track creatures with ease. You gain advantage on Wisdom (Survival) checks made to track creatures.",
          featureAdded: "None"
        },
        [SKILL_TIERS.TIER_3_1]: {
          name: "Hunter",
          id: "hunter",
          pointCost: 1,
          prerequisites: ["Tracker"],
          description: "You are skilled at hunting. You gain advantage on attack rolls against beasts and can use your action to locate nearby game.",
          featureAdded: "None"
        },
        [SKILL_TIERS.TIER_3_2]: {
          name: "Forager",
          id: "forager",
          pointCost: 1,
          prerequisites: ["Tracker"],
          description: "You can find food and water in the wild. You gain advantage on Wisdom (Survival) checks made to find food and water, and you can provide enough food and water for yourself and up to five other people each day.",
          featureAdded: "None"
        },
        [SKILL_TIERS.TIER_3_3]: {
          name: "Survivalist",
          id: "survivalist",
          pointCost: 1,
          prerequisites: ["Tracker"],
          description: "You are adept at surviving in harsh conditions. You gain advantage on saving throws against extreme weather conditions and can provide shelter for yourself and up to five other people each night.",
          featureAdded: "None"
        },
        [SKILL_TIERS.TIER_4_1]: {
          name: "Expert Hunter",
          id: "expert-hunter",
          pointCost: 1,
          prerequisites: ["Hunter"],
          description: "You are an expert hunter. You gain expertise in the Survival skill and can use your action to identify tracks, scat, and other signs left by creatures.",
          featureAdded: "None"
        },
        [SKILL_TIERS.TIER_4_2]: {
          name: "Wilderness Survival",
          id: "wilderness-survival",
          pointCost: 1,
          prerequisites: ["Forager"],
          description: "You can survive in the wilderness indefinitely. You gain the ability to cast the spell Goodberry once per day without using a spell slot.",
          featureAdded: "None"
        },
        [SKILL_TIERS.TIER_4_3]: {
          name: "Wilderness Expert",
          id: "wilderness-expert",
          pointCost: 1,
          prerequisites: ["Survivalist"],
          description: "You are a wilderness expert. You gain the ability to cast the spell Pass Without Trace once per day without using a spell slot.",
          featureAdded: "None"
        },
        [SKILL_TIERS.TIER_5]: {
          name: "Superior Survival",
          id: "superior-survival",
          pointCost: 1,
          prerequisites: ["Expert Hunter", "Wilderness Survival", "Wilderness Expert"],
          description: "Your survival skills are unparalleled. You gain the ability to cast the spell Commune with Nature once per day without using a spell slot.",
          featureAdded: "None"
        },
        [SKILL_TIERS.TIER_6]: {
          name: "Master Tracker",
          id: "master-tracker",
          pointCost: 1,
          prerequisites: ["Superior Survival"],
          description: "You are a master tracker, able to track even the most elusive creatures. You gain advantage on all Wisdom (Survival) checks.",
          featureAdded: "None"
        }
      }
    }    
  }
};

export default nodeSkillsData;