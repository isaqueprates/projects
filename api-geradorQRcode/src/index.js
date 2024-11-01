import prompt from "prompt";
import mainPrompt from "./promptsSchema/schemaMain.js";
import chalk from "chalk";
import createQrCode from "./services/qrCode/create.js";
import createPassword from "./services/password/create.js";

async function main() {
   
    prompt.get(mainPrompt, async (err, result) => {
        if(result.selected == 1) await createQrCode();
        if(result.selected == 2) await createPassword();

});

    prompt.start();
}

main();