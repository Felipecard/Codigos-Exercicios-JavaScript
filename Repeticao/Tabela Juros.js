
let divida = 1000

let cont = 1
let parcela = 3
let juros = 10

console.log('DIVIDA    | JUROS   | QT PARCELAS | VALOR PARCELA' )
console.log(`R$ ${divida}    | ${0}      |  ${parcela - 2}       | ${divida / parcela}`)

while (cont <= 5) {
    let valor_juros = (juros * divida) / 100
    console.log(`R$ ${divida + valor_juros}    | ${valor_juros}    |  ${parcela}        | ${divida / parcela}`)
    cont++
    juros += 5
    parcela +=3 
}