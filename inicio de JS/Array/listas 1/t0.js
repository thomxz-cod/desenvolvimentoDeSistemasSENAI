var lista_filmes = [
    'The SpiderMan', 
    'The SpiderMan 2',
    'Velozes e furiosos',
    'Dilema das redes',
    'Onda',
    'F1'
]
var botao = document.getElementById('botao')
botao.addEventListener('click', click)

function click(){
    lista.innerHTML = `1- ${lista_filmes[0]} </br> 2- ${lista_filmes[1]} </br> 3- ${lista_filmes[2]} </br> 4- ${lista_filmes[3]} </br> 5- ${lista_filmes[4]} </br> 6- ${lista_filmes[5]}`
}