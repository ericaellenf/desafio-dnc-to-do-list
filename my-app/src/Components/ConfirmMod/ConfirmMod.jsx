import PropTypes from "prop-types";
import "./index.scss"

function ConfirmMod({ mostrar, handleClose, handleConfirmar }) {
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
        width: '700px',
        height: '400px',
    };

    return (
        <div style={estiloModal}>
            <div style={estiloConteudo}>
                <h2 id="excluir">Deseja mesmo excluir esse item?</h2>
                <button className="nao" onClick={handleClose}>Não</button>
                <button className="sim" onClick={handleConfirmar}>Sim</button>
            </div>
        </div>
    );
}

ConfirmMod.propTypes = {
    mostrar: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    handleConfirmar: PropTypes.func.isRequired,
};

export default ConfirmMod;
