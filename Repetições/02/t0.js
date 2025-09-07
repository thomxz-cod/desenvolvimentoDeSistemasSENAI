var div_C = document.getElementById('res1') 
var click = res1.addEventListener('click', clicar)

function clicar() {
    var res1 = document.getElementById('res1')
    var cem = Number(100)
    var r = (`${cem+1}, ${cem+2}, ${cem+3}, ${cem+4}, ${cem+5}, ${cem+6}, ${cem+7}, ${cem+8}, ${cem+9}, ${cem+10},`)
    res1.innerHTML = `Resultado: ${r}`
}