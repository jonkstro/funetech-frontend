import Link from "next/link";
import { Homenagem, ListaHomenagem } from "../../../../@types/homenagem";
import { usePlataforma } from "../../../../hooks/pages/usePlataforma";
import { Lista } from "./styles";
import { Container, Content } from "./styles";

interface ListaProps {
  homenagens: ListaHomenagem[];
}

export const Listar = (props: ListaProps) => {
  return (
    <Container>
      <h1>SELECIONE QUAL HOMENAGEM DESEJA ABRIR:</h1>
      {props.homenagens.length > 0 ? (
        <Lista>
          {props.homenagens.map((homenagem) => (
            <Link
              key={homenagem.id}
              style={{ textDecoration: "none" }}
              href={"/plataforma/listar/homenagem?id=" + homenagem.id}
            >
              <Content>
                <h3>{homenagem.nome}</h3>
              </Content>
            </Link>
          ))}
        </Lista>
      ) : (
        <h1 style={{ color: "red" }}>Nenhum item cadastrado ainda</h1>
      )}
    </Container>
  );
};
