# Primeiros codigos de banco de dados:

```sql
    -- Cria uma banco de dados:
    CREATE DATABASE IF NOT EXISTS lojinha;

    -- Usa a tabela criada:
    USE lojinha;

    -- Cria tabelas no banco de dados
    CREATE TABLE Clientes (
        idCliente INT(999999999),
        cpf INT(10),
        nome VARCHAR(100),
        email VARCHAR(120),
        telefone VARCHAR(20)
    );
```