export const removeDatasRepetidas = (datas) => {
   const datasUnicas = new Set();
   datas.forEach(data => {
      datasUnicas.add(data.dataFormatada);
   });
   return Array.from(datasUnicas);
}

export const ordenaDatas = (datas) => {
   datas.sort((a, b) => {
      const primeiraData = moment(a, 'DD/MM/YYYY').format('YYYYMMDD');
      const segundaData = moment(b, 'DD/MM/YYYY').format('YYYYMMDD');
      return primeiraData - segundaData;
   });
}