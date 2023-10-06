import { PrismaClient } from "@prisma/client";
import { Encrypter } from "../helpers/encrypter.helper";
import { ObjectHelper } from "../helpers/object.helper";

const prisma = new PrismaClient();

export async function createUser(newUser: any): Promise<Response> {
    let response: Response;
      
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
        response = await invalidUserPostRequest();
    }

    return response;
}

export async function connectUser(credentials: {login: string, password: string}): Promise<Response> {
    let response: Response;
      
    if (checkCredentialsProperty(credentials)) {
        return await prisma.user.findUnique({
                where: {
                    email: credentials.login
                },
                include: {
                    characters: {
                        select: {
                            id: true
                        }
                    }
                }
            }).then(async user => {
                if (!!user) {
                    if (await Encrypter.comparePwdAndHash(credentials.password, user.password)) {
                        return new Response(JSON.stringify({
                            id: user.id,
                            firstname: user.firstname,
                            lastname: user.lastname,
                            email: user.email,
                            characters: user.characters.map(c => c.id)
                        }));
                    } else {
                        return new Response('incorrect credentials', {
                            status: 400,
                        });
                    }
                } else {
                    return  await invalidUserPostRequest();
                }
            })
    } else {
        response = await invalidUserPostRequest();
    }

    return response;
}

///////////////
// 
///////////////


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

/**
 * Check if the passed object has the wanted property getting and check user
 * 
 * @param credentials 
 */
function checkCredentialsProperty(credentials: any): boolean {
    return credentials && 
        credentials.login && ObjectHelper.isValidEmail(credentials.login) &&
        credentials.password && ObjectHelper.isStringAndNotEmpty(credentials.password)
}

function invalidUserPostRequest(): Promise<Response> {
    return new Promise<Response>((resolve) => {
       resolve(new Response('USER - POST - Invalid request', {
        status: 404
       }));
     });
   }