import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import ImgCarrousel1 from "../../../../assets/images/carousel/crs1.jpg";
import ImgCarrousel2 from "../../../../assets/images/carousel/crs2.jpg";
import Image from "next/image";
import { CarouselStyle, Container, DivImage } from "./styles";

interface CarouselProps {
  foto: string;
  memoria: string;
  biografia: string;
}

function CarouselPlataforma(props: CarouselProps) {
  return (
    <Container>
      <CarouselStyle>
        <Carousel
          autoPlay={false}
          infiniteLoop={true}
          interval={5000}
          showIndicators={false}
        >
          <div>
            <DivImage>
              <Image
                src={props.foto}
                height={350}
                width={200}
                alt={"foto de homenagem"}
              />
              {/* <p className="legend">Legend 1</p> */}
            </DivImage>
            <br />
            <p>{props.memoria}</p>
          </div>
          <div>
            <h1>Biografia</h1>
            <br />
            <p>{props.biografia}</p>
          </div>
        </Carousel>
      </CarouselStyle>
    </Container>
  );
}

export default CarouselPlataforma;
