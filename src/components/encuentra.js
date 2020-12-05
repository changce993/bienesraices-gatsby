import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import styled from 'styled-components';
import heroCSS from '../css/hero.module.css';

const ImageBackground = styled(BackgroundImage)`
    height:60vh;
`

const Encuentra = () => {

    const { imagen } = useStaticQuery(graphql`
        query {
            imagen: file (relativePath: { eq: "encuentra.jpg" }) {
                sharp: childImageSharp {
                    fluid( maxWidth : 1200 ) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `)

    return (
        <ImageBackground
            tag='section'
            fluid={imagen.sharp.fluid}
            fadeIn='soft'
        >
            <div className={heroCSS.imagenbg}>
                <h3 data-sal='slide-up' data-sal-duration='800' className={heroCSS.titulo}>Encuentra la casa de tus sueños</h3>
                <p data-sal='slide-up' data-sal-duration='800' data-sal-delay='300'>15 años de experiencia</p>
            </div>
        </ImageBackground>
    )
}

export default Encuentra
