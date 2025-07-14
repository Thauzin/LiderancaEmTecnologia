const readline = require('readline')

const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
})

let escolha = 0; 
let atletas = [];

function exibirmenu(){
        console.log("----------------------------------------")
        rl.question('MENU \n 1 - Cadastrar \n 2 - Exibir \n 3 - Editar \n 4 - Remover \n', (opcao) => {
        escolha = parseInt(opcao)
        switch (escolha){
            case 1: 
                cadastrar(); 
                break;
            case 2: 
                exibir();
                break;
            case 3: 
                editar();
                break; 
            case 4: 
                remover();
                break;
        } 
})}

function cadastrar(){
    console.log("------------- CADASTRAR ------------")
    console.log("Bem vindo a opção Cadastrar \n")
    rl.question('Digite seu nome: ', (nome) => {
        rl.question('Digite seu esporte: ', (esporte) => {
            rl.question('Digite sua idade: ', (idade) => {
                atletas.push({nome: nome, idade: idade, esporte: esporte})
                console.log("Atleta cadastrado! ")
                exibirmenu()
})})})}

function exibir(){
    console.log("------------- EXIBIR ------------")
    if(atletas.length === 0){
        console.log("Não existem atletas cadastrados! ")
        exibirmenu();
    }
    else {
        for (let i = 0; i < atletas.length; i++) {
            console.log(`\n ${i + 1}- FICHA: ${atletas[i].nome} que joga ${atletas[i].esporte} e tem ${atletas[i].idade} anos.`);
        }
        exibirmenu();
    }
}

function remover(){
    console.log("------------- REMOVER ------------")
    if (atletas.length === 0 ){
        console.log("Não existem atletas cadastrados! ")
        exibirmenu();
    }
    else{
        ("Verificação de atletas cadastrados \n")
        for (let i = 0; i < atletas.length; i++) {
            console.log(`\n ${i} - ${atletas[i].nome}`);
        }
        rl.question("Selecione o atleta que quer remover: ", (remove)=> {
            atletas.splice(remove)
            console.log("Atleta removido com sucesso! ")
            exibirmenu();
        })
    }
}

function editar(){
    console.log("------------- EDITAR ------------")
    if (atletas.length === 0 ){
        console.log("Não existem atletas cadastrados! ")
        exibirmenu();
    }
    else{
        ("Verificação de atletas cadastrados \n")
        for (let i = 0; i < atletas.length; i++) {
            console.log(`${i} - ${atletas[i].nome}`);
        }
        rl.question("Selecione o atleta que quer editar: ", (num)=> {
            rl.question('Digite seu nome: ', (nome) => {
                rl.question('Digite seu esporte: ', (esporte) => {
                    rl.question('Digite sua idade: ', (idade) => {
                        atletas[num]= {nome: nome, idade: idade, esporte: esporte}
                        console.log("Atleta editado com sucesso! ")
                        exibirmenu()
        })})})
        })
    }
}

exibirmenu();



