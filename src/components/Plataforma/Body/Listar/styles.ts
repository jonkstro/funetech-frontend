import styled from "styled-components";

export const Container = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  height: 85vh;
  margin: 0 auto;
  padding-top: 1.5rem;
  text-align: center;
  @media (max-width: 600px) {
    height: 85vh;
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
  transition: all 0.2s;

  h1,
  h3 {
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

export const Lista = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  max-width: 1160px;
  text-align: center;
  margin: 5rem auto;
  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
