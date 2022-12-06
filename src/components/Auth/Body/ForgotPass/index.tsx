import { Grid, TextField } from "@mui/material";
import { useState } from "react";
import { useAuth } from "../../../../hooks/pages/useAuth";
import { AuthForm, AuthFormContainer, AuthFormContent, Container, SubmitButton } from "./styles";

export function ForgotPass() {

    // RECEBENDO OS ESTADOS DAS VARIÁVEIS DO USEAUTH
    const {
        forgotPassword,
        email,
        setEmail
    } = useAuth();

    // CRIAR FUNÇÃO QUE IRÁ ENVIAR O EMAIL PARA O USEAUTH
    async function handleForgotPassword() {
        await forgotPassword({email})
    }

    return (
        <Container>
            <div>
                <h3>Preencha o seu email, enviaremos um link para que possa alterar sua senha</h3>
            </div>
            <AuthFormContainer>
                <AuthForm onSubmit={(e)=> {
                    e.preventDefault();
                    handleForgotPassword();
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
    );
}