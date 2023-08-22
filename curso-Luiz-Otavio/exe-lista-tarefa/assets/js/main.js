const inputTarefa = document.querySelector('#tarefa-input');
const listTarefa = document.querySelector('ul.tarefas-list')
const btn = document.querySelector('.btn')

function clearInput(){
    inputTarefa.value = '';
    inputTarefa.focus();
}

function criaTarefa(textTarefa){
    const li = document.createElement('li');
    li.innerText = textTarefa;
    listTarefa.appendChild(li);
    btnApagar(li);
    salvaTarefa();
}

function btnApagar(li){

    li.innerText += ' ';
    const botaoApagar = document.createElement('button');
    // botaoApagar.innerText = 'Apagar';
    botaoApagar.setAttribute('class', 'apagar');
    // botaoApagar.setAttribute('onClick', "insert()");
    li.appendChild(botaoApagar);
}

inputTarefa.addEventListener('keypress', (e)=>{
    if(e.keyCode === 13){
        if(!inputTarefa.value){
            return alert('tarefa inválida');
        }else{
            criaTarefa(inputTarefa.value);
            clearInput();
        }   
    }
})

btn.addEventListener('click', function(e){

    if(!inputTarefa.value){
        return alert('tarefa inválida');
    }

    criaTarefa(inputTarefa.value);
    clearInput();
})


// function insert(){
//     //tem a mesma funcionalidade da função abaixo
//     const el = document.querySelector('li');
//     el.parentElement.remove();    
// }

//******* A diferença entre este codígo e o acima é que esse recupera todos os eventos de click *************

document.addEventListener('click', (e)=>{
    const el = e.target;

    if(el.classList.contains('apagar')){
        el.parentElement.remove();
        salvaTarefa();
    }

})

function salvaTarefa(){
    const liTarefas = listTarefa.querySelectorAll('li');
    const lista = []

    for (const taf of liTarefas) {
        let textTaf = taf.innerText
        textTaf = textTaf.replace('Apagar', ' ')
        lista.push(textTaf);
        
    }

    const tarefasJSON = JSON.stringify(lista)
    localStorage.setItem('tafSalva', tarefasJSON);
}

function adicionaTarefasSalvas(){
    const tarefa = localStorage.getItem('tafSalva');
    const taref = JSON.parse(tarefa);

    for (const taf of taref) {
        criaTarefa(taf);
    }
}

adicionaTarefasSalvas()