
import { FormEvent, useState } from "react";
import { AuthForm, AuthFormContainer, AuthFormContent, Container, SubmitButton } from "./styles";
import { Grid, IconButton } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useAuth } from "../../../../hooks/pages/useAuth";

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useRouter } from "next/router";

export function FormForgotPass() {

  // RECEBENDO AS VARIÁVEIS DO USEAUTH
  const {
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
  const [typePas, setTypePas] = useState('password');
  const [typeConf, setTypeConf] = useState('password');

  const router = useRouter()
  const { pid } = router.query

  console.log("qr: "+pid);

  function handleChangeType() {
    setTypePas(typePas === 'password' ? 'text' : 'password');
  }
  function handleChangeTypeConf() {
    setTypeConf(typeConf === 'password' ? 'text' : 'password');
  }

  return (
    <Container>
      <AuthFormContainer>
        <AuthForm onSubmit={(e)=> {
          e.preventDefault();
        }}>
        <AuthFormContent>
            <h3 className="Auth-form-title">Alterar senha</h3>
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
                          onChange={event => {
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
                    {typePas === 'password'? 
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
                            placeholder='Repita a senha do Usuário: '
                            // passando valores para o input
                            value={confPassword}
                            onChange={event => {
                              setConfPassword(event.target.value);
                              // console.log(event.target.value);
                            }}
                            />
                    </Grid>
                    {typeConf === 'password'? 
                    <VisibilityIcon onClick={()=> {
                      handleChangeTypeConf();
                    }} />
                    :<VisibilityOffIcon onClick={()=> {
                      handleChangeTypeConf();
                    }} />}
                  </div>
      
                  
                  <Grid item xs={12}>    
                    <SubmitButton type="submit">
                      Alterar senha
                    </SubmitButton>
                  </Grid>
                  
              </Grid>
            </AuthFormContent>
        </AuthForm>
      </AuthFormContainer>
    </Container>
  )
}