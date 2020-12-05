import React from 'react'
import Layout from '../components/layout';
import useInicio from '../hooks/useInicio';
import { css } from 'styled-components';
import BackgroundImage from 'gatsby-background-image';
import heroCSS from '../css/hero.module.css';
import Encuentra from '../components/encuentra';
import ListadoPropiedades from '../components/listadoPropiedades';

const Index = () => {

    const { contenido, imagen } = useInicio()[0];

    return (
        <Layout bg='#f9f9ff' padding='0 0 5rem 0'>
            <div css={css`overflow:hidden;`}>
                <BackgroundImage
                    tag='section'
                    fluid={imagen.sharp.fluid}
                    data-sal="zoom-out"
                    data-sal-duration='2000'
                >
                <div className={heroCSS.imagenbg}>
                    <h1
                        data-sal="zoom-out"
                        data-sal-delay='500'
                        data-sal-duration='1500'
                        className={heroCSS.titulo}>Venta de casas y departamentos exclusivos</h1>
                </div>
                </BackgroundImage>
            </div>

            <main css={css`height:60vh; display:flex; justify-content:center; align-items:center;`}>
                <p  
                    data-sal="slide-up"
                    data-sal-delay='500'
                    data-sal-duration='800'
                    css={css`
                        font-size:2rem;
                        width:50%;
                    `}
                >{contenido}</p>   
            </main>

            <Encuentra/>

            <ListadoPropiedades/>            
        </Layout>
    )
}

export default Index
