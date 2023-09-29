import { password } from "bun";
import { manageCharacterService } from "./character";
import { Encrypter } from "./helpers/encrypter.helper";
import { manageUserService } from "./users";

Bun.serve({
    hostname: '127.0.0.1',
    port: 3000,
    async fetch(req: Request): Promise<Response> {
        let response; Response;
        const url = new URL(req.url);
        const {method} = req;

        switch (url.pathname) {
            case '/characters':

                const salt = await Encrypter.genSalt().then(s => s );
                
                const password = 'test';
                const passwordHashed = await Encrypter.hash(password, salt).then(pwd => pwd);
                
                console.log(passwordHashed);
                
                console.log(await Encrypter.comparePwdAndHash('test', passwordHashed));
                
                

                response = manageCharacterService(req);
                break;
            
            case '/user':
                response = manageUserService(req);

                break;
        
            default:
                response =  new Response('No route matched!', {
                    status: 404
                });
                
                break;
        }





        return response;
    }
});
