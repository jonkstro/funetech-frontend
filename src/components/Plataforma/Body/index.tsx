import Link from "next/link";
import { Container, Content, Fundo } from "./styles";

export function Body() {
    return (
        <Fundo>
            <Container>
                <Link style={{ textDecoration: 'none' }} href={"/plataforma/cadastrar"}>
                    <Content>
                        <h3>Cadastrar</h3>
                    </Content>
                </Link>
                <Link style={{ textDecoration: 'none' }} href={"/plataforma/listar"}>
                    <Content>
                        <h3>Listar</h3>
                    </Content>
                </Link>
                <Link style={{ textDecoration: 'none' }} href={"/plataforma/qrcode"}>
                    <Content>
                        <h3>QR Code</h3>
                    </Content>
                </Link>
                
            </Container>
        </Fundo>
    );
}