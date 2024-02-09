//Cálculo IMC

let peso = Number(prompt("Qual seu peso:"));
let altura = Number(prompt("Qual sua altura:"));
let classificacao = document.querySelector("#classificacao");

function calculoIMC(peso, altura) {
    let imc = peso / (altura * altura);
    return imc;
}

let imc = calculoIMC(peso, altura).toFixed(2);
console.log(imc);

function classificacaoIMC(imc, classificacao) {
    if (imc <= 18.5) {
        classificacao.innerHTML = `IMC = ${imc} - Abaixo do peso`;
    } else if (imc > 18.6 && imc <= 24.9) {
        classificacao.innerHTML = `IMC = ${imc} - Peso ideal`;
    } else if (imc > 25 && imc <= 29.9) {
        classificacao.innerHTML = `IMC = ${imc} - Levemente acima do peso`;
    } else if (imc > 30 && imc <= 34.9) {
        classificacao.innerHTML = `IMC = ${imc} - Obesidade grau 1`;
    } else if (imc > 35 && imc <= 39.9) {
        classificacao.innerHTML = `IMC = ${imc} - Obesidade grau 2`;
    } else {
        classificacao.innerHTML = `IMC = ${imc} - Obesidade grau 3`;
    }
}

classificacaoIMC(imc, classificacao);