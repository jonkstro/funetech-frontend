import { useEffect } from "react";
import { useAuth } from "../../../../hooks/pages/useAuth";
import { Container } from "./styles";

interface ActivateProps {
  uid: string;
  token: string;
}

export function ActivateUser(props: ActivateProps) {
  const uid = props.uid;
  const token = props.token;
  async function handleActivateUser() {
    await activateUser({
      uid,
      token,
    });
  }
  useEffect(() => {
    handleActivateUser();
  });

  // RECEBENDO AS VARIÁVEIS DO USEAUTH
  const { activateUser } = useAuth();

  // CRIANDO VARIÁVEIS QUE VIRÃO DO PAGE PARA O FORM

  // console.log('UID: '+uid);
  // console.log('TOK: '+token);
  // CRIAR FUNÇÃO QUE ENVIARÁ OS DADOS PARA A USEAUTH

  return (
    <Container>
      <h1>Parabéns sua conta foi ativada com sucesso!!!</h1>
      <br />
      <h1>Você já pode voltar para tela de login e acessar a plataforma.</h1>
    </Container>
  );
}
