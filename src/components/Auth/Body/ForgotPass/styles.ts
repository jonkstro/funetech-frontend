import styled from "styled-components";

export const Container = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  height: 85vh;
  width: 100%;
  margin: auto;
  padding-top: 5rem;
  align-items: center;
  justify-content: center;
  color: var(--text-title);
  div {
    width: 100%;
    /* margin: 1rem auto; */
    text-align: center;
  }
  @media (max-width: 600px) {
    height: 85vh;
    div {
      width: 90%;
      margin: 0.5rem auto;
      text-align: center;
    }
  }
`;

export const AuthFormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
  width: 100%;
  border-radius: 0.25rem;
`;
export const AuthForm = styled.form`
  position: relative;
  width: 420px;
  box-shadow: rgb(0 0 0 / 16%) 1px 1px 10px;
  padding-top: 30px;
  padding-bottom: 20px;
  border-radius: 8px;
  background-color: white;
`;

export const AuthFormContent = styled.div`
  padding-left: 12%;
  padding-right: 12%;

  span {
    cursor: pointer;
    color: var(--black);
    font-weight: 600;
    text-decoration: underline;
  }

  label {
    font-size: 1rem;
  }

  input {
    font-size: 1rem;
  }

  div {
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;

    svg {
      transition: all 0.2s;
      cursor: pointer;

      &:hover {
        filter: brightness(0.9);
        transform: scale(1.1);
      }
    }
  }

  .validationMessageOk {
    font-size: 0.8rem;
    color: var(--green);
  }

  .validationMessageError {
    font-size: 0.8rem;
    color: var(--red);
  }
`;

export const AuthFormTitle = styled.div`
  text-align: center;
  margin-bottom: 1em;
  font-size: 2rem;
  color: rgb(34, 34, 34);
  font-weight: 800;
`;

export const SubmitButton = styled.button`
  font-size: 1.2rem;
  color: #fff;
  background: var(--black);
  border: 0;
  margin-top: 1rem;
  border-radius: 0.25rem;
  height: 3rem;
  width: 100%;
  transition: all 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;
