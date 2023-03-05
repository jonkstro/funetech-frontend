import Image from "next/dist/client/image";
import { Homenagem, ListaHomenagem } from "../../../@types/homenagem";
import { Container, Content, DivIcons } from "./styles";

import ImgNasc from "../../../assets/images/data-de-nascimento.svg";
import ImgFalec from "../../../assets/images/funeral.svg";
import CarouselPlataforma from "./Carousel";

interface Props {
  homenagem?: Homenagem;
}

export const ShowHomenagem = (props: Props) => {
  return (
    <>
    <Container>
      <Content>
          <h1>{props.homenagem?.nome}</h1>
        <div>

          {/* REALIZAR A FORMATAÇÃO DO TIPO DE DATA DO BRASIL */}
          <DivIcons>
            <Image width={20} height={20} src={ImgNasc} alt={""} />
              <h3>
                {props.homenagem?.cidade_nasc},
                {new Date(props.homenagem?.data_nasc!).toLocaleDateString()}{" "}
              </h3>
          </DivIcons>
          <DivIcons>
            <Image width={20} height={20} src={ImgFalec} alt={""} />
              <h3>
                {props.homenagem?.cidade_falec},
                {new Date(props.homenagem?.data_falec!).toLocaleDateString()}
              </h3>
          </DivIcons>
            <CarouselPlataforma
              // foto={props.homenagem!.foto}
              memoria={props.homenagem?.memoria}
              biografia={props.homenagem?.biografia}
              foto={props.homenagem?.foto!}
            />
        </div>
      </Content>
    </Container>
  </>
  );
};
