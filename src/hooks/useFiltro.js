import React, { useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

const Formulario = styled.form`
    display:grid;
    column-gap:2rem;
    max-width: 1440px;
    width:90%;
    margin:0 auto 2rem;

    @media(min-width: 560px){ 
        grid-template-columns: repeat(2, 1fr);
    }

    @media(min-width: 960px){
        grid-template-columns: repeat(3, 1fr);
    }

    @media(min-width: 1200px){
        grid-template-columns: repeat(4, 1fr);
    }
`;

const Select = styled.select`
    max-width:100%;
    border:none;
    outline:none;
    appearance: none;
    padding:1rem;
    cursor:pointer;
    transition:.3s;

    :hover{
        box-shadow:0 4px 16px 8px rgba(0,0,0,.05);
    }
`;

const useFiltro = () => {

    const [categoria, setCategoria] = useState('')

    const resultado = useStaticQuery(graphql`
        query {
            allStrapiCategorias {
                nodes {
                    nombre
                    id
                }
            }
        }
    `);

    const categorias = resultado.allStrapiCategorias.nodes;

    const FiltroUI = () => (
        <Formulario>
            <Select
                onChange={e => setCategoria(e.target.value)}
                value={categoria}
            >
                <option value=''>-- Filtar por --</option>
                {categorias.map((opcion, index) => (
                    <option key={index} value={opcion.nombre}>{opcion.nombre}</option>
                ))}
            </Select>
        </Formulario>
    )

    return {
        categoria,
        FiltroUI
    }
}

export default useFiltro
