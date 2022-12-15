const BotaoDeleta = (atualiza, id) => {
   const botaoDeleta = document.createElement('button');
   botaoDeleta.classList.add('delete-button');
   botaoDeleta.innerText = 'deletar';
   botaoDeleta.addEventListener('click', () => deletarTarefa(atualiza, id));
   return botaoDeleta;
}

const deletarTarefa = (atualiza, id) => {
   const tarefasCadastradas = JSON.parse(localStorage.getItem('tarefas')) || [];
   tarefasCadastradas.splice(id, 1);
   localStorage.setItem('tarefas', JSON.stringify(tarefasCadastradas));
   atualiza();
}

export default BotaoDeleta;