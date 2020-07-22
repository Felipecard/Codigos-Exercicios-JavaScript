

function Linha(l) {
    let str = '--'
    console.log(`+ ${str.repeat(l)} +`)
}

function Coluna(c, l) {
    let str = '  '
    for (k = 1; k <= c; k++) {
        console.log(`| ${str.repeat(l)} |`)
    }
}



// MAIN
let l = 25
let c = 7

Linha(l)
Coluna(c, l)
Linha(l)