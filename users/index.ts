import { PrismaClient } from "@prisma/client";
import { connectUser, createUser } from './users.method-post';

const prisma = new PrismaClient();

export async function manageUserService(req: Request): Promise<Response> {
    let response: Response;
    const url = new URL(req.url);
    const {method} = req;

    switch (method) {
        case 'POST':
            switch (url.pathname) {
                case '/user':
                    response = await createUser(await req.json());
                    break;

                case '/user/connect':
                    response = await connectUser(await req.json());
                    break;
            
                default:
                    response = await invalidUserRequest();
                    break;
            }

            break;
    
        default:
            response = await invalidUserRequest();
            break;
    }

    return response;
}


function invalidUserRequest(): Promise<Response> {
 return new Promise<Response>((resolve) => {
    resolve(new Response('USER - Invalid request'));
  });
}