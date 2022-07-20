const future = Date.now() + 1000
let quantity = 0

while (Date.now() < future) {
    quantity++
}

console.log(`Qnt: ${quantity}`)