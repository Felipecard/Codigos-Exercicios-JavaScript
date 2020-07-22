
let ladoA = 4
let ladoB = 4
let ladoC = 4

let soma = ladoA + ladoB + ladoC

if(ladoA + ladoB < ladoC || ladoA + ladoC < ladoB || ladoB + ladoC < ladoA) {
    console.log('Com esses lados é impossível formar um triangulo')
} else {
    if(ladoA == ladoB && ladoB == ladoC) {
        console.log('Triângulo Equilátero')
    } else if(ladoA == ladoB && ladoB != ladoC || ladoA == ladoC && ladoC != ladoB || ladoB == ladoC && ladoC != ladoA) {
        console.log('Triângulo Isósceles')
    } else if(ladoA != ladoB && ladoB != ladoC) {
        console.log('Triângulo Escaleno')
    }
    }