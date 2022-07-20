// parametro (nota) ->  retorno (conceito)
let gretting;

function mediaNota (nota) {
    switch (nota) {
        case 10: return 'A+'
        case 9: return 'A+'
        case 8: return 'B+'
        case 7: return 'A'
        case 6: return 'A+'
        case 5: return 'A+'
        case 4: return 'A+'
        case 3: return 'A+'
        case 2: return 'A+'
        case 2: return 'A+'
        case 2: return 'A+'
        default: return null

    }
}

console.log(`o conceito do Buno é ${mediaNota(6.0)}`)