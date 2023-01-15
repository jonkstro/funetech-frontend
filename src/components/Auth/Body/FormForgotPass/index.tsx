import { FormEvent, useState } from "react";
import {
  AuthForm,
  AuthFormContainer,
  AuthFormContent,
  Container,
  SubmitButton,
} from "./styles";
import { Grid, IconButton } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useAuth } from "../../../../hooks/pages/useAuth";

import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useRouter } from "next/router";

interface ForgetProps {
  uid: string;
  token: string;
}

export function FormForgotPass(props: ForgetProps) {
  // RECEBENDO AS VARIÁVEIS DO USEAUTH
  const {
    password,
    setPassword,
    confPassword,
    setConfPassword,
    lowerValidated,
    upperValidated,
    numberValidated,
    specialValidated,
    lengthValidated,
    handleValidation,
    resetPassword,
  } = useAuth();

  // criando as variáveis de estado
  const [typePas, setTypePas] = useState("password");
  const [typeConf, setTypeConf] = useState("password");

  // CRIANDO VARIÁVEIS QUE VIRÃO DO PAGE PARA O FORM
  const uid = String(props.uid);
  const token = String(props.token);
  const new_password = password;

  function handleChangeType() {
    setTypePas(typePas === "password" ? "text" : "password");
  }
  function handleChangeTypeConf() {
    setTypeConf(typeConf === "password" ? "text" : "password");
  }

  // CRIAR A FUNÇÃO QUE ENVIARÁ OS DADOS PARA O USEAUTH QUE IRÁ CHAMAR A API:
  async function handleResetPassword() {
    await resetPassword({
      uid,
      token,
      new_password,
    });
  }

  return (
    <Container>
      <AuthFormContainer>
        <AuthForm
          onSubmit={(e) => {
            e.preventDefault();
            handleResetPassword();
          }}
        >
          <AuthFormContent>
            <h3 className="Auth-form-title">Alterar senha</h3>
            <Grid container spacing={0}>
              <div>
                <Grid item xs={12}>
                  <TextField
                    margin="dense"
                    name="password"
                    id="password"
                    label="Senha"
                    type={typePas}
                    fullWidth
                    variant="standard"
                    placeholder="Senha do Usuário: "
                    // passando valores para o input
                    value={password}
                    onChange={(event) => {
                      setPassword(event.target.value);
                      handleValidation(event.target.value);
                      // console.log(event.target.value);
                    }}
                  />
                </Grid>
                {typePas === "password" ? (
                  <VisibilityIcon
                    onClick={() => {
                      handleChangeType();
                    }}
                  />
                ) : (
                  <VisibilityOffIcon
                    onClick={() => {
                      handleChangeType();
                    }}
                  />
                )}
              </div>
              <p
                className={
                  lengthValidated
                    ? "validationMessageOk"
                    : "validationMessageError"
                }
              >
                Sua senha deve conter ao menos 8 caracteres
              </p>
              <p
                className={
                  upperValidated
                    ? "validationMessageOk"
                    : "validationMessageError"
                }
              >
                Sua senha deve conter ao menos uma letra maiúscula
              </p>
              <p
                className={
                  lowerValidated
                    ? "validationMessageOk"
                    : "validationMessageError"
                }
              >
                Sua senha deve conter ao menos uma letra minúscula
              </p>
              <p
                className={
                  numberValidated
                    ? "validationMessageOk"
                    : "validationMessageError"
                }
              >
                Sua senha deve conter ao menos um número
              </p>
              <p
                className={
                  specialValidated
                    ? "validationMessageOk"
                    : "validationMessageError"
                }
              >
                Sua senha deve conter ao menos um caractere especial
              </p>

              <div>
                <Grid item xs={12}>
                  <TextField
                    margin="dense"
                    name="confirm_password"
                    id="confirm_password"
                    label="Senha"
                    type={typeConf}
                    fullWidth
                    variant="standard"
                    placeholder="Repita a senha do Usuário: "
                    // passando valores para o input
                    value={confPassword}
                    onChange={(event) => {
                      setConfPassword(event.target.value);
                      // console.log(event.target.value);
                    }}
                  />
                </Grid>
                {typeConf === "password" ? (
                  <VisibilityIcon
                    onClick={() => {
                      handleChangeTypeConf();
                    }}
                  />
                ) : (
                  <VisibilityOffIcon
                    onClick={() => {
                      handleChangeTypeConf();
                    }}
                  />
                )}
              </div>

              <Grid item xs={12}>
                <SubmitButton type="submit">Alterar senha</SubmitButton>
              </Grid>
            </Grid>
          </AuthFormContent>
        </AuthForm>
      </AuthFormContainer>
    </Container>
  );
}
