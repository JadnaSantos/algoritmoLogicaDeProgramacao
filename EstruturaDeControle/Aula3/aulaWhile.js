//Laços de Repetição qnt interminado de repetições
let quantity = 0

while (Math.random() < 0.97) {
    quantity++
}

console.log(`Qnt: ${quantity}`)

const future = Date.now() + 1000
let quantityTwo = 0

while (Date.now() < future) {
    quantityTwo++
}

console.log(`Qnt: ${quantityTwo}`)



let contador = 0

while (contador < 5) {
    console.log(contador)
    ++contador
}

let contadorWithBreak = 0

while (contadorWithBreak < 5) {
    if (contadorWithBreak === 3) {
        break;
    } 
    console.log(contadorWithBreak)
    ++contadorWithBreak
}



