//calcular as duas maiores notas > 7 'aprovado' 

function mediaStudent (media) {
   if(media >= 7) {
    return 'APROVADO'
   } else if (media >= 4) {
    return 'RECUPERACAO'
   } else {
    return 'REPROVADO'
   }
}

const resulMedia = mediaStudent(1)
console.log(resulMedia)