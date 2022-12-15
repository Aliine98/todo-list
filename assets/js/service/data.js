export const removeDatasRepetidas = (datas) => {
   const datasUnicas = new Set();
   datas.forEach(data => {
      datasUnicas.add(data.dataFormatada);
   });
   return Array.from(datasUnicas);
}