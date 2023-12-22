import { useState } from 'react';
import PropTypes from "prop-types";
import "./index.scss"

function Mod({ mostrar, handleClose, handleConfirmar }) {
    const [novoNomeTarefa, setNovoNomeTarefa] = useState("");

    const estiloModal = {
        display: mostrar ? 'block' : 'none',
        position: 'fixed',
        zIndex: 1,
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        overflow: 'auto',
        backgroundColor: 'rgba(0,0,0,0.4)',
        padding: '50px'
    };

    const estiloConteudo = {
        backgroundColor: '#fefefe',
        margin: '15% auto',
        padding: '20px',
        border: '1px solid #888',
        width: '758px',
        height: '436px',
    };

    const handleInputChange = (event) => {
        setNovoNomeTarefa(event.target.value);
    }

    return (
        <div style={estiloModal}>
            <div style={estiloConteudo}>
                <h2 id='titulo'>Deseja editar esse item?</h2>
                <input id='novat' type="text" placeholder="Nova tarefa..." onChange={handleInputChange} />
                <br />
                <button className='nao' onClick={handleClose}>Não</button>
                <button className='sim ' onClick={() => handleConfirmar(novoNomeTarefa)}>Sim</button>
            </div>
        </div>
    );
}


Mod.propTypes = {
    mostrar: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    handleConfirmar: PropTypes.func.isRequired,
};

export default Mod;