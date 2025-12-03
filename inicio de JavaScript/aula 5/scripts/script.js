class Carro {

    constructor(imagem, marca, modelo, ano, cor, velocidadeMaxima) {
        this.imagem = imagem;        
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
        this.velocidadeMaxima = velocidadeMaxima;
    }
}

var carros = [];

carros.push(new Carro('https://example.com/imagens/civic.jpg', 'Honda', 'Civic Touring', 2023, 'Prata', 200));
carros.push(new Carro('https://example.com/imagens/mustang.jpg', 'Ford', 'Mustang GT', 2024, 'Vermelho', 250));
carros.push(new Carro('https://example.com/imagens/gol.jpg', 'Volkswagen', 'Gol Last Edition', 2022, 'Branco', 180));