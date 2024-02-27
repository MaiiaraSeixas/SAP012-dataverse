import { renderItems } from './view.js';
import data from './data/dataset.js';
import { filterdata, orderdata } from './dataFunctions.js'; 
const listaCard = document.querySelector('#root');
const filter = document.querySelector('#filter');
const order = document.querySelector('#order');
const button = document.querySelector('[data-testid="button_clear"]')
let dadosExibidos = data.slice();

document.addEventListener("DOMContentLoaded", () => {
  listaCard.appendChild(renderItems(dadosExibidos));

  filter.addEventListener('change', (event) => {
    dadosExibidos = filterdata(dadosExibidos, event.target.value);
    listaCard.innerHTML = ""
    listaCard.appendChild(renderItems(dadosExibidos))
  });
  order.addEventListener('change', (event) => {
    dadosExibidos = orderdata(dadosExibidos, event.target.value);
    listaCard.innerHTML = "";
    listaCard.appendChild(renderItems(dadosExibidos));
  });
  button.addEventListener('click', (event) => {
    listaCard.innerHTML = "";
    dadosExibidos = data.slice();
    listaCard.appendChild(renderItems(data));
  });
});
