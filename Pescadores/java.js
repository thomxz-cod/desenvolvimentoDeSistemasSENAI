var pesoE = Number(prompt("Qual o peso?"))
var multa = pesoE - 50

if ( pesoE >= 50 ) {
    alert(`Passou ${multa}kg do peso.`)
    multa = Number(multa*4)
    alert(`O valor da multa é ${multa} reais.`)
} else {
    alert(`
        Não passou do peso.
        Multa Igual a 0.`)
}