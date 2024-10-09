// src/node-specializations-data.js for Fate's Compass

export const nodeSpecializationData = {
    specializations: {
      "acrobatics": {
        displayName: "Acrobatics",
        branches: [
          {
            nodes: [
              {header: "Dragonborne",
                top: 10,
                left: 51
              },
              { 
                name: "Acrobatics", 
                tier: "tier-1", 
                id: "acrobatics", 
                top: 20,
                left: 51,
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
                tier: "tier-2", 
                id: "kip-up", 
                top: 30, 
                left: 51,
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
                tier: "tier-3-1", 
                id: "fleetfoot", 
                top: 40, 
                left: 28,
                connections: [
                  { to: "withdraw", direction: 90, length: 15 }
                ]
              },
              { 
                name: "Evasive Tumble", 
                tier: "tier-3-2", 
                id: "evasive-tumble", 
                top: 40, 
                left: 51,
                connections: [
                  { to: "slip-away", direction: 90, length: 15 }
                ]
              },
              { 
                name: "Slippery", 
                tier: "tier-3-3", 
                id: "slippery", 
                top: 40, 
                left: 74,
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
                tier: "tier-4-1", 
                id: "withdraw", 
                top: 50, 
                left: 28,
                connections: [
                  { to: "superior-acrobatics", direction: 35, length: 30 }
                ]
              },
              { 
                name: "Slip Away", 
                tier: "tier-4-2", 
                id: "slip-away", 
                top: 50, 
                left: 51,
                connections: [
                  { to: "superior-acrobatics", direction: 90, length: 15 }
                ]
              },
              { 
                name: "Escape Artist", 
                tier: "tier-4-3", 
                id: "escape-artist", 
                top: 50, 
                left: 74,
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
              tier: "tier-5",
              id: "superior-acrobatics",
              top: 60,
              left: 51,
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
                tier: "tier-6", 
                id: "wall-runner", 
                top: 70, 
                left: 51 
              }
            ]
          }
        ],
        details: {
          "tier-1": {
            name: "Acrobatics",
            id: "acrobatics",
            pointCost: 1,
            prerequisites: ["None"],
            description: "A proficiency in acrobatics represent deft control over your body. Whether you are sliding across a sheet of ice, balancing on a tightrope, or trying to stay upright amid the fury of the raging sea, your proficiency in acrobatics helps you stay on your toes. Continuing to improve your skill lets you learn to tumble your way through danger, evade aimed blows and reckless volleys, stride through all manner of terrain and accomplish gravity-defying feats of dexterity.",
            featureAdded: "Proficiency in Acrobatics"
          },
          "tier-2": {
            name: "Kip-Up",
            id: "kip-up",
            pointCost: 1,
            prerequisites: ["Acrobatics"],
            description: "While prone, the act of standing only requires 10 feet of your available movement.",
            featureAdded: "None"
          },
          "tier-3-1": {
            name: "Fleetfoot",
            id: "fleetfoot",
            pointCost: 1,
            prerequisites: ["Kip-Up"],
            description: "Your swift stride allows you to navigate through challenging terrain with care. Your movement speed increases by 10 feet. When you use the Dash action, difficult terrain doesn't require extra movement for this turn.",
            featureAdded: "None"
          },
          "tier-3-2": {
            name: "Evasive Tumble",
            id: "evasive-tumble",
            pointCost: 1,
            prerequisites: ["Kip-Up"],
            description: "Using an action or bonus action, you can maneuver through the space of a hostile creature to reach the opposite side, assuming you have sufficient movement. Furthermore, when calculating fall damage you receive, consider the fall to be from 20 feet less than its actual height, with the lowest possible fall height being 0 feet.",
            featureAdded: "None"
          },
          "tier-3-3": {
            name: "Slippery",
            id: "slippery",
            pointCost: 1,
            prerequisites: ["Kip-Up"],
            description: "You are granted advantage on saving throws to dodge or resist traps and have resistance to the damage they cause. Whenever you successfully make a Dexterity saving throw, you can use your reaction to move up to half of your movement speed.",
            featureAdded: "None"
          },
          "tier-4-1": {
            name: "Withdraw",
            id: "withdraw",
            pointCost: 1,
            prerequisites: ["Fleetfoot"],
            description: "Upon hitting a creature with an attack, you avoid provoking opportunity attacks from that creature for the rest of the turn.",
            featureAdded: "None"
          },
          "tier-4-2": {
            name: "Slip Away",
            id: "slip-away",
            pointCost: 1,
            prerequisites: ["Evasive Tumble"],
            description: "When you perform the Dodge action, you can promptly move 5 feet in any direction without inciting opportunity attacks, along with your standard movement.",
            featureAdded: "None"
          },
          "tier-4-3": {
            name: "Escape Artist",
            id: "escape-artist",
            pointCost: 1,
            prerequisites: ["Slippery"],
            description: "During your turn, you can choose to relinquish all of your movement in order to automatically escape from nonmagical restraints, including manacles or a creature's grapple.",
            featureAdded: "None"
          },
          "tier-5": {
            name: "Superior Acrobatics",
            id: "superior-acrobatics",
            pointCost: 1,
            prerequisites: ["Withdraw", "Slip Away", "Escape Artist"],
            description: "You gain expertise in the Acrobatics skill.",
            featureAdded: "None"
          },
          "tier-6": {
            name: "Wall Runner",
            id: "wall-runner",
            pointCost: 1,
            prerequisites: ["Superior Acrobatics"],
            description: "While wearing light or no armor, taking the Dash action allows you to run along vertical surfaces, the edges of thin barriers, or leap between outcroppings as if on regular terrain. If you halt while running across a wall, you will start to fall. Running straight up a wall is treated as difficult terrain.",
            featureAdded: "None"
          }
        }
      },
      "animal-handling": {
        displayName: "Animal Handling",
        branches: [
          {
            nodes: [
              { 
                name: "Animal Handling", 
                tier: "tier-1", 
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
                tier: "tier-2", 
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
                tier: "tier-3-1", 
                id: "train-animal", 
                top: 40, 
                left: 28,
                connections: [
                  { to: "complex-training", direction: 90, length: 15 }
                ]
              },
              { 
                name: "Mounted Combat", 
                tier: "tier-3-2", 
                id: "mounted-combat", 
                top: 40, 
                left: 51,
                connections: [
                  { to: "one-with-the-rider", direction: 90, length: 15 }
                ]
              },
              { 
                name: "Wild Friend", 
                tier: "tier-3-3", 
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
                tier: "tier-4-1", 
                id: "complex-training", 
                top: 50, 
                left: 28,
                connections: [
                  { to: "superior-animal-handling", direction: 36, length: 31 }
                ]
              },
              { 
                name: "One with the Rider", 
                tier: "tier-4-2", 
                id: "one-with-the-rider", 
                top: 50, 
                left: 51,
                connections: [
                  { to: "superior-animal-handling", direction: 90, length: 15 }
                ]
              },
              { 
                name: "Animal Guardian", 
                tier: "tier-4-3", 
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
              tier: "tier-5",
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
                tier: "tier-6", 
                id: "beast-master", 
                top: 70, 
                left: 51 
              }
            ]
          }
        ],
        details: {
          "tier-1": {
            name: "Animal Handling",
            id: "animal-handling",
            pointCost: 1,
            prerequisites: ["None"],
            description: "A proficiency in animal handling represents a special camaraderie with, control over, and empathy for animals. Whether you’re raising a puppy, riding a warhorse, or rescuing an injured eagle, both tame and wild beasts tend to respect, trust, and listen to you, and you know how to care for them. Continuing to hone your skill lets you learn to teach animals to communicate and follow your commands, masterfully control your mount in the heat of battle, and even stabilize or bolster them against harm.",
            featureAdded: "None"
          },
          "tier-2": {
            name: "Stabilize Animal",
            id: "stabilize-animal",
            pointCost: 1,
            prerequisites: ["Animal Handling"],
            description: "Instead of making a roll to stabilize a beast, you can decide to automatically stabilize it, keeping it at its current HP.",
            featureAdded: "None"
          },
          "tier-3-1": {
            name: "Train Animal",
            id: "train-animal",
            pointCost: 1,
            prerequisites: ["Stabilize Animal"],
            description: "During a long rest, you have the opportunity to train a willing beast with a CR of 1/8 or less. Choose a simple command (such as “jump,” “bite,” “charge,” or “fetch”) and make a DC 10 Wisdom (Animal Handling) check. If you succeed, the beast will learn to follow the command. You can then use your action to shout the command, and the animal will attempt to follow it if it can hear you, but it won’t obey commands that might injure or kill it. A beast can know a number of simple commands up to its Intelligence score.",
            featureAdded: "None"
          },
          "tier-3-2": {
            name: "Mounted Combat",
            id: "mounted-combat",
            pointCost: 1,
            prerequisites: ["Stabilize Animal"],
            description: "While mounted, you have advantage on both melee weapon and melee spell attacks against unmounted creatures smaller than your mount. If your mount faces an effect that requires a Dexterity saving throw to reduce damage by half, it takes no damage on a successful save and half damage on a failed save.",
            featureAdded: "None"
          },
          "tier-3-3": {
            name: "Wild Friend",
            id: "wild-friend",
            pointCost: 1,
            prerequisites: ["Stabilize Animal"],
            description: "Once per long rest, you can cast Animal Friendship without consuming a spell slot or requiring material components, using your Wisdom score for spellcasting.",
            featureAdded: "None"
          },
          "tier-4-1": {
            name: "Complex Training",
            id: "complex-training",
            pointCost: 1,
            prerequisites: ["Train Animal"],
            description: "When training an animal, you can teach it more intricate commands. Choose a complex command (such as “fetch a healing potion from my bag,” “watch for intruders,” or “follow the scent on this rag”) and make a DC 15 Wisdom (Animal Handling) check. If you pass, the beast will learn to follow the command as if it were a simple one. Moreover, you can now train animals with a CR of 1/4 or less.",
            featureAdded: "None"
          },
          "tier-4-2": {
            name: "One with the Rider",
            id: "one-with-the-rider",
            pointCost: 1,
            prerequisites: ["Mounted Combat"],
            description: "Should a creature aim an attack or spell at your mount, you have the option to redirect it to target you instead. Moreover, when you or an ally cast a spell of 2nd level or lower that targets only you while you are on your mount, you can choose to have the spell also affect your mount.",
            featureAdded: "None"
          },
          "tier-4-3": {
            name: "Animal Guardian",
            id: "animal-guardian",
            pointCost: 1,
            prerequisites: ["Wild Friend"],
            description: "Animals thrive with your nurturing care. By spending an hour or more training with a friendly beast, which can be included in a short or long rest, you can grant it temporary hit points equal to 3 times your level plus your Wisdom modifier until it's next rest. Additionally, the beast gains advantage on its first saving throw until its next rest. This benefit can only be given to a creature once per rest.",
            featureAdded: "None"
          },
          "tier-5": {
            name: "Superior Animal Handling",
            id: "superior-animal-handling",
            pointCost: 1,
            prerequisites: ["Animal Guardian", "One with the Rider", "Complex Training"],
            description: "You gain expertise in the Animal Handling skill.",
            featureAdded: "None"
          },
          "tier-6": {
            name: "Beast Master",
            id: "beast-master",
            pointCost: 1,
            prerequisites: ["Superior Animal Handling"],
            description: "You are able to give commands to trained animals using a bonus action. Furthermore, you can select one creature you have trained to become your Partner. The chosen creature's maximum hit points are increased by twice your proficiency bonus while it remains your Partner. You can only have one Partner at a time and you may only choose one partner per day. This Partner is considered under the effect of Death Ward once per long rest, provided you are conscious. The Partner can act right after you and requires no action to command.",
            featureAdded: "None"
          }
        }
      },
      "arcana": {
        displayName: "Arcana",
        branches: [
          {
            nodes: [
              { 
                name: "Arcana", 
                tier: "tier-1", 
                id: "arcana", 
                top: 20,
                left: 51,
                connections: [
                  { to: "magic-insight", direction: 90, length: 15 }
                ]
              }
            ]
          },
          {
            nodes: [            
              { 
                name: "Magic Insight", 
                tier: "tier-2", 
                id: "magic-insight", 
                top: 30, 
                left: 51,
                connections: [
                  { to: "spell-recall", direction: 36, length: 31},
                  { to: "mystic-arts", direction: 90, length: 15 },
                  { to: "arcane-mastery", direction: 143, length: 31 }
                ]
              }
            ]
          },
          {
            nodes: [
              { 
                name: "Spell Recall", 
                tier: "tier-3-1", 
                id: "spell-recall", 
                top: 40, 
                left: 28,
                connections: [
                  { to: "tier-4-1", direction: 90, length: 15 }
                ]
              },
              { 
                name: "Mystic Arts", 
                tier: "tier-3-2", 
                id: "mystic-arts", 
                top: 40, 
                left: 51,
                connections: [
                  { to: "tier-4-2", direction: 90, length: 15 }
                ]
              },
              { 
                name: "Arcane Mastery", 
                tier: "tier-3-3", 
                id: "arcane-mastery", 
                top: 40, 
                left: 74,
                connections: [
                  { to: "tier-4-3", direction: 90, length: 15 }
                ]
              }
            ]
          },
          {
            nodes: [
              { 
                name: "Tier 4-1", 
                tier: "tier-4-1", 
                id: "tier-4-1", 
                top: 50, 
                left: 28,
                connections: [
                  { to: "tier-5", direction: 36, length: 31 }
                ]
              },
              { 
                name: "Tier 4-2", 
                tier: "tier-4-2", 
                id: "tier-4-2", 
                top: 50, 
                left: 51,
                connections: [
                  { to: "tier-5", direction: 90, length: 15 }
                ]
              },
              { 
                name: "Tier 4-3", 
                tier: "tier-4-3", 
                id: "tier-4-3", 
                top: 50, 
                left: 74,
                connections: [
                  { to: "tier-5", direction: 143, length: 31 }
                ]
              }
            ]
          },
          {
            nodes: [
              {
              name: "Tier 5",
              tier: "tier-5",
              id: "tier-5",
              top: 60,
              left: 51,
              connections: [
                { to: "arcane-savant", direction: 90, length: 15}
              ]
              }
            ]
          },
          {
            nodes: [
              { 
                name: "Arcane Savant", 
                tier: "tier-6", 
                id: "arcane-savant", 
                top: 70, 
                left: 51 
              }
            ]
          }
        ],
        details: {
          "tier-1": {
            name: "Arcana",
            id: "arcana",
            pointCost: 1,
            prerequisites: ["None"],
            description: "A proficiency in arcana represents deep understanding of magical theory and history. Whether you’re identifying a spell, understanding a magical effect, or recalling lore about magical traditions, your proficiency in arcana helps you navigate the mysteries of the arcane. Continuing to improve your skill lets you delve into more advanced magical knowledge and practice.",
            featureAdded: "None"
          },
          "tier-2": {
            name: "Magic Insight",
            id: "magic-insight",
            pointCost: 1,
            prerequisites: ["Arcana"],
            description: "You can identify spells cast within your line of sight, and you have advantage on saving throws against spells.",
            featureAdded: "None"
          },
          "tier-3-1": {
            name: "Spell Recall",
            id: "spell-recall",
            pointCost: 1,
            prerequisites: ["Magic Insight"],
            description: "Once per long rest, you can recall a spell you have already cast, allowing you to cast it again without expending a spell slot.",
            featureAdded: "None"
          },
          "tier-3-2": {
            name: "Mystic Arts",
            id: "mystic-arts",
            pointCost: 1,
            prerequisites: ["Magic Insight"],
            description: "You can cast a cantrip you know without using any components.",
            featureAdded: "None"
          },
          "tier-3-3": {
            name: "Arcane Mastery",
            id: "arcane-mastery",
            pointCost: 1,
            prerequisites: ["Magic Insight"],
            description: "You gain a +1 bonus to spell attack rolls and your spell save DC increases by 1.",
            featureAdded: "None"
          },
          "tier-4-1": {
            name: "Tier 4-1",
            id: "tier-4-1",
            pointCost: 1,
            prerequisites: ["Spell Recall"],
            description: "You can cast one spell you know as a ritual, even if it doesn't have the ritual tag.",
            featureAdded: "None"
          },
          "tier-4-2": {
            name: "Tier 4-2",
            id: "tier-4-2",
            pointCost: 1,
            prerequisites: ["Mystic Arts"],
            description: "When you cast a spell that requires concentration, you can maintain concentration on it for an additional minute.",
            featureAdded: "None"
          },
          "tier-4-3": {
            name: "Tier 4-3",
            id: "tier-4-3",
            pointCost: 1,
            prerequisites: ["Arcane Mastery"],
            description: "When you are concentrating on a spell, you gain resistance to damage from magic.",
            featureAdded: "None"
          },
          "tier-5": {
            name: "Tier 5",
            id: "tier-5",
            pointCost: 1,
            prerequisites: ["Tier 4-1", "Tier 4-2", "Tier 4-3"],
            description: "You gain expertise in the Arcana skill.",
            featureAdded: "None"
          },
          "tier-6": {
            name: "Arcane Savant",
            id: "arcane-savant",
            pointCost: 1,
            prerequisites: ["Tier 5"],
            description: "You can choose one spell from any class's spell list and add it to your spellbook or spells known. You can cast this spell as if it were a spell from your own class's spell list.",
            featureAdded: "None"
          }
        }
      },
      "athletics": {
        displayName: "Athletics",
        branches: [
          {
            nodes: [
              { 
                name: "Athletics", 
                tier: "tier-1", 
                id: "athletics", 
                top: 20,
                left: 51,
                connections: [
                  { to: "power-lift", direction: 90, length: 15 }
                ]
              }
            ]
          },
          {
            nodes: [            
              { 
                name: "Power Lift", 
                tier: "tier-2", 
                id: "power-lift", 
                top: 30, 
                left: 51,
                connections: [
                  { to: "bulwark", direction: 36, length: 31},
                  { to: "sure-grip", direction: 90, length: 15 },
                  { to: "stamina", direction: 143, length: 31 }
                ]
              }
            ]
          },
          {
            nodes: [
              { 
                name: "Bulwark", 
                tier: "tier-3-1", 
                id: "bulwark", 
                top: 40, 
                left: 28,
                connections: [
                  { to: "indomitable", direction: 90, length: 15 }
                ]
              },
              { 
                name: "Sure Grip", 
                tier: "tier-3-2", 
                id: "sure-grip", 
                top: 40, 
                left: 51,
                connections: [
                  { to: "no-slip", direction: 90, length: 15 }
                ]
              },
              { 
                name: "Stamina", 
                tier: "tier-3-3", 
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
                tier: "tier-4-1", 
                id: "indomitable", 
                top: 50, 
                left: 28,
                connections: [
                  { to: "superior-athletics", direction: 36, length: 31 }
                ]
              },
              { 
                name: "No Slip", 
                tier: "tier-4-2", 
                id: "no-slip", 
                top: 50, 
                left: 51,
                connections: [
                  { to: "superior-athletics", direction: 90, length: 15 }
                ]
              },
              { 
                name: "Enduring", 
                tier: "tier-4-3", 
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
                tier: "tier-5",
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
                tier: "tier-6", 
                id: "heroic-feats", 
                top: 70, 
                left: 51 
              }
            ]
          }
        ],
        details: {
          "tier-1": {
            name: "Athletics",
            id: "athletics",
            pointCost: 1,
            prerequisites: ["None"],
            description: "Proficiency in Athletics represents strength and physical endurance. From climbing and swimming to lifting heavy objects and maintaining a strenuous pace, your proficiency in athletics covers all these physical activities. As you advance, you become capable of performing more impressive feats of strength and endurance.",
            featureAdded: "Proficiency in Athletics"
          },
          "tier-2": {
            name: "Power Lift",
            id: "power-lift",
            pointCost: 1,
            prerequisites: ["Athletics"],
            description: "You can lift, push, and pull double the normal weight you can normally handle.",
            featureAdded: "None"
          },
          "tier-3-1": {
            name: "Bulwark",
            id: "bulwark",
            pointCost: 1,
            prerequisites: ["Power Lift"],
            description: "You have advantage on saving throws against being moved against your will.",
            featureAdded: "None"
          },
          "tier-3-2": {
            name: "Sure Grip",
            id: "sure-grip",
            pointCost: 1,
            prerequisites: ["Power Lift"],
            description: "You have advantage on checks to maintain your grip on objects and creatures.",
            featureAdded: "None"
          },
          "tier-3-3": {
            name: "Stamina",
            id: "stamina",
            pointCost: 1,
            prerequisites: ["Power Lift"],
            description: "You gain proficiency in Constitution saving throws.",
            featureAdded: "None"
          },
          "tier-4-1": {
            name: "Indomitable",
            id: "indomitable",
            pointCost: 1,
            prerequisites: ["Bulwark"],
            description: "When you are reduced to 0 hit points but not killed outright, you can drop to 1 hit point instead. You can't use this feature again until you finish a long rest.",
            featureAdded: "None"
          },
          "tier-4-2": {
            name: "No Slip",
            id: "no-slip",
            pointCost: 1,
            prerequisites: ["Sure Grip"],
            description: "You cannot be disarmed, and attempts to disarm you automatically fail.",
            featureAdded: "None"
          },
          "tier-4-3": {
            name: "Enduring",
            id: "enduring",
            pointCost: 1,
            prerequisites: ["Stamina"],
            description: "You gain an additional 5 hit points for each level you have.",
            featureAdded: "None"
          },
          "tier-5": {
            name: "Superior Athletics",
            id: "superior-athletics",
            pointCost: 1,
            prerequisites: ["Indomitable", "No Slip", "Enduring"],
            description: "You gain expertise in the Athletics skill.",
            featureAdded: "None"
          },
          "tier-6": {
            name: "Heroic Feats",
            id: "heroic-feats",
            pointCost: 1,
            prerequisites: ["Superior Athletics"],
            description: "Your strength and endurance know no bounds. You can use your action to perform a feat of strength or endurance that would normally be beyond your capabilities. Once you use this feature, you can't use it again until you finish a long rest.",
            featureAdded: "None"
          }
        }
      },
      "deception": {
        displayName: "Deception",
        branches: [
          {
            nodes: [
              { 
                name: "Deception", 
                tier: "tier-1", 
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
                tier: "tier-2", 
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
                tier: "tier-3-1", 
                id: "double-cross", 
                top: 40, 
                left: 28,
                connections: [
                  { to: "treachery", direction: 90, length: 15 }
                ]
              },
              { 
                name: "Mislead", 
                tier: "tier-3-2", 
                id: "mislead", 
                top: 40, 
                left: 51,
                connections: [
                  { to: "false-friends", direction: 90, length: 15 }
                ]
              },
              { 
                name: "Bluff", 
                tier: "tier-3-3", 
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
                tier: "tier-4-1", 
                id: "treachery", 
                top: 50, 
                left: 28,
                connections: [
                  { to: "superior-deception", direction: 36, length: 31 }
                ]
              },
              { 
                name: "False Friends", 
                tier: "tier-4-2", 
                id: "false-friends", 
                top: 50, 
                left: 51,
                connections: [
                  { to: "superior-deception", direction: 90, length: 15 }
                ]
              },
              { 
                name: "Convincing", 
                tier: "tier-4-3", 
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
                tier: "tier-5",
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
                tier: "tier-6", 
                id: "master-of-lies", 
                top: 70, 
                left: 51 
              }
            ]
          }
        ],
        details: {
          "tier-1": {
            name: "Deception",
            id: "deception",
            pointCost: 1,
            prerequisites: ["None"],
            description: "Proficiency in Deception represents your ability to convincingly lie, bluff, and mislead others. As you improve, you become better at maintaining falsehoods, creating elaborate ruses, and manipulating others without being detected.",
            featureAdded: "Proficiency in Deception"
          },
          "tier-2": {
            name: "Feint",
            id: "feint",
            pointCost: 1,
            prerequisites: ["Deception"],
            description: "You can feint during combat as a bonus action, gaining advantage on your next attack roll against the target.",
            featureAdded: "None"
          },
          "tier-3-1": {
            name: "Double Cross",
            id: "double-cross",
            pointCost: 1,
            prerequisites: ["Feint"],
            description: "When you successfully deceive a creature, you can use your reaction to impose disadvantage on the next attack roll it makes against you.",
            featureAdded: "None"
          },
          "tier-3-2": {
            name: "Mislead",
            id: "mislead",
            pointCost: 1,
            prerequisites: ["Feint"],
            description: "You can use your action to create a distraction, allowing you to hide as a bonus action.",
            featureAdded: "None"
          },
          "tier-3-3": {
            name: "Bluff",
            id: "bluff",
            pointCost: 1,
            prerequisites: ["Feint"],
            description: "You can convince others of things that are not true with ease, gaining advantage on Charisma (Deception) checks for the next hour.",
            featureAdded: "None"
          },
          "tier-4-1": {
            name: "Treachery",
            id: "treachery",
            pointCost: 1,
            prerequisites: ["Double Cross"],
            description: "You can deal an extra 1d6 damage to any creature you have successfully deceived in the last 24 hours.",
            featureAdded: "None"
          },
          "tier-4-2": {
            name: "False Friends",
            id: "false-friends",
            pointCost: 1,
            prerequisites: ["Mislead"],
            description: "You can disguise yourself as an ally to any creature that you have successfully deceived within the last 24 hours.",
            featureAdded: "None"
          },
          "tier-4-3": {
            name: "Convincing",
            id: "convincing",
            pointCost: 1,
            prerequisites: ["Bluff"],
            description: "You can make others believe your lies without question, gaining expertise in the Deception skill.",
            featureAdded: "None"
          },
          "tier-5": {
            name: "Superior Deception",
            id: "superior-deception",
            pointCost: 1,
            prerequisites: ["Treachery", "False Friends", "Convincing"],
            description: "Your deceptive abilities are unparalleled, allowing you to create elaborate and believable lies with ease.",
            featureAdded: "None"
          },
          "tier-6": {
            name: "Master of Lies",
            id: "master-of-lies",
            pointCost: 1,
            prerequisites: ["Superior Deception"],
            description: "You can weave a web of lies so intricate that even magic cannot discern your true intentions. You have advantage on saving throws against spells and abilities that would compel you to tell the truth.",
            featureAdded: "None"
          }
        }
      },
      "history": {
        displayName: "History",
        branches: [
          {
            nodes: [
              { 
                name: "History", 
                tier: "tier-1", 
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
                tier: "tier-2", 
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
                tier: "tier-3-1", 
                id: "lorekeeper", 
                top: 40, 
                left: 28,
                connections: [
                  { to: "sage", direction: 90, length: 15 }
                ]
              },
              { 
                name: "Researcher", 
                tier: "tier-3-2", 
                id: "researcher", 
                top: 40, 
                left: 51,
                connections: [
                  { to: "historian", direction: 90, length: 15 }
                ]
              },
              { 
                name: "Chronologist", 
                tier: "tier-3-3", 
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
                tier: "tier-4-1", 
                id: "sage", 
                top: 50, 
                left: 28,
                connections: [
                  { to: "superior-history", direction: 36, length: 31 }
                ]
              },
              { 
                name: "Historian", 
                tier: "tier-4-2", 
                id: "historian", 
                top: 50, 
                left: 51,
                connections: [
                  { to: "superior-history", direction: 90, length: 15 }
                ]
              },
              { 
                name: "Timekeeper", 
                tier: "tier-4-3", 
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
                tier: "tier-5",
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
                tier: "tier-6", 
                id: "master-historian", 
                top: 70, 
                left: 51 
              }
            ]
          }
        ],
        details: {
          "tier-1": {
            name: "History",
            id: "history",
            pointCost: 1,
            prerequisites: ["None"],
            description: "Proficiency in History represents your knowledge of historical events, cultures, and legends. As you improve, you become a repository of ancient knowledge and forgotten lore.",
            featureAdded: "Proficiency in History"
          },
          "tier-2": {
            name: "Keen Mind",
            id: "keen-mind",
            pointCost: 1,
            prerequisites: ["History"],
            description: "You have an excellent memory for detail and trivia. You can recall anything you have seen or heard within the past month.",
            featureAdded: "None"
          },
          "tier-3-1": {
            name: "Lorekeeper",
            id: "lorekeeper",
            pointCost: 1,
            prerequisites: ["Keen Mind"],
            description: "You gain advantage on Intelligence checks to recall historical information.",
            featureAdded: "None"
          },
          "tier-3-2": {
            name: "Researcher",
            id: "researcher",
            pointCost: 1,
            prerequisites: ["Keen Mind"],
            description: "You can quickly find information in libraries and archives. You gain advantage on Intelligence (Investigation) checks to research information.",
            featureAdded: "None"
          },
          "tier-3-3": {
            name: "Chronologist",
            id: "chronologist",
            pointCost: 1,
            prerequisites: ["Keen Mind"],
            description: "You have a keen sense of the passage of time and can accurately keep track of time without a timepiece.",
            featureAdded: "None"
          },
          "tier-4-1": {
            name: "Sage",
            id: "sage",
            pointCost: 1,
            prerequisites: ["Lorekeeper"],
            description: "You have dedicated your life to studying history. You gain proficiency in another Intelligence-based skill of your choice.",
            featureAdded: "None"
          },
          "tier-4-2": {
            name: "Historian",
            id: "historian",
            pointCost: 1,
            prerequisites: ["Researcher"],
            description: "You can craft detailed and convincing narratives based on historical facts. You gain proficiency in the Persuasion skill.",
            featureAdded: "None"
          },
          "tier-4-3": {
            name: "Timekeeper",
            id: "timekeeper",
            pointCost: 1,
            prerequisites: ["Chronologist"],
            description: "You can accurately predict celestial events, weather patterns, and other time-based phenomena.",
            featureAdded: "None"
          },
          "tier-5": {
            name: "Superior History",
            id: "superior-history",
            pointCost: 1,
            prerequisites: ["Sage", "Historian", "Timekeeper"],
            description: "Your historical knowledge is unparalleled. You gain expertise in the History skill.",
            featureAdded: "None"
          },
          "tier-6": {
            name: "Master Historian",
            id: "master-historian",
            pointCost: 1,
            prerequisites: ["Superior History"],
            description: "You can call upon your vast knowledge of history to gain advantage on any Intelligence check related to historical events or figures.",
            featureAdded: "None"
          }
        }
      },
      "insight": {
        displayName: "Insight",
        branches: [
          {
            nodes: [
              { 
                name: "Insight", 
                tier: "tier-1", 
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
                tier: "tier-2", 
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
                tier: "tier-3-1", 
                id: "truth-detection", 
                top: 40, 
                left: 28,
                connections: [
                  { to: "mind-reader", direction: 90, length: 15 }
                ]
              },
              { 
                name: "Psychology", 
                tier: "tier-3-2", 
                id: "psychology", 
                top: 40, 
                left: 51,
                connections: [
                  { to: "emotional-insight", direction: 90, length: 15 }
                ]
              },
              { 
                name: "Perceptive", 
                tier: "tier-3-3", 
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
                tier: "tier-4-1", 
                id: "mind-reader", 
                top: 50, 
                left: 28,
                connections: [
                  { to: "superior-insight", direction: 36, length: 31 }
                ]
              },
              { 
                name: "Emotional Insight", 
                tier: "tier-4-2", 
                id: "emotional-insight", 
                top: 50, 
                left: 51,
                connections: [
                  { to: "superior-insight", direction: 90, length: 15 }
                ]
              },
              { 
                name: "Keen Observation", 
                tier: "tier-4-3", 
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
                tier: "tier-5",
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
                tier: "tier-6", 
                id: "omniscient", 
                top: 70, 
                left: 51 
              }
            ]
          }
        ],
        details: {
          "tier-1": {
            name: "Insight",
            id: "insight",
            pointCost: 1,
            prerequisites: ["None"],
            description: "Proficiency in Insight represents your ability to read people and situations accurately. As you improve, you become adept at discerning lies, understanding motivations, and predicting behavior.",
            featureAdded: "Proficiency in Insight"
          },
          "tier-2": {
            name: "Empathy",
            id: "empathy",
            pointCost: 1,
            prerequisites: ["Insight"],
            description: "You can sense the emotions of others with ease. You gain advantage on Wisdom (Insight) checks to understand a creature's emotional state.",
            featureAdded: "None"
          },
          "tier-3-1": {
            name: "Truth Detection",
            id: "truth-detection",
            pointCost: 1,
            prerequisites: ["Empathy"],
            description: "You can tell when someone is lying. You gain advantage on Wisdom (Insight) checks to detect lies.",
            featureAdded: "None"
          },
          "tier-3-2": {
            name: "Psychology",
            id: "psychology",
            pointCost: 1,
            prerequisites: ["Empathy"],
            description: "You understand the underlying motivations of others. You gain advantage on checks to understand a creature's motivations.",
            featureAdded: "None"
          },
          "tier-3-3": {
            name: "Perceptive",
            id: "perceptive",
            pointCost: 1,
            prerequisites: ["Empathy"],
            description: "You notice things that others might miss. You gain advantage on Wisdom (Perception) checks to spot hidden objects or creatures.",
            featureAdded: "None"
          },
          "tier-4-1": {
            name: "Mind Reader",
            id: "mind-reader",
            pointCost: 1,
            prerequisites: ["Truth Detection"],
            description: "You can read surface thoughts of creatures. Once per day, you can cast the spell Detect Thoughts without using a spell slot.",
            featureAdded: "None"
          },
          "tier-4-2": {
            name: "Emotional Insight",
            id: "emotional-insight",
            pointCost: 1,
            prerequisites: ["Psychology"],
            description: "You can understand the deeper emotions and motivations of others. You gain expertise in the Insight skill.",
            featureAdded: "None"
          },
          "tier-4-3": {
            name: "Keen Observation",
            id: "keen-observation",
            pointCost: 1,
            prerequisites: ["Perceptive"],
            description: "Your keen senses allow you to notice even the slightest details. You gain expertise in the Perception skill.",
            featureAdded: "None"
          },
          "tier-5": {
            name: "Superior Insight",
            id: "superior-insight",
            pointCost: 1,
            prerequisites: ["Mind Reader", "Emotional Insight", "Keen Observation"],
            description: "Your insight into the thoughts and motivations of others is unparalleled. You can use your action to gain advantage on all Insight checks for the next hour.",
            featureAdded: "None"
          },
          "tier-6": {
            name: "Omniscient",
            id: "omniscient",
            pointCost: 1,
            prerequisites: ["Superior Insight"],
            description: "Your understanding of others' thoughts and emotions is so profound that you can anticipate their actions. You gain advantage on all Wisdom checks.",
            featureAdded: "None"
          }
        }
      }
    }
};
  