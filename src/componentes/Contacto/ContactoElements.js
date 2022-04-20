import styled from 'styled-components';

export const ContenedorContacto = styled.div`
    width: 100%;
    max-width: 100%;
    display: grid;
    padding: 5em;
    background-color: #f6f6f6;
`

export const Contenedor = styled.div`
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
`

export const ContenedorTexto = styled.div`
    font-family: 'Roboto';
    font-weight: 300;
    font-size: 1.5em;
`

export const RedesLi = styled.ul`
    margin-top: 4em;
    display: flex;
    justify-content: space-between;
    a {
        display: flex;
        align-items: center;
        font-size: 4em;
        color: #000;
    }
    .facebook {
        &:hover {
            color: #1b74f4;
        }
    }
    .instagram {
        &:hover {
            color: #C13584;
        }
    }
    .twitter {
        &:hover {
            color: #20a4f4;
        }
    }

    .linkedin {
        &:hover {
            color: #0874b4;
        }
    }

    .github {
        &:hover {
            
        }
    }
`