import styled from "styled-components";

export const FooterPlanos = styled.div`
  position: relative;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: var(--green);
  height: 4rem;
  @media (max-width: 600px) {
    height: 7rem;
  }
`;

export const Content = styled.div`
  align-items: center;
  max-width: 1060px;
  margin: 0 auto;
  padding-top: 1rem;
  text-align: center;
  justify-content: space-around;
  display: flex;
  flex-direction: row;

  @media (max-width: 600px) {
    padding: 0.5rem 0;
    height: 7rem;
    align-items: center;
    text-align: center;
    justify-content: space-around;
    display: block;
    flex-direction: row;
  }

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  h3 {
    font-weight: 400;
    color: #fff;
    padding-left: 1rem;
  }
`;
