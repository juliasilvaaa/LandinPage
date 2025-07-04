// Contador de cliques
// Botão para contar os cliques
// Botão para zerar os cliques.

const cliquesElement = document.getElementById("cliques");
let contador = 0;

const clicar = document.getElementById("clicar");
const zerar = document.getElementById("zerar");

clicar.addEventListener("click", function () {
  // Aumenta o valor da variavel, retorna o valor antigo antes de acrescentar
  //   contador++;
  valoradicionado = contador++;
  cliquesElement.textContent = valoradicionado;
});

zerar.addEventListener("click", function () {
  contador = 0; // Zera o contador real
  cliquesElement.textContent = contador; // Atualiza na tela
});

// Contador de caracteres
const caracterElement = document.getElementById("quantidade");

function ContadorCaracteres() {
  const inputElement = document.getElementById("input-caracter");
  const text = inputElement.value;
  const numeroCaracteres = text.length;
  caracterElement.textContent = numeroCaracteres;
}

// Verificar se o numero é par ou impar
const resultValor = document.getElementById("resultado");

function VerificarResultado() {
  const inputNumber = document.getElementById("input-number");
  const number = inputNumber.value;

  if (number % 2 === 0) {
    // Resultado Par
    resultValor.textContent = "Numero Par"
  } else {
     // Resultado ímpar
     resultValor.textContent = "Numero Ímpar"
  }
}

const buttonRed = document.getElementById("red")
const buttonGreen = document.getElementById("green")
const buttonYellow = document.getElementById("yellow")
const buttonBlack = document.getElementById("black")

// Colors
let vermelho = "red"
let green = "green"
let yellow = "yellow"
let black = "black"

buttonRed.addEventListener('click', function() {
    document.body.style.backgroundColor = vermelho
})

buttonGreen.addEventListener('click', function() {
    document.body.style.backgroundColor = green
})

buttonYellow.addEventListener('click', function() {
    document.body.style.backgroundColor = yellow
})

buttonBlack.addEventListener('click', function() {
    document.body.style.backgroundColor = black
})