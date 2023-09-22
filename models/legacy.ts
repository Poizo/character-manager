export class Legacy {
    id!: string;
    name!: string;
    description!: string;

    constructor(base: Partial<Legacy>) {
        Object.assign(this, base);
    }
}