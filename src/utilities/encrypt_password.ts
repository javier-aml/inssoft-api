import * as bcrypt from 'bcrypt'

export async function encryptPassword(password: string){
    const saltOrRounds = 10;
    const encryptedPassword = await bcrypt.hash(password, saltOrRounds);
    return encryptedPassword;
}