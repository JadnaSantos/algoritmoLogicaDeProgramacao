// const greeting = expressao ? 'true' : 'false'

const hour = 11
const gretting = hour <= 11 
const greetings = gretting <= 11 ? 'Good Morning' : (gretting <= 17 ? 'Good Afternoon' : 'Good Night')

//const result = gretting ? 'Good Morning' : 'Good Night'
console.log(greetings)


const validationNumber = 0

const greeting = validationNumber % 2

const result = greeting ? 'Even' : 'Odd'

console.log(result)
