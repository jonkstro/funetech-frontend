import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { Grid, TextField } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAuth } from "../../../../hooks/pages/useAuth";
import { usePlataforma } from "../../../../hooks/pages/usePlataforma";
import {
  AuthForm,
  AuthFormContainer,
  AuthFormContent,
  Container,
  FileInput,
  SubmitButton,
} from "./styles";

export function Cadastrar() {
  // RECEBENDO AS VARIÁVEIS DO USEPLATAFORMA
  const {
    nome,
    setNome,
    dataNasc,
    setDataNasc,
    cidadeNasc,
    setCidadeNasc,
    dataFalec,
    setDataFalec,
    cidadeFalec,
    setCidadeFalec,
    memoria,
    setMemoria,
    biografia,
    setBiografia,
    foto,
    setFoto,
    cadastrarHomenagem,
  } = usePlataforma();

  const { getUserData, id } = useAuth();


  // QUANDO CARREGAR A PÁGINA, IRÁ RODAR O USEEFFECT
  useEffect(() => {
    getUserData();
  }, []);

  // FUNÇÃO QUE IRÁ SETAR O ARQUIVO DE FOTO ENVIADO PARA VARIAVEL
  const uploadFoto = (event: FileList | null) => {
    if (event) {
      const i = event[0];
      setFoto(i);
    }
  };

  // FUNÇÃO QUE IRÁ ENVIAR OS DADOS PARA O USEPLATAFORMA
  async function handleCadastrarHomenagem() {
    const data_nasc = dataNasc;
    const cidade_nasc = cidadeNasc;
    const data_falec = dataFalec;
    const cidade_falec = cidadeFalec;
    const user = Number(id);

    await cadastrarHomenagem({
      nome,
      data_nasc,
      cidade_nasc,
      data_falec,
      cidade_falec,
      memoria,
      biografia,
      foto,
      user,
    });
  }

  return (
    <Container>
      <AuthFormContainer>
        <AuthForm
          name="cadastrar"
          onSubmit={(e) => {
            e.preventDefault();
            handleCadastrarHomenagem();
          }}
        >
          <AuthFormContent>
            <h3 className="Auth-form-title">Cadastrar nova homenagem</h3>
            <Grid container spacing={0}>
              <Grid item xs={12}>
                <TextField
                  margin="dense"
                  name="nome"
                  id="nome"
                  label="Nome Completo"
                  type="text"
                  fullWidth
                  variant="standard"
                  placeholder="Nome Completo: "
                  // passando valores para o input
                  value={nome}
                  onChange={(event) => {
                    setNome(event.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={6} style={{ padding: "0 1rem 0 0" }}>
                <TextField
                  InputLabelProps={{ shrink: true }}
                  margin="dense"
                  name="dataNasc"
                  id="dataNasc"
                  label="Data de Nascimento"
                  type="date"
                  fullWidth
                  variant="standard"
                  placeholder="Data de Nascimento: "
                  // passando valores para o input
                  value={dataNasc}
                  onChange={(event) => {
                    setDataNasc(event.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={6} style={{ padding: "0 0 0 1rem" }}>
                <TextField
                  InputLabelProps={{ shrink: true }}
                  margin="dense"
                  name="dataFalec"
                  id="dataFalec"
                  label="Data de Falecimento"
                  type="date"
                  fullWidth
                  variant="standard"
                  placeholder="Data de Nascimento: "
                  // passando valores para o input
                  value={dataFalec}
                  onChange={(event) => {
                    setDataFalec(event.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  margin="dense"
                  name="cidadeNasc"
                  id="cidadeNasc"
                  label="Cidade de Nascimento"
                  type="text"
                  fullWidth
                  variant="standard"
                  placeholder="Cidade de Nascimento: "
                  // passando valores para o input
                  value={cidadeNasc}
                  onChange={(event) => {
                    setCidadeNasc(event.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  margin="dense"
                  name="cidadeFalec"
                  id="cidadeFalec"
                  label="Cidade de Falecimento"
                  type="text"
                  fullWidth
                  variant="standard"
                  placeholder="Cidade de Falecimento: "
                  // passando valores para o input
                  value={cidadeFalec}
                  onChange={(event) => {
                    setCidadeFalec(event.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  margin="dense"
                  name="memoria"
                  id="memoria"
                  label="Frase Memorial"
                  type="text"
                  multiline
                  rows={2}
                  fullWidth
                  variant="standard"
                  placeholder="Frase Memorial: "
                  // passando valores para o input
                  value={memoria}
                  onChange={(event) => {
                    setMemoria(event.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  margin="dense"
                  name="biografia"
                  id="biografia"
                  label="Texto de Biografia"
                  type="text"
                  multiline
                  rows={8}
                  fullWidth
                  variant="standard"
                  placeholder="Texto de Biografia: "
                  // passando valores para o input
                  value={biografia}
                  onChange={(event) => {
                    setBiografia(event.target.value);
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <FileInput>
                  <input
                    type="file"
                    name="myImage"
                    accept="image/*"
                    onChange={(event) => {
                      uploadFoto(event.target.files);
                    }}
                  />
                  {/* <p>teste{foto}</p> */}
                </FileInput>
              </Grid>

              <Grid item xs={12}>
                <SubmitButton type="submit">Cadastrar Homenagem</SubmitButton>
              </Grid>
            </Grid>
          </AuthFormContent>
        </AuthForm>
      </AuthFormContainer>
    </Container>
  );
}
