import React from 'react';
import { Link } from 'react-router-dom';

export const WhoIAm = () => {
  return (
    <div >
      <header >
        <h1>O que você deseja fazer:</h1>
        <Link to="/SellerInit">
          <button>
            Vender
        </button>
        </Link>
        <Link to="/">
          <button>
            Comprar
        </button>
        </Link>
      </header>

      <p >
        <Link to="/">Voltar a página inicial!!!</Link>
      </p>

    </div>
  );
};