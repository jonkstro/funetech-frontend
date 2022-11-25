import Link from "next/link";
import { Container, Content } from "./styles";

export function Header() {
    return (
        <Container>
            <Content>
                <Link legacyBehavior href='/'>
                    <img src='/favicon.png' alt='Logo meu Board' />
                </Link>
                <nav>
                    <Link legacyBehavior href='/'>
                        <a> Home </a>
                    </Link>
                    <Link legacyBehavior href='/sobre'>
                        <a> Sobre </a>
                    </Link>
                    <Link legacyBehavior href='/contatos'>
                        <a> Contatos </a>
                    </Link>
                </nav>
                <div>
                    <Link legacyBehavior href='/signin'>
                        <button>Entrar</button>
                    </Link>
                    <Link legacyBehavior href='/signup'>
                        <button>Criar Conta</button>
                    </Link>
                </div>
            </Content>
        </Container>
    );
}