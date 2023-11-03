let fruit = "banana";
function getFruit(fruit) {
  fruit = "orange";
  return fruit;
}

console.log(fruit);
console.log(getFruit(fruit));

let nome = prompt("Qual o seu nome?");
document.getElementById("nomeReturn").innerHTML = "Olá, " + nome;
let nomeAparece = document.getElementById("nomeReturn");
nomeAparece.style.display = "flex";

function resetPagina() {
  nomeAparece.style.display = "none";
}

function myMove(element) {
  let pos = 300;

  function frame() {
    if (pos >= 390) {
      clearInterval(id);
    } else {
      pos++;
      element.style.width = pos + "px";
      element.style.height = pos + "px";
    }
  }

  let id = setInterval(frame, 5);
}

const elements = document.getElementsByClassName("imagemAnime");
for (let i = 0; i < elements.length; i++) {
  elements[i].addEventListener("mouseover", function () {
    myMove(this);
  });
}

let firstNumber = prompt("Digite o primeiro número:");
let secondNumber = prompt("Digite o segundo número:");

firstNumber = Number(firstNumber);
secondNumber = Number(secondNumber);

const sum = firstNumber + secondNumber;
const sub = firstNumber - secondNumber;
const multi = firstNumber * secondNumber;
const div = firstNumber / secondNumber;
const restDiv = firstNumber % secondNumber;

alert("Soma: " + sum);
alert("Subtração: " + sub);
alert("Multiplicação: " + multi);
alert("Divisão: " + div);
alert("Resto da divisão: " + restDiv);
