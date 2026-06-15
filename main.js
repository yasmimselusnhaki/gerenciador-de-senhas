const numeroSenha = document.querySelector('.parametro-senha__texto');
let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;

const botoes = document.querySelectorAll('.parametro-senha__botao');

botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;

function diminuiTamanho(){
    if(tamanhoSenha > 1){
        // tamanhoSenha = tamanhoSenha-1;
        tamanhoSenha--;
    }
    numeroSenha.textContent = tamanhoSenha;
}
function aumentaTamanho(){
    if(tamanhoSenha < 20){
        // tamanhoSenha = tamanhoSenha+1;
        tamanhoSenha++;
    }
    numeroSenha.textContent = tamanhoSenha;
}
const campoSenha = document.querySelector('#campo-senha');

const letrasMaisculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
geraSenha();

function geraSenha(){
    let numeroAleatorio = Math.random()*letrasMaisculas.length;
    console.log(numeroAleatorio);
}

campoSenha.value = letrasMaisculas;