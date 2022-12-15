import { carregaTarefa } from "./carregaTarefa.js";
import BotaoConclui from "./concluiTarefa.js"
import BotaoDeleta from "./deletaTarefa.js"

export const handleNovoItem = (evento) => {
   evento.preventDefault();
   const tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];
   const input = document.querySelector('[data-form-input]');
   const valor = input.value;
   const calendario = document.querySelector('[data-form-date]');
   const data = moment(calendario.value);
   const dataFormatada = data.format('DD/MM/YYYY');
   const concluida = false;

   const dados = {
      dataFormatada,
      valor,
      concluida
   }

   const tarefasAtualizadas = [...tarefas, dados];

   localStorage.setItem("tarefas", JSON.stringify(tarefasAtualizadas));
   carregaTarefa();

   input.value = '';
}

export const Tarefa = ({ dataFormatada, valor, concluida }, id) => {
   const tarefa = document.createElement('li');
   const conteudo = `<p class=content>${dataFormatada} * ${valor}</p>`
   tarefa.innerHTML = conteudo;

   if (concluida) {
      tarefa.classList.add('done');
   }
   tarefa.classList.add('task');
   const span = document.createElement('span');
   span.appendChild(BotaoConclui(carregaTarefa, id));
   span.appendChild(BotaoDeleta());
   tarefa.appendChild(span);
   return tarefa;
}