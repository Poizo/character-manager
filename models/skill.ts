import { SkillEnum } from "./enums/skill.enum";

export class Skill {
    id!: string;
    name!: SkillEnum;
    description!: string;
    value!: number;
}
