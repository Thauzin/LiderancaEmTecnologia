const readline = require("readline"); 

const rl = readline.createInterface({
    input : process.stdout, 
    output : process.stdout 
});
console.log("Bem Vindos a calculadora! ")
let entradas = 0;
let num1;
let num2; 

rl.on('line', (input)=> {
    var resposta = (input); 
    if (entradas === 0){
        num1 = parseInt(resposta); 
        entradas = 1; 
        rl.setPrompt("Digite outro número: ")
        rl.prompt()
    }
    else if (entradas === 1){
        num2 = parseInt(resposta);
        entradas = 2;
        console.log("Seus numeros foram: "+ num1 + " e " + num2)
        rl.setPrompt("Digite a operação: 1-Adição 2-Subtração 3-Divisão 4-Multiplicação ")
        rl.prompt();
    }
    else if("entradas === 2"){
        operacao = parseInt(resposta); 
    if (operacao >= 1  && operacao <=4){
        switch (operacao){
            case 1: 
            soma = num1 + num2; 
                console.log("Sua conta deu: " + soma)
                console.log("---------------------------")
                rl.setPrompt("Quer fazer mais uma conta? Digite um numero: ")
                entradas = 0; 
                rl.prompt()
                break;
            case 2: 
                console.log("Sua conta deu: "+ (num1 - num2))
                console.log("---------------------------")
                rl.setPrompt("Quer fazer mais uma conta? Digite um numero: ")
                entradas = 0; 
                rl.prompt()
                break
            case 3: 
            if (num2 === 0){
                console.log("Não é possivel dividir por zero.")
                console.log("---------------------------")
                rl.setPrompt("Quer fazer mais uma conta? Digite um numero: ")
                entradas = 0; 
                rl.prompt()
            }
            else{
                console.log("Sua conta deu: "+ (num1 / num2))
                console.log("---------------------------")
                rl.setPrompt("Quer fazer mais uma conta? Digite um numero: ")
                entradas = 0; 
                rl.prompt()
            }

                break
            case 4: 
                console.log("Sua conta deu: "+ (num1 * num2))
                console.log("---------------------------")
                rl.setPrompt("Quer fazer mais uma conta? Digite um numero: ")
                entradas = 0; 
                rl.prompt()
                break;
        }}
    else {
        console.log("DIGITE UMA OPERAÇÃO VÁLIDA!!!")
        rl.prompt(); 
    }}})

rl.setPrompt("Digite um número: ")
rl.prompt(); 