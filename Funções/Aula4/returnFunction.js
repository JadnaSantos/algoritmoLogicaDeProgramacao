function toReturnOtherFunction () {

    function toReturnFunction () {
        return 'Morning'
    }

    return toReturnFunction
}

const resultFuction = toReturnOtherFunction()

console.log(resultFuction)