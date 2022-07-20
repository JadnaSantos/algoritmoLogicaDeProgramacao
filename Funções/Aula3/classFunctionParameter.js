// Pass parameter with function
function execute(OnFunction){
    if(typeof onFunction === 'function') {
        console.log(OnFunction())
    }
}

function goodMorning() {
    return 'Good Morning'
}


execute(3)
execute(goodMorning())


const x = goodMorning;
const y = goodMorning()

console.log(x())
console.log(y)