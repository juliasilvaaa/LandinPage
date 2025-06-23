// Variaveis 
let idade = 90
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
