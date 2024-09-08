alert('Boas vindas ao jogo do número secreto');
let numeroMaximo = prompt('Insira um número máximo para você adivinhar o número: ');
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log('O número secreto é: ', numeroSecreto);
let chute;
let tentativas = 1;

// Enquanto chute não for igual ao número secreto.
while (chute != numeroSecreto){
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    // Se o chute for igual ao número secreto
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
    }
    tentativas++
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso aí! Você descobriu o número secreto: ${numeroSecreto} :)! Com ${tentativas} ${palavraTentativa}`);

let palavraPessoa = quantidadePessoas == 1 ? 'pessoa' : 'pessoas';

