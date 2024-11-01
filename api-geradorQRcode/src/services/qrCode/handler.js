import prompt from "prompt";
import qr from "qrcode-terminal";
import chalk from "chalk";

async function handler (err, result) {
        if(err) {
            console.log(chalk.red.bold(`Error ${err}`));
            return;
        }

        const isMall = result.option;

        qr.generate(result.link, {small: isMall}, (qrcode) => {
            console.log(chalk.black.bgCyan.bold("QRCode gerado com sucesso!"));
            console.log(qrcode);
        });

}


export default handler;