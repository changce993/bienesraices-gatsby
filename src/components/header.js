import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Navigation from './navigation';
import styled, { css } from 'styled-components';

const HeaderStyled = styled.header`
    padding:2rem;
    height:7rem;

    .header{
        max-width:1440px;
        margin:0 auto;
        text-align:center;

        @media(min-width: 768px){
            display:flex;
            align-items:center;
            justify-content:space-between;
        }
    }
`

const Header = () => {

    const { logo } = useStaticQuery( graphql`
        query {
            logo: file(relativePath: {eq: "logo.svg"}){
                publicURL
            }
        }
    `);

    return (
        <HeaderStyled>
            <div
                className='header' 
                data-sal="slide-down"
                data-sal-duration={1000}
            >
                <Link to='/'>
                    <img
                        css={css`
                            height:3rem;
                        `}
                        src={logo.publicURL}
                        alt='logo bienes raices'
                    />
                </Link>

                <Navigation/>
            </div>
        </HeaderStyled>
    )
}

export default Header
