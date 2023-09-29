import { password } from 'bun';
import { PrismaClient } from "@prisma/client";
import { Encrypter } from '../helpers/encrypter.helper';
import { ObjectHelper } from "../helpers/object.helper";

const prisma = new PrismaClient();

export async function manageUserService(req: Request): Promise<Response> {
    let response: Response;
    const url = new URL(req.url);
    const {method} = req;

    



    // return await prisma.user.findMany({
    //     take: 10
    // }).then(users => {
    //     console.log(users);

    //     users.forEach(async u => {
    //         const comp  = await Encrypter.comparePwdAndHash(newUser.password, u.password);
    //         console.log(newUser.password, u.password, comp);
    //     })
        
        
    //     response = new Response(JSON.stringify(users));
    //     return response;
    // });
    
   



    switch (method) {
        case 'POST':
        const newUser = await req.json();
        
        if (checkNewUserProperty(newUser)) {
            newUser.password = await Encrypter.hash(newUser.password, await Encrypter.genSalt());
            return await prisma.user.create(
            {
                data: newUser
            }
            ).then( createdUser => {
                return new Response(JSON.stringify({
                    id: createdUser.id,
                    firstname: createdUser.firstname,
                    lastname: createdUser.lastname,
                    email: createdUser.email
                }));
            });
        } else {
            response = await new Promise<Response>((resolve) => {
                resolve(new Response('Not Valid payload'));
              });
        }
            break;
    
        default:
            response = await new Promise<Response>((resolve) => {
                resolve(new Response('Invalid request'));
              });
            break;
    }

    return response;
}



/**
 * Check if the passed object has the wanted property for create new User in Data base
 * 
 * @param newUser 
 */
function checkNewUserProperty(newUser: any): boolean {
    return newUser && 
        newUser.firstname && ObjectHelper.isStringAndNotEmpty(newUser.firstname) &&
        newUser.lastname && ObjectHelper.isStringAndNotEmpty(newUser.lastname) &&
        newUser.email && ObjectHelper.isValidEmail(newUser.email) &&
        newUser.password && ObjectHelper.isStringAndNotEmpty(newUser.password)
}