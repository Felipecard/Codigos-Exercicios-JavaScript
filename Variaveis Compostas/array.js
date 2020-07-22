
var numero = [5, 8, 2]

numero[3] = 6
numero.push(1)

console.log(`O array tem: ${numero}`)
console.log(`O Array(vetor) tem ${numero.length} posicoes`)
console.log(numero[1])

console.log('-----------------------------------------------------')

numero.sort()
console.log(numero)

console.log('-----------------------------------------------------')

for(var pos = 0; pos < numero.length; pos++) {
    console.log(`A posicao ${pos} tem o valor ${numero[pos]}`)
}

console.log('-----------------------------------------------------')

for(var pos in numero) {
    console.log(numero[pos])
}

console.log('-----------------------------------------------------')

console.log(`O 5 está na posicao ${numero.indexOf(5)}`)

console.log('---------- Encontrando um valor dentro da Array ----------')

var posicao = numero.indexOf(9)
if (posicao == -1) {            // -1 aqui por q o valor qo JS retorna quando nao encontra ninguem no indexOf()
    console.log('O valor nao foi encontrado')
} else {
    console.log(`O valor está na posicao ${posicao}`)
}