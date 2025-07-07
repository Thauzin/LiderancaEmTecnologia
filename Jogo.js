const readline = require("readline"); 

const rl = readline.createInterface({
    input : process.stdout, 
    output : process.stdout 
});
console.log("Bem Vindos ao jogo de advinhação! ")

var aleatorio = Math.floor(Math.random() * 101);  // Math.floor para deixar os números exatos 
let tentativas = 5; 
let resposta;
let acertos = 0;
let jogados = 0; 

rl.on('line', (input)=> {
    resposta = parseInt(input); 
    if(resposta <= 0 || resposta <= 100){
        tentativas --;
    if(aleatorio === resposta){
        acertos ++; 
        jogados ++;
        console.log("Você acertou com " + tentativas + " tentativas restantes! Parabens!")
        console.log("Taxa de acertos: "+ Math.floor((acertos/jogados)*100) + "%")
        console.log("-----------------------------------------------")
        tentativas = 5;
        aleatorio = Math.floor(Math.random() * 101); 
        rl.prompt();
    }
    else {
        if(tentativas <= 0){
            console.log("Você perdeu... Número de tentativas excedidas! O número era: " +aleatorio)
            jogados ++;
            console.log("Taxa de acertos: "+ Math.floor((acertos/jogados)*100) + "%")
            console.log("-----------------------------------------------")
            tentativas = 5;
            aleatorio = Math.floor(Math.random() * 101); 
            rl.prompt();
        }
        else {
            if(aleatorio > resposta) {
                console.log("Dica: O número é maior")
                console.log("Você tem "+ tentativas + " tentativas restantes")
            }
            else{
                console.log("Dica: O número é menor")
                console.log("Você tem "+ tentativas + " tentativas restantes")
            }  
            rl.prompt();
        }
    }
}
else{
    console.log(" ")
    console.log("SOMENTE NÚMEROS ENTRE 0 E 100!!!!!")
    console.log(" ")
    rl.prompt(); 
}
})
rl.setPrompt("Digite um número entre 0 e 100: ")
rl.prompt(); 

