API Node.js – CRUD com autenticação

API REST desenvolvida em Node.js com foco em boas práticas de backend, incluindo autenticação com JWT, CRUD de usuários, organização em camadas e integração com banco de dados SQL.

Este projeto foi criado com o objetivo de estudo, portfólio e demonstração de habilidades para vagas de Desenvolvedor Backend / Full Stack Júnior.

🚀 Tecnologias Utilizadas

Node.js

JavaScript

Expressar

PostgreSQL

Prisma ORM

JWT (JSON Web Token)

Bcrypt

Dotenv

📌 Funcionalidades
Autenticação

Cadastro de usuário

Login com validação de credenciais

Hash de senha com Bcrypt

Geração de token JWT

Middleware de autenticação para proteção de rotas

Usuários

Criar usuário

Listar usuários (rota protegida)

Buscar usuário por ID

Atualizar usuário

Excluir usuário

🧱 Estrutura do Projeto
api-node-crud-auth/
├── prisma/
│   └── schema.prisma
│
├── src/
│   ├── controllers/
│   ├── services/
│   ├── routes/
│   ├── middlewares/
│   ├── errors/
│   ├── app.js
│   └── server.js
│
├── .env.example
├── package.json
└── README.md

Organização

Controladores: recebem as requisições HTTP

Serviços: regras de negócio e acesso ao banco

Rotas: definição das rotas da API

Middlewares: autenticação e validações

Erros: tratamento centralizado de erros

🔐 Rotas da API
Autenticação

POST /auth/register

POST /auth/login

Usuários (JWT obrigatório)

GET /users

GET /users/:id

PUT /users/:id

DELETE /users/:id

⚙️ Como Rodar o Projeto Localmente
1. Clonar o
git clone https://github.com/devTassio/api-node-crud-auth.git
cd api-node-crud-auth

2. Instalar as)
npm install

3. Configuração de configurações de ambiente

Crie um arquivo .envbaseado no .env.example:

DATABASE_URL=postgresql://usuario:senha@localhost:5432/nome_do_banco
JWT_SECRET=sua_chave_secreta
PORT=3000

4. Rodar como migrações
npx prisma migrate dev

5. Iniciar o servidor
npm run dev


A API estará disponível em:

http://localhost:3000

🧠 Conceitos Aplicados

Arquitetura em

Separação de responsabilidades

Boas práticas de organização de código

Autenticação baseada em token (JWT)

Tratamento de erros centralizado

Uso de ORM para acesso ao banco de dados

🎯 Objetivo do Projeto

Este projeto tem como objetivo consolidar conhecimentos em backend com Node.js , fornecido como base para evolução profissional e como parte de um portfólio para oportunidades na área de desenvolvimento de software.

👨‍💻 Autor

Tassio Salvador
GitHub: https://github.com/devTassio

E-mail: tassiob78@gmail.com