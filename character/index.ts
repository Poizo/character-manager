import { mockCharacters } from "../mock-data/mock-characters";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


export async function manageCharacterService(req: Request): Promise<Response> {
    let response: Response;
    const url = new URL(req.url);
    const {method} = req;

    return await prisma.character.findFirst().then(c => response = new Response(JSON.stringify(c)));

    switch (method) {
        case 'GET':
            if (url.pathname === '/characters') {

                await prisma.character.findFirst().then(c => response = new Response(JSON.stringify(c)))

                // response = new Response(JSON.stringify(mockCharacters));
            } else {
                response =  new Response('Characters - GET -- but no match!', {
                    status: 404
                });
            }
            break;

        case 'PUT':
            response = new Response('Characters - PUT -- but not implemented yet!', {
                status: 400
            });
            break;
    
        case 'POST':
            response = new Response('Characters - POST -- but not implemented yet!', {
                status: 400
            });
            break;
    
        case 'PATCH':
            response = new Response('Characters - PATCH -- but not implemented yet!', {
                status: 400
            });
            break;
    
        case 'DELETE':
            response = new Response('Characters - DELETE -- but not implemented yet!', {
                status: 400
            });
            break;
    
        default:
            response = new Response('Characters - DEFAULT -- but no match!', {
                status: 404
            });
            break;
    }

    return response;
}
