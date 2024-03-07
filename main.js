// Importando a função para renderizar os itens
import { renderItems } from './view.js';
// Importando os dados do arquivo dataset.js
import data from './data/dataset.js';
// Importando as funções de filtragem, ordenação e cálculo de estatísticas
import { filterdata, orderdata, computStats} from './dataFunctions.js'; 

// Selecionando elementos do DOM
const listaCard = document.querySelector('#root'); // Elemento onde os "cards" serão exibidos
const filter = document.querySelector('#filter'); // Dropdown para filtrar por gênero
const order = document.querySelector('#order'); // Dropdown para ordenar a lista
const button = document.querySelector('#btn-clear') // Botão para limpar os filtros
const calculo_estatistica = document.querySelector('.calculo_estatistica'); // Elemento para exibir estatísticas

// Criando uma cópia dos dados originais
let dadosExibidos = data.slice();

// Função para exibir o total de "cards"
const totalcards = (data) => {
  const numbercards = computStats(data);
  calculo_estatistica.innerHTML=`${numbercards} cards`; // Exibe o total de "cards"
};

// Evento que é executado quando o DOM é carregado

document.addEventListener("DOMContentLoaded", () => {
  // Renderiza os itens iniciais
  listaCard.appendChild(renderItems(dadosExibidos));
  // Exibe o total de "cards" original
  totalcards(data);

   // Evento de mudança no filtro
  filter.addEventListener('change', (event) => {
    dadosExibidos = filterdata(data, event.target.value); // Filtra os dados com base no gênero selecionado
    listaCard.innerHTML = "" // Limpa o conteúdo anterior
    listaCard.appendChild(renderItems(dadosExibidos)) // Renderiza os "cards" filtrados
    totalcards(dadosExibidos); // Atualiza o total de "cards"
  });

  // Evento de mudança na ordenação
  order.addEventListener('change', (event) => {
    dadosExibidos = orderdata(dadosExibidos, event.target.value); // Ordena os dados com base na seleção (ascendente ou descendente)
    listaCard.innerHTML = ""; // Limpa o conteúdo anterior
    listaCard.appendChild(renderItems(dadosExibidos)); // Renderiza os "cards" ordenados
    totalcards(dadosExibidos); // Atualiza o total de "cards"
    
  });

  // Evento de clique no botão "Limpar"
  button.addEventListener('click', () => {
    listaCard.innerHTML = ""; // Limpa o conteúdo anterior
    dadosExibidos = data.slice(); // Restaura os dados originais
    listaCard.appendChild(renderItems(data)); // Renderiza os "cards" originais
    totalcards(dadosExibidos); // Atualiza o total de "cards"
  });
});

