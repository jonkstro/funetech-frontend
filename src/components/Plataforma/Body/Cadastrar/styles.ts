import styled from "styled-components";

export const Container = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  height: 100%;
  margin: 0 auto;
  padding-top: 1.5rem;

  @media (max-width: 600px) {
    height: 85vh;
  }
`;

export const AuthFormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 3rem;
  width: 100%;
  border-radius: 0.25rem;
`;
export const AuthForm = styled.form`
  position: relative;
  max-width: 1160px;
  box-shadow: rgb(0 0 0 / 16%) 1px 1px 10px;
  padding-top: 30px;
  padding-bottom: 20px;
  border-radius: 8px;
  background-color: white;

  @media (max-width: 600px) {
    position: relative;
    width: 420px;
    box-shadow: rgb(0 0 0 / 16%) 1px 1px 10px;
    padding-top: 30px;
    padding-bottom: 20px;
    border-radius: 8px;
    background-color: white;
  }
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
  margin-bottom: 5rem;
  border-radius: 0.25rem;
  height: 3rem;
  width: 100%;
  transition: all 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const FileInput = styled.div`
  input[type="file"] {
    /* display: none; */
    width: 350px;
    max-width: 100%;
    color: var(--text-tile);
    padding: 5px;
    background: #fff;
    border-radius: 10px;
    /* border: 1px solid #555; */

    &::file-selector-button {
      color: #fff;
      background-color: var(--black);
      transition: all 0.2s;
    }
    &::file-selector-button:hover {
      filter: brightness(0.8);
    }
  }

  .custom-file-upload {
    border: 1px solid #ccc;
    display: inline-block;
    padding: 6px 12px;
    cursor: pointer;
  }

  .file-preview {
    margin: 0 10px;
  }
`;
