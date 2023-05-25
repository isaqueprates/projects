const textTempo = document.querySelector("h1")

const data1 = new Date();
const diaSemana = data1.getDay()
const mesAno = data1.getMonth()
const opcoes = {
    dateStyle: 'full',
    timeStyle:'short'
};

textTempo.innerText = data1.toLocaleString('pt-BR', opcoes)

/******--------Jeito mais complicado--------******/
// textTempo.innerText = `${verificarDia(diaSemana)}  ${data1.getDate()} de ${verificarMes(mesAno)} ${data1.getHours()}:${data1.getMinutes()}`

// function verificarDia (day){
//     let dayName;
//     switch(day){
//         case 0:
//             dayName = 'Domingo';
//             return dayName;
//         case 1:
//             dayName = 'Segunda-feira';
//             return dayName;
//         case 2:
//             dayName = 'Terça-feira';
//             return dayName;
//         case 3:
//             dayName = 'Quarta-feira';
//             return dayName;
//         case 4:
//             dayName = 'Quinta-feira';
//             return dayName;
//         case 5:
//             dayName = 'Sexta-feira';
//             return dayName;
//         case 6:
//             dayName = 'Sabado';
//             return dayName;
//         default:
//     }
// }

// function verificarMes (mes){
//     let mesName;
//     switch(mes){
//         case 0:
//             mesName = 'Janeiro';
//             return mesName;
//         case 1:
//             mesName = 'Fevereiro';
//             return mesName;
//         case 2:
//             mesName = 'Março';
//             return mesName;
//         case 3:
//             mesName = 'Abril';
//             return mesName;
//         case 4:
//             mesName = 'Maio';
//             return mesName;
//         case 5:
//             mesName = 'Junho';
//             return mesName;
//         case 6:
//             mesName = 'Julho';
//             return mesName;
//         case 7:
//             mesName = 'Agosto';
//             return mesName;
//         case 8:
//             mesName = 'Setembro';
//             return mesName;
//         case 9:
//             mesName = 'Outubro';
//             return mesName;
//         case 10:
//             mesName = 'Novembro';
//             return mesName; 
//         case 11:
//             mesName = 'Dezembro';
//             return mesName;   
//         default:
//     }
// }
