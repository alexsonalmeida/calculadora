"use strict";
const visor = document.querySelector(".visor");
let operadores = [];
function addElement(element) {
    operadores.push(element);
    visor.innerHTML += `${element}`;
}
const limpaElemento = () => {
    visor.innerHTML = "";
    operadores.pop();
    for (let op of operadores) {
        visor.innerHTML += `${op}`;
    }
};
const limpaVisor = () => {
    visor.innerHTML = "";
    operadores = [];
};
