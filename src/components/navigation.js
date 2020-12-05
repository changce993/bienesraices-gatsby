import React from 'react';
import Link from './Link';
import styled from 'styled-components';

const Nav = styled.nav`
    .pagina-actual {
        color:${props => props.color ? props.color : 'black'};
        
        ::before{
            border-bottom:1px solid transparent;
        }
    }
`

const Navigation = () => {

    const links = [
        {url:'/', name:'Inicio'},
        {url:'/nosotros', name:'Nosotros'},
        {url:'/propiedades', name:'Propiedades'}
    ]

    return (
        <Nav>
            {links.map((link, index) => (
                <Link
                    key={index}
                    activeClassName='pagina-actual'
                    to={link.url}
                >
                    {link.name}
                </Link>
            ) )}
        </Nav>
    )
}

export default Navigation
