import React from 'react';
import { Link } from 'react-router-dom';

export const WhoIAm = () => {
  return (
    <div >
      <header >
        <h1>O que você deseja fazer:</h1>
        <button>
          Vender
        </button>
        <button>
          Comprar
        </button>
      </header>

      <p >
      <Link to="/">Voltar a página inicial!!!</Link>
    </p>

    </div>
  );
};