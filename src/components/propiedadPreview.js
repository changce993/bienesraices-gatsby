import React from 'react'
import Iconos from './iconos';
import Image from 'gatsby-image';
import styled from 'styled-components';
import { Link } from 'gatsby';
import urlSlug from 'url-slug';

const Card = styled(Link)`
    overflow:hidden;
    color:inherit;
    text-decoration:none;
    background-color: white;
    border-radius:1rem;
    transition:.3s;
    
    :hover{
        transform:scale(1.05);
        box-shadow:0 4px 16px 8px rgba(0,0,0,.05);
    }

    .content{
        padding:1rem;
    }
`

const PropiedadPreview = ({ propiedad }) => {

    const { nombre, WC, estacionamiento, habitaciones, precio, imagen } = propiedad;

    return (
            <Card to={urlSlug(nombre)}>
                <Image
                    fluid={imagen.sharp.fluid}
                />
                <div className='content'>
                    <h3>{nombre}</h3>
                    <p>$ {precio}</p>
                    <Iconos
                        WC={WC}
                        habitaciones={habitaciones}
                        estacionamiento={estacionamiento}
                    />
                </div>
            </Card>
    )
}

export default PropiedadPreview
