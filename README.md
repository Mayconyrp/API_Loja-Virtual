<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Sobre o Projeto

Bem-vindos!

Esta API simula um E-commerce, oferecendo recursos para gerenciar usuários, produtos, categorias e endereços. Utilizo o Prisma ORM em conjunto com o MySQL, e as credenciais estão armazenadas no arquivo .env.

Para iniciar a aplicação, basta executar o comando npm install. Se houver alguma dependência ausente do Prisma, recomendo também executar npx prisma generate para garantir a geração adequada.

Fiquem à vontade para explorar e utilizar a API. Em caso de dúvidas ou sugestões, estou à disposição!

Ressalto que faço uso de dados aninhados. Por exemplo, ao cadastrar um usuário, é obrigatório cadastrar um endereço também. Da mesma forma, ao cadastrar um produto, é necessário que exista uma categoria para ele antes.

A estrutura do banco de dados é definida por modelos, onde temos:

Usuario: Representa os dados do usuário, incluindo informações como email, nome, senha, telefone, e se é um administrador. Um usuário pode ter vários endereços.

Endereco: Contém informações de endereço, como cidade, rua, CEP. Um endereço está associado a um usuário.

Produto: Armazena dados de produtos, como código, nome, preço, descrição, imagem, e está associado a uma categoria.

Categoria: Representa as categorias dos produtos e pode ter vários produtos associados.

As relações entre esses modelos são estabelecidas por meio de chaves estrangeiras. Por exemplo, a relação entre Usuario e Endereco é 1-n (um usuário pode ter vários endereços, mas um endereço pertence a um único usuário). Já a relação entre Produto e Categoria é n-1 (um produto pertence a uma única categoria, mas uma categoria pode ter vários produtos). Essas relações garantem uma estrutura organizada e eficiente para o banco de dados.






