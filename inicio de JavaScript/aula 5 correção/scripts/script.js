class Carro {
    constructor(marca, nome, tPneu, motor, kmMax){
        this.marca = marca;
        this.nome = nome;
        this.tPneu = tPneu;
        this.motor = motor;
        this.kmMax = kmMax;
    }
}

var carros = [];


carros.push(new Carro("Red Bull", "RB21", "Pneus Pirelli",  "V6 turbo híbrido de 1.6L", 360))
carros.push(new Carro("Ferrari", "SF-25", "Pneus Pirelli", "Ferrari V6 turbo híbrido de 1.6L", 360));
carros.push(new Carro("Racing Bulls", "VCARB 02", "Pneus Pirelli", "Honda RBPT V6 turbo híbrido de 1.6L", 360));
console.log(carros)


for(var i = 0; i < carros.length; i++){
    document.getElementById("resultados").innerHTML += `
        <div id="resultados">
            <h1>${carros[i].marca}</h1>
            <h3>${carros[i].nome}</h3>
        </div>
    `
}

