import { Tarefa } from "./criaTarefa.js";

export const criaData = (data) => {
   const tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
   const dataTopo = document.createElement('li');
   const conteudo = `<p class="content-data">${data.format('DD/MM/YYYY')}</p>`;
   dataTopo.innerHTML = conteudo;
   tarefas.forEach((tarefa) => {
      const dia = moment(tarefa.dataFormatada, 'DD/MM/YYYY');
      const diff = data.diff(dia);

      if (diff === 0) {
         dataTopo.appendChild(Tarefa(tarefa));
      }
   });
   return dataTopo;
}