
// Faca uma lista de alunos com idade e altura, calcule quais tem mais de 1.5 e tem 10 anos

let dados = [7, 1.12, 10, 1.55, 9, 1.43, 11, 1.61, 8, 1.32, 11, 1.55, 10, 1.71]
let n = dados.length

let alunos_maiores = []

for (c = 1; c < n; c+=2) {
    if (dados[c] > 1.5) {
        alunos_maiores.push(dados[c])
    }
}
console.log(alunos_maiores)

let v = alunos_maiores.length
for (g = 0; g <= v; g++) {
    for (c = 1; c < n; c+=2) {
        if (alunos_maiores[g] == dados[c]) {
            if (c - 1 == 10) {
                console.log(`Idade: ${c - 1} - Altura: ${alunos_maiores[g]}`)
            }
        }     
    }
}
