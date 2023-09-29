import { compare, genSalt, hash } from "bcrypt-ts";

export class Encrypter {

    public static async genSalt(): Promise<string> {
        return await genSalt(10);
    }

    public static hash(password: string, salt: string ): Promise<string> {
        return hash(password, salt);
    }

    public static comparePwdAndHash(pwd: string, hash: string): Promise<boolean> {
        return compare(pwd, hash);
    }
}