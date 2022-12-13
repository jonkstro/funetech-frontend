import { Container, Content } from "./styles";

import Link from "next/link";
import { useRouter } from "next/router";

export interface HeaderProps {
  href: string;
  texto: string;
}

export function HeaderPlataforma(props: HeaderProps) {
  const router = useRouter();

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

        <button
          style={{ width: "5rem" }}
          type="submit"
          onClick={() => {
            router.push(props.href);
          }}
        >
          {props.texto}
        </button>
      </Content>
    </Container>
  );
}
