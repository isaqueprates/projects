
import permiterPassword from "./utils/permitedPassword.js";

async function handler() {
    const characters = [...await permiterPassword()];
    let password = '';

    const passwordLength = process.env.PASSWORD_LENGTH;
    // characters = await permiter();

    for (let i = 0; i < passwordLength; i++) {

        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }

    return password;
}


export default handler;