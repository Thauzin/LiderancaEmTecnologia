const readline = require('readline')

const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
})

let escolha = 0; 
let atletas = [];
let times = []; 
let atletaNovo = [];

function exibirmenu(){
        console.log("----------------------------------------")
        rl.question('MENU \n 1 - Cadastrar \n 2 - Exibir Atletas \n 3 - Editar \n 4 - Remover \n 5 - Criar times \n 6 - Verificar atletas por idade \n 7 - Exibir Times \n 8 - Buscar Atletas ou esporte \n Escolha uma opção: ' , (opcao) => {
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
            case 5: 
                criarTimes();
                break;
            case 6: 
                verificarIdade();
                break;
            case 7: 
                verificarTimes(); 
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
            console.log(`${i + 1}- FICHA: ${atletas[i].nome} que participa ${atletas[i].esporte} e tem ${atletas[i].idade} anos.`);
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

function criarTimes(){
    let nometime;
    let time = [];
    console.log("------------- CRIAR TIMES ------------")
    if(atletas.length === 0){
        console.log("Não existem atletas cadastrados! ")
        exibirmenu();
    }
    else {
            rl.question("Adicionar atleta? (s/n)", (select)=>{
                    
                if (select === "n"){
                    rl.question("Crie um nome para seu time: ", (nometime)=> {
                    times.push({nome: nometime,pessoas: atletaNovo});
                    console.log("Time criado com sucesso!");
                    atletaNovo = [];
                    exibirmenu();
                })
                }

                else if (select === "s" ){
                    adicionarAtleta();
                }

            })
    }}
function adicionarAtleta(){
    ("Verificação de atletas cadastrados \n")
    for (let i = 0; i < atletas.length; i++) {
        console.log(`\n ${i} - ${atletas[i].nome}`);
    }
    rl.question("Selecione o atleta: ",(num) => {
        atletaNovo.push(atletas[num].nome)
        criarTimes();
})

}

function verificarIdade(){
    let num;
    let atletaNovo = atletas[0];

    if (atletas.length === 0 ){
        console.log("Não existem atletas cadastrados! ")
        exibirmenu();
    }
    else {
    rl.question(" Selecione 1 - Atleta mais novo \n Selecione 2 - Atleta mais velho \n" , (num)=> {
        let tipo = parseInt(num)
        if (tipo === 1){
            for (let i = 0; i < atletas.length; i++){
                if (parseInt(atletas[i].idade)< parseInt(atletaNovo.idade)){
                    atletaNovo = atletas[i];
                }
            }
            console.log("O atleta mais novo é: "+atletaNovo.nome)
        }
        else if (tipo === 2){
            for (let i = 0; i < atletas.length; i++){
                if (parseInt(atletas[i].idade) > parseInt(atletaNovo.idade)){
                    atletaNovo = atletas[i];
                }
            }
            console.log("O atleta mais velho é: "+atletaNovo.nome)
        }
        else {
            console.log("Por favor digite uma opção valida!")
            verificarIdade(); 
        }
    
    exibirmenu();
    })
    }
}

function verificarTimes(){
    console.log("------------- EXIBIR TIMES------------")
    if(times.length === 0){
        console.log("Não existem times cadastrados! ")
        exibirmenu();
    }
    else {
        for (let i = 0; i < times.length; i++) {
            console.log(`${i + 1}- TIME: ${times[i].nome} | ATLETAS: ${times[i].pessoas}`);
        }
        exibirmenu();
    }
}

exibirmenu();

//const resultado = pessoas.filter(pessoa => pessoa.email === emailBuscado)