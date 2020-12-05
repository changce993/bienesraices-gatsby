import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    html {
        font-size: 62.5%;
        box-sizing:border-box;
    }

    *, *::before, *::after {
        padding:0;
        margin:0;
        box-sizing:inherit;
        font-family: 'Montserrat', sans-serif;
    }

    body {
        font-size:1.6rem;
        line-height:2;
    }

    h1, h2, h3 {
        margin:0;
        line-height:1.5;
    }

    h1, h2 {
        text-align:center;
    }

    ul {
        list-style: square none;
        padding:none;
        margin:none;
    }

    .container {
        max-width:1440px;
        margin:0 auto;
        width:90%;
    }

    img {
        max-width:100%;
    }
`

export default GlobalStyles;