import React from 'react'
import Helmet from 'react-helmet'
import GlobalStyles from './GlobalStyles';
import Header from './header';
import { css } from 'styled-components';

const Layout = ({ children, bg, padding }) => {
    return (
        <>
            <GlobalStyles/>
            <Helmet>
                <title>Bienes Raices Gatsby</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossorigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;900&display=swap" rel="stylesheet" />
            </Helmet>
            <div css={css`
                background-color:${bg};
                padding:${padding};
            `}>
                <Header/>
                { children }
            </div>
        </>
    )
}

export default Layout
