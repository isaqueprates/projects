import prompt from "prompt";
import mainPrompt from "./prompts/promptMain.js";
import chalk from "chalk";

function main() {
   
    prompt.get(mainPrompt, (err, result) => {
        if(result.selected == 1) console.log(chalk.black.bgCyan.bold("Opção 1 selecionada, QR code"));
        if(result.selected == 2) console.log(chalk.black.bgCyan.bold("Opção 2 selecionada, password "));

});

    prompt.start();
}

main();