//import { example } from './dataFunctions.js';
import { renderItems } from './view.js';
import data from './data/dataset.js';
import { filterdata } from './dataFunctions.js';
const listaCard = document.querySelector('#root');
const filter = document.querySelector('#filter');
const order = document.querySelector('#order');
const button = document.querySelector('[data-testid="button_clear"]')

document.addEventListener("DOMContentLoaded", () => {
  listaCard.appendChild(renderItems(data));

  filter.addEventListener('change', (event) =>{
    const resultfilter = filterdata(data,event.target.value);
    listaCard.innerHTML = ""
    listaCard.appendChild(renderItems(resultfilter))
  });
  order.addEventListener('change', (event) =>{
    console.log ('vai ordenar');
  });
  button.addEventListener('click', (event) =>{
    console.log ('vai limpar');
  });
})
