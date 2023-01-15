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
`;
