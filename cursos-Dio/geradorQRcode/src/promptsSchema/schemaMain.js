import chalk from "chalk";

const mainPrompt = [
    {
        name: 'selected',
        description: chalk.blue.bold('Escolha entre 1 ou 2'),
        pattern: /[1-2]+$/,
        message: chalk.red.bold('Opção inválida'),
        required: true
    }
]

export default mainPrompt;