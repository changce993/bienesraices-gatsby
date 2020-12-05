import React, { useState, useEffect } from 'react'
import usePropiedades from '../hooks/usePropiedades';
import PropiedadPreview from './propiedadPreview';
import styled, { css } from 'styled-components';
import useFiltro from '../hooks/useFiltro';

const CardsContainer = styled.ul`
    max-width:1440px;
    width:90%;
    margin:0 auto;
    display:grid;
    column-gap:2rem;
    row-gap:2rem;

    @media(min-width: 560px){ 
        grid-template-columns: repeat(2, 1fr);
    }

    @media(min-width: 960px){
        grid-template-columns: repeat(3, 1fr);
    }

    @media(min-width: 1200px){
        grid-template-columns: repeat(4, 1fr);
    }
`

const ListadoPropiedades = () => {

    const { categoria, FiltroUI } = useFiltro()
    const resultado = usePropiedades();
    const [filtradas, setFiltradas] = useState([]);
    // const [propiedades] = useState(resultado);

    useEffect(() => {
        if(categoria){
            const filtro = resultado.filter(propiedad => propiedad.categoria.nombre === categoria)
            setFiltradas(filtro)
        }else {
            setFiltradas(resultado)
        }
    }, [categoria])

    return (
        <>
            <h1 css={css`
                margin:5rem 0;
            `}>Nuestras propiedades</h1>

            {FiltroUI()}

            <CardsContainer>
                {filtradas.map((propiedad, index) => (
                    <PropiedadPreview key={index} propiedad={propiedad} />
                ))}
            </CardsContainer>
        </>
    )
}

export default ListadoPropiedades
