//Cálculo IMC

let peso = Number(prompt("Qual seu peso:"));
let altura = Number(prompt("Qual sua altura:"));
let paragrafo = document.querySelector("#paragrafo");
let imgHtml = document.querySelector("img");

function calculoIMC(peso, altura) {
    let imc = peso / (altura * altura);
    return imc;
}

let imc = calculoIMC(peso, altura).toFixed(2);

function IMC(imc) {
    if (imc <= 18.5) {
        return {
            text: `IMC = ${imc} - Abaixo do peso`, 
            img : `img/abaixo-peso.png`,
        }
            
    } else if (imc > 18.6 && imc <= 24.9) {
        return {
            text: `IMC = ${imc} - Peso ideal`,
            img: `img/peso-normal.png`,
        }
    } else if (imc > 25 && imc <= 29.9) {
        return {
            text: `IMC = ${imc} - Levemente acima do peso`,
            img: `img/acima-peso.png`,
        }
    } else if (imc > 30 && imc <= 34.9) {
        return {
            text: `IMC = ${imc} - Obesidade grau 1`,
            img: `img/obesidade-1.png`,
        }
    } else {
        return {
            text: `IMC = ${imc} - Obesidade grau 2`,
            img: `img/obesidade-2.png`
        }
    }
}

let classificacaoIMC = IMC(imc);

function resultadoIMC(classificacaoIMC, paragrafo, img) {
    paragrafo.innerHTML = classificacaoIMC.text;
    img.src = classificacaoIMC.img;
}

resultadoIMC(classificacaoIMC, paragrafo, img);