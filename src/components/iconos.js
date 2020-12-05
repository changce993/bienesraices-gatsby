import React from 'react'
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

const IconContainer = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;

    div{
        display:flex;
        justify-content:center;
        align-items:center;
        margin-left:2rem;

        :first-of-type{
            margin-left:0;
        }

        img{
            height:1.5rem;
            margin:0 1rem ;

          
        }
    }
`

const Iconos = ({ WC, habitaciones, estacionamiento }) => {

    const { iconos } = useStaticQuery(graphql`
        query {
            iconos: allFile(filter: {relativeDirectory: {eq: "iconos"}}){
                edges{
                    node{
                        id
                        publicURL
                    }
                }
            }
        }
    `)

    const iconosImagenes = iconos.edges;

    return (
        <IconContainer>
            <div> <img alt='icono estacionamiento' src={iconosImagenes[3].node.publicURL} /> {estacionamiento}</div>
            <div> <img alt='icono habitaciones' src={iconosImagenes[1].node.publicURL} /> {WC}</div>
            <div> <img alt='icono WC' src={iconosImagenes[0].node.publicURL} /> {habitaciones}</div>
        </IconContainer>
    )
}

export default Iconos
