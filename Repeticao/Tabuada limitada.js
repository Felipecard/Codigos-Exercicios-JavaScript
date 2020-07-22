
// Tabuada de:
let tabuada = 5

// Comeca por:
let inicio = 10

// Termina em:
let fim = 4

console.log(`Vamos montar a tabuada de ${tabuada}, comecando em ${inicio} e terminando em ${fim}:`)
console.log()

if (inicio < fim) {
    for (c = inicio; c <= fim; c++ ) {
        console.log(`${tabuada} x ${c} = ${tabuada * c}`)
    }
} else {
    for (c = inicio; c >= fim; c-- ) {
        console.log(`${tabuada} x ${c} = ${tabuada * c}`)
    }
}
