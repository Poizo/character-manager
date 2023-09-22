import { ObjectHelper } from "../helpers/object.helper";
import { Ancestry } from "../models/ancestry";
import { Caracteristic } from "../models/caracteristic";
import { Character } from "../models/character";
import { CaracteristicEnum } from "../models/enums/caracteristic.enum";
import { SkillEnum } from "../models/enums/skill.enum";
import { Skill } from "../models/skill";

export const mockCharacters: Character[] = [
    {
        id: ObjectHelper.generateUUIDv4(),
        description: "",
        name: "",
        playerName: "Axel",
        ancestry: {
            id: ObjectHelper.generateUUIDv4(),
            name: "Technological Fleshwarp",
            description: "Seem's like a jukebox, but it's not"
        },
        background: {
            id: ObjectHelper.generateUUIDv4(),
            name: "Crafter",
            description: "Use to build things"
        },
        class: {
            id: ObjectHelper.generateUUIDv4(),
            name: "Inventor",
            description: "Any tinkerer can follow a diagram to make a device, but you invent the impossible! Every strange contraption you dream up is a unique experiment pushing the edge of possibility, a mysterious machine that seems to work for only you. You're always on the verge of the next great breakthrough, and every trial and tribulation is another opportunity to test and tune. If you can dream it, you can build it."
        },
        legacy: {
            id: ObjectHelper.generateUUIDv4(),
            name: "Fleshwarp",
            description: "Fleshwarps are people whose forms were created or radically transformed by magic, alchemy, or unnatural energies. Their unorthodox appearance can make it difficult for them to find a place for themselves in the world."
        },
        caracteristics: {
            [CaracteristicEnum.STR]: new Caracteristic({
                id: ObjectHelper.generateUUIDv4(),
                name: CaracteristicEnum.STR,
                description: "Use to build things",
                value: 12
            }),
            [CaracteristicEnum.DEX]: new Caracteristic({
                id: ObjectHelper.generateUUIDv4(),
                name: CaracteristicEnum.DEX,
                description: "Use to build things",
                value: 16
            }),
            [CaracteristicEnum.CON]: new Caracteristic({
                id: ObjectHelper.generateUUIDv4(),
                name: CaracteristicEnum.CON,
                description: "Use to build things",
                value: 15
            }),
            [CaracteristicEnum.INT]: new Caracteristic({
                id: ObjectHelper.generateUUIDv4(),
                name: CaracteristicEnum.INT,
                description: "Use to build things",
                value: 18
            }),
            [CaracteristicEnum.WIS]: new Caracteristic({
                id: ObjectHelper.generateUUIDv4(),
                name: CaracteristicEnum.WIS,
                description: "Use to build things",
                value: 13
            }),
            [CaracteristicEnum.CHA]: new Caracteristic({
                id: ObjectHelper.generateUUIDv4(),
                name: CaracteristicEnum.CHA,
                description: "Use to build things",
                value: 14
            })
        },
        skills: {
            [SkillEnum.ACROBATICS]: new Skill({
                id: ObjectHelper.generateUUIDv4(),
                name: SkillEnum.ACROBATICS,
                description: "",
                value: 0,
                investedValue: 0,
                linkedCaracteristic: new Caracteristic({
                    name: CaracteristicEnum.DEX,
                    value: 16
                })
            }),
            [SkillEnum.ARCANA]: new Skill({
                id: ObjectHelper.generateUUIDv4(),
                name: SkillEnum.ARCANA,
                description: "",
                value: 0,
                investedValue: 0,
                linkedCaracteristic: new Caracteristic({
                    name: CaracteristicEnum.INT,
                    value: 18
                })
            }),
            [SkillEnum.ATHLETICS]: new Skill({
                id: ObjectHelper.generateUUIDv4(),
                name: SkillEnum.ATHLETICS,
                description: "",
                value: 0,
                investedValue: 0,
                linkedCaracteristic: new Caracteristic({
                    name: CaracteristicEnum.STR,
                    value: 12
                })
            }),
            [SkillEnum.CRAFTING]: new Skill({
                id: ObjectHelper.generateUUIDv4(),
                name: SkillEnum.CRAFTING,
                description: "",
                value: 0,
                investedValue: 0,
                linkedCaracteristic: new Caracteristic({
                    name: CaracteristicEnum.INT,
                    value: 18
                })
            }),
            [SkillEnum.DECEPTION]: new Skill({
                id: ObjectHelper.generateUUIDv4(),
                name: SkillEnum.DECEPTION,
                description: "",
                value: 0,
                investedValue: 0,
                linkedCaracteristic: new Caracteristic({
                    name: CaracteristicEnum.CHA,
                    value: 14
                })
            }),
            [SkillEnum.DIPLOMACY]: new Skill({
                id: ObjectHelper.generateUUIDv4(),
                name: SkillEnum.DIPLOMACY,
                description: "",
                value: 0,
                investedValue: 0,
                linkedCaracteristic: new Caracteristic({
                    name: CaracteristicEnum.CHA,
                    value: 14
                })
            }),
            [SkillEnum.INTIMIDATION]: new Skill({
                id: ObjectHelper.generateUUIDv4(),
                name: SkillEnum.INTIMIDATION,
                description: "",
                value: 0,
                investedValue: 0,
                linkedCaracteristic: new Caracteristic({
                    name: CaracteristicEnum.INT,
                    value: 18
                })
            }),
            [SkillEnum.MEDICINE]: new Skill({
                id: ObjectHelper.generateUUIDv4(),
                name: SkillEnum.MEDICINE,
                description: "",
                value: 0,
                investedValue: 0,
                linkedCaracteristic: new Caracteristic({
                    name: CaracteristicEnum.CHA,
                    value: 14
                })
            }),
            [SkillEnum.LORE]: new Skill({
                id: ObjectHelper.generateUUIDv4(),
                name: SkillEnum.LORE,
                description: "",
                value: 0,
                investedValue: 0,
                linkedCaracteristic: new Caracteristic({
                    name: CaracteristicEnum.WIS,
                    value: 13
                })
            }),
            [SkillEnum.NATURE]: new Skill({
                id: ObjectHelper.generateUUIDv4(),
                name: SkillEnum.NATURE,
                description: "",
                value: 0,
                investedValue: 0,
                linkedCaracteristic: new Caracteristic({
                    name: CaracteristicEnum.WIS,
                    value: 13
                })
            }),
            [SkillEnum.OCCULTISM]: new Skill({
                id: ObjectHelper.generateUUIDv4(),
                name: SkillEnum.OCCULTISM,
                description: "",
                value: 0,
                investedValue: 0,
                linkedCaracteristic: new Caracteristic({
                    name: CaracteristicEnum.INT,
                    value: 18
                })
            }),
            [SkillEnum.PERFORMANCE]: new Skill({
                id: ObjectHelper.generateUUIDv4(),
                name: SkillEnum.PERFORMANCE,
                description: "",
                value: 0,
                investedValue: 0,
                linkedCaracteristic: new Caracteristic({
                    name: CaracteristicEnum.CHA,
                    value: 14
                })
            }),
            [SkillEnum.RELIGION]: new Skill({
                id: ObjectHelper.generateUUIDv4(),
                name: SkillEnum.RELIGION,
                description: "",
                value: 0,
                investedValue: 0,
                linkedCaracteristic: new Caracteristic({
                    name: CaracteristicEnum.WIS,
                    value: 13
                })
            }),
            [SkillEnum.SOCIETY]: new Skill({
                id: ObjectHelper.generateUUIDv4(),
                name: SkillEnum.SOCIETY,
                description: "",
                value: 0,
                investedValue: 0,
                linkedCaracteristic: new Caracteristic({
                    name: CaracteristicEnum.INT,
                    value: 18
                })
            }),
            [SkillEnum.STEALTH]: new Skill({
                id: ObjectHelper.generateUUIDv4(),
                name: SkillEnum.STEALTH,
                description: "",
                value: 0,
                investedValue: 0,
                linkedCaracteristic: new Caracteristic({
                    name: CaracteristicEnum.DEX,
                    value: 16
                })
            }),
            [SkillEnum.SURVIVAL]: new Skill({
                id: ObjectHelper.generateUUIDv4(),
                name: SkillEnum.SURVIVAL,
                description: "",
                value: 0,
                investedValue: 0,
                linkedCaracteristic: new Caracteristic({
                    name: CaracteristicEnum.WIS,
                    value: 13
                })
            }),
            [SkillEnum.THIEVERY]: new Skill({
                id: ObjectHelper.generateUUIDv4(),
                name: SkillEnum.THIEVERY,
                description: "",
                value: 0,
                investedValue: 0,
                linkedCaracteristic: new Caracteristic({
                    name: CaracteristicEnum.DEX,
                    value: 16
                })
            })
        }
    }
];