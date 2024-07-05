import React from 'react';
import PropTypes from 'prop-types';
import style from './Botao.module.css';


export default function Botao({ children, tipo, onClick }) {
    return (
        <button
            className={`${style.botao} ${tipo === 'submit' ? style.submitBotao : ''}`}
            type={tipo}
            onClick={onClick}
        >
            {children}
        </button>
    );
}

Botao.propTypes = {
    children: PropTypes.node.isRequired,
    tipo: PropTypes.oneOf(['submit', 'button']).isRequired,
    onClick: PropTypes.func,
};

