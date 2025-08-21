var timeNome1 = prompt("Qual o nome do primeiro time? ")
var golT1 = Number(prompt("Quantos gols esse time fez?"))
var timeNome2 = prompt("Qual o nome do segundo time? ")
var golT2 = Number(prompt("Quantos gols esse time fez?"))

if (golT1>golT2) {
    alert(`O time ${timeNome1} ganhou!`)
} else if (golT2>golT1) {
    alert(`O time ${timeNome2} ganhou!`)
} else {
    alert("Deu empate!")
}