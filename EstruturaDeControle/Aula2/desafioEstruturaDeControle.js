function getSum (a =10 , b= 28, operation="*") {
    let result;

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
}


getSum()