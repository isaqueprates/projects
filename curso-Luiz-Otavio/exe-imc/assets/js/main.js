const peso = document.querySelector("#peso");
const altura = document.querySelector("#altura");
const resultado = document.querySelector(".resultado");
const form = document.querySelector("#form");



function msgResultado (msg, cor){
    resultado.innerText = msg
    resultado.style.backgroundColor= cor
}

function verificarResultado(resImc){
    if(resImc == NaN){
        msgResultado(`Número invalído`, "red")
    }else if (resImc < 18.5) {
        msgResultado(`Abaixo do Peso (${resImc})`, '#77ff075b')
    } else if (resImc >= 18.5 && resImc <= 24.9) {
        msgResultado(`Peso normal (${resImc})`, '#77ff0780') 
    }else if (resImc >= 25 && resImc <= 29.9){
        msgResultado (`Sobrepeso (${resImc})`, '#ff2c0773')
    }else if(resImc >= 30 && resImc <= 34.9){
        msgResultado (`Obesidade grau 1 (${resImc})`, '#ff2c0791')
    }else if (resImc >= 35 && resImc <= 39.9){
        msgResultado (`Obesidade grau 2 (${resImc})`, '#ff2c079c')
    }else {
        msgResultado (`Obesidade grau 3 (${resImc})`,'#ff2c079c')
    }
    
}

function calcularImc(e){
    e.preventDefault()
    let peso1 = peso.value;
    let altura1 = altura.value;
    let res = peso1 / (altura1*altura1);
    verificarResultado(res.toFixed(2))
}

form.addEventListener("submit", calcularImc);

