// src/node-weapon-training-data.js for Fate's Compass

export const nodeCharacterData = {
    character: { 
        "minor": {
          displayName: "Minor",
          branches: [
            {
              nodes: [
                { 
                  name: "Axe Juggler", 
                  tier: "tier-1-1", 
                  id: "axe-juggler", 
                  top: 28,
                  left: 28
                },
                { 
                  name: "Breaker", 
                  tier: "tier-1-2", 
                  id: "breaker", 
                  top: 28,
                  left: 51
                },
                { 
                  name: "Combat Knots", 
                  tier: "tier-1-3", 
                  id: "combat-knots", 
                  top: 28,
                  left: 74
                }
              ]
            },
            {
              nodes: [
                { 
                  name: "Extend", 
                  tier: "tier-2-1", 
                  id: "extend", 
                  top: 38,
                  left: 28
                },
                { 
                  name: "Finisher", 
                  tier: "tier-2-2", 
                  id: "finisher", 
                  top: 38,
                  left: 51
                },
                { 
                  name: "Hammer Fanner", 
                  tier: "tier-2-3", 
                  id: "hammer-fanner", 
                  top: 38,
                  left: 74
                }
              ]
            },
            {
              nodes: [
                { 
                  name: "Hidden Slash", 
                  tier: "tier-3-1", 
                  id: "hidden-slash", 
                  top: 48,
                  left: 28
                },
                { 
                  name: "Pin-Point", 
                  tier: "tier-3-2", 
                  id: "pin-point", 
                  top: 48,
                  left: 51
                },
                { 
                  name: "Powerful Lungs", 
                  tier: "tier-3-3", 
                  id: "powerful-lungs", 
                  top: 48,
                  left: 74
                }
              ]
            },
            {
              nodes: [
                { 
                  name: "Quick Draw", 
                  tier: "tier-4-1", 
                  id: "quick-draw", 
                  top: 58,
                  left: 28
                },
                { 
                  name: "Strong Arm", 
                  tier: "tier-4-2", 
                  id: "strong-arm", 
                  top: 58,
                  left: 51
                },
                { 
                  name: "Strong Draw", 
                  tier: "tier-4-3", 
                  id: "strong-draw", 
                  top: 58,
                  left: 74
                }
              ]
            },
            {
              nodes: [
                { 
                  name: "Tine Capture", 
                  tier: "tier-5-1", 
                  id: "tine-capture", 
                  top: 68,
                  left: 40
                },
                { 
                  name: "Whip Wielder", 
                  tier: "tier-5-2", 
                  id: "whip-wielder", 
                  top: 68,
                  left: 63
                }
              ]
            }
          ],
        details: {
          "tier-1-1": {
            name: "Axe Juggler",
            id: "axe-juggler",
            pointCost: 1,
            prerequisites: ["None"],
            description: "The light hammers and handaxes that you wield gain the finesse property while you wield them.",
            featureAdded: "None"
          },
          "tier-1-2": {
            name: "Breaker",
            id: "breaker",
            pointCost: 1,
            prerequisites: ["None"],
            description: "When you crit on a Bludgeoning, if the creature is holding a weapon/object. They need to make a DC (8+Strength+prof mod) Strength saving throw, or drop the item/weapon. If the item/weapon is nonmagical, the item/weapon breaks.",
            featureAdded: "None"
          },
          "tier-1-3": {
            name: "Combat Knots",
            id: "combat-knots",
            pointCost: 1,
            prerequisites: ["None"],
            description: "When you ensnare a creature with a net, the DC required to escape is increased by your proficiency modifier.",
            featureAdded: "None"
          },
          "tier-2-1": {
            name: "Extend",
            id: "extend",
            pointCost: 1,
            prerequisites: ["None"],
            description: "As a bonus action, you can extend the reach of your weapon by 5 feet until the end of your turn.",
            featureAdded: "None"
          },
          "tier-2-2": {
            name: "Finisher",
            id: "finisher",
            pointCost: 1,
            prerequisites: ["None"],
            description: "As a bonus action, you can make a melee attack against a prone creature.",
            featureAdded: "None"
          },
          "tier-2-3": {
            name: "Hammer Fanner",
            id: "hammer-fanner",
            pointCost: 1,
            prerequisites: ["None"],
            description: "Crossbows and Blowguns ignore the loading property. You do not need a free hand to provide ammunition to a crossbow or blowgun.",
            featureAdded: "None"
          },
          "tier-3-1": {
            name: "Hidden Slash",
            id: "hidden-slash",
            pointCost: 1,
            prerequisites: ["None"],
            description: "Once per turn, when you make a slashing weapon attack, you can appear on the opposite side of the creature requiring no additional movement.",
            featureAdded: "None"
          },
          "tier-3-2": {
            name: "Pin-Point",
            id: "pin-point",
            pointCost: 1,
            prerequisites: ["None"],
            description: "When you strike a creature with a piercing weapon, they have disadvantage on stealth checks.",
            featureAdded: "None"
          },
          "tier-3-3": {
            name: "Powerful Lungs",
            id: "powerful-lungs",
            pointCost: 1,
            prerequisites: ["None"],
            description: "You may use Constitution instead of Dexterity for attack and damage rolls with blowguns, blowgun range is doubled and darts count as ammo. You can now use your action and free action to fire one potion at your allies.",
            featureAdded: "None"
          },
          "tier-4-1": {
            name: "Quick Draw",
            id: "quick-draw",
            pointCost: 1,
            prerequisites: ["None"],
            description: "On your turn, you can draw or stow one weapon as a part of the Attack action without using your Object Interaction and you can treat weapons with the thrown property as ammunition for the purpose of drawing them.",
            featureAdded: "None"
          },
          "tier-4-2": {
            name: "Strong Arm",
            id: "strong-arm",
            pointCost: 1,
            prerequisites: ["None"],
            description: "You can now throw heavy weapons at a range of (20/60) dealing the normal weapon's die.",
            featureAdded: "None"
          },
          "tier-4-3": {
            name: "Strong Draw",
            id: "strong-draw",
            pointCost: 1,
            prerequisites: ["None"],
            description: "You can use Strength instead of Dexterity for attack and damage rolls with shortbows, longbows, and slings.",
            featureAdded: "None"
          },
          "tier-5-1": {
            name: "Tine Capture",
            id: "tine-capture",
            pointCost: 1,
            prerequisites: ["None"],
            description: "You do not need a free hand to perform a grapple while you are wielding a trident, war pick, or sickle with a single target.",
            featureAdded: "None"
          },
          "tier-5-2": {
            name: "Whip Wielder",
            id: "whip-wielder",
            pointCost: 1,
            prerequisites: ["None"],
            description: "The whips you wield gain the light property while you wield them and reach increase by 5ft.",
            featureAdded: "None"
          }
        }
      },
      "intermediate": {
          displayName: "Intermediate",
          branches: [
            {
              nodes: [
                { 
                  name: "Axe Juggler", 
                  tier: "tier-1-1", 
                  id: "axe-juggler", 
                  top: 28,
                  left: 28
                },
                { 
                  name: "Breaker", 
                  tier: "tier-1-2", 
                  id: "breaker", 
                  top: 28,
                  left: 51
                },
                { 
                  name: "Combat Knots", 
                  tier: "tier-1-3", 
                  id: "combat-knots", 
                  top: 28,
                  left: 74
                }
              ]
            },
            {
              nodes: [
                { 
                  name: "Extend", 
                  tier: "tier-2-1", 
                  id: "extend", 
                  top: 38,
                  left: 28
                },
                { 
                  name: "Finisher", 
                  tier: "tier-2-2", 
                  id: "finisher", 
                  top: 38,
                  left: 51
                },
                { 
                  name: "Hammer Fanner", 
                  tier: "tier-2-3", 
                  id: "hammer-fanner", 
                  top: 38,
                  left: 74
                }
              ]
            },
            {
              nodes: [
                { 
                  name: "Hidden Slash", 
                  tier: "tier-3-1", 
                  id: "hidden-slash", 
                  top: 48,
                  left: 28
                },
                { 
                  name: "Pin-Point", 
                  tier: "tier-3-2", 
                  id: "pin-point", 
                  top: 48,
                  left: 51
                },
                { 
                  name: "Powerful Lungs", 
                  tier: "tier-3-3", 
                  id: "powerful-lungs", 
                  top: 48,
                  left: 74
                }
              ]
            },
            {
              nodes: [
                { 
                  name: "Quick Draw", 
                  tier: "tier-4-1", 
                  id: "quick-draw", 
                  top: 58,
                  left: 28
                },
                { 
                  name: "Strong Arm", 
                  tier: "tier-4-2", 
                  id: "strong-arm", 
                  top: 58,
                  left: 51
                },
                { 
                  name: "Strong Draw", 
                  tier: "tier-4-3", 
                  id: "strong-draw", 
                  top: 58,
                  left: 74
                }
              ]
            },
            {
              nodes: [
                { 
                  name: "Tine Capture", 
                  tier: "tier-5-1", 
                  id: "tine-capture", 
                  top: 68,
                  left: 40
                },
                { 
                  name: "Whip Wielder", 
                  tier: "tier-5-2", 
                  id: "whip-wielder", 
                  top: 68,
                  left: 63
                }
              ]
            }
          ],
        details: {
          "tier-1-1": {
            name: "Axe Juggler",
            id: "axe-juggler",
            pointCost: 1,
            prerequisites: ["None"],
            description: "The light hammers and handaxes that you wield gain the finesse property while you wield them.",
            featureAdded: "None"
          },
          "tier-1-2": {
            name: "Breaker",
            id: "breaker",
            pointCost: 1,
            prerequisites: ["None"],
            description: "When you crit on a Bludgeoning, if the creature is holding a weapon/object. They need to make a DC (8+Strength+prof mod) Strength saving throw, or drop the item/weapon. If the item/weapon is nonmagical, the item/weapon breaks.",
            featureAdded: "None"
          },
          "tier-1-3": {
            name: "Combat Knots",
            id: "combat-knots",
            pointCost: 1,
            prerequisites: ["None"],
            description: "When you ensnare a creature with a net, the DC required to escape is increased by your proficiency modifier.",
            featureAdded: "None"
          },
          "tier-2-1": {
            name: "Extend",
            id: "extend",
            pointCost: 1,
            prerequisites: ["None"],
            description: "As a bonus action, you can extend the reach of your weapon by 5 feet until the end of your turn.",
            featureAdded: "None"
          },
          "tier-2-2": {
            name: "Finisher",
            id: "finisher",
            pointCost: 1,
            prerequisites: ["None"],
            description: "As a bonus action, you can make a melee attack against a prone creature.",
            featureAdded: "None"
          },
          "tier-2-3": {
            name: "Hammer Fanner",
            id: "hammer-fanner",
            pointCost: 1,
            prerequisites: ["None"],
            description: "Crossbows and Blowguns ignore the loading property. You do not need a free hand to provide ammunition to a crossbow or blowgun.",
            featureAdded: "None"
          },
          "tier-3-1": {
            name: "Hidden Slash",
            id: "hidden-slash",
            pointCost: 1,
            prerequisites: ["None"],
            description: "Once per turn, when you make a slashing weapon attack, you can appear on the opposite side of the creature requiring no additional movement.",
            featureAdded: "None"
          },
          "tier-3-2": {
            name: "Pin-Point",
            id: "pin-point",
            pointCost: 1,
            prerequisites: ["None"],
            description: "When you strike a creature with a piercing weapon, they have disadvantage on stealth checks.",
            featureAdded: "None"
          },
          "tier-3-3": {
            name: "Powerful Lungs",
            id: "powerful-lungs",
            pointCost: 1,
            prerequisites: ["None"],
            description: "You may use Constitution instead of Dexterity for attack and damage rolls with blowguns, blowgun range is doubled and darts count as ammo. You can now use your action and free action to fire one potion at your allies.",
            featureAdded: "None"
          },
          "tier-4-1": {
            name: "Quick Draw",
            id: "quick-draw",
            pointCost: 1,
            prerequisites: ["None"],
            description: "On your turn, you can draw or stow one weapon as a part of the Attack action without using your Object Interaction and you can treat weapons with the thrown property as ammunition for the purpose of drawing them.",
            featureAdded: "None"
          },
          "tier-4-2": {
            name: "Strong Arm",
            id: "strong-arm",
            pointCost: 1,
            prerequisites: ["None"],
            description: "You can now throw heavy weapons at a range of (20/60) dealing the normal weapon's die.",
            featureAdded: "None"
          },
          "tier-4-3": {
            name: "Strong Draw",
            id: "strong-draw",
            pointCost: 1,
            prerequisites: ["None"],
            description: "You can use Strength instead of Dexterity for attack and damage rolls with shortbows, longbows, and slings.",
            featureAdded: "None"
          },
          "tier-5-1": {
            name: "Tine Capture",
            id: "tine-capture",
            pointCost: 1,
            prerequisites: ["None"],
            description: "You do not need a free hand to perform a grapple while you are wielding a trident, war pick, or sickle with a single target.",
            featureAdded: "None"
          },
          "tier-5-2": {
            name: "Whip Wielder",
            id: "whip-wielder",
            pointCost: 1,
            prerequisites: ["None"],
            description: "The whips you wield gain the light property while you wield them and reach increase by 5ft.",
            featureAdded: "None"
          }
        }
      },
      "major": {
          displayName: "Major",
          branches: [
            {
              nodes: [
                { 
                  name: "Axe Juggler", 
                  tier: "tier-1-1", 
                  id: "axe-juggler", 
                  top: 28,
                  left: 28
                },
                { 
                  name: "Breaker", 
                  tier: "tier-1-2", 
                  id: "breaker", 
                  top: 28,
                  left: 51
                },
                { 
                  name: "Combat Knots", 
                  tier: "tier-1-3", 
                  id: "combat-knots", 
                  top: 28,
                  left: 74
                }
              ]
            },
            {
              nodes: [
                { 
                  name: "Extend", 
                  tier: "tier-2-1", 
                  id: "extend", 
                  top: 38,
                  left: 28
                },
                { 
                  name: "Finisher", 
                  tier: "tier-2-2", 
                  id: "finisher", 
                  top: 38,
                  left: 51
                },
                { 
                  name: "Hammer Fanner", 
                  tier: "tier-2-3", 
                  id: "hammer-fanner", 
                  top: 38,
                  left: 74
                }
              ]
            },
            {
              nodes: [
                { 
                  name: "Hidden Slash", 
                  tier: "tier-3-1", 
                  id: "hidden-slash", 
                  top: 48,
                  left: 28
                },
                { 
                  name: "Pin-Point", 
                  tier: "tier-3-2", 
                  id: "pin-point", 
                  top: 48,
                  left: 51
                },
                { 
                  name: "Powerful Lungs", 
                  tier: "tier-3-3", 
                  id: "powerful-lungs", 
                  top: 48,
                  left: 74
                }
              ]
            },
            {
              nodes: [
                { 
                  name: "Quick Draw", 
                  tier: "tier-4-1", 
                  id: "quick-draw", 
                  top: 58,
                  left: 28
                },
                { 
                  name: "Strong Arm", 
                  tier: "tier-4-2", 
                  id: "strong-arm", 
                  top: 58,
                  left: 51
                },
                { 
                  name: "Strong Draw", 
                  tier: "tier-4-3", 
                  id: "strong-draw", 
                  top: 58,
                  left: 74
                }
              ]
            },
            {
              nodes: [
                { 
                  name: "Tine Capture", 
                  tier: "tier-5-1", 
                  id: "tine-capture", 
                  top: 68,
                  left: 40
                },
                { 
                  name: "Whip Wielder", 
                  tier: "tier-5-2", 
                  id: "whip-wielder", 
                  top: 68,
                  left: 63
                }
              ]
            }
          ],
        details: {
          "tier-1-1": {
            name: "Axe Juggler",
            id: "axe-juggler",
            pointCost: 1,
            prerequisites: ["None"],
            description: "The light hammers and handaxes that you wield gain the finesse property while you wield them.",
            featureAdded: "None"
          },
          "tier-1-2": {
            name: "Breaker",
            id: "breaker",
            pointCost: 1,
            prerequisites: ["None"],
            description: "When you crit on a Bludgeoning, if the creature is holding a weapon/object. They need to make a DC (8+Strength+prof mod) Strength saving throw, or drop the item/weapon. If the item/weapon is nonmagical, the item/weapon breaks.",
            featureAdded: "None"
          },
          "tier-1-3": {
            name: "Combat Knots",
            id: "combat-knots",
            pointCost: 1,
            prerequisites: ["None"],
            description: "When you ensnare a creature with a net, the DC required to escape is increased by your proficiency modifier.",
            featureAdded: "None"
          },
          "tier-2-1": {
            name: "Extend",
            id: "extend",
            pointCost: 1,
            prerequisites: ["None"],
            description: "As a bonus action, you can extend the reach of your weapon by 5 feet until the end of your turn.",
            featureAdded: "None"
          },
          "tier-2-2": {
            name: "Finisher",
            id: "finisher",
            pointCost: 1,
            prerequisites: ["None"],
            description: "As a bonus action, you can make a melee attack against a prone creature.",
            featureAdded: "None"
          },
          "tier-2-3": {
            name: "Hammer Fanner",
            id: "hammer-fanner",
            pointCost: 1,
            prerequisites: ["None"],
            description: "Crossbows and Blowguns ignore the loading property. You do not need a free hand to provide ammunition to a crossbow or blowgun.",
            featureAdded: "None"
          },
          "tier-3-1": {
            name: "Hidden Slash",
            id: "hidden-slash",
            pointCost: 1,
            prerequisites: ["None"],
            description: "Once per turn, when you make a slashing weapon attack, you can appear on the opposite side of the creature requiring no additional movement.",
            featureAdded: "None"
          },
          "tier-3-2": {
            name: "Pin-Point",
            id: "pin-point",
            pointCost: 1,
            prerequisites: ["None"],
            description: "When you strike a creature with a piercing weapon, they have disadvantage on stealth checks.",
            featureAdded: "None"
          },
          "tier-3-3": {
            name: "Powerful Lungs",
            id: "powerful-lungs",
            pointCost: 1,
            prerequisites: ["None"],
            description: "You may use Constitution instead of Dexterity for attack and damage rolls with blowguns, blowgun range is doubled and darts count as ammo. You can now use your action and free action to fire one potion at your allies.",
            featureAdded: "None"
          },
          "tier-4-1": {
            name: "Quick Draw",
            id: "quick-draw",
            pointCost: 1,
            prerequisites: ["None"],
            description: "On your turn, you can draw or stow one weapon as a part of the Attack action without using your Object Interaction and you can treat weapons with the thrown property as ammunition for the purpose of drawing them.",
            featureAdded: "None"
          },
          "tier-4-2": {
            name: "Strong Arm",
            id: "strong-arm",
            pointCost: 1,
            prerequisites: ["None"],
            description: "You can now throw heavy weapons at a range of (20/60) dealing the normal weapon's die.",
            featureAdded: "None"
          },
          "tier-4-3": {
            name: "Strong Draw",
            id: "strong-draw",
            pointCost: 1,
            prerequisites: ["None"],
            description: "You can use Strength instead of Dexterity for attack and damage rolls with shortbows, longbows, and slings.",
            featureAdded: "None"
          },
          "tier-5-1": {
            name: "Tine Capture",
            id: "tine-capture",
            pointCost: 1,
            prerequisites: ["None"],
            description: "You do not need a free hand to perform a grapple while you are wielding a trident, war pick, or sickle with a single target.",
            featureAdded: "None"
          },
          "tier-5-2": {
            name: "Whip Wielder",
            id: "whip-wielder",
            pointCost: 1,
            prerequisites: ["None"],
            description: "The whips you wield gain the light property while you wield them and reach increase by 5ft.",
            featureAdded: "None"
          }
        }
      }
  }  
}
  