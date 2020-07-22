
// Faça dois vetores com 5 elementos cada. Dps, gere um terceiro vetor de 10 elementos,
// cujos valores deverão ser compostos pelos elementos intercalados dos dois outros vetores.

let vetorA = [1, 3, 5, 7, 9]
let vetorB = [2, 4, 6, 8, 10]
let vetorC = []

for (c = 0; c < 5; c++) {
    vetorC.push(vetorA[c])
    vetorC.push(vetorB[c])
}

console.log(vetorC)