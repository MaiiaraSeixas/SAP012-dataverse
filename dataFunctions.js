// Função para filtrar os "doramas" com base no gênero
export const filterdata = (doramas,  valueoption) => {
// Filtra os dados para retornar apenas os "doramas" do gênero especificado
  const result = doramas.filter((dorama) => dorama.facts.doramaGender === valueoption)
  return result
};
// Função para ordenar os "doramas"
export const orderdata = (data, ordenacao) => {
  if (ordenacao === "asc") {
    // Ordena em ordem alfabética crescente pelo nome
    return data.sort((a, b) => { return a.name.localeCompare(b.name) })
  } else {
    // Ordena em ordem alfabética decrescente pelo nome
    return data.sort((a, b) => { return b.name.localeCompare(a.name) })
  }
};
// Função para calcular o total de "cards"
export const computStats = (data) => {
  // Mapeia as avaliações dos "doramas" e filtra valores numéricos
  const estatistica = data.map(dorama => dorama.facts.doramaRating).filter(value => !isNaN(value));
  // Calcula o total de "cards" com avaliação
  const contador = estatistica.reduce((acc) => acc + 1, 0);
  return contador;
};
 