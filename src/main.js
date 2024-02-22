//import { example } from './dataFunctions.js';
import { renderItems } from './view.js';
import { orderdata } from './dataFunctions.js';
import data from './data/dataset.js';
const listaCard = document.querySelector('#root');
const filter = document.querySelector('#filter');
const order = document.querySelector('#order');
const button = document.querySelector('[data-testid="button-clear"]')

document.addEventListener("DOMContentLoaded", () => {
  listaCard.appendChild(renderItems(data));

  filter.addEventListener('change', (event) =>{
    console.log ('vai filtrar');
  });
  order.addEventListener('change', (event) =>{
    console.log (' vai ordenar', event.target.value);
    const newData = orderdata(data, event.target.value);
    listaCard.innerHTML = "";
    listaCard.appendChild(renderItems(newData));
  });
  button.addEventListener('click', (event) =>{
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
