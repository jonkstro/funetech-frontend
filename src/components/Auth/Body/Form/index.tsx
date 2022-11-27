
import { useState } from "react";
import { AuthForm, AuthFormContainer, AuthFormContent, SubmitButton } from "./styles";
import { Grid, IconButton } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useAuth } from "../../../../hooks/pages/useAuth";

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

export function FormAuth() {

  // RECEBENDO AS VARIÁVEIS DO USEAUTH
  const {
    nome,
    setNome,
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
  } = useAuth();

  // criando as variáveis de estado
  const [authMode, setAuthMode] = useState("signin");
  const [type, setType] = useState('password');
  
  function changeAuthMode() {
    setAuthMode(authMode === "signin" ? "signup" : "signin")
  }

  function limparForm() {
    setNome('');
    setEmail('');
    setPassword('');
    setConfPassword('');
  }

  function handleChangeType() {
    setType(type === 'password' ? 'text' : 'password')
  }


  if (authMode === "signin") {
    return (
      <AuthFormContainer>
        <AuthForm action="" method="POST">
          <AuthFormContent>
            <h3 className="Auth-form-title">Logar</h3>
            <div className="text-center">
              Não tem uma conta ainda?  {" "}
              <span className="link-primary" onClick={()=> {
                changeAuthMode();
                limparForm();
                }}>
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
                        placeholder='Email do Usuário: '
                        // passando valores para o input
                        value={email}
                        onChange={event => setEmail(event.target.value)}
                        />
                </Grid>
                <div>
                  <Grid item xs={12}> 
                      <TextField
                          margin="dense"
                          name="password"
                          id="password"
                          label="Senha"
                          type={type}
                          fullWidth
                          variant="standard"
                          placeholder='Senha do Usuário: '
                          // passando valores para o input
                          value={password}
                          onChange={event => setPassword(event.target.value)}
                          />
                  </Grid>
                  {type === 'password'? 
                  <VisibilityIcon onClick={()=> {
                    handleChangeType();
                  }} />
                  :<VisibilityOffIcon onClick={()=> {
                    handleChangeType();
                  }} />}
                </div>
                <Grid item xs={12}>    
                  <SubmitButton >
                    Logar
                  </SubmitButton>
                </Grid>
                
            </Grid>
          </AuthFormContent>
        </AuthForm>
      </AuthFormContainer>
    )
  }

  return (
    <AuthFormContainer>
      <AuthForm action="" method="POST">
      <AuthFormContent>
          <h3 className="Auth-form-title">Cadastrar</h3>
          <div className="text-center">
            Já tem uma conta cadastrada?{" "}
            <span className="link-primary" onClick={()=> {
              changeAuthMode();
              limparForm();
            }}>
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
                        placeholder='Nome do Usuário: '
                        // passando valores para o input
                        value={nome}
                        onChange={event => setNome(event.target.value)}
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
                        placeholder='Email do Usuário: '
                        // passando valores para o input
                        value={email}
                        onChange={event => setEmail(event.target.value)}
                        />
                </Grid>
                <div>
                  <Grid item xs={12}> 
                      <TextField
                          margin="dense"
                          name="password"
                          id="password"
                          label="Senha"
                          type={type}
                          fullWidth
                          variant="standard"
                          placeholder='Senha do Usuário: '
                          // passando valores para o input
                          value={password}
                          onChange={event => {
                            setPassword(event.target.value);
                            handleValidation(event.target.value);
                            // console.log(event.target.value);
                          }}
                          />
                  </Grid>
                  {type === 'password'? 
                  <VisibilityIcon onClick={()=> {
                    handleChangeType();
                  }} />
                  :<VisibilityOffIcon onClick={()=> {
                    handleChangeType();
                  }} />}
                </div>
                <p className={lengthValidated? 'validationMessageOk': 'validationMessageError'}>Sua senha deve conter ao menos 8 caracteres</p>
                <p className={upperValidated? 'validationMessageOk': 'validationMessageError'}>Sua senha deve conter ao menos uma letra maiúscula</p>
                <p className={lowerValidated? 'validationMessageOk': 'validationMessageError'}>Sua senha deve conter ao menos uma letra minúscula</p>
                <p className={numberValidated? 'validationMessageOk': 'validationMessageError'}>Sua senha deve conter ao menos um número</p>
                <p className={specialValidated? 'validationMessageOk': 'validationMessageError'}>Sua senha deve conter ao menos um caractere especial</p>
                
                
                
                <Grid item xs={12}> 
                    <TextField
                        margin="dense"
                        name="confirm_password"
                        id="confirm_password"
                        label="Conrirmar Senha"
                        type="password"
                        fullWidth
                        variant="standard"
                        placeholder='Repita a senha do Usuário: '
                        // passando valores para o input
                        value={confPassword}
                        onChange={event => setConfPassword(event.target.value)}
                    />
                </Grid>
                <Grid item xs={12}>    
                  <SubmitButton >
                    Cadastrar
                  </SubmitButton>
                </Grid>
                
            </Grid>
            <br />
            <p className="text-center mt-2">
              <a href="forgot">Esqueceu sua senha?</a>
            </p>
          </AuthFormContent>
      </AuthForm>
    </AuthFormContainer>
  )
}