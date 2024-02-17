//import { example } from './dataFunctions.js';
import { renderItems } from './view.js';

import data from './data/dataset.js';
const listaCard = document.querySelector('#root');
const filter = document.getElementById('filter');
const order = document.getElementById('order');
const button = document.querySelector('[data-testid="button-clear"]')

document.addEventListener("DOMContentLoaded", () => {
  listaCard.appendChild(renderItems(data));

  filter.addEventListener('change', () =>{
    console.log ('vai filtrar');
  });
  order.addEventListener('change', () =>{
    console.log (' vai ordenar');
  });
  button.addEventListener('click', () =>{
    console.log (' vai limpar');
  });
})

//document.querySelector("#root").innerHTML = renderItems(data)

//console.log(example, renderItems(data), data);
//const root = document.querySelector('#root ul') // puxando a tag ul atraves do elemento id

//for(let serie of data){
//   root.innerHTML = root.innerHTML + renderItems(serie)
//}

//root.innerHTML = root.innerHTML + renderItems(data[0])