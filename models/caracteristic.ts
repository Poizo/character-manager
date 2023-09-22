import { CaracteristicEnum } from "./enums/caracteristic.enum";

export class Caracteristic {
    id!: string;
    name!: CaracteristicEnum;
    description!: string;
    value!: number;
    
    constructor(base: Partial<Caracteristic>) {
        Object.assign(this, base);
    }

    public calculateBonus(): number {
        return Caracteristic.calculateCaracBonus(this.value);
    }

    public static calculateCaracBonus(value: number): number {
        return Math.floor((value-10) / 2);
    }
}