const readline = require("readline"); 

const rl = readline.createInterface({
    input : process.stdout, 
    output : process.stdout 
});
console.log("Bem Vindos a calculadora! ")

let num1;
let num2; 
let entradas = 0; 

rl.on('line', (input)=> { 
    var valor = (input);

    if (entradas == 0){
        num1 = parseInt(valor); 
        entradas ++;
        rl.prompt();
    }
    if (entradas == 1){
        num2 = parseInt(valor); 
        entradas ++;
        rl.prompt();
    }
    if (entradas == 2){
        console.log("Digite sua operação (+ - * /): ")
        var operacao = (input); 
        console.log(operacao, num1, num2)
    }
})


rl.prompt();
rl.setPrompt("Digite um número! ") 