import { manageCharacterService } from "./character";
import { manageUserService } from "./users";

Bun.serve({
    hostname: '127.0.0.1',
    port: 3000,
    async fetch(req: Request): Promise<Response> {
        let response: Response;
        const url = new URL(req.url);

        switch (url.pathname) {
            case '/characters':
                response = await manageCharacterService(req);
                break;
            
            case '/user':
            case '/user/connect':
                response = await manageUserService(req);
                break;
        
            default:
                response =  await invalidRequest();
                
                break;
        }

        response.headers.set("Access-Control-Allow-Origin", "*");
        response.headers.set("Access-Control-Allow-Methods", "POST, GET");
        response.headers.set("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With")
    
        return response;
    }
});

function invalidRequest(): Promise<Response> {
    return new Promise<Response>((resolve) => {
       resolve(new Response('No route matched! - Invalid request'));
     });
}