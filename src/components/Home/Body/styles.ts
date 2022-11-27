import styled from "styled-components";

export const Container = styled.section`
    h1, h3 {
        color: var(--text-title);
        font-weight: 400;
        text-align: center;
    }
    padding: 1rem;
    align-items: center;
    justify-content: center;
    background-color: rgba(255,255,255, 0.8);
    
    `;

export const Content = styled.div`
    padding: 2rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    max-width: 1060px;
    gap: 2rem;
    margin: 0 auto;

    @media (max-width: 800px) {
        grid-template-columns: repeat(1, 1fr);
        /* gap: 2rem; */
    }
`;


export const Card = styled.div`

    /* opacity: 0; */
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	/* position: absolute; */
	border-radius: 1rem;
	padding: 2rem;
	box-shadow: rgba(100, 100, 111, 0.6) 0px 7px 29px 0px;
	transition: opacity 0.3s ease-in-out;
    background-color: var(--background);
    &:hover {
        animation-name: floating;
        animation-duration: 3s;
        animation-iteration-count: infinite;
        animation-timing-function: ease-in-out;
        
        @keyframes floating {
            0% { transform: translate(0,  0px); }
            50%  { transform: translate(0, 15px); }
            100%   { transform: translate(0, -0px); }   
        }
    }
    p {
        color: var(--text-title);
        text-align: center;
    }
    h1 {
        text-align: center;
    }
`;