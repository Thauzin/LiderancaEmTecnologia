const readline = require("readline"); 

const rl = readline.createInterface({
    input : process.stdout, 
    output : process.stdout 
});

const aleatorio = Math.floor(Math.random() * 101);  // Math.floor para deixar os números exatos 
let tentativas = 0; 
let resposta;

rl.on('line', (input)=> {
    resposta = parseInt(input); 
    tentativas ++;
    if(aleatorio === resposta){
        console.log("Você acertou com " + tentativas + " tentativas! Parabens! ")
        rl.close;
    }
    else {
        if(aleatorio > resposta) {
            console.log("Dica: O número é maior")
        }
        else{
            console.log("Dica: O número é menor")
        }  
        rl.prompt();
    }
})

rl.setPrompt("Digite um número entre 0 e 100: ")
rl.prompt(); 

