import Link from "next/link";
import { Container, Content } from "./styles";

export function Header() {
    return (
        // <Container>
        //     <Content>
        //         <Link legacyBehavior href='/'>
        //             <img src='/favicon.png' alt='Logo Funetech' />
        //         </Link>
        //         <nav>
        //             <Link legacyBehavior href='/'>
        //                 <a> Home </a>
        //             </Link>
        //             <Link legacyBehavior href='/sobre'>
        //                 <a> Sobre </a>
        //             </Link>
        //             <Link legacyBehavior href='/contatos'>
        //                 <a> Contatos </a>
        //             </Link>
        //         </nav>
        //         <div>
        //             <Link legacyBehavior href='/logout'>
        //                 <button>Sair</button>
        //             </Link>
        //         </div>
        //     </Content>
        // </Container>
        <Container>
        <Content>
            <Link legacyBehavior href='/'>
                <img src='/favicon.png' alt='Logo Funetech' />
            </Link>
            <div>
                <h1>FUNETECH</h1>
                <h3>Recordar é viver!</h3>
            </div>
            <Link legacyBehavior href='/logout'>
                <button>Sair</button>
            </Link>
        </Content>
    </Container>
    );
}