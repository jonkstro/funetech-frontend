import { FormEvent, useState } from "react";
import {
  AuthForm,
  AuthFormContainer,
  AuthFormContent,
  SubmitButton,
} from "./styles";
import { Grid, IconButton } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useAuth } from "../../../../hooks/pages/useAuth";

import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useRouter } from "next/router";

export function FormAuth() {
  // RECEBENDO AS VARIÁVEIS DO USEAUTH
  const {
    // username,
    // setUsername,
    first_name,
    setName,
    email,
    setEmail,
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
    limparForm,
    cadastrarUser,
    loginUser,
  } = useAuth();

  // criando as variáveis de estado
  const [authMode, setAuthMode] = useState("signin");
  const [typePas, setTypePas] = useState("password");
  const [typeConf, setTypeConf] = useState("password");

  function changeAuthMode() {
    setAuthMode(authMode === "signin" ? "signup" : "signin");
    setTypePas("password");
    setTypeConf("password");
  }

  function handleChangeType() {
    setTypePas(typePas === "password" ? "text" : "password");
  }
  function handleChangeTypeConf() {
    setTypeConf(typeConf === "password" ? "text" : "password");
  }

  async function handleCreateUser() {
    await cadastrarUser({
      // username,
      first_name,
      email,
      password,
    });
  }

  async function handleLoginUser() {
    await loginUser({
      email,
      password,
    });
  }

  if (authMode === "signin") {
    return (
      <AuthFormContainer>
        <AuthForm
          onSubmit={(e) => {
            e.preventDefault();
            handleLoginUser();
          }}
        >
          <AuthFormContent>
            <h3 className="Auth-form-title">Logar</h3>
            <div className="text-center">
              Não tem uma conta ainda?{" "}
              <span
                className="link-primary"
                onClick={() => {
                  changeAuthMode();
                  limparForm();
                }}
              >
                Cadastrar
              </span>
            </div>
            <Grid container spacing={0}>
              <Grid item xs={12}>
                <TextField
                  margin="dense"
                  name="email"
                  id="email"
                  label="Email"
                  type="email"
                  fullWidth
                  variant="standard"
                  placeholder="Email do Usuário: "
                  // passando valores para o input
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </Grid>
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
                    onChange={(event) => setPassword(event.target.value)}
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
              <Grid item xs={12}>
                <SubmitButton>Logar</SubmitButton>
              </Grid>
            </Grid>
            <br />
            <p className="text-center mt-2">
              <a href="auth/forgot">Esqueceu sua senha?</a>
            </p>
          </AuthFormContent>
        </AuthForm>
      </AuthFormContainer>
    );
  }

  return (
    <AuthFormContainer>
      <AuthForm
        onSubmit={(e) => {
          e.preventDefault();
          handleCreateUser();
        }}
      >
        <AuthFormContent>
          <h3 className="Auth-form-title">Cadastrar</h3>
          <div className="text-center">
            Já tem uma conta cadastrada?{" "}
            <span
              className="link-primary"
              onClick={() => {
                changeAuthMode();
                limparForm();
              }}
            >
              Logar
            </span>
          </div>
          <Grid container spacing={0}>
            <Grid item xs={12}>
              <TextField
                margin="dense"
                name="nome"
                id="nome"
                label="Nome"
                type="text"
                fullWidth
                variant="standard"
                placeholder="Nome do Usuário: "
                // passando valores para o input
                value={first_name}
                onChange={(event) => setName(event.target.value)}
              />
            </Grid>
            {/* <Grid item xs={12}> 
                    <TextField
                        margin="dense"
                        name="username"
                        id="username"
                        label="Username"
                        type="text"
                        fullWidth
                        variant="standard"
                        placeholder='Username do Usuário: '
                    />
                </Grid> */}
            <Grid item xs={12}>
              <TextField
                margin="dense"
                name="email"
                id="email"
                label="Email"
                type="email"
                fullWidth
                variant="standard"
                placeholder="Email do Usuário: "
                // passando valores para o input
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                  // iremos usar o front end pra cadastrar o username
                  // com email, pra autenticação com django por email
                  // setUsername(event.target.value);
                }}
              />
            </Grid>
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
              <SubmitButton type="submit">Cadastrar</SubmitButton>
            </Grid>
          </Grid>
          <br />
          <p className="text-center mt-2">
            <a href="auth/forgot">Esqueceu sua senha?</a>
          </p>
        </AuthFormContent>
      </AuthForm>
    </AuthFormContainer>
  );
}
