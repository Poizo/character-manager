import { Background } from "./background";
import { Class } from "./class";

export class Character {
    id!: string;
    name!: string;
    description!: string;
    class!: Class;
    background!: Background;
} 