export class Ancestry {
    id!: string;
    name!: string;
    description!: string;

    constructor(base: Partial<Ancestry>) {
        Object.assign(this, base);
    }
}