

var altura = 1.74
var sexo = 'mulher'

if(sexo == 'homem') {
    console.log(`Seu peso ideal é: ${(72.7 * altura) - 58}`)
} else if(sexo == 'mulher') {
    console.log(`Seu peso ideal é: ${(62.7 * altura) - 44.7}`)
} else {
    console.log('Insira homem ou mulher')
}