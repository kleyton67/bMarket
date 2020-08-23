import React from 'react';
import { Link } from 'react-router-dom';
import { gql } from 'apollo-boost';
// import { Query } from 'react-apollo';
import { useQuery } from '@apollo/client';


const GET_SELLERS = gql`
    {
        sellers: getSellers {
            _id
            userName
            name
            pass
        }
    }
`;

export const PageInitSeller = () => {

    const numbers = [1, 2, 3, 4, 5];
    const listItems = numbers.map((number, index) => <li key={index}>{number}</li>);
    const { loading, error, data } = useQuery(GET_SELLERS);
    if(loading) return <h4>Carregando...</h4>
    if(error) return <h4>Erro ao carregar informações do BD...</h4>
    console.log(data);
    return (
        <div>
            Ola $user  seja bem vindo!!!
            Veja os produtos que você está vendendo:
            {listItems}
            <Link to="/WhoIAm">Deslogar!!!</Link>
            <Link to="/info">Informações!!!</Link>
        </div>
    );
};
