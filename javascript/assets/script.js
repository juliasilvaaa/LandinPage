// Variaveis 
let number = 90
let nome = 'Julia'
let logado = false

// Array e objetos
let ingredientes = ['farinha', 'ovos', 'leite']
let personagem = {
    nome: 'Julia',
    idade: 18,
    forca: 200
}

// Exibir 
console.log(personagem.nome)


// Criando Fuction 
// - Input - Pegar dados
// - Processar dados
// - Outpout - retorno da nossa função

// A função vai receber A e B
function sum(a, b) {
    let resultado = a + b
    return resultado
}

// Usando a função
let sumResult = sum(15,5)
console.log(sumResult)

// Criando função para subtrair
function sub(a , b){
    let resultado = a - b
    return resultado
}

let subResult = sub(5,2)
console.log(subResult)

// Condicionais

let idadeperson = 18 
if (idadeperson >= 18) {
    console.log("Você é maior de idade ")
}

// = atribuir valor
// == comparar valor 
// != diferente
// > maior - < menor
// >= maior ou igual - <= menor ou igual

person = "Julia"
if(person== "Julia"){
    console.log("Mensagem especial")
} else{
    console.log("Mensagem Normal")
}


// Loops
let lista = ["farinha", "leite", "ovos", "manteiga"]

for(let item of lista){
    // Cada volta ele vai armazenar temporariamente até acabar em todos os items da lista
    console.log("- Ingredientes: " + item)
}

// Evento
function aviso(){
    alert("Botão clicado")
}

function alerta(){
    alert("Botao 2 clicado")
}

// Selecionando o botao
let botao = document.querySelector("#botao")

botao.addEventListener("mouseover", () => {
    alerta()
})



// Inputs

let usdInput = document.querySelector("#usd")
let brInput = document.querySelector("#br")

usdInput.addEventListener("keyup", () => {
    console.log("Apertou no campo usd")
})

// Pegar oque esta sendo digitado e exibindo no console
brInput.addEventListener("keyup", () => {
    console.log(brInput.value)
})