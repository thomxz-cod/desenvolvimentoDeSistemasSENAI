# 🗄️ Aula Básica de Banco de Dados
## 📌 1. O que é um Banco de Dados?

Um **banco de dados** é um sistema organizado para armazenar, gerenciar e recuperar informações.
Exemplos do dia a dia:

- Lista de contatos do celular
- Histórico de vendas de uma loja
- Usuários de um site

## 📌 2. Sistema Gerenciador de Banco de Dados (SGBD)

É o software usado para criar e manipular bancos de dados.

Exemplos de SGBDs:

- **MySQL**
- **PostgreSQL**
- **SQL Server**
- **Oracle**
- **SQLite**

Eles permitem:

- Criar tabelas
- Inserir, consultar, alterar e excluir dados
- Controlar acessos e segurança

## 📌 3. Modelagem de Dados

Antes de criar o banco, é preciso modelar como as informações serão organizadas.

### Conceitos básicos:

- **Entidade** → objeto que queremos guardar (Ex.: Cliente, Produto)
- **Atributo** → características da entidade (Ex.: nome, preço)
- **Relacionamento** → como entidades se conectam (Ex.: Cliente faz Pedido)

### Modelo Relacional

As informações são organizadas em tabelas, com linhas e colunas.

## 📌 4. Tabelas

Uma tabela é como uma planilha.

Exemplo de tabela Clientes:

|id_cliente |nome       |email          |
|:---------:|:---------:|:-------------:|
|1          |Ana Silva  |ana@gmail.com  |
|2          |João Souza |joao@gmail.com |

- Linha = registro
- Coluna = campo

## 📌 5. SQL — A Linguagem do Banco de Dados

SQL (Structured Query Language) é usada para interagir com o banco.

### 🔹 Criar uma tabela

```SQL
CREATE TABLE clientes (
    id INT PRIMARY KEY,
    nome VARCHAR(100),
    email VARCHAR(100)
);
```

### 🔹 Inserir dados
```SQL
INSERT INTO clientes (id, nome, email)
VALUES (1, 'Ana Silva', 'ana@gmail.com');
```

### 🔹 Consultar dados
```SQL
SELECT * FROM clientes;
```

### 🔹 Atualizar dados
```SQL
UPDATE clientes
SET email = 'ana.silva@gmail.com'
WHERE id = 1;
```

### 🔹 Excluir dados
```SQL
DELETE FROM clientes
WHERE id = 1;
```

## 📌 6. Chaves (Keys)
### Chave primária (PRIMARY KEY)

Identifica unicamente um registro.
Ex.: id_cliente.

### Chave estrangeira (FOREIGN KEY)

Liga tabelas diferentes.
Ex.: id_cliente na tabela Pedidos.

## 📌 7. Relacionamentos

Tipos principais:

- **1 para 1 (1:1)**
- **1 para muitos (1:N)** → o mais comum
- **Muitos para muitos (N:N)** → exige tabela intermediária

## 📌 8. Normalização

Conjunto de regras para:

✔ evitar dados duplicados

✔ melhorar organização

✔ facilitar consultas

## 📌 9. Vantagens de usar banco de dados

- Segurança
- Rápido para buscar informações
- Escalável
- Permite muitos usuários ao mesmo tempo

## 📌 10. Prática Recomendada

Comece treinando em:
- MySQL Workbench
- pgAdmin
- SQLite Browser
- Plataformas online como SQLFiddle e DB Fiddle