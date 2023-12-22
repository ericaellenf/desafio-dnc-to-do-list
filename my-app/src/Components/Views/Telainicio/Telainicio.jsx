import React from 'react'
import { Link } from 'react-router-dom'
import "./index.scss"

const Telainicio = () => {
  return (
    <div className='tudo'>
        <h1>Olá, seja bem-vindo a sua lista de Tarefas!</h1>
        <button>
            <Link to={`/Telatarefa`}>Começar</Link>
        </button>
    </div>
  )
}

export default Telainicio