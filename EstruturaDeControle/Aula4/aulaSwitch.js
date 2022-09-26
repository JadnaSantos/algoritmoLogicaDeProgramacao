function getColor() {
    let color = document.getElementById('color').value.toLowerCase()

    switch (color) {
        case 'preto':
            document.body.style.backgroundColor = 'black'
            break;
        case 'azul':
            document.body.style.backgroundColor = 'blue'
            break;
        case 'rosa': 
            document.body.style.backgroundColor = 'pink'
            break;
        case 'vermelho':
            document.body.style.backgroundColor = 'red'
            break;
        default:
            document.getElementById('information').innerHTML = `Nenhuma cor disponivel para: ${color}`
    }
}