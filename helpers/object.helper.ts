export class ObjectHelper {

    public static generateUUIDv4(): string {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
            // tslint:disable-next-line: no-bitwise
            const r = Math.random() * 16 | 0;
            // tslint:disable-next-line: no-bitwise
            const v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

    public static isObject(obj: any) {
        return Object.prototype.toString.call(obj) === '[object Object]';
    };

    public static isEmpty(obj: any) {
        return Object.keys(obj).length === 0;
    }

    /**
     * Test if a given param is a string and if it's not empty
     * @param stringTotest 
     */
    public static isStringAndNotEmpty(stringTotest: any): boolean {
        return typeof stringTotest === 'string' && /^\S+.*\S$/.test(stringTotest);
    }

    /**
     * Test if a given param is a string and if it's a valid email adress
     * @param stringTotest 
     */
    public static isValidEmail(stringTotest: any): boolean {
        return typeof stringTotest === 'string' && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(stringTotest);
    }
}
