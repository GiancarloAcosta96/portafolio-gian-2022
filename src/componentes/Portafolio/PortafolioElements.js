import styled from "styled-components";
import porta from "../Portafolio/pokeapi.png";

export const ContenedorPortafolio = styled.div`
    width: 100%;
    max-width: 100%;
    height: max-content;
    padding: 5em;
`

export const ContenedorP = styled.div`
    width: 80%;
    max-width: 80%;
    margin: auto;
    h2 {
        font-family: 'Roboto';
        font-size: 3.5em;
        @media(max-width:800px){
            font-size: 2em;
            text-align: center;
        }
    }
    @media (max-width:800px){
        width: 100%;
        max-width: 100%;
    }
`

export const ContenedorCartasPortafolio = styled.div`
    display: grid;
    margin: auto;
    grid-template-columns: repeat(3, 1fr);
    gap: 2em;
    @media(max-width:1300px){
        grid-template-columns: repeat(2, 1fr);
    }
    @media(max-width:800px){
        grid-template-columns: 1fr;
    }
`

export const CardP = styled.div`
    width: 20em;
    height: 25em;
    margin-top: 2em;
    display: block;
    padding: 2em;
    width: 100%;
    transition: .3s all ease;
    border: 1px solid #000;
    /* background-image: url(${porta}); */
    background-size: cover;
    background-repeat: no-repeat;
    @media(max-width:800px){
        padding: 0;
    }
    
    h2 {
        z-index: 100;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: 'Roboto';
        font-size: 2em;
        font-weight: 500;
        @media(max-width:800px){
            font-size: 1.7em;
        }
    }

`