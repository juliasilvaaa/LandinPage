let dolar = 5.56;

let usdInput = document.querySelector("#usd");

let brlInput = document.querySelector("#brl");

// Eventos
usdInput.addEventListener("keyup", () => {
  convert("usd-to-brl");
});

brlInput.addEventListener("keyup", () => {
  convert("brl-to-usd");
});

function formatCurrenty(value) {
  // Ajustar valir
  let fixedValue = fixValue(value);

  let options = {
    useGrouping: false,
    minimumFractionDigits: 2,
  };
  let formatter = new Intl.NumberFormat("pt-BR", options);
  return formatter.format(fixedValue);
}

function fixValue(value) {
  let fixedValue = value.replace(",", ".");
  let floatValue = parseFloat(fixedValue);

  // Verificação se a pessoa digitar Nan - Not a number
  if (floatValue == NaN) {
    floatValue = 0;
  }

  return floatValue;
}

// Funções
function convert(type) {
  if (type == "usd-to-brl") {
    // Ajustar o valor
    let fixedValue = fixValue(usdInput.value);
    let result = fixedValue * dolar;
    result = result.toFixed(2);

    brlInput.value = formatCurrenty(result);
  }

  if (type == "brl-to-usd") {
    let fixedValue = fixValue(brlInput.value);
    let result = fixedValue / dolar;
    result = result.toFixed(2);

    usdInput.value = formatCurrenty(result);
  }
}

var coordenadasUsd = usdInput.getBoundingClientRect();
console.log(coordenadasUsd);

var coordenadasBrl = brlInput.getBoundingClientRect();
console.log(coordenadasUsd);

function trocarInputs() {
  const container = document.getElementById("inputs-container");
  const original = document.getElementById("input-original");
  const convertido = document.getElementById("input-convertido");

  // Troca a ordem dos elementos
  if (container.firstElementChild.id === "input-original") {
    container.insertBefore(convertido, original);
  } else {
    container.insertBefore(original, convertido);
  }

  // Atualiza os textos após a troca
  const firstInput = container.children[0];
  const secondInput = container.children[1];

  if (firstInput && secondInput) {
    firstInput.querySelector("h1").textContent = "Valor";
    secondInput.querySelector("h1").textContent = "Valor convertido:";
  }
}
