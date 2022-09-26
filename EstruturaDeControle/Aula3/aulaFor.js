//for(let index = 0; index < 10001; index++) {
//    document.getElementById('information').innerHTML += index + ", "
//}

const car = ['Gold', 'Fusca', 'Monsa', 'Chevet']

for (let i = 0; i < car.length; i++) {
    document.getElementById('test').innerHTML += car[i]
}

let getCurrentYear = new Date().getFullYear()

for(let index = getCurrentYear; index >= 1900; index--) {
    document.getElementById('year').innerHTML += "<option value = '"+index+"'>"+index+"</option>"
}




