

function Conversor(hora) {
    if (hora > 12) {
        let hora_convetida = hora - 12
        return hora_convetida
    } else {
        let hora_convetida = hora
        return hora_convetida
    }
}

function Dia_noite(hora) {
    if (hora < 12) {
        return 'A.M.'
    } else {
        return 'P.M.'
    }
}

// MAIN
let hora = 20
let minuto = 25

console.log(`${Conversor(hora)}:${minuto} ${Dia_noite(hora)}`)