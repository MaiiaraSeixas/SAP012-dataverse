// Função para renderizar os "cards" de doramas
export const renderItems = (data) => {
// Cria um elemento <ul> para conter os "cards"
  const doramacard = document.createElement('ul');
  doramacard.classList.add('container-doramacard'); // Adiciona a classe CSS
  // Itera sobre os dados e cria um "card" para cada item
  data.forEach(itemData => {
    doramacard.innerHTML += `
            <li itemscope itemtype="https://www.imdb.com/list/ls086959587/" class="container_li">
                <dl itemscope itemtype="https://www.imdb.com/list/ls086959587/">
                    <dt><img src="${itemData.imageUrl}" alt="Imagem do card" itemprop="imageUrl" class="img_card" /></dt>
                    <dt itemprop="sort-order">${itemData.name}</dt>
                    <dt>Avaliação:</dt>
                      <dd itemprop="facts">${itemData.facts.doramaRating}</dd>
                    <dt>Descrição:</dt>
                      <dd itemprop="description">${itemData.shortDescription}</dd>
                 </dl>
            </li>`;
  })
  return doramacard; // Retorna o elemento <ul> com os "cards"
};

