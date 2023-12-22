import React from 'react'
import { useState } from 'react';
import { todoList } from '../../Mock/Mock';
import Mod from '../../Mod/Mod';
import ConfirmMod from '../../ConfirmMod/ConfirmMod';
import "./index.scss";
import edit from "../../images/edit.svg"
import excl from "../../images/excl.svg"

function Telatarefa() {
    // Variáveis com o use state aprendido nas aulas
    const [tarefas, setTarefas] = useState(todoList);
    const [novaTarefa, setNovaTarefa] = useState("");
    const [editandoIndex, setEditandoIndex] = useState(null);
    const [mostrarModal, setMostrarModal] = useState(false);
    const [deletandoIndex, setDeletandoIndex] = useState(null);
    const [mostrarConfirmarModal, setMostrarConfirmarModal] = useState(false);
  

    //  alterar o status de uma tarefa 
  const handleCheckboxChange = (index) => {
    const tarefasAtualizadas = [...tarefas];
    tarefasAtualizadas[index].status = !tarefasAtualizadas[index].status;
    setTarefas(tarefasAtualizadas);
  }

  // adicionar uma nova tarefa à lista
  const adicionarTarefa = () => {
    // o trim() serve para remover espaços da string do inicio ou final
    if (novaTarefa.trim() !== "") {
      // Cria o objeto representando uma tarefa nova  com status inicio falso
      const novaTarefaObj = { tarefa: novaTarefa, status: false };

      // Atualiza o estado das tarefas adicionando a nova tarefa ao final do array
      setTarefas([...tarefas, novaTarefaObj]);

      // Limpa o campo de entrada da nova tarefa
      setNovaTarefa("");
    }
  }
  //manipuladores de evento
  const handleEditarClick = (index) => {
    setEditandoIndex(index);
    setMostrarModal(true);
  }
  const handleCancelarEdicao = () => {
    setEditandoIndex(null);
    setMostrarModal(false);
  }
  const handleConfirmarEdicao = (index, novoTexto) => {
    const tarefasAtualizadas = [...tarefas];
    tarefasAtualizadas[index].tarefa = novoTexto;
    setTarefas(tarefasAtualizadas);
    setEditandoIndex(null);
    setMostrarModal(false);
  }
  const handleDeletarClick = (index) => {
    setDeletandoIndex(index);
    setMostrarConfirmarModal(true);
  }
  const handleCancelarDelecao = () => {
    setDeletandoIndex(null);
    setMostrarConfirmarModal(false);
  }
  const handleConfirmarDelecao = () => {
    const tarefasAtualizadas = tarefas.filter((_e, index) => index !== deletandoIndex);
    setTarefas(tarefasAtualizadas);
    setDeletandoIndex(null);
    setMostrarConfirmarModal(false);
  }
    
  
  return (
    <div>
      <div className="topo">
        <h2>Organização</h2>
        <label><h3>Tarefa</h3></label>

      </div>
      <div className="sprincipal">
        <h2>Otimize seu tempo e se organize com o nosso planejador diário</h2>
        <section>
          <h3>Tarefa</h3>
          <h3>Status</h3>
          <h3>Opções</h3>
        </section>
        <hr />

        {tarefas.map((e, index) => (
          <div key={e.tarefa} className="usuario">
            <label htmlFor={`tarefa-${index}`} id='labelinput'>
              {editandoIndex === index ? (
                <>
                  <input className='inputtext'
                    type="text"
                    value={e.tarefa}
                    onChange={(event) => handleConfirmarEdicao(index, event.target.value)}
                  />
                  <button className="edicao" onClick={handleCancelarEdicao}>Cancelar</button>
                  <button className="edicao" onClick={() => handleConfirmarEdicao(index, e.tarefa)}>Confirmar</button>
                </>
              ) : (
                <>
                  {e.tarefa}

                </>
              )}<div className="uni">

                <input className="box"type="checkbox"name=""id={`check-${index}`}checked={e.status}
                  onChange={() => handleCheckboxChange(index)}
                />
                <div className="icons">
                  <button onClick={() => handleEditarClick(index)}><img className="img" src={edit} /></button>
                  <button onClick={() => handleDeletarClick(index)}><img className="img" src={excl} /></button>
                </div>
              </div>
            </label>
          </div>
        ))}

        <div>
           {/* criar */}
          <input className="newt"
            type="text"
            placeholder="Nova tarefa..."
            value={novaTarefa}
            onChange={(e) => setNovaTarefa(e.target.value)}
          />
          <button id="btadd" onClick={adicionarTarefa}> + </button>
        </div>
        {/* editar */}
        <Mod
          mostrar={mostrarModal}
          handleClose={() => setMostrarModal(false)}
          handleConfirmar={(novoNome) => handleConfirmarEdicao(editandoIndex, novoNome)}
        />

        {/* confirmar para excluir */}
        <ConfirmMod
          mostrar={mostrarConfirmarModal}
          handleClose={handleCancelarDelecao}
          handleConfirmar={handleConfirmarDelecao}
        />

      </div>
    </div>

  )
};


export default Telatarefa;