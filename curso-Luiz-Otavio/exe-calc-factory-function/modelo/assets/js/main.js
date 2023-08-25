function calc () {
    return {
        display: document.querySelector('.display'),

        inicia(){
            // alert('iniciado')
            this.clickButton();
        },

        clickButton(){
            document.addEventListener('click', e =>{
                //Com uma "arrow function" não tem necessidade de usar o bind pois o this continua com o contexto normal

                const ck = e.target;

                if(ck.classList.contains('btn-num')){
                    this.inserirDadosDisplay(ck.innerText);
                }

                if(ck.classList.contains('btn-clear')){
                    this.clearDisplay()
                }

                if(ck.classList.contains('btn-del')){
                    this.delCaracter(this.display.value)
                }

                if(ck.classList.contains('btn-eq')){
                    this.calcular()
                }
            })
        },

        inserirDadosDisplay(valor){
            this.display.value += valor
        },

        clearDisplay(){
            this.display.value = '';        
        },

        delCaracter (valor) {
            this.display.value = this.display.value.slice(0, -1);
        },

        calcular(){
            let soma = this.display.value;

            try {
                soma = eval(soma)

                if(!soma){
                    this.display.value = 'conta inexistente';
                    return;
                }

                this.display.value = soma;
            } catch (e) {
                this.display.value = 'conta inexistente';
                return this.display.value = '';
            }
     
        }
    };
}

const calculadora = calc();
calculadora.inicia();
// calculadora.inserirDadosDisplay();