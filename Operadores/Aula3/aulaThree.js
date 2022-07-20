// possiveis cenários para comprar um tv
// Se eu trabalhar terça e quinta eu compro uma tv de 50 polegadas e sorvete
// Se eu trabalhar terça e não trabalhar quinta eu não compro a tv de 50 polegadas
// Se eu não trabalhar terça e trabalhar na quinta eu não compro uma tv de 50 polegadas
// Se eu não trabalhar terça e quinta eu não compro uma tv de 50 polegadas

let hasMoney = true;
let hasSun = true;
let carInTheGarage = false;

let resultOperationAnd = '#1 (AND) - Go to the shopping Mall? ';
resultOperationAnd += hasMoney && hasSun;
console.log(resultOperationAnd);

let resultOperationOr = '#2 (Or) - Go to the shopping Mall? ';
resultOperationAnd += hasSun || carInTheGarage;
console.log(resultOperationOr);


let laboryDayOne = true
let laboryDayTwo = true

// Operador Unários

let a = 1
a = a + 1
a += 1
a++ 

console.log(a)
