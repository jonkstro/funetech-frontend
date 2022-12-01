import styled from "styled-components";

export const Container = styled.div`
    background-color: rgba(255,255,255, 0.8);
    height: 80vh;
    max-width: 1060px;
    width: 100%;
    margin: auto;
    padding-top: 10rem; 
    align-items: center;
    justify-content: center;
    color: var(--text-title);
    div {
        width: 50%;
        margin: 0 auto;
        text-align: center;
    }
    @media (max-width: 600px) {
        height: 85vh;
        div {
            width: 90%;
            margin: 0 auto;
            text-align: center;
        }
    }
    


`;