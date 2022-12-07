import Image from "next/image";
import { Container, Content } from "./styles";

import ImgLogo from "../../../assets/images/logo.png";
import Link from "next/link";
import { useAuth } from "../../../hooks/pages/useAuth";
import { useRouter } from "next/router";

export function Header() {
    
    const {
        logoutUser
    } = useAuth();

    async function handleLogoutUser() {
        await logoutUser();
    }

    return (
        <Container>
            <Content>
                <Link legacyBehavior href='/'>
                    <img src='/favicon.png' alt='Logo Funetech' />
                </Link>
                <div>
                    <h1>FUNETECH</h1>
                    <h3>Recordar é viver!</h3>
                </div>
                
                <button 
                    style={{width: '5rem'}} 
                    type="submit"
                    onClick={()=>{
                        handleLogoutUser();
                    }}
                >SAIR</button>
                
            </Content>
        </Container>
    );
}