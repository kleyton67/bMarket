import React from 'react';
import Login from './Login';
import { Link } from 'react-router-dom';
// import { useQuery } from '@apollo/client';

export const SellerInit = () => {
  //   const { loading, error, data } = useQuery(GET_LINKS);

  //   if (loading) return <p>Loading...</p>;
  //   if (error) return <p>Error ⁉️</p>;

  return (
    <div>
      <Login nextRoute={"/PageInitSeller"}/>
      <p >
        <Link to="/WhoIAm">O que deseja fazer!!!</Link>
        <br />
        <Link to="/">Voltar a página inicial!!!</Link>
      </p>
    </div>
  );
};
