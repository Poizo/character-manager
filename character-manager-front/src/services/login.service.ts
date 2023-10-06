export class LoginService {

    constructor() {}
    
    isConnected = false;

    public async login(email: string, pwd: string) {
        console.log(email, pwd);
        this.isConnected = await new Promise<boolean>((resolve) => {
            resolve(true);
          });
    }
}

export const loginServiceInstance = new LoginService();