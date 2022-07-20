const number = [1, 2, 3, 4, 5, 6]

for(let i = 0; i < number.length; i++) {
    console.log(number[i])
}

// percorrendo cada index do array notes e armazenado na minha variavel note 
const notes = [1, 2, 3, 4, 5, 6]

for(note of notes) {
    console.log(note)
}

const OtherNotes = [1, 2, 3, 4, 5, 6]


for(OtherNote in OtherNotes) {
    console.log(OtherNote)
}