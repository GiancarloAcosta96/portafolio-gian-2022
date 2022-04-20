import styled from 'styled-components';


export const LogoContainer = styled.div`
    font-family: 'Sora';
    font-size: 1.2em;
`

export const Container = styled.div`
    width: 100%;
    max-width: 100%;
    height: 10vh;
    /* background-color: #282c3c; */
    background-color:#f6f6f6;
    display: flex;
    align-items: center;
`

export const Wrapper = styled.div`
    width: 80%;
    max-width: 80%;
    display: flex;
    margin: auto;
    align-items: center;    
    justify-content: space-between;
`

export const Menu = styled.ul`
    list-style: none;
    display: flex;
    gap: 2em;

    @media(max-width:960px) {
        background-color: #7A7A7A;
        position: absolute;
        top: 10vh;
        z-index:99;
        left: ${({open}) => open ? '0' : '-100%'};
        width: 100%;
        height: 90vh;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        transition: .3s all ease;
        /* border-radius: 0 0 60% 0; */
    }
`

export const MenuItem = styled.li`
    .btnContacto {
        background-color: #000;
        color: #FFF;       
        transition: all .3s;
        border: none;
        &:hover {
           background-color: #f6f6f6;
           color: #000;
        }
    }
    @media(max-width:960px){
        width: 100%;
        height: 5em;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

export const MenuItemLink = styled.a`
    padding: .5em 1em;
    cursor: pointer;
    color: #363636;
    font-size: 1.2em;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Roboto';
    &:hover {
        border-bottom: thin 1px #000;
    }
    @media(max-width:960px) {
        width: 100%;
        height: 100%;
        color: #f6f6f6;
        font-size: 1.5em;
    }
`

export const IconoHamburguesa = styled.div`
    display: none;
    @media(max-width:960px){
        display: flex;
        align-items: center;
        cursor: pointer;
        svg {
            fill: #363636;
        }
    }
`