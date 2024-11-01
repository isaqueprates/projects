import chalk from "chalk";

const qrCodePrompt = [
    {
        name: 'link',
        description: chalk.blue.bold('Digite o link'),
    },
    {
        name: 'option',
        description: chalk.blue.bold('Escolha entre 1 para QRCode normal ou 2 para QRcode no terminal'),
        pattern: /[1-2]+$/,
        message: chalk.red.bold('Opção inválida'),
        required: true
    }
];



export default qrCodePrompt;