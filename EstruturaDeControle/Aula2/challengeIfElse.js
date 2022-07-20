const a = 10
const b = 28
const operation = '*'

let result

if(operation === '+') {
    result = a + b
} else if(operation === '-'){
    result = a - b
} else if(operation === '*'){
    result = a * b
} else {
    result = 'Não atende'
}

console.log(result)
