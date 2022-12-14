import BotaoConclui from "./components/concluiTarefa.js"
import BotaoDeleta from "./components/deletaTarefa.js"

const tarefas = [];
const handleNovoItem = (evento) => {
   evento.preventDefault();
   const input = document.querySelector('[data-form-input]');
   const valor = input.value;
   const calendario = document.querySelector('[data-form-date]');
   const data = moment(calendario.value);
   const dataFormatada = data.format('DD/MM/YYYY');
   const lista = document.querySelector('[data-list]');
   const dados = {
      dataFormatada,
      valor
   }
   const criaTarefa = criarTarefa(dados);

   tarefas.push(dados);
   localStorage.setItem("tarefas", JSON.stringify(tarefas));

   lista.appendChild(criaTarefa);
   input.value = '';
}

const criarTarefa = ({ dataFormatada, valor }) => {
   const tarefa = document.createElement('li');
   tarefa.classList.add('task');
   const conteudo = `<p class=content>${dataFormatada} * ${valor}</p>`
   tarefa.innerHTML = conteudo;
   const span = document.createElement('span');
   span.appendChild(BotaoConclui());
   span.appendChild(BotaoDeleta());
   tarefa.appendChild(span);
   return tarefa;
}

const novaTarefa = document.querySelector('[data-form-button]');

novaTarefa.addEventListener('click', handleNovoItem);
