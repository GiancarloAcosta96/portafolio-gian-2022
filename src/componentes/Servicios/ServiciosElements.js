import styled from 'styled-components';

export const ContenedorServicios = styled.div`
    width: 100%;
    max-width: 100%;
    height: max-content;
    padding: 5em;
    background-color: #f6f6f6;
    @media (max-width:800px){
        padding: 2em;
    }
`

export const Contenedor = styled.div`
    width: 80%;
    max-width: 80%;
    margin: auto;
    h2 {
        font-family: 'Roboto';
        font-size: 3.5em;
        @media(max-width:1000px){
            font-size: 2em;
            text-align: center;
        }
    }
    @media (max-width:1000px){
        width: 100%;
        max-width: 100%;
    }
`

export const ContenedorCartas = styled.div`
    display: grid;
    margin: auto;
    grid-template-columns: repeat(3, 1fr);
    gap: 2em 4em;
    @media(max-width:1300px){
        grid-template-columns: repeat(2, 1fr);
    }
    @media(max-width:800px){
        grid-template-columns: 1fr;
    }
`

export const Card = styled.div`
    
    margin-top: 2em;
    display: block;
    padding: 2em;
    transition: .3s all ease;
    @media(max-width:800px){
        padding: 0;
    }
    
    img {
        width: 10em;
        height: 10em;
        display: flex;
        margin: auto;
    }
    h2 {
        text-align: center;
        font-family: 'Roboto';
        font-size: 1.5em;
        font-weight: 500;
        @media(max-width:800px){
            font-size: 1.3em;
        }
    }
    p {
        margin-top: 1em;
        font-family: 'Roboto';
        font-weight: 300;
        @media(max-width:800px){
            font-size: 1.2em;
            text-align: center;
        }
    }
`   