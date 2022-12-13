import styled from "styled-components";

export const Container = styled.header`
  height: 6rem;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 1rem;
`;

export const Content = styled.div`
  max-width: 1120px;
  height: 6rem;
  margin: 0 auto;
  display: flex;
  align-items: center;

  a {
    text-decoration: none;
  }

  img {
    cursor: pointer;
    max-width: 60px;
  }
  nav {
    margin-left: 5rem;
    height: 5rem;

    a {
      display: inline-block;
      position: relative;
      padding: 0 0.5rem;
      height: 5rem;
      line-height: 5rem;
      color: var(--text-title);
      text-decoration: none;
      transition: all 0.5s;

      // & + a = aplicar somente no segundo item pra frente, excluindo o primeiro
      & + a {
        margin-left: 2rem;
      }

      // adicionar efeito de opacidade ao clicar no botão
      &:hover {
        filter: brightness(0);
      }

      // em telas pequenas não aparecerão os links do navbar
      @media (max-width: 600px) {
        display: none;
      }
    }
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

  div {
    margin-left: auto;
    display: flex;
    flex-direction: row;
  }
`;
