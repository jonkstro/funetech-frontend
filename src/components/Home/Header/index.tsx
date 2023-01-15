import Link from "next/link";
import { Container, Content } from "./styles";

export function Header() {
  return (
    <Container>
      <Content>
        <Link legacyBehavior href="/">
          <img src="/favicon.png" alt="Logo Funetech" />
        </Link>
        <nav>
          <Link legacyBehavior href="/">
            <a> Home </a>
          </Link>
          <Link legacyBehavior href="/sobre/">
            <a> Sobre </a>
          </Link>
          <Link legacyBehavior href="/contatos/">
            <a> Contatos </a>
          </Link>
        </nav>
        <div>
          <Link legacyBehavior href="/auth/">
            <button>Entrar / Criar Conta</button>
          </Link>
          {/* <Link legacyBehavior href='/auth'>
                        <button>Criar Conta</button>
                    </Link> */}
        </div>
      </Content>
    </Container>
  );
}
