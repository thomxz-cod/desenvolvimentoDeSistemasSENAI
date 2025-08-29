var num = [ 
    Number(prompt('Diga um numero:')),
    Number(prompt('Diga um numero:')),
    Number(prompt('Diga um numero:'))
]

var res = document.querySelector('button#res')
res.addEventListener('click', click)


function click() {
    var impressao = document.querySelector('div#impressao')
    impressao.innerHTML = `${num[2]}, ${num[1]}, ${num[0]}`
}