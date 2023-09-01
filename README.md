<div align="center">
<img src="https://github.com/LucasHProenca/Labeddit-frontend/assets/106993403/dd7d5f6c-9286-4974-92f5-cb109f2c95b2" alt="" />
</div>

---

<p align="center">
 <a href="#-sobre-o-projeto">Sobre</a> •
 <a href="#-funcionalidades">Funcionalidades</a> •
 <a href="#-como-executar">Como executar</a> • 
 <a href="#-páginas">Páginas</a> • 
 <a href="#-tecnologias">Tecnologias</a> • 
 <a href="#-autor">Autor</a> • 
</p>

## 💻 Sobre o projeto 

 
📟 Labeddit - O [Labeddit](https://labeddit-faruqi-lhp.surge.sh/) foi desenvolvido baseado numa rede social famosa e com o objetivo de possibilitar o cadastro de novos usuários, assim como a criação de publicações e comentários e a interação entre as pessoas, podendo cada uma manifestar se gostou ou não daquele conteúdo exibido por outro usuário.
Este projeto possui inúmeras funcionalidades, as quais detalharemos mais adiante.

Projeto desenvolvido durante o **Bootcamp Web Full-Stack** da [Labenu](https://www.labenu.com.br/curso-de-programacao-web-full-stack-integral).
Esse bootcamp é uma experiência online, um programa com mais de 1000 horas de experiência prática em desenvolvimento Full-stack e projetos individuais.

---

## ⚙️ Funcionalidades

  - [x] Sistema de login e signup;
  - [x] Navegação entre as páginas;
  - [x] Possibilidade de criar publicações e comentários;
  - [x] Possibilidade de excluir publicações e comentários;
  - [x] Interação entre usuários por meio de like ou dislike;  
  - [x] Edição de usuário;
  - [x] Deleção de usuário;

---

## 🚀 Como executar

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/).
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/).

#### 🎲 Rodando o template

```bash

# Clone este repositório
$ git clone link-do-repositório-git

# Acesse a pasta do projeto no terminal/cmd
$ cd Labeddit-frontend

# Acesse a pasta do projeto no terminal/cmd
$ cd nome-do-seu-app

# Para abrir o vsCode
$ code .

# Instale as dependências
$ npm install

# Execute a aplicação
$ npm run start

# O servidor inciará na porta:3000 

```

---

## 📄 Páginas

#### ATENÇÃO!

O Labeddit foi feito pensado em mobile-first, mas não se preocupe, ele foi projetado de forma responsiva para se adaptar a qualquer tipo de tela.

Outro ponto importante a ser ressaltado é que toda e qualquer alteração dura apenas 15 minutos após o usuário realizar sua ultima ação dentro do website, devido ao fato de que nossa [API](https://documenter.getpostman.com/view/27682612/2s9Y5R36ij#ad2c5672-46e9-491f-aeca-96ac4e504ed1) está hospedada em um servidor que possui esta restrição.

### Desktop 

#### Página de Login 

![Login](https://github.com/LucasHProenca/Labeddit-frontend/assets/106993403/4cf8835c-66aa-4b39-9cba-96ea3fa16d33)

Pensando na maior comodidade do usuário, a página de login foi desenvolvida dando ao mesmo a possibilidade de ocultar ou exibir sua senha, no entanto, caso seja seu primeiro contato com o Labeddit, você deve clicar no botão "Crie uma conta!" para ser redirecionado para a pagina de inscrição.

#### Página de Inscrição

![SignupF1](https://github.com/LucasHProenca/Labeddit-frontend/assets/106993403/2247ee54-9a76-4362-8207-a382faed9a1b)

![SignupF2](https://github.com/LucasHProenca/Labeddit-frontend/assets/106993403/f365916b-5982-4c60-a5e2-b58f626f7166)

A página de inscrição possibilita ao usuário criar uma nova conta, porém, atente-se ao fato de que não será possível criar uma conta com o mesmo "Apelido" e/ou "E-mail" de outra pessoa, e que sua senha precisa respeitar o padrão estabelecido pelo backend

#### Feed

![HomePageF1](https://github.com/LucasHProenca/Labeddit-frontend/assets/106993403/542bae49-7b30-4432-88aa-570df18062a1)

![HomePageF2](https://github.com/LucasHProenca/Labeddit-frontend/assets/106993403/e7260931-7917-4206-b8c0-1d1c06a3691e)

Com a conta criada você irá se deparar com a tela inicial da nossa aplicação, onde poderá interagir com nossos milhões de outros usuários, seja criando uma nova publicação de um pensamento genial que você teve, até comentando em publicações das outras pessoas, curtindo-as, ou apenas observando o movimento da sua rede social.

Oferecemos também ao usuário uma opção de edição de suas publicações ou deleção das mesmas. MAS CUIDADO, mexer no que é dos outros nem sempre é bem visto, pensando nisso, caso o usuário tente editar ou excluir a publicação de outra pessoa, uma mensagem de erro será retornada, como podemos observar nas imagens abaixo:

![EditpostError](https://github.com/LucasHProenca/Labeddit-frontend/assets/106993403/763a77e3-fadc-493c-b159-56f78b1e7cdc)

![DeletePostError](https://github.com/LucasHProenca/Labeddit-frontend/assets/106993403/8711493c-0820-4f61-b967-9693300c05f9)


#### Pokémon Removido da Pokédex

![Pokemon Removido](https://github.com/LucasHProenca/projeto-react-apis/assets/106993403/18353628-900a-4696-836d-365599bdf41a)

#### Filtro

![Filtro](https://github.com/LucasHProenca/projeto-react-apis/assets/106993403/46697e10-ad62-4476-aa50-404157981287)

#### Página de Detalhes

![DetalhesPoke](https://github.com/LucasHProenca/projeto-react-apis/assets/106993403/ef661af8-a8fd-4367-b328-2b2fc77a2f9c)

#### Perfil

![PerfilPoke](https://github.com/LucasHProenca/projeto-react-apis/assets/106993403/1421ab7e-d075-40c1-bc0c-d1da2d9265ba)

---

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

#### ([API](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Client-side_web_APIs/Introduction)  +  [React](https://react.dev/))

-   **[React Router](https://reactrouter.com/en/main)**
-   **[React Context](https://legacy.reactjs.org/docs/context.html)**
-   **[Styled-components](https://styled-components.com/)**
-   **[Design Systems](https://storybook.js.org/tutorials/design-systems-for-developers/react/en/introduction/)**
-   **[Axios](https://axios-http.com/ptbr/docs/intro)**
-   **[Estado Global](https://coderpad.io/blog/development/global-state-management-react/)**

---

## 🦸 Autor

 <img style="border-radius: 50%;"  src="https://github.com/LucasHProenca/Labecommerce-back-end/assets/106993403/9abf8ee7-9527-42f8-9151-04ccd3db2d97" width="100px;" alt="" />
 <br />
 <sub><b>Lucas Henrique Proença</b></sub>
 <br />

[![Linkedin Badge](https://img.shields.io/badge/-Lucas-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/lucas-proen%C3%A7a-512650106/)](https://www.linkedin.com/in/lucas-proen%C3%A7a-512650106/) 

---
