const day = document.querySelector("h1")

const data1 = new Date();
const diaSemana = data1.getDay()

day.innerText = verificarDia(diaSemana)
myDate()
function myDate (){
    // let data = new Date();
    // let dia = data.toDateString()
    // console.log(data.toLocaleDateString())
    // console.log(dia)
}

function verificarDia (dia){
    switch(dia){
        case 0:
            console.log('Domingo')
        break;
        case 1:
            console.log('Segunda-feira')
        break;
        case 2:
            console.log('Terça-feira')
        break;
        case 3:
            console.log('Quarta-feira')
        break;
        case 4:
            console.log('Quinta-feira')
        break;
        case 5:
            console.log('Sexta-feira')
        break;
        case 6:
            console.log('Sabado')
        break;
        default:
    }
}