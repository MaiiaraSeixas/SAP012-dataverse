// // Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.

export const filterdata = (data, filterby, value) => {
  const datafiltrados = data.select_filter(
    (order) => order.facts
  )
  return 'example';
};

export const orderdata = (data, ordenacao) => {
  if (ordenacao === "asc") {
    return data.sort((a, b) => { return a.name.localeCompare(b.name) })
  } else {
    return data.sort((a, b) => { return b.name.localeCompare(a.name) })
  }
};
