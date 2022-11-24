import Image from "next/image";
import CarouselHome from "./Carousel";
import { Card, Container, Content } from "./styles";

import ImgCard1 from '../../../assets/images/card1.jpg';

export function Body() {
    return (
        <>
        {/* <Container>
            <h1>Bem vindo à Funetech!!</h1>
        </Container> */}
        <Container>    
            <h1>Temos o que você precisa!</h1>
            <Content>
                <Card>
                    <div style={{borderRadius: '1rem', overflow: 'hidden', width: '10rem', height: '10rem', margin: '0 auto' }}>
                        <Image height={200} src={ImgCard1} alt={"Pessoas dançando em uma festa"} objectFit="cover" />
                    </div>
                    <h1>Relembre seus amigos</h1>
                    <br />
                    <p>Relembre os melhores momentos que teve com seus amigos</p>
                </Card>
                <Card>
                    <div style={{borderRadius: '1rem', overflow: 'hidden', width: '10rem', height: '10rem', margin: '0 auto' }}>
                        <Image height={200} src={ImgCard1} alt={"Pessoas dançando em uma festa"} objectFit="cover" />
                    </div>
                    <h1>Relembre seus amigos</h1>
                    <br />
                    <p>Relembre os melhores momentos que teve com seus amigos</p>
                </Card>
                <Card>
                    <div style={{borderRadius: '1rem', overflow: 'hidden', width: '10rem', height: '10rem', margin: '0 auto' }}>
                        <Image height={200} src={ImgCard1} alt={"Pessoas dançando em uma festa"} objectFit="cover" />
                    </div>
                    <h1>Relembre seus amigos</h1>
                    <br />
                    <p>Relembre os melhores momentos que teve com seus amigos</p>
                </Card>
                <Card>
                    <div style={{borderRadius: '1rem', overflow: 'hidden', width: '10rem', height: '10rem', margin: '0 auto' }}>
                        <Image height={200} src={ImgCard1} alt={"Pessoas dançando em uma festa"} objectFit="cover" />
                    </div>
                    <h1>Relembre seus amigos</h1>
                    <br />
                    <p>Relembre os melhores momentos que teve com seus amigos</p>
                </Card>
                <Card>
                    <div style={{borderRadius: '1rem', overflow: 'hidden', width: '10rem', height: '10rem', margin: '0 auto' }}>
                        <Image height={200} src={ImgCard1} alt={"Pessoas dançando em uma festa"} objectFit="cover" />
                    </div>
                    <h1>Relembre seus amigos</h1>
                    <br />
                    <p>Relembre os melhores momentos que teve com seus amigos</p>
                </Card>
                
                
            </Content>


            <h1 style={{marginTop: '2rem'}}>Modelo de homenagem:</h1>

            <CarouselHome/>

        </Container>
        </>
    );
}