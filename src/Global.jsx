import {createGlobalStyle} from 'styled-components'

const GlobalStyled = createGlobalStyle`
    :root{
        --background: black;
    }
    body{
        margin: 0;
        background-image: linear-gradient(to right bottom, #000000, #320e1f, #5b0a41, #80016f, #9e0ca8);
        color: white;
        font-family: 'Comfortaa', cursive;
    }
`

export default GlobalStyled
