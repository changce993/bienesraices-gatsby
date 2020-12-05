import React from 'react'
import Image from 'gatsby-image';
import styled from 'styled-components';
import Layout from './layout';
import { graphql } from 'gatsby';
import ListadoPropiedades from './listadoPropiedades';

export const query  = graphql`
    query($id: String!) {
        allStrapiPaginas(filter: {id: {eq: $id}}) {
            nodes {
                nombre
                contenido
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

const Propiedad = ({data: { allStrapiPaginas: {nodes} }}) => {

    const { nombre, contenido, imagen } = nodes[0];

    let padding;
    if(nombre === 'Propiedades') padding = '0 0 5rem 0'

    return (
        <Layout bg='#f9f9ff' padding={padding}>
            <Content>
                <Image fluid={imagen.sharp.fluid} className='image' />

                <div className='content'>
                    <div className='card' data-sal='slide-up' data-sal-duration='800'>
                        <h1>{nombre}</h1>
                        <p>{contenido}</p>
                    </div>

                </div>
            </Content>
            {nombre === 'Propiedades' && (
                <ListadoPropiedades/>
            )}
        </Layout>
    )
}

export default Propiedad;
