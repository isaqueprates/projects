
async function permiterPassword() {

    let char = [];
    if (process.env.UPPERCASE_LETTERS === 'true') 
        char.push(...'ABCDEFGHIJKLMNOPQRSTUVWXYZ');

    if (process.env.LOWERCASE_LETTERS === 'true') 
        char.push(...'abcdefghijklmnopqrstuvwxyz');

    if (process.env.NUMBERS === 'true') 
        char.push(...'0123456789');

    if (process.env.SPECIAL_CHARACTERS === 'true') 
        char.push(...'!@#$%^&*()_+-=[]{}|;:,./<>?');

    return char;
}


export default permiterPassword;