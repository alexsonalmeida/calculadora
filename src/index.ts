const visor = document.querySelector(".visor") as HTMLBodyElement
let operadores:string[] = []

function addElement(element: string) {
    operadores.push(element)
    visor.innerHTML += `${element}`
}

const limpaElemento = () => {
    visor.innerHTML = ""
    operadores.pop()
    
    for (let op of operadores) {
      visor.innerHTML += `${op}`  
    }
}

const limpaVisor = () => {
    visor.innerHTML = ""
    operadores = []
}