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
    <>
    <Container>
      <Content>
        {props.homenagens.map((homenagem) => (
          <h1>{homenagem.nome}</h1>
        ))}
        <div>

          {/* REALIZAR A FORMATAÇÃO DO TIPO DE DATA DO BRASIL */}
          <DivIcons>
            <Image width={20} height={20} src={ImgNasc} alt={""} />
            {props.homenagens.map((homenagem) => (
              <h3>
                {homenagem.cidade_nasc},
                {new Date(homenagem.data_nasc).toLocaleDateString()}{" "}
              </h3>
            ))}
          </DivIcons>
          <DivIcons>
            <Image width={20} height={20} src={ImgFalec} alt={""} />
            {props.homenagens.map((homenagem) => (
              <h3>
                {homenagem.cidade_falec},
                {new Date(homenagem.data_falec).toLocaleDateString()}
              </h3>
            ))}
          </DivIcons>
          {props.homenagens.map((homenagem) => (
            <CarouselPlataforma
              foto={homenagem.foto!}
              memoria={homenagem.memoria}
              biografia={homenagem.biografia}
            />
          ))}
        </div>
      </Content>
    </Container>
  </>
  );
};
