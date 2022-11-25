import Image from "next/image";
import { Container, Content } from "./styles";

import ImgLogo from "../../../assets/images/logo.png";

export function Header() {
    return (
        <Container>
            <Content>
                <Image
                    width={40}
                    height={40}
                    src={ImgLogo} 
                    alt={"Logo da empresa"} 
                />
                <div>
                    <h1>FUNETECH</h1>
                    <h3>Recordar é viver!</h3>
                </div>
            </Content>
        </Container>
    );
}