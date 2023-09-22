import { CaracteristicEnum } from './enums/caracteristic.enum';
import { Caracteristic } from './caracteristic';
import { Ancestry } from './ancestry';
import { Background } from "./background";
import { Class } from "./class";
import { Legacy } from './legacy';
import { Skill } from './skill';
import { SkillEnum } from './enums/skill.enum';

export class Character {
    id!: string;
    name!: string;
    playerName!: string;
    description!: string;
    class!: Class;
    background!: Background;
    ancestry!: Ancestry;
    legacy!: Legacy;
    caracteristics!: {
        [CaracteristicEnum.STR]: Caracteristic,
        [CaracteristicEnum.DEX]: Caracteristic,
        [CaracteristicEnum.CON]: Caracteristic,
        [CaracteristicEnum.INT]: Caracteristic,
        [CaracteristicEnum.WIS]: Caracteristic,
        [CaracteristicEnum.CHA]: Caracteristic,
    }
    skills!: {
        [SkillEnum.ACROBATICS]: Skill,
        [SkillEnum.ARCANA]: Skill,
        [SkillEnum.ATHLETICS]: Skill,
        [SkillEnum.CRAFTING]: Skill,
        [SkillEnum.DECEPTION]: Skill,
        [SkillEnum.DIPLOMACY]: Skill,
        [SkillEnum.INTIMIDATION]: Skill,
        [SkillEnum.MEDICINE]: Skill,
        [SkillEnum.LORE]: Skill,
        [SkillEnum.NATURE]: Skill,
        [SkillEnum.OCCULTISM]: Skill,
        [SkillEnum.PERFORMANCE]: Skill,
        [SkillEnum.RELIGION]: Skill,
        [SkillEnum.SOCIETY]: Skill,
        [SkillEnum.STEALTH]: Skill,
        [SkillEnum.SURVIVAL]: Skill,
        [SkillEnum.THIEVERY]: Skill
    }

    constructor(base: Partial<Character>) {
        Object.assign(this, base);
    }
} 