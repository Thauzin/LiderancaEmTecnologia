const readline = require("readline"); 

const rl = readline.createInterface({
    input : process.stdout, 
    output : process.stdout 
});
console.log("Bem Vindos ao jogo de advinhação! ")

const aleatorio = Math.floor(Math.random() * 101);  // Math.floor para deixar os números exatos 
let tentativas = 5; 
let resposta;

rl.on('line', (input)=> {
    resposta = parseInt(input); 
    tentativas --;
    if(aleatorio === resposta){
        console.log("Você acertou com " + tentativas + " tentativas restantes! Parabens! ")
        rl.close;
    }
    else {
        if(tentativas <=5){
            if(aleatorio > resposta) {
                console.log("Dica: O número é maior")
                console.log("Você tem "+ tentativas + " tentativas restantes")
            }
            else{
                console.log("Dica: O número é menor")
                console.log("Você tem "+ tentativas + " restantes")
            }  
            rl.prompt();
        }
        else {
            console.log("Você perdeu... Número de tentativas excedidas!")
        }

    }
})

rl.setPrompt("Digite um número entre 0 e 100: ")
rl.prompt(); 

