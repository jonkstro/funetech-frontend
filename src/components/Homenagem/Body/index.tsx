import Image from "next/dist/client/image";
import { useRouter } from "next/router";
import { ListaHomenagem } from "../../../@types/homenagem";
import { Container, Content } from "./styles";

interface ListaProps {
  homenagens: ListaHomenagem[];
}
export const Homenagem = (props: ListaProps) => {
  return (
    <Container>
      <Content>
        <h1>{props.homenagens.nome}</h1>
        <h3>id </h3>

        <div>
          <p>{props.homenagens.id}</p>
          <p>{props.homenagens.nome}</p>
          <p>{props.homenagens.biografia}</p>
          <p>{props.homenagens.memoria}</p>
          <p>{props.homenagens.data_falec}</p>
          <p>{props.homenagens.data_nasc}</p>
        </div>
        <Image
          src={props.homenagens.foto}
          height={300}
          width={300}
          alt={"foto de homenagem"}
        />
      </Content>
    </Container>
  );
};
