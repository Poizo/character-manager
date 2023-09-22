export class Class {
    id!: string;
    name!: string;
    description!: string;

    constructor(base: Partial<Class>) {
        Object.assign(this, base);
    }
}