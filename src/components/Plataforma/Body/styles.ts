import styled from "styled-components";

export const Fundo = styled.main`
    width: 100%;
    height: 100%;
    background-color: rgba(255,255,255, 0.8);
`;

export const Container = styled.div`
    padding-top: 10rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    max-width: 1060px;
    margin: 0 auto;
    height: 90vh;
    width: 100%;
    @media (max-width: 800px) {
        height: 85vh;
        grid-template-columns: repeat(1, 1fr);
        gap: 2rem;
        padding-top: 2rem;
        @media (min-height: 800px) {
            height: 85vh;
            grid-template-columns: repeat(1, 1fr);
            gap: 2rem;
            padding-top: 5rem;
        }
    }
`;


export const Content = styled.div`
    
    background-color: var(--black);
    height: 5rem;
    width: 10rem;
    margin: 0 auto;
    text-align: center;
    color: #fff;
    padding-top: 1.5rem;

    cursor: pointer;
    transition: all .2s;
    
    h1, h3 {

        color: #fff;
        font-weight: 400;
        text-align: center;
        /* padding-top: 1.5rem; */
    }

    
    
        
    &:hover {
        filter: brightness(0.8);
        transform: scale(1.1);
        box-shadow: rgb(100 100 111 / 50%) 0px 5px 5px 0px;
    }
    
`;