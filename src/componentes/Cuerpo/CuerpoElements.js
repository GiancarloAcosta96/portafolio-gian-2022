import styled from "styled-components";

export const ContenedorPrincipal = styled.div`
    width: 100%;
    max-width: 100%;
    height: 90vh;
    background-color:#f6f6f6;
    /* background-color: green; */
    display: grid;
    align-items: center;
    @media(max-width:1000px){
        height: 80vh;
    }
    h2 {
        font-family: 'Sora';
        transform: rotate(90deg);
        font-size: .9em;
        margin-top: 60vh;
        @media(max-width:1520px) {
            font-size: .8em;
        }
        @media(max-width:1000px) {
            display: none;
            
        }
    }
`
export const CuerpoContenedor = styled.div`
    width: 80%;
    max-width: 80%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(3, 60% 28% 12%);
    margin: auto;
    z-index: 10;
    @media(max-width:1520px) {
            grid-template-columns: repeat(3, 50% 35% 15%);
    }
    @media(max-width:1300px) {
            grid-template-columns: repeat(3, 50% 30% 20%);
        }
    @media(max-width:1000px) {
        grid-template-columns: repeat(2, 50% 50%);
    }
    @media(max-width:800px) {
        display: grid;
        grid-template-columns: repeat(2, 100% 0);
        margin: auto;
        text-align: center;
    }      

`

export const Descripcion = styled.div`
    margin: auto;
    z-index: 50;
    h1 {
        font-family: 'Roboto';
        font-size: 3em;
        margin: 0 0 .5em 0;
        @media(max-width:1000px) {
            font-size: 2em;
        }
    }
    p {
        font-family: 'Roboto';
        font-weight: 300;
        font-size: 1.8em;
        margin: 0 0 4em 0;
        @media(max-width:1000px) {
            font-size: 1.5em;
        }
    }
    .works {
        position: relative;
        font-family: 'Sora';
        text-decoration: none;
        font-size: 1.5em;
        color: #000;
        font-weight: bold;
        transition: all .5s ease;
        padding: .5em;
        &:hover {
            color: #f6f6f6;
        }
        @media(max-width:1000px) {
            font-size: 1.3em;
        }
    }

    .works::after {
            content: "";
            background: #000;
            position: absolute;
            z-index: -1;
            display: block;
            top: 0;
            bottom: 0;
            left: 0%;
            right: 99%;
            -webkit-transition: all 0.5s;
            transition: all 0.5s;
    }

    .works:hover::after {
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        -webkit-transition: all 0.5s;
        transition: all 0.5s;
    }

    ul {
        margin-top: 8em;
        display: flex;
        gap: 1em;
        li {
            font-weight: 500;
            list-style: none;
            @media(max-width:800px) {
                    margin: auto;
                }
            a {
                font-family: 'sora';
                color: #000;
                font-size: 1.2em;
                text-decoration: none;
                font-weight: 500;
                border-bottom: 1px solid #000;
                @media(max-width:1000px) {
                    font-size: 1em;
                }
                
            }
        }
    }
`

export const Arte = styled.div` 
    margin: auto;
    z-index: 50;
    img {
        height: 500px;
        width: 500px;
        filter: drop-shadow(.5em .5em .5em #999);
        @media(max-width:1000px) {
            width: 400px;
        }
        @media(max-width:800px) {
            display: none;
        }
    }
    
`


export const Circulo = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: 45em;
    height: 45em;
    border-radius: 50%;
    background-color: #FFF;
    @media(max-width:1000px){
        display: none;
    }
`