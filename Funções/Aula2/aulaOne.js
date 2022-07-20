function alwaysReturnOne () {
    return 1
}

const result = alwaysReturnOne() 
console.log(result)


function alwaysReturnText (returnText) {
    return returnText ? 'Amora e Blue' : 2
}

const resultAlwaysReturnText = alwaysReturnText(true)
console.log(resultAlwaysReturnText)