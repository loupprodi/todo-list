const criarTarefa = (evento) => {
  evento.preventDefault();
  const lista = document.querySelector('#list');
  const input = document.querySelector('#input');
  const valor = input.value;

  const tarefa = document.createElement('li');
  tarefa.classList.add('task');
  const conteudo = `<p class="content">${valor}</p>`;

  tarefa.innerHTML = conteudo;

  tarefa.appendChild(BotaoConclui());
  tarefa.appendChild(BotaoDeleta());

  lista.appendChild(tarefa);
  input.value = '';
};

const novaTarefa = document.querySelector('#btn');

novaTarefa.addEventListener('click', criarTarefa);

//

const BotaoConclui = () => {
  const botaoConclui = document.createElement('BUTTON');

  botaoConclui.classList.add('check-button');
  botaoConclui.innerText = 'concluido';
  botaoConclui.addEventListener('click', concluirTarefa);

  return botaoConclui;
};

const concluirTarefa = (evento) => {
  const botaoConclui = evento.target;
  const tarefaCompleta = botaoConclui.parentElement;

  tarefaCompleta.classList.toggle('done');
};

const BotaoDeleta = () => {
  const botaoDeleta = document.createElement('button');

  botaoDeleta.innerText = 'deletar';
  botaoDeleta.addEventListener('click', deletarTarefa);

  return botaoDeleta;
};

const deletarTarefa = (evento) => {
  const botaoDeleta = evento.target;
  const tarefaCompleta = botaoDeleta.parentElement;

  tarefaCompleta.remove();

  return botaoDeleta;
};

localStorage.setItem('tarefas', listArr.join(','));
//adicionar storage

// const salvarStorage = (evento) => {
//   const botaoSalvar = evento.target;
//   const tarefaCompleta = botaoSalvar.parentElement;

//   localStorage.setItem('Favoritos', tarefaCompleta);

//   return botaoSalvar;
// };
