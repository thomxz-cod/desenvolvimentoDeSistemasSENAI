-- CRIANDO BANCO DE DADOS:
CREATE DATABASE IF NOT EXISTS netflix;

-- SELECIONA O BANCO DE DADOS:
USE netflix; 

-- CASO A TABELA TENHA DADO ERRADO E PRECISAR APAGAR:
-- Drop TABLE series;

-- CRIA TABELAS NO BANCO DE DADOS:
CREATE TABLE IF NOT EXISTS series (
	id INT NOT NULL AUTO_INCREMENT,
	nome VARCHAR(50) UNIQUE NOT NULL,
    
    -- DUAS MANEIRAS DE POR GENERO:
    -- genero ENUM("Terror", "Ação", "Ficção"),
    genero VARCHAR(50) NOT NULL,
    
    nTemporadas TINYINT(2) NOT NULL,
    diretor VARCHAR(50),
    estudio VARCHAR(50) NOT NULL DEFAULT "Netflix",
    
    PRIMARY KEY (id)
)DEFAULT CHARSET = utf8;

INSERT INTO series VALUES (
	DEFAULT,
    "AVATAR",
    "Ação",
    3,
    "Michael Dante DiMartino e Bryan Konietzko",
    "Nickelodeon Animation Studio"
), (
	DEFAULT,
	"Stranger Things",
    "terror sobrenatural",
    5,
    "irmãos Matt e Ross Duffer",
    "Netflix"
), (
	DEFAULT,
	"The Umbrella Academy",
    "Super-herói",
    4,
    "Steve Blackman",
    "Netflix"
), (
	DEFAULT,
	"Teen Titans",
    "super-herói",
    5,
    "Glen Murakami",
    "Warner Bros. Animation e DC Comics"
);



SELECT * FROM series;