import styled from "styled-components";

export const Container = styled.header`
  padding: 1rem;
  background-color: rgba(255, 255, 255, 0.8);
`;
export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  h1,
  h3 {
    font-weight: 400;
    letter-spacing: 1px;
  }

  div {
    padding: 0 0.5rem;
    text-align: center;
  }

  img {
    cursor: pointer;
    max-width: 60px;
  }
  button {
    margin-left: 1rem;
    height: 2.5rem;
    border-radius: 3rem;
    background-color: var(--black);
    border: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 1.5rem;
    color: #fff;
    font-weight: bold;
    transition: filter 0.2s;

    svg {
      width: 25px;
      height: 25px;
    }

    img {
      width: 35px;
      height: 35px;
      border-radius: 50%;
      margin-right: 1rem;
    }

    // adicionar efeito de opacidade ao clicar no botão
    &:hover {
      filter: brightness(0.8);
    }

    // adicionar margem ao primeiro ícone
    svg:first-child {
      margin-right: 1rem;
    }

    svg.closeIcon {
      margin-left: 1rem;
    }
  }

  button {
    right: 2rem;
    position: absolute;
    display: flex;
    flex-direction: row;
  }

  @media (max-width: 600px) {
    align-items: center;
    justify-content: left;
  }
`;
