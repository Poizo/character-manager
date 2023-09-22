import { manageCharacterService } from "./character";

Bun.serve({
    hostname: '127.0.0.1',
    port: 3000,
    async fetch(req: Request): Promise<Response> {
        let response; Response;
        const url = new URL(req.url);
        const {method} = req;

        console.log(url);
    

        switch (url.pathname) {
            case '/characters':
                response = manageCharacterService(req);
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
