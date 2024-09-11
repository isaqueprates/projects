const player1 = {
    name: 'Mario',
    velocidade: 4,
    manobrabilidade: 3,
    poder: 3,
    pontos: 0
};

const player2 = {
    name: 'Luigi',
    velocidade: 3,
    manobrabilidade: 4,
    poder: 4,
    pontos: 0
};

async function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

async function getRandomBlock() {
    let random = Math.random();
    let result;

    switch (true) {
        case random <= 0.33:
            result = 'RETA';
            break;
        case random <= 0.66:
            result = 'CURVA';
            break;
        default:
            result = 'CONFRONTO';
    }

    return result;
}

async function whiteRoll(caracterName, block, roll, atribute) {
    console.log(` ${caracterName} 🎲 rolou um dado de:  ${block} ${roll} + ${atribute} = ${roll + atribute}`);
}

async function playerRanceEngine(play1, play2) {

    for (let i = 1; i <= 5; i++) {
        console.log(` 🏁🏁 Rodada ${i} de 5 🏁🏁\n`);

        let block = await getRandomBlock();
        console.log(` 🏁🏁 Bloco ${block} 🏁🏁\n`);

        let play1Roll = await rollDice();
        let play2Roll = await rollDice();

        let totalPonts1 = 0;
        let totalPonts2 = 0;

        if (block === 'RETA') {
            totalPonts1 = play1Roll + play1.velocidade;
            totalPonts2 = play2Roll + play2.velocidade;

            await whiteRoll(player1.name, 'velocidade', play1Roll, play1.velocidade);
            await whiteRoll(player2.name, 'velocidade', play2Roll, play2.velocidade);


        }
        if (block === 'CURVA') {
            totalPonts1 = play1Roll + play1.manobrabilidade;
            totalPonts2 = play2Roll + play2.manobrabilidade;

            await whiteRoll(player1.name, 'curva', play1Roll, play1.manobrabilidade);
            await whiteRoll(player2.name, 'curva', play2Roll, play2.manobrabilidade);


        }
        if (block === 'CONFRONTO') {
            const powerResult1 = play1Roll + play1.poder;
            const powerResult2 = play2Roll + play2.poder;

            let power = Math.floor(Math.random() * 2);

            console.log(`${player1.name}  vs ${player2.name}`);

            await whiteRoll(player1.name, 'poder', play1Roll, play1.poder);
            await whiteRoll(player2.name, 'poder', play2Roll, play2.poder);

            if (powerResult1 > powerResult2 && player2.pontos > 0) {
                if (power === 1) {
                    console.log(`\n🏁🏁 ${player1.name} venceu o confronto e ${player2.name} perdeu o confronto tomando um 🐢 e perdeu 2 pontos  🏁🏁`);
                    player2.pontos --;
                } else if(player2.pontos > 1){
                    console.log(`\n🏁🏁 ${player1.name} venceu o confronto ${player2.name} perdeu um ponto tomou uma bomba 🏁🏁`);
                    player2.pontos -=2;
                }
            }

            if (powerResult2 > powerResult1 && player1.pontos > 0) {
                if (power === 1) {
                    console.log(`\n🏁🏁 ${player2.name} venceu o confronto e ${player1.name} perdeu o confronto tomando um 🐢 e perdeu 2 pontos  🏁🏁`);
                    player1.pontos --;
                } else if (player1.pontos > 1) {
                    console.log(`\n🏁🏁 ${player2.name} venceu o confronto ${player1.name} perdeu um ponto tomou uma bomba 🏁🏁`);
                    player1.pontos -=2;
                }
            }

            if (powerResult1 > powerResult2) {
                console.log(`\n🏁🏁 ${player1.name} venceu o confronto! Parabéns 🏁🏁`);
                player1.pontos++;
            }

            if (powerResult2 > powerResult1) {
                console.log(`\n🏁🏁 ${player2.name} venceu o confronto! Parabéns 🏁🏁`);
                player2.pontos++;
            }

            if (powerResult1 === powerResult2) {
                console.log(`\n 🏁🏁 Empate 🏁🏁`);
            }

        }

        if (totalPonts1 > totalPonts2) {
            console.log(`\n🏁🏁 ${player1.name} fez um ponto na rodada 🏁🏁`);
            player1.pontos++;
        } else if (totalPonts1 < totalPonts2) {
            console.log(`\n🏁🏁 ${player2.name} fez um ponto na rodada 🏁🏁`);
            player2.pontos++;
        }

        console.log(` 🏁🏁 ${player1.name} ${player1.pontos} x ${player2.pontos} ${player2.name} 🏁🏁`);

        console.log(`🏁🏁 _______________________________ 🏁🏁\n`);
    }

}

async function winner(play1, play2) {

    if (player1.pontos > player2.pontos)
        console.log(` 🏁🏁 ${player1.name} venceu 🏁🏁`);
    else if (player1.pontos < player2.pontos)
        console.log(` 🏁🏁 ${player2.name} venceu 🏁🏁`);
    else
        console.log(` 🏁🏁 Empate 🏁🏁`);

}

(async function main() {
    console.log(` 🏁🏁 Corrida entre ${player1.name} e ${player2.name} começando...`);

    await playerRanceEngine(player1, player2);
    await winner(player1, player2);
})()