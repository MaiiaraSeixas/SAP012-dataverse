# Dataverse

## Índice

- [1. Preâmbulo](https://www.notion.so/README-995f9c9a187948cfb8e2c4492d447bb5?pvs=21)
- [2. Resumo do projeto](https://www.notion.so/README-995f9c9a187948cfb8e2c4492d447bb5?pvs=21)
- [3. Ferramentas utilizadas](https://www.notion.so/README-995f9c9a187948cfb8e2c4492d447bb5?pvs=21)
- [4. Funcionalidades](https://www.notion.so/README-995f9c9a187948cfb8e2c4492d447bb5?pvs=21)
- [5. Considerações técnicas](https://www.notion.so/README-995f9c9a187948cfb8e2c4492d447bb5?pvs=21)
- [6. Tarefas](https://www.notion.so/README-995f9c9a187948cfb8e2c4492d447bb5?pvs=21)
- [7. Teste](https://www.notion.so/README-995f9c9a187948cfb8e2c4492d447bb5?pvs=21)
- [8. Objetivos de aprendizagem](https://www.notion.so/README-995f9c9a187948cfb8e2c4492d447bb5?pvs=21)
- [9. Conclusão](https://www.notion.so/README-995f9c9a187948cfb8e2c4492d447bb5?pvs=21)

---

## 1. Preâmbulo

Entre no universo dos doramas, uma expressão única da cultura asiática que tem conquistado corações ao redor do mundo. Em nossa página, mergulhe em uma jornada fascinante através de dramas televisivos asiáticos, popularmente conhecidos como doramas.

Seja você um ávido fã ou alguém curioso para explorar este fenômeno cultural, aqui você encontrará um tesouro de informações sobre uma variedade de doramas que cativam com suas histórias envolventes, personagens memoráveis e cenários deslumbrantes.

Descubra o encanto dos romances emocionantes, as tramas intricadas dos dramas de suspense, as lições de vida dos dramas familiares e muito mais. Explore também as nuances da cultura asiática e os valores universais transmitidos através dessas produções televisivas.

Prepare-se para se emocionar, se apaixonar, rir e chorar, enquanto nos aventuramos juntos pelo vibrante e diversificado mundo dos doramas. Estamos animados para compartilhar essa jornada com você. Seja bem-vindo(a) ao Mundo dos Doramas!

![Descktop](https://github.com/MaiiaraSeixas/SAP012-dataverse/assets/151777904/7d7a475c-9b15-4acc-a608-989c4e0b4c2e)


## 2. Resumo do projeto

Construímos um site para visualizar um conjunto de dados que geramos usando [técnicas de prompting](https://www.itmadrid.com/que-es-un-prompt-en-inteligencia-artificial-ia/). O site foi adaptado para atender às necessidades de um determinado usuário. Trabalhamos com histórias de usuário e desenvolvemos o projeto de acordo com as ideias do mesmo. Utilizamos ferramentas de [inteligência artificial](https://es.wikipedia.org/wiki/Inteligencia_artificial), como [ChatGPT](https://openai.com/chatgpt), para gerar o conjunto de dados em um arquivo JavaScript, com o objetivo de nos envolver com o uso de ferramentas impulsionadas pela inteligência artificial. Na conclusão do projeto, alcançamos nossos objetivos de aprendizagem ao entregar uma interface com filtros, ordenação e cálculo de estatísticas. Além disso, incluímos um botão para reiniciar a aplicação. A página possui um design responsivo, adaptando-se a vários tipos de tela.

- O projeto foi realizado em dupla.
- O tempo de conclusão foi de 5 Sprints.
- O tempo estimado de estudo e geração de dados foi de dois dias. Apresentamos ao final o screenshot do prompt utilizado.
- O projeto foi entregue e enviado ao GitHub (commit/push) e a interface foi implantada usando o [GitHub Pages](https://pages.github.com/).

## 3. Ferramentas utilizadas

### Preparado do computador

- Node.js
- Git e Gitbash
- Visual Studio Code

### Organização e planejamento

- GitHub
- Trello
- Notion

### Linguagens

- HTML
- CSS
- Vanilla JavaScript

### Geração de dados

- ChatGPT

### Prototipagem

- Canva

## 4. Funcionalidades

Como entrega final, o site permite **visualizar os dados, filtrá-los, ordená-los e calcular estatísticas**.

Segue abaixo os detalhes das funcionalidades mínimas que foram implementadas:

- A aplicação permite que o usuário visualize os dados em forma de cartões, totalizando 24 itens.
- Em cada cartão é possível visualizar a imagem, o nome do dorama, a avaliação segundo o site IMBD e uma breve descrição da narrativa.
- A aplicação permite ao usuário(a) filtrar a partir das informações de gênero.
- A aplicação permite ao usuário(a) ordenar as informações de A - Z e Z - A.
- A aplicação permite ao usuário(a) resetar as informações através do botão de limpar.
- A aplicação permite ao usuário visualizar dados estatísticos, a partir das informações filtradas.
- A aplicação é responsiva e pode ser visualizada sem quebras em vários tipos de telas: celulares, tablets e desktops.

https://github.com/BMascena/SAP012-dataverse/assets/119455599/83da51f1-8f8e-4fc3-9c9c-05c6786689eb

## 5. Considerações Técnicas

A lógica do projeto deve ser implementada completamente em JavaScript (ES6), HTML e CSS. Neste projeto, NÃO é permitido usar bibliotecas ou frameworks, apenas [JavaScript puro](https://medium.com/laboratoria-how-to/vanillajs-vs-jquery-31e623bbd46e), exceto bibliotecas para criação de gráficos (charts); veja a *[seção opcional](https://www.notion.so/README-995f9c9a187948cfb8e2c4492d447bb5?pvs=21)* acima.

O *boilerplate* contém uma estrutura de arquivos como ponto de partida, bem como todas as configurações de dependências:

```
.
├── README.md
├── package.json
├── src
|  ├── data
|  |  └── dataset.js (O que você gerou com a IA)
|  ├── dataFunctions.js
|  ├── view.js
|  ├── index.html
|  ├── main.js
|  └── style.css
└── test
   └── data.js
   └── dataFunctions.spec.js
   └── tests-read-only

```

### `src/index.html`

Estrutura da página

### `src/main.js`

Neste arquivo, fizemos as interações com o DOM.

Encontrará uma série de *imports* prontos para *carregar*
as diferentes fontes de dados.

Por exemplo, os dados com os quais trabalhamos,
a seguinte linha:

```
import data from './data/dataset.js';

```

### `src/dataFunctions.js`

O objetivo desta pasta é a manipulação de dados por meio de arrays e objetos.

Este arquivo conterá toda a funcionalidade relacionada a obter, processar e manipular dados (suas funções), independentemente do DOM.

### `src/data`

Nesta pasta, estão os dados gerados com a ajuda da inteligência artificial (chatGPT).

### `test/dataFunctions.spec.js`

Neste arquivo, foram implementados os testes das funções descritas em dataFunctions.

### `test/data.js`

Amostra de dados para os testes.

### `src/view.js`

Neste arquivo estão as funções utilizadas para renderizar os elementos dinamicamente.

## 6. Tarefas

A partir das perguntas e respostas a seguir, foram criadas as histórias de usuários para a
execução das tarefas do projeto.

- Quem são os principais usuários do produto?
    
    Pessoas que gostam de filmes, séries e outros de origem asiática!
    
- Quais são os objetivos desses usuários em relação ao produto?

Ter acesso a informações e detalhes sobre os filmes e séries de origem asiática.

- Quais são os dados mais relevantes que eles queiram ver na interface e por quê?

Descrição,  Generos  e avaliações relativos ao filmes e séries de origem asiáticas.

- Para que elas buscariam o produto?

Uma busca divertida,  atraente, interativa de filmes e séries asiáticos.

### História de usuários

***1º HITÓRIA DO USUÁRIO***

O usuário visualizará um protótipo com 24 cards alinhados, um HTML básico com filtros e botão, porém sem funcionalidades. O CSS básico será visualmente apresentável, com uma estrutura minimamente responsiva.

### PROMPTING

```
Crie um arquivo de javascript destinado a armazenar dados relativos a Doramas com informações do site imDB, disponivel no link:
<https://www.imdb.com/list/ls086959587/> .
Os dados de relevância a serem incluídos no arquivo são "id", "name", "shortDescription", "description", "imageUrl" e "facts".
E os ultimos devem conter informações de "doramaRating", e "doramaGender". Assegure-se de utilizar as aspas "" duplas para todas as propriedades,
E garanta que o "id" seja identico ao titulo, substituindo espaços por traços e removendo caracteres especiais. Além disso, a "shortDescription" deve ter uma descrição concisa da serie, compreendendo entre 80 e 100 palavras. Segue a estrutura abaixo de modelo:
"id": "sr-Rainha",
"name": "Sr. Rainha",
"shortDescription": "Chef preso no corpo da rainha em Joseon desencadeia caos e aventuras surreais.",
"description": "Em 'Sr. Rainha', um chef contemporâneo acorda no corpo de uma rainha na dinastia Joseon, desencadeando situações hilariantes e comoventes. Ele busca adaptar-se à nova realidade e encontrar uma maneira de voltar ao seu tempo.",
"imageUrl": "<https://m.media-amazon.com/images/M/MV5BODc2MmI5ODAtOWI0Zi00ZGY4LTgxZjgtYzY0NWVhMDVmMWY2XkEyXkFqcGdeQXVyNDY5MjMyNTg@.jpg>",
"facts": {
  "doramaRating": "8.6/10",
  "doramaGender": "Comédia"

ex:
"id": "pousando-no-amor",

"name": "Pousando no Amor",

"shortDescription": "Uma herdeira sul-coreana se encontra em território norte-coreano após um acidente de parapente. O inesperado romance surge enquanto ela tenta voltar para casa.",

"description": "Em 'Pousando no Amor', Yoon Se-ri, uma herdeira sul-coreana, acaba em território norte-coreano após um acidente de parapente. Enquanto lida com as diferenças culturais e políticas, ela se apaixona pelo oficial militar Ri Jeong-hyeok, desencadeando um romance inesperado.",
"imageUrl": "URL_DA_IMAGEM",

"facts": {

"doramaRating": "AVALIACAO",

"doramaGender": "GENERO"

```

Definições de pronto:

- [x]  id
- [x]  name
- [x]  shortDescription
- [x]  description
- [x]  imageUrl
- [x]  facts
    - [x]  ranting
    - [x]  gender
    - [x]  ano
- [x]  concluir os testes unitarios dos promptings
- [x]  Criar a branch T002
- [x]  Commit
- [x]  push

### HTML

Definições de pronto:

- [x]  Criar a branch - T001
- [x]  body
    - [x]  head
        - [x]  h1
    - [x]  main
        - [x]  h2
        - [x]  section (container)
            - [x]  label
                - [x]  select
                    - [x]  option
    - [x]  footer
- [x]  Enviar o arquivo do repositório local para branch
- [x]  Enviar arquivo da branch para o repositório do github
- [x]  merge

### MAIN

Definições de pronto:

- [x]  querySelector
- [x]  Método slice
- [x]  addeventlistener
    - [x]  change
        - [x]  event
    - [x]  click
- [x]  event.target.value
- [x]  DomContentLoaded
- [x]  appendChild
- [x]  renderItens

### VIEW

Definições de pronto:

- [x]  Criar a UL atraves do createElement
- [x]  classList.add
- [x]  forEach
- [x]  innerHTML
- [x]  li
    - [x]  itemscope
        - [x]  itemtype
- [x]  dl
    - [x]  dt
        - [x]  dd
- [x]  return

***2º HITÓRIA DO USUÁRIO***

O usuário conseguirá filtrar as informações dos cards por ordem alfabérica e ou gênero e  limpar a busca quando necessário.

### DATAFUNCTION

Definições de pronto:

- [x]  Criar a branch T003
- [x]  Criar a função filtro
- [x]  Criar o teste da função filtro
- [x]  Criar a branch T004
- [x]  Criar a função ordenação
- [x]  Criar o teste da função ordenação

***3º HISTÓRIA DO USUÁRIO***

O usuário conseguirá visualizar dados estatísticos, como por exemplo, a quantidade de cards filtrados ou sua totalidade.

### DATAFUNCTION

Definições de pronto:

- [x]  map
- [x]  filter
- [x]  reduce

### Design de interface de usuário

### Protótipo de baixa fidelidade

![image (1)](https://github.com/MaiiaraSeixas/SAP012-dataverse/assets/151777904/c7cd5fb9-abe5-407d-ab37-a7757978fe4b)

### Protótipo de alta fidelidade

Modelo mobile

![Celular](https://github.com/MaiiaraSeixas/SAP012-dataverse/assets/151777904/00902b8c-8d54-472a-84d6-15566e81c622)

Modelo desktop:

![Descktop](https://github.com/MaiiaraSeixas/SAP012-dataverse/assets/151777904/a8a1e56c-bba9-4d07-a57c-7306f0bf3422)

## 7. Teste

Para aprovar o projeto, era necessário realizar três testes. Cada um desses testes incluía uma função de verificação de ponta a ponta e a verificação individual de cada código.

![teste](https://github.com/MaiiaraSeixas/SAP012-dataverse/assets/151777904/0aab1153-6a3b-4393-860d-45c21bec048d)

### **Testes de critérios mínimos**

Nesse teste verificamos se esta aceitando todos os criterios mínimos de aprovação.

![Teste OAS](https://github.com/MaiiaraSeixas/SAP012-dataverse/assets/151777904/a1b501e0-0cdd-4746-ba3e-82a87a294fcc)


### Teste unitários

No teste unitário é como verificar se cada peça de um quebra-cabeça funciona corretamente por conta própria, antes de montá-lo. No caso do software, é garantir que cada parte individual (ou unidade) do código faça o que deveria fazer, sem depender das outras partes.

No projeto em questão, o código inicial não tinha esses testes unitários. Então, as desenvolvedoras escreveram testes usando uma ferramenta chamada Jest. Esses testes são como experimentos que usam diferentes entradas para verificar se as funções (filterData, sortData e computeStats) se comportam como esperado e retornam os resultados corretos.

A meta é que esses testes cubram pelo menos 70% das diferentes partes do código (declarações, funções, linhas e ramificações) do arquivo src/dataFunctions.js. Isso significa que a maioria das partes do código foi testada para garantir que funcionem corretamente.

![Run teste](https://github.com/MaiiaraSeixas/SAP012-dataverse/assets/151777904/bc742762-0055-4f9e-9b23-f64532b2b6ce)


### Teste ponta - ponta

Pense em um teste end-to-end como uma simulação completa de como uma pessoa interage com um software. É como assistir a um filme do começo ao fim, sem pular cenas. No contexto do desenvolvimento de software, o teste end-to-end verifica se todas as partes do sistema se encaixam corretamente e funcionam como deveriam quando são usadas juntas.

Em vez de verificar partes individuais do código, como em testes unitários, um teste end-to-end avalia o software como um todo, desde o ponto em que a usuária inicia a aplicação até o ponto em que termina a sua utilização. Isso envolve simular ações que uma usuária real faria, como clicar em botões, preencher formulários e navegar entre páginas, para garantir que todas as funcionalidades estão integradas de forma eficaz e que o software atende aos requisitos de maneira satisfatória.

![Teste e2e](https://github.com/MaiiaraSeixas/SAP012-dataverse/assets/151777904/8a6f0325-34d3-4eff-8a99-846a5da1f6c9)


## 8. Objetivos de aprendizagem

### HTML

- **Uso de HTML semântico**

### **CSS**

- **Uso de seletores de CSS**

### **Web APIs**

- **Uso de seletores de DOM**
- **Manipulação de eventos de DOM (listeners, propagação, delegação)**
- **Manipulação dinâmica de DOM**

### **JavaScript**

- **Diferenciar entre tipos de dados primitivos e não primitivos**
- **Arrays**
- **Variables (declaration, assignment, scope)**
- **Conditionals (if-else, switch, ternary, boolean)**
- **Loops (while, for, for..of)**
- **Functions (params, args, return)**
- **Unit tests**

### **(Git e GitHub)**

- **Git: Instalação, configuração, controle de versão e integração de mudanças**
- **GitHub: Criação de contas, repositórios, implantação com Pages e revisão de código**
- **Desenho centrado no usuário e prototipagem de produto**
- **Git: Instalação, configuração, controle de versão e integração de mudanças**
- **GitHub: Criação de contas, repositórios, implantação com Pages e revisão de código**
- **Desenho centrado no usuário e prototipagem de produto**

## 9. Conclusão

Este projeto nos ofereceu a oportunidade de adquirir mais conhecimento enquanto desenvolvíamos novas técnicas, habilidades e competências vitais. Nosso apredizagem de HTML, CSS e JS foi conquistado graças à nossa organização, gestão de tempo, trabalho em equipe e comunicação.

## Desenvolvedoras

<table>
<tr>
<td align="center"><a href="https://github.com/BMascena"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/119455599?v=4" width="100px;" alt=""/><br /><sub><b>Bárbara Mascena</b></sub></a><br /></td>
<td align="center"><a href="https://github.com/MaiiaraSeixas"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/151777904?v=4" width="100px;" alt=""/><br /><sub><b>Maiara Seixas</b></sub></a><br /></td>

</tr>
</table>
