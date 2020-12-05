import React from 'react'
import Iconos from './iconos';
import Image from 'gatsby-image';
import styled, { css } from 'styled-components';
import Layout from './layout';
import { graphql } from 'gatsby';

export const query  = graphql`
    query($id: String!) {
        allStrapiPropiedades(filter: {id: {eq: $id}}) {
            nodes{
                nombre
                id
                precio
                descripcion
                habitaciones
                estacionamiento
                WC
                agentes {
                    nombre
                    telefono
                    email
                }
                imagen {
                    sharp: childImageSharp {
                        fluid (maxWidth: 1200) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
            }
        }
    }
`

const Content = styled.main`
    margin:0 auto;
    max-width:1440px;
    display:flex;
    flex-direction:column;
    align-items:center;

    .image{
        width:100%;
        height:40vh;
    }

    .content{  
        width:90%;
        margin: -5rem;
        z-index:1;
        
        .card{
            z-index:2;
            padding:2rem;
            background-color: white;
            box-shadow:0 4px 16px 8px rgba(0,0,0,.05);
            margin-bottom:2rem;
        }
    }

    @media(min-width: 769px){
        flex-direction:row;
        height:calc(100vh - 7rem);
        overflow:hidden;

        .image{
            width:65vw;
            height:calc(100vh - 7rem);
            object-fit:cover;
        }

        .content{
            width:35vw;
            height:calc(100vh - 17rem);
            overflow-y:scroll;

            ::-webkit-scrollbar{
                appearance: none;
            }

            .card{
                :last-of-type{
                margin-bottom:0;
            }
            }
        }
    }
`

const Propiedad = ({data: { allStrapiPropiedades: {nodes} }}) => {

    const { nombre, precio, habitaciones, estacionamiento, WC, agentes, imagen, descripcion } = nodes[0];

    return (
        <Layout>
            <Content>
                <Image fluid={imagen.sharp.fluid} className='image' />

                <div className='content'>
                    <div className='card' data-sal='slide-up' data-sal-duration='800'>
                        <h1>{nombre}</h1>
                        <div css={css`
                            display:flex;
                            justify-content:space-between;
                            align-items:center;
                        `}>
                            <span> Precio $ {precio}</span>
                            <Iconos
                                WC={WC}
                                habitaciones={habitaciones}
                                estacionamiento={estacionamiento}
                            />
                        </div>
                    </div>

                    <div className='card' data-sal='slide-up' data-sal-duration='800'>
                        <span><b>Descripción:</b></span> {descripcion}
                    </div>

                    <div className='card' data-sal='slide-up' data-sal-duration='800'>
                        <p>
                            <b>Vendedor:</b> <span>{agentes.nombre}</span>
                        </p>
                        <p>
                            <b>Telefono:</b> <span>{agentes.telefono}</span>
                        </p>
                        <p>
                            <b>Email:</b> <span>{agentes.email}</span>
                        </p>
                    </div>
                </div>
            </Content>
        </Layout>
    )
}

export default Propiedad;
