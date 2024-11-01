import prompt from "prompt";
import handler from "../password/handler.js";

async function createPassword() {
    const password = await handler();
    console.log(password);
    // prompt.get(passwordPrompt, handler);
}

export default createPassword;