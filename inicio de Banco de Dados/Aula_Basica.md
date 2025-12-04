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


# 🔑 Chaves em Banco de Dados — Explicação Completa

Chaves (keys) são campos usados para identificar registros e criar relacionamentos entre tabelas dentro de um banco de dados relacional.

Existem vários tipos de chaves, cada uma com uma função específica.
Vamos ver cada uma com exemplos claros.

## 1️⃣ Chave Primária (PRIMARY KEY)
✔ O que é?

É um campo (ou conjunto de campos) que identifica unicamente cada registro da tabela.

✔ Regras:

Não pode repetir valores (única)

Não pode ser nula (NOT NULL)

✔ Exemplo:
```sql
CREATE TABLE clientes (
    id INT PRIMARY KEY,
    nome VARCHAR(100)
);
```


Aqui, id identifica cada cliente de forma única.

## 2️⃣ Chave Estrangeira (FOREIGN KEY)
### ✔ O que é?

É um campo que liga uma tabela a outra.
Ele aponta para a chave primária de outra tabela.

### ✔ Para que serve?

Criar relacionamentos

Garantir integridade referencial
(não deixar registrar pedidos para um cliente que não existe, por exemplo)

### ✔ Exemplo:
```sql
CREATE TABLE pedidos (
    id_pedido INT PRIMARY KEY,
    id_cliente INT,
    FOREIGN KEY (id_cliente) REFERENCES clientes(id)
);
```


Aqui, id_cliente na tabela pedidos deve existir na tabela clientes.

## 3️⃣ Chave Candidata (Candidate Key)
### ✔ O que é?

São todos os campos que poderiam ser uma chave primária, pois são únicos.

A tabela pode ter várias chaves candidatas, mas só uma vira a PRIMARY KEY.

### ✔ Exemplo:

Em uma tabela de funcionários:

cpf (único)

matrícula (única)

Ambos poderiam ser chave primária → são candidatos.

## 4️⃣ Chave Alternativa (Alternate Key)
### ✔ O que é?

É um campo que é chave candidata, mas não foi escolhido como chave primária.

### ✔ Exemplo:

Se você escolher matrícula como PRIMARY KEY,
então cpf vira uma chave alternativa.

## 5️⃣ Chave Composta (Composite Key)
### ✔ O que é?

Uma chave primária formada por duas ou mais colunas juntas.

Usada quando nenhuma coluna sozinha identifica o registro.

### ✔ Exemplo:

Uma tabela que registra produtos de um pedido:
```sql
CREATE TABLE pedido_itens (
    id_pedido INT,
    id_produto INT,
    quantidade INT,
    PRIMARY KEY (id_pedido, id_produto)
);
```


Aqui:

Não pode haver dois produtos iguais no mesmo pedido

Mas o mesmo produto pode estar em outro pedido

## 6️⃣ Chave Surrogada (Surrogate Key)
### ✔ O que é?

É uma chave artificial, normalmente um número gerado automaticamente.

Ex.: id autoincremento.

### ✔ Por que usar?

Performance melhor

Simples de manter

Evita usar chaves naturais longas (ex.: CPF)

### ✔ Exemplo:
```sql
id SERIAL PRIMARY KEY
```

## 7️⃣ Chave Natural (Natural Key)
### ✔ O que é?

É uma chave baseada em dados reais e significativos.

Ex.: CPF, CNPJ, número de série.

### ✔ Problema:

Se ela muda na vida real → quebraria o banco. Por isso muitas vezes preferimos surrogate keys.

🧩 Resumo Visual
| Tipo de chave     | Para que serve?         | Exemplo                  |
|-------------------|-------------------------|------------------------  |
| Primary Key       | Identificar registro    | id_cliente               |
| Foreign Key       | Relacionar tabelas      | id_cliente → clientes.id |
| Candidate Key     | Possível PK             | cpf, matrícula           |
| Alternate Key     | Candidato não escolhido | cpf                      |
| Composite Key     | PK com várias colunas   | (id_pedido, id_produto)  |
| Surrogate Key     | PK artificial           | id autoincrement         |
| Natural Key       | PK com dados reais      | CPF                      |
