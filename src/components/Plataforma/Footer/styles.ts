import Image from "next/image";
import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: var(--black);
  color: var(--background);
  text-align: center;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  div {
    padding: 0.5rem;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      filter: brightness(0.8);
      transform: scale(1.1);
    }
  }
`;
