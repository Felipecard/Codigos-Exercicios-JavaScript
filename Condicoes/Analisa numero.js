
function enunciado(numero) {
    console.log(`O numero ${numero} é:`)
}

function pede_n() {
    let n = -23.2
    return n
}

function par_ou_impar(n) {
    if (n % 2 === 0) {
        console.log(`Par`)
    } else {
        console.log(`Ímpar`)
    }
}

function pos_ou_neg(n) {
    if (n > 0) {
        console.log(`Positivo`)
    } else {
        console.log('Negativo')
    }
}

function inteiro_ou_decimal(n) {
    if (n % 1 === 0 ) {
        console.log('Inteiro')
    } else {
        console.log('Decimal')
    }
}


// MAIN
let num = pede_n()

enunciado(num)

par_ou_impar(num)
pos_ou_neg(num)
inteiro_ou_decimal(num)