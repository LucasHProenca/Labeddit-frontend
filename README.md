<div align="center">
<img src="https://github.com/LucasHProenca/Labeddit-frontend/assets/106993403/dd7d5f6c-9286-4974-92f5-cb109f2c95b2" alt="" />
</div>

---

<p align="center">
 <a href="#-sobre-o-projeto">Sobre</a> •
 <a href="#-funcionalidades">Funcionalidades</a> •
 <a href="#-como-executar">Como executar</a> • 
 <a href="#-detalhes">Detalhes</a> • 
 <a href="#-páginas">Páginas</a> • 
 <a href="#-tecnologias">Tecnologias</a> • 
 <a href="#-autor">Autor</a> • 
</p>

## 💻 Sobre o projeto 

📱 Pokédex - A [Pokédex](https://pokedex-lucas-henrique.surge.sh/) foi desenvolvida com a finalidade de trazer de volta um pequeno gosto de infância, devido a isso, 
temos disponíveis todos os 151 pokémons da região de Kanto para integrar a sua pokédex. Venha nos visitar e torne-se um mestre pokémon!
A parte inicial do projeto foi realizada pensando em telas maiores que 1570 pixels até um máximo de 1920 pixels.
Tendo em vista atender ao máximo de dispositivos possíveis, também foram adicionadas diversas outras formatações, para telas intermediárias, entre 481 e 800 pixels de largura para tablets e entre 320 até 480 pixels de largura para celulares smartphones android.

Projeto desenvolvido durante o **Bootcamp Web Full-Stack** da [Labenu](https://www.labenu.com.br/curso-de-programacao-web-full-stack-integral).
Esse bootcamp é uma experiência online, um programa com mais de 1000 horas de experiência prática em desenvolvimento Full-stack e projetos individuais.

---

## ⚙️ Funcionalidades

  - [x] Acesso a todos os pokémons da região de kanto;
  - [x] Navegação entre as páginas;
  - [x] Possibilidade de adicionar pokémons a sua pokédex;
  - [x] Possibilidade de excluir pokémons da sua pokédex;
  - [x] Analise de atributos de cada pokémon;  
  - [x] Principais ataques;
  - [x] Informações básicas;
  - [x] Ataques especiais;
  - [x] Versão shiny(brilhante);
  - [x] Filtro para busca de um pokémon especifico.

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
$ cd projeto-react-apis

# Acesse a pasta do projeto no terminal/cmd
$ cd pokedex

# Para abrir o vsCode
$ code .

# Instale as dependências
$ npm install

# Execute a aplicação
$ npm run start

# O servidor inciará na porta:3000 

```

Todo o projeto foi desenvolvido através da [PokéAPI](https://pokeapi.co/).

---

## 🔍 Detalhes 

Este projeto conta com um código mais limpo e direto, uma vez que todas as modificações que ocorrem no layout do website com as trocas de tela são feitas considerando o caminho que o usuário se encontra no momento, por exemplo:
Inicialmente o usuário se encontra na página inicial com 151 pokémons disponíveis para captura, contudo, ao capturar um deles, ou acessar a pokédex pelo botão localizado no cabeçalho, havéra uma mudança na rota do site, indicando para o código que alterações precisam ser feitas no layout, portanto, a lista de pokémons capturados é renderizada e ficará disponível para o usuário (caso ele tenha capturado algum pokémon), o card do mesmo sofre alterações mostrando no lugar da opção de capturar, onde temos a possibilidade de exclusão do mesmo, fazendo com que ele retorne a página inicial. 

Trazemos também duas outras páginas, a de detalhes do pokémon, onde é possível acessa-la clicando em "Detalhes" dentro do card do mesmo, e isso o redirecionará novamente para um local que conta com fotografias do pokémon de frente e de costa, um retrato do mesmo no canto superior direito, assim como cada um dos seus atributos, seja ataque, defesa, ou etc, contando com barras de poder que mudam de cor de acordo com o quão forte ou não o pokémon é. Também temos alguns de seus movimentos mais básicos mostrados ao lado.

A outra pagina é a de perfil, que fica disponível quando o nome de qualquer pokémon é clicado, esta página se assemelha bastante ao layout da de detalhes, contudo, as semelhanças param por aí. Devido à diversos fatos, desde o retrato do pokémon que é por sua vez de uma outra versão do jogo, algo mais "cartoonizado", contamos também com as informações básicas como peso e altura, também trouxemos alguns dos ataques mais fortes de cada um deles, e uma pequena animação das versões shiny (brilhantes), para mostrar ao usuário que ele também poderá se deparar com essas variações nos jogos atuais de Pokémon.

Gostaria de ressaltar que, o cabeçalho também sofre alterações de acordo com a página em que o usuário se encontra, e um ponto especial é que, se o mesmo estiver em "Detalhes" ou no "Perfil", teremos duas possibilidades:
Na primeira, caso o pokémon se encontre na lista inicial, ou seja, na página home, poderemos ver um botão de adicionar localizado no lado direito do cabeçalho. Na outra possibilidade, o pokémon estará contido na pokédex, então o mesmo botão mudará de cor, e sua função agora fará com que ele volte para a lista inicial, caso seja clicado.

Outros pontos importantes a serem ressaltados são: Primeiramente, ao capturar ou excluir um pokémon uma janela se abre, indicando para o usuário uma mensagem de que a ação obteve êxito.
Também foi adicionado um filtro a página inicial e a pokédex, onde é possível procurar pokémons de acordo com o nome, e assim que o mesmo é capturado ou excluído o campo de filtro é limpo, podendo o usuário iniciar uma nova busca.

Pessoalmente falando, a prioridade para este trabalho foi em desenvolver corretamente a API, trazendo um layout limpo e adaptável e, fazer funções que não permitissem ao usuário ter o mesmo pokémon tanto na lista inicial quanto em sua pokédex, poís assim como nos jogos mais antigos, não havia uma razão para se capturar mais do que um do mesmo, sendo assim, eles eram considerados por mim e por muitos outros jogadores como sendo únicos, e duplica-los tirária um pouco desse sentimento.

---

## 📄 Páginas

### Desktop 

#### Página Inicial 

![PaginaInicial](https://github.com/LucasHProenca/projeto-react-apis/assets/106993403/55dc7d8d-479e-4073-b3ac-c96a5fb8fdca)

#### Pokémon Capturado

![PokemonCapturado](https://github.com/LucasHProenca/projeto-react-apis/assets/106993403/b1e4f64d-0034-4a5c-882a-9a8579112363)

#### Pokédex

![Pokedex](https://github.com/LucasHProenca/projeto-react-apis/assets/106993403/1587b8a5-2c9f-4e40-abdc-0170853bbb51)

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
