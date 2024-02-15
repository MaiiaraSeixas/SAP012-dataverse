export const renderItems = (data) => {

  const doramacard = document.createElement('ul');
  doramacard.classList.add('container-doramacard');

  data.forEach(itemData => {
    doramacard.innerHTML += `
            <li itemscope itemtype="https://www.imdb.com/list/ls086959587/" class="container-itemdata">
                <dl itemscope itemtype="https://www.imdb.com/list/ls086959587/">
                    <dt><img src="${itemData.imageUrl}" alt="Imagem do card" itemprop="imageUrl" class="imagem_card" /></dt>
                    <dt>Nome:</dt><dd itemprop="name">${itemData.name}</dd>
                    <dt>Descrição:</dt><dd itemprop="description">${itemData.shortDescription}</dd>
                    <dt>Sinopse:</dt><dd itemprop="description">${itemData.description}</dd>
                    <dt>Fatos:</dt><dd itemprop="facts">${itemData.facts.doramaRating}</dd>
                 </dl>
            </li>`;
  })
  return doramacard;
};

