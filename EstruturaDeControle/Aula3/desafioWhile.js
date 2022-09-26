let isModule = 0 

while (isModule < 100) {
    if (isModule % 3 === 0 && isModule % 5 === 0) {
        console.log(`${isModule} - Ping e Pong`)
    }else if(isModule % 3 === 0) {
        console.log(`${isModule} - Ping`)
    } else if(isModule % 5 === 0) {
        console.log(`${isModule} - Pong`)
    }
    ++isModule
}