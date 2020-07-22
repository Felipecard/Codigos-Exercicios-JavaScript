
function par_ou_impar(n) {
    if(n % 2 == 0) {
        return 'PAR'
    } else {
        return 'IMPAR'
    }
}

console.log(par_ou_impar(12))

console.log('-----------------------------------------------')

function soma(n1=0, n2=0) {
    return n1 + n2
}

console.log(soma(2))

console.log('-----------------------------------------------')

var v = function(x) {
    return x*2
}

console.log(v(5))

console.log('-------------------- FATORIAL -----------------')

function fatorial(n) {
    var fat = 1
    for(var c = n; c > 1; c--) {
        fat *= c
    }
    return fat
}

console.log(fatorial(5))

console.log('----------------- RESUSIVIDADE ------ A funcao chamando ela mesma  ----')

function fatorial2(n) {
    if (n == 1) {
        return 1
    } else {
        return n * fatorial2 (n - 1)
    }
}
console.log(fatorial2(5))