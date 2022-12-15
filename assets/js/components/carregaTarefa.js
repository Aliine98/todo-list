import { ordenaDatas, removeDatasRepetidas } from '../service/data.js';
import { criaData } from './criaData.js';

export const carregaTarefa = () => {
   const lista = document.querySelector('[data-list]');

   const tarefasCadastradas = JSON.parse(localStorage.getItem("tarefas")) || [];

   lista.innerHTML = '';
   const datasUnicas = removeDatasRepetidas(tarefasCadastradas);
   ordenaDatas(datasUnicas);
   datasUnicas.forEach((dia) => {
      lista.appendChild(criaData(dia));
   });
}