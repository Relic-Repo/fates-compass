// src/compassConfig.js for Fate's Compass

export const SKILL_TIERS = {
    TIER_1: "tier-1",
    TIER_2: "tier-2",
    TIER_3_1: "tier-3-1",
    TIER_3_2: "tier-3-2",
    TIER_3_3: "tier-3-3",
    TIER_4_1: "tier-4-1",
    TIER_4_2: "tier-4-2",
    TIER_4_3: "tier-4-3",
    TIER_5: "tier-5",
    TIER_6: "tier-6"
  };
  
  export const SKILL_TYPES = {
    ACROBATICS: "acrobatics",
    ANIMAL_HANDLING: "animal-handling",
    ARCANA: "arcana",
    ATHLETICS: "athletics",
    DECEPTION: "deception",
    HISTORY: "history",
    INSIGHT: "insight",
    INTIMIDATION: "intimidation",
    INVESTIGATION: "investigation",
    MEDICINE: "medicine",
    NATURE: "nature",
    PERCEPTION: "perception",
    PERFORMANCE: "performance",
    PERSUASION: "persuasion",
    RELIGION: "religion",
    SLEIGHT_OF_HAND: "sleight-of-hand",
    STEALTH: "stealth",
    SURVIVAL: "survival"
  };
  
  export const MODULE_NAME = "fates-compass";
  
  export const TEMPLATES = {
    COMPASS_SHEET: `modules/${MODULE_NAME}/templates/compass-sheet.hbs`,
    SKILLS_PANEL: `modules/${MODULE_NAME}/templates/skills-panel.hbs`,
    RACIAL_PANEL: `modules/${MODULE_NAME}/templates/racial-panel.hbs`,
    SPECIALIZATIONS_PANEL: `modules/${MODULE_NAME}/templates/specializations-panel.hbs`,
    TOOLS_PANEL: `modules/${MODULE_NAME}/templates/tools-panel.hbs`,
    CHARACTER_PANEL: `modules/${MODULE_NAME}/templates/character-panel.hbs`,
    WEAPON_TRAINING_PANEL: `modules/${MODULE_NAME}/templates/weapon-training-panel.hbs`,
    MAGIC_TRAINING_PANEL: `modules/${MODULE_NAME}/templates/magic-training-panel.hbs`
  };
  
  export const DEFAULT_ICON = "modules/fates-compass/icons/default-icon.svg";
  
  export const MAX_TALENT_POINTS = 12;
  
  export const EFFECT_DURATION = {
    INSTANT: 1,
    SHORT: 2,
    LONG: 3,
    PERMANENT: 4
  };
  
  export const DIFFICULTY_LEVELS = {
    EASY: 10,
    MEDIUM: 15,
    HARD: 20,
    VERY_HARD: 25,
    NEARLY_IMPOSSIBLE: 30
  };
  
  export const PROFICIENCY_LEVELS = {
    UNTRAINED: 0,
    HALF_PROFICENT: 0.5,
    PROFICIENT: 1,
    EXPERT: 2
  };
  
  export const ABILITY_SCORES = {
    STR: "strength",
    DEX: "dexterity",
    CON: "constitution",
    INT: "intelligence",
    WIS: "wisdom",
    CHA: "charisma",
    SAN: "sanity"
  };
  
  export const SAVE_TYPES = {
    FORT: "fortitude",
    REF: "reflex",
    WILL: "will"
  };
  
  export const DAMAGE_TYPES = {
    SLASHING: "slashing",
    PIERCING: "piercing",
    BLUDGEONING: "bludgeoning",
    FIRE: "fire",
    COLD: "cold",
    LIGHTNING: "lightning",
    ACID: "acid",
    POISON: "poison",
    NECROTIC: "necrotic",
    RADIANT: "radiant",
    FORCE: "force",
    PSYCHIC: "psychic",
    THUNDER: "thunder"
  };
  
  export const CONDITION_TYPES = {
    BLINDED: "blinded",
    CHARMED: "charmed",
    DEAFENED: "deafened",
    FRIGHTENED: "frightened",
    GRAPPLED: "grappled",
    INCAPACITATED: "incapacitated",
    INVISIBLE: "invisible",
    PARALYZED: "paralyzed",
    PETRIFIED: "petrified",
    POISONED: "poisoned",
    PRONE: "prone",
    RESTRAINED: "restrained",
    STUNNED: "stunned",
    UNCONSCIOUS: "unconscious"
  };
  
  export const ITEM_TYPES = {
    WEAPON: "weapon",
    FEATURE: "feat",
    RACE: "race",
    CLASS: "class",
    SUBCLASS: "subclass",
    SPELL: "spell",
    LOOT: "loot",
    EQUIPMENT: "equipment",
    CONSUMABLE: "consumable",
    CONTAINER: "container"
  };
  
  export const WEAPON_PROPERTIES = {
    AMMUNITION: "ammunition",
    FINESSE: "finesse",
    HEAVY: "heavy",
    LIGHT: "light",
    LOADING: "loading",
    RANGE: "range",
    REACH: "reach",
    SPECIAL: "special",
    THROWN: "thrown",
    TWO_HANDED: "two-handed",
    VERSATILE: "versatile"
  };
  
  export const ARMOR_TYPES = {
    LIGHT: "light",
    MEDIUM: "medium",
    HEAVY: "heavy",
    SHIELD: "shield"
  };
  
  export const CURRENCY_TYPES = {
    CP: "cp",
    SP: "sp",
    EP: "ep",
    GP: "gp",
    PP: "pp"
  };
  
  export const SKILL_CHECK_TYPES = {
    NORMAL: 0,
    ADVANTAGE: 1,
    DISADVANTAGE: -1
  };
  
  export const TIME_UNITS = {
    ACTION: "action",
    BONUS_ACTION: "bonus",
    REACTION: "reaction",
    MINUTE: "minute",
    HOUR: "hour",
    DAY: "day"
  };
  
  export const SPELL_SCHOOLS = {
    ABJURATION: "abjuration",
    CONJURATION: "conjuration",
    DIVINATION: "divination",
    ENCHANTMENT: "enchantment",
    EVOCATION: "evocation",
    ILLUSION: "illusion",
    NECROMANCY: "necromancy",
    TRANSMUTATION: "transmutation"
  };
  
  export const SPELL_LEVELS = {
    CANTRIP: 0,
    FIRST: 1,
    SECOND: 2,
    THIRD: 3,
    FOURTH: 4,
    FIFTH: 5,
    SIXTH: 6,
    SEVENTH: 7,
    EIGHTH: 8,
    NINTH: 9
  };
  
  export const LANGUAGES = {
    COMMON: "common",
    DWARVISH: "dwarvish",
    ELVISH: "elvish",
    GIANT: "giant",
    GNOMISH: "gnomish",
    GOBLIN: "goblin",
    HALFLING: "halfling",
    ORC: "orc",
    ABYSSAL: "abyssal",
    CELESTIAL: "celestial",
    DRACONIC: "draconic",
    DEEP_SPEECH: "deep speech",
    INFERNAL: "infernal",
    PRIMORDIAL: "primordial",
    SYLVAN: "sylvan",
    UNDERCOMMON: "undercommon"
  };
  
  export const SENSES = {
    BLINDSIGHT: "blindsight",
    DARKVISION: "darkvision",
    TREMORSENSE: "tremorsense",
    TRUESIGHT: "truesight"
  };
  
  export const MOVEMENT_TYPES = {
    WALK: "walk",
    FLY: "fly",
    SWIM: "swim",
    CLIMB: "climb",
    BURROW: "burrow"
  };
  
  export const SIZE_CATEGORIES = {
    TINY: "tiny",
    SMALL: "small",
    MEDIUM: "medium",
    LARGE: "large",
    HUGE: "huge",
    GARGANTUAN: "gargantuan"
  };
  
  export const ALIGNMENT = {
    LAWFUL_GOOD: "lawful good",
    NEUTRAL_GOOD: "neutral good",
    CHAOTIC_GOOD: "chaotic good",
    LAWFUL_NEUTRAL: "lawful neutral",
    TRUE_NEUTRAL: "true neutral",
    CHAOTIC_NEUTRAL: "chaotic neutral",
    LAWFUL_EVIL: "lawful evil",
    NEUTRAL_EVIL: "neutral evil",
    CHAOTIC_EVIL: "chaotic evil"
  };
  
  export const EXPERIENCE_LEVELS = {
    1: 0,
    2: 300,
    3: 900,
    4: 2700,
    5: 6500,
    6: 14000,
    7: 23000,
    8: 34000,
    9: 48000,
    10: 64000,
    11: 85000,
    12: 100000,
    13: 120000,
    14: 140000,
    15: 165000,
    16: 195000,
    17: 225000,
    18: 265000,
    19: 305000,
    20: 355000
  };
  
  export const ATTRIBUTES = {
    HP: 'system.attributes.hp.value',
    HP_MAX: 'system.attributes.hp.max',
    AC: 'system.attributes.ac.value',
  };
  
  export const CHAT_MESSAGE_TYPES = {
    OOC: CONST.CHAT_MESSAGE_TYPES.OOC,
    IC: CONST.CHAT_MESSAGE_TYPES.IC,
    EMOTE: CONST.CHAT_MESSAGE_TYPES.EMOTE,
    WHISPER: CONST.CHAT_MESSAGE_TYPES.WHISPER,
  };
  