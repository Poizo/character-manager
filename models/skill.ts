import { Caracteristic } from "./caracteristic";
import { SkillEnum } from "./enums/skill.enum";

type SkilBase = Partial<Skill> & {id: string, name: SkillEnum, linkedCaracteristic: Caracteristic}
export class Skill {
    id!: string;
    name!: SkillEnum;
    description!: string;
    value!: number;
    investedValue!: number;
    linkedCaracteristic!: Caracteristic;

    constructor(base: SkilBase) {
        this.id = base.id;
        this.name = base.name;
        this.description = base.description ?? '';
        this.investedValue = base.investedValue ?? 0;
        this.linkedCaracteristic = base.linkedCaracteristic;
        this.value = this.calculateValue();
    }

    private calculateValue(): number {
        return this.linkedCaracteristic.calculateBonus() + this.investedValue;
    }
}
