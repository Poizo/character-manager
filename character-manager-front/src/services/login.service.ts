import { ObjectHelper } from './../../../helpers/object.helper';
import axios from "axios";

export class LoginService {
    private baseUrl = 'http://127.0.0.1:3000';

    constructor() {}

    isConnected = false;
    connectedUser: any;

    public async login(email: string, pwd: string): Promise<any> {

        return await axios.post(`${this.baseUrl}/user/connect`, {
            "login": email,
            "password": pwd
        }).then(response => {
            if (response.status === 200 && typeof ObjectHelper.isObject(response.data) ) {
                this.isConnected = true;
                this.connectedUser = response.data;
                return response.data;
            }
        });
    }
}

export const loginServiceInstance = new LoginService();