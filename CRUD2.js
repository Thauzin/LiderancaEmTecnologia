const readline = require('readline')

const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
})

let livros = []; 
let livros2 = [];

function exibirmenu(){
    console.log("----------------------------------------")
    rl.question('MENU \n 1 - Cadastrar \n 2 - Exibir \n 3 - Editar \n 4 - Remover \n 5 - Procurar Livros \n Escolha uma opção: ' , (opcao) => {
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
            procurar();
            break;
    } 
})}

function cadastrar(){
    console.log("----------------------------------------")
    console.log("Cadastre seu livro aqui! ")
    rl.question("Digite o nome do livro: ", (nomeLivro)=> {
        rl.question("Digite o ano de lançamento: ", (ano)=> {
            rl.question("Digite o gênero do livro: ", (genero)=> {
                rl.question("Já foi lido? (s/n)", (lido)=>{
                if (ano < 1500 || ano > 2025){
                    console.log("Esse ano não é válido! Cadastre novamente! ")
                    cadastrar();
                }
                else{
                    if(lido === "s"){
                        lido = "Lido";
                    }
                    else if(lido === "n"){
                        lido = "Quero ler";
                    }
                    else {
                        console.log("Marcação do livro errada! Cadastre novamente! ")
                    }
                    livros.push({nome: nomeLivro, ano: ano, genero: genero, lido: lido})
                    rl.question("Livro cadastrado! Deseja adicionar mais livros? (s/n)",(opcao2)=>{
                        if (opcao2 === "s"){
                            cadastrar();
                        }
                        else{
                            exibirmenu();
                        }
                    })
                }
            })
            })
        })
    })
}

function exibir(){
    if (livros.length === 0){
        rl.question("Não existe livros cadastrados, deseja cadastrar? (s/n)", (opcao3)=>{
            if (opcao3 === "s"){
                cadastrar();
            }
            else if (opcao3 === "n"){
                exibirmenu();
            }
            else {
                console.log("Por favor, digite somente (s/n)!")
                exibir(); 
            }
        })
    }
    else{
        console.log("----------------------------------------")
        console.log("Esses são os livros cadastrados!\n ")
        for (i = 0; i < livros.length; i++){
            console.log(`${i+1}: ${livros[i].nome} - ${livros[i].ano} - ${livros[i].genero} - ${livros[i].lido}`)
        }
        exibirmenu(); 
        
    }
}

function editar(){
    if (livros.length === 0){
        rl.question("Não existe livros cadastrados, deseja cadastrar? (s/n)", (opcao3)=>{
            if (opcao3 === "s"){
                cadastrar();
            }
            else if (opcao3 === "n"){
                exibirmenu();
            }
            else {
                console.log("Por favor, digite somente (s/n)!")
                exibir(); 
            }
        })
    }
    else {
        console.log("----------------------------------------")
        console.log("Esses são os livros cadastrados!\n ")
        for (i = 0; i < livros.length; i++){
            console.log(`${i} - ${livros[i].nome}`)
        }
        rl.question("Qual livro você deseja editar? ",(num)=>{
            rl.question("Digite o nome: ", (nomeLivro)=> {
                rl.question("Digite o ano de lançamento: ", (ano)=> {
                    rl.question("Digite o gênero: ", (genero)=>{
                        livros[num] = ({nome: nomeLivro, ano:ano, genero:genero })
                        console.log("Livro editado com sucesso! ")
                        exibirmenu()
                    })
                })
            })
        })
    }
}

function remover(){
    if (livros.length === 0){
        rl.question("Não existe livros cadastrados, deseja cadastrar? (s/n)", (opcao3)=>{
            if (opcao3 === "s"){
                cadastrar();
            }
            else if (opcao3 === "n"){
                exibirmenu();
            }
            else {
                console.log("Por favor, digite somente (s/n)!")
                exibir(); 
            }
        })
    }
    else{
        console.log("----------------------------------------")
        console.log("Esses são os livros cadastrados!\n ")
        for (i = 0; i < livros.length; i++){
            console.log(`${i} - ${livros[i].nome}`)
        }
        rl.question("Qual livro você deseja remover? ",(rm) =>{
            livros.splice(rm);
            rl.question("Livro removido com sucesso! Deseja remover mais um? (s/n)",(opcao4)=> {
                if(opcao4 === "s"){
                    remover();
                }
                else{
                    exibirmenu();
                }
            })
        })
    }
}

function procurar(){
    console.log("----------------------------------------")
    rl.question("Procurar por: \n1 - Gênero \n2 - Ano \n3 - Lido \n4 - Não Lido \n5 - Voltar ao MENU", (buscar)=>{
        switch(buscar){
            case "1": 
            procurarPorGenero();
            break;
        }
    })
   
    
}

function procurarPorGenero(){
    rl.question("Digite o gênero de livros que você deseja procurar: ", (genero2)=> {
        for (i = 0; i < livros.length; i++){
            if (livros[i].genero === genero2){
                livros2.push(livros[i])
            }
        }
        if (livros2.length === 0){
            console.log("Não existem livros desse gênero cadastrados! ")
            exibirmenu();
        }
        else{
        console.log(`Esses são os livros do gênero: ${genero2}`)
        for (i=0; i < livros2.length; i++){
            console.log(`${i+1} - ${livros2[i].nome}`)
        }
        exibirmenu()
    }
    })
}

exibirmenu();