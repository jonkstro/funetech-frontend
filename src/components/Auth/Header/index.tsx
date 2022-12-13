import Image from "next/image";
import { Container, Content } from "./styles";

import ImgLogo from "../../../assets/images/logo.png";
import Link from "next/link";

export function Header() {
  return (
    <Container>
      <Content>
        <Link legacyBehavior href="/">
          <img src="/favicon.png" alt="Logo Funetech" />
        </Link>
        <div>
          <h1>FUNETECH</h1>
          <h3>Recordar é viver!</h3>
        </div>
      </Content>
    </Container>
  );
}
