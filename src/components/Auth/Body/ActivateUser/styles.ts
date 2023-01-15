import styled from "styled-components";

export const Container = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  height: 85vh;
  margin: 0 auto;
  padding-top: 1.5rem;

  @media (max-width: 600px) {
    height: 85vh;
  }

  h1 {
    margin-top: 5rem;
    font-weight: 400;
    text-align: center;
  }
`;
