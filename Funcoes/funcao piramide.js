

function Piramide(){
    for (c = 1; c <= n; c++) {
        if (c == 1) {
            console.log(c)
        }
        if (c > 1) {
            for (k = 1; k <= c; k++)
                console.log(c)
        }
    }
    
}

let n_linhas = 7
let n = n_linhas

Piramide()