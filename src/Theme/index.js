import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Montserrat:400,500,600');

    body {
        width: 100%;
        height: 100vh;
        margin: 0px;
        font-family: Montserrat;
    }

    p,h1,h2,h3,h4,h5,h6 {
        margin: 0;
    }
`
export const theme = {
    darkblue: '#21346A',
    lightgray: '#F1F1F6',
    darkgray: '#C9C9C9'
}