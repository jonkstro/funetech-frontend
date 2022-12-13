import styled from "styled-components";

export const Container = styled.main`
  background-color: rgba(255, 255, 255, 0.8);
  height: 100vh;
  margin: 0 auto;
  padding: 0.5rem;
  text-align: center;
  @media (max-width: 600px) {
    height: 100vh;
  }
`;

export const Content = styled.div`
  h1,
  h3 {
    font-weight: 400;
    color: var(--text-title);
  }

`;

export const DivIcons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  h3 {
    margin-left: 0.5rem;
  }
`;

