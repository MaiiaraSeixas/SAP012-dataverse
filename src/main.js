import { example } from './dataFunctions.js';
import { renderItems } from './view.js';
import data from './data/dataset.js';

const root = document.querySelector('#root ul') // puxando a tag ul atraves do elemento id

for(let serie of data){
root.innerHTML = root.innerHTML + renderItems(serie)
}

root.innerHTML = root.innerHTML + renderItems(data[0])