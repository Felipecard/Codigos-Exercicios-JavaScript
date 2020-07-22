
let alunos = [
    [7, 10, 6, 9],
    [5, 3, 7, 7],
    [10, 1, 10, 10],
    [8, 5, 3, 2]
]

let quant = alunos[0].length
let soma = 0

for (aluno = 0; aluno <= 4; aluno++) {
    cont = 0
    for (c = 1; c <= quant; c++) {
        let cada_nota = alunos[aluno][cont]
        soma += cada_nota
        cont++
        
    }
    let media = soma / 4
    if (media > 7) {
        console.log(`Aluno ${aluno} foi aprovado, com a media: ${media}`)
    }

    soma = 0
}


