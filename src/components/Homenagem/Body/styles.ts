import styled from "styled-components";

export const Container = styled.main`
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
  h1,
  h3 {
    font-weight: 400;
  }
`;
