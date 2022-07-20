const hour = 20
let greeting;

if(hour < 12) {
    greeting = 'Good Morning'
} else if(hour < 18 ) {
    greeting = 'Good Afternoon'
} else {
    greeting = 'Good Night'
}

console.log(greeting)