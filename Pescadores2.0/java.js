var pesoE = Number(prompt(`Olá. Qual o peso?    obs: Limite de peso para não ser cobrado é 50kg.`))
var multa = pesoE

if (multa>=50){
    multa = pesoE - 50
} 


if ( pesoE>=50 & multa >= 1 ) {
    multa = multa.toFixed(1)
    alert(`Passou ${multa}kg do peso limite.`)
    multa = Number.parseInt(multa)
    multa = multa.toFixed(2)
    multa = (multa*4)
    multa = multa.toLocaleString('pt-br', {style:'currency', currency:'BRL'})
    alert(`O valor da multa é ${multa}.`)
} else if ( multa<1 & multa>0 ) {
    
    alert(`
        Passou mas nao deu mais de 1kg.
        Multa = 0 reais.`)
    
} else {
    alert(`
        Não passou do peso.
        Multa = 0 reais.`)
}