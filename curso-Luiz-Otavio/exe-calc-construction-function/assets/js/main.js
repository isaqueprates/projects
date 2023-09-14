function Calculadora (){
    this.display = document.querySelector('#display');

    this.iniciar = () => {
        this.clickBotao;
    }

    this.insertDisplay = (valor) => {
        this.display.value += valor ;
    }

    this.calc = () => {
        
        let soma = this.display.value;
        soma = eval(soma);
        this.display.value = soma;

    }

    this.clearDisplay = () => {
        this.display.value = '';
    }

    this.removeOne = () => {
        this.display.value = this.display.value.slice(0, -1);
    }

    this.clickBotao = document.addEventListener('click', e => {
        
        const bt = e.target;

        if(bt.classList.contains('btn-num')){
            this.insertDisplay(bt.innerText);
        }
        
        if(bt.classList.contains('btn-eq')){
            this.calc();
        }
        
        if(bt.classList.contains('btn-clear')){
            this.clearDisplay();
        }
        
        if(bt.classList.contains('btn-del')){
            this.removeOne();
        }

    })

}

const ready = new Calculadora();

ready.iniciar();