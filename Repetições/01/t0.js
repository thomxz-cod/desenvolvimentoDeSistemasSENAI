var click = document.addEventListener('click', clicar)

function clicar() {
    let num = document.getElementById('num')
    var num1 = Number.parseInt(prompt('Diga um numero para tabuada:'))
    var numT = (`${num1*1}, ${num1*2}, ${num1*3} , ${num1*4}, ${num1*5}, ${num1*6}, ${num1*7}, ${num1*8}, ${num1*9}, ${num1*10}`)  
    num.innerText = `Resultado da tabuada: ${numT}.`
}