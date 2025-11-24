input = document.getElementById('meuInput');

input.addEventListener('focus', () => {
    input.style.backgroundColor = 'yellow';
    console.log('focus: amarelo');
});

input.addEventListener('blur', () => {
    const valor = input.value.trim();
    console.log('blur — valor:', valor, 'tamanho:', valor.length);

    if (valor.length < 3) {
          input.style.backgroundColor = 'red';

    } else {
        input.style.backgroundColor = 'lightgreen';
    }
});