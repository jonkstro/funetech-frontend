import Link from "next/link";
import { Content, FooterPlanos } from "./styles";

import ImgCheck from "../../../assets/images/check.png";
import Image from "next/image";

export function Footer() {
    return (
        <FooterPlanos>
            <Content>
                <Link style={{ textDecoration: 'none' }} href={""}>
                    <div>
                        <h3>
                            Conheça nossos planos!!
                        </h3>
                    </div>
                </Link>
                <div>
                    <Image width={20} src={ImgCheck} alt={"imagem de icone de checkbox"} />
                    <h3>
                        Planos Customizáveis
                    </h3>
                </div>
                <div>
                    <Image width={20} src={ImgCheck} alt={"imagem de icone de checkbox"} />
                    <h3>
                        Seus dados seguros
                    </h3>
                </div>
                <div>
                    <Image width={20} src={ImgCheck} alt={"imagem de icone de checkbox"} />
                    <h3>
                        Sem propragandas
                    </h3>
                </div>

            </Content>
        </FooterPlanos>
    );
}