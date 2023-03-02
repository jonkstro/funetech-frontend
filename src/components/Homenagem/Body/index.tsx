import Image from "next/dist/client/image";
import { useRouter } from "next/router";
import { ListaHomenagem } from "../../../@types/homenagem";
import { Container, Content, DivIcons } from "./styles";

import ImgNasc from "../../../assets/images/data-de-nascimento.svg";
import ImgFalec from "../../../assets/images/funeral.svg";
import CarouselPlataforma from "./Carousel";
interface ListaProps {
  homenagens: ListaHomenagem[];
}
export const Homenagem = (props: ListaProps) => {
  return (
    <Container>
      <Content>
        <h1>{props.homenagens.nome}</h1>
        <div>
          {/* <p>{props.homenagens.id}</p>
          <p>{props.homenagens.nome}</p>
          <p>{props.homenagens.biografia}</p>
          <p>{props.homenagens.memoria}</p> */}

          {/* REALIZAR A FORMATAÇÃO DO TIPO DE DATA DO BRASIL */}
          <DivIcons>
            <Image width={20} height={20} src={ImgNasc} alt={""} />
            <h3>
              {props.homenagens.cidade_nasc},
              {new Date(props.homenagens.data_nasc).toLocaleDateString()}{" "}
            </h3>
          </DivIcons>
          <DivIcons>
            <Image width={20} height={20} src={ImgFalec} alt={""} />
            <h3>
              {props.homenagens.cidade_falec},
              {new Date(props.homenagens.data_falec).toLocaleDateString()}
            </h3>
          </DivIcons>
          <CarouselPlataforma
            foto={props.homenagens.foto}
            memoria={props.homenagens.memoria}
            biografia={props.homenagens.biografia}
          />
        </div>
      </Content>
    </Container>
  );
};
