import styled from "styled-components";

export const ContenedorPrincipal = styled.div`
    width: 100%;
    max-width: 100%;
    height: max-content;
    padding: 5em;
    @media(max-width:1000px){
        padding: 2em;
    }
`
export const ContenedorSobreMi = styled.div`
    width: 80%;
    max-width: 80%;
    display: grid;
    margin: auto;
    grid-template-columns: repeat(2, 70% 30%);
    @media (max-width:1400px) {
        grid-template-columns: repeat(2, 60% 40%);
    }
    @media(max-width:800px){
            display: block;
            text-align: center;
    }
`

export const Descripcion = styled.div`
    
`
export const Texto = styled.div`
    
    h2 {
        font-family: 'Roboto';
        font-size: 3.5em;
        @media(max-width:1000px){
            font-size: 2em;
        }
    }
    p {
        margin-top: 1em;
        font-family: 'Roboto';
        font-size: 1.3em;
        font-weight: 300;
        @media(max-width:1000px){
            font-size: 1.2em;
        }
    }
`

export const Botones = styled.div`
    margin-top: 3em;
    ul {
        li {
            cursor: pointer;
            list-style: none;
            color: #FFF;
            font-family: 'Sora';
            margin: 1.5em 0;
            width: 15em;
            background-color: #000000;
            padding: 1em;
            border-left: 2px solid #000;
            border-right: 2px solid #000;
            text-align: center;
            transition: all .2s;
            @media(max-width:1000px){
                font-size: .9em;
            }
            @media(max-width:800px){
                margin:  1em auto;
                
            }
            &:hover {
                background-color: #FFF;
                color: #000;
            }
        }
    }
`

export const Imagen = styled.div`
    margin: auto;
    border: 0px;
    img {
        height: 25em;
        width: 20em;
        box-shadow: 0px 0px 17px -7px rgba(0,0,0,1);
        -webkit-box-shadow: 0px 0px 17px -7px rgba(0,0,0,1);
        -moz-box-shadow: 0px 0px 17px -7px rgba(0,0,0,1);
        @media(max-width:1000px){
            height: 20em;
            width: 15em;
        }
        @media(max-width:800px){
            display: none;
        }
    }
`
