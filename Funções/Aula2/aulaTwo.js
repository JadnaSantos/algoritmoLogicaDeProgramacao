// 1) function COM parametros e COM retorno

function somar(a, b) {
    return a + b
}

soma()

// 2) function COM parametros e SEM retorno

function somar(a, b) {
   console.log(a + b)
}

soma()

// 3) function SEM parametros e COM retorno

function newDate() {
    return new Date()
}
 
newDate()


// 3) function SEM parametros e SEM retorno

function showAtualyHour() {
    console.log(new Date().getHours())
}
 
showAtualyHour()