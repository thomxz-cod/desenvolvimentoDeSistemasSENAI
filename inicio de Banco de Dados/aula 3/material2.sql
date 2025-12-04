USE netflix;

-- CRIAR TABELA
CREATE TABLE IF NOT EXISTS filmes (
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

-- ALTER TABLE filmes ADD duracao TIME;
-- ALTER TABLE filmes DROP duracao;
ALTER TABLE filmes MODIFY COLUMN diretor VARCHAR(100);



SELECT * FROM filmes;