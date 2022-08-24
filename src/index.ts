const visor = document.querySelector(".visor") as HTMLBodyElement
let operadores:string[] = []

const addElement = (element: string) => {
    operadores.push(element)
    if (element === "*") visor.innerHTML += "x"   
    else visor.innerHTML += `${element}`    
}

const realizarCalculo = () => {
    let operacao = ""

    for (let element of operadores) {
        operacao += element
    }
    
    visor.innerHTML = eval(operacao)
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