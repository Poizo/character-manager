export class Background {
    id!: string;
    name!: string;
    description!: string;

    constructor(base: Partial<Background>) {
        Object.assign(this, base);
    }
}