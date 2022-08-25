const visor = document.querySelector(".visor") as HTMLBodyElement 
let operators:string[] = []

const addElement = (element: string) => {
    operators.push(element)
    element === "*" ? visor.innerHTML += "x" : visor.innerHTML += `${element}` 
}

const realizarCalculo = () => {
    let operacao = ""

    for (let element of operators) {
        operacao += element
    }

    let res = eval(operacao)

    visor.innerHTML = res
    operators = []
    operators.push(res)
}

const limpaElemento = () => {
    visor.innerHTML = ""
    operators.pop()
    
    for (let op of operators) {
      visor.innerHTML += `${op}`  
    }
}

const limpaVisor = () => {
    visor.innerHTML = ""
    operators = []
}