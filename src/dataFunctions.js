// // Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.

export const filterdata = (doramas,valueoption) =>{
   const result = doramas.filter((dorama)=>dorama.facts.doramaGender === valueoption)
return result
}


//function soma (a,b){
 //   const resultado = a+b
 //   return resultado
//}
//const soma = (a,b)=>{
   // return a + b
//}












const orderdata = (data, ordenacao) => {
    if (ordenacao === "asc") {
        return data.sort((a, b) => { return a.name.localeCompare(b.name) })
    } else {
        return data.sort((a, b) => { return b.name.localeCompare(a.name) })
    }
};
//
export const anotherExample = () => {
    return [];
};

