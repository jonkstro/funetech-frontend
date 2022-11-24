import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import ImgCarrousel1 from '../../../../assets/images/carousel/crs1.jpg';
import ImgCarrousel2 from '../../../../assets/images/carousel/crs2.jpg';
import Image from 'next/image';
import { CarouselStyle, Container } from './styles';


class CarouselHome extends Component {
    render() {
        return (
            <Container>
                <CarouselStyle>
                    <Carousel
                        autoPlay={true}
                        infiniteLoop={true}
                        interval={5000}
                        showIndicators={true}
                        
                        >
                        <div>
                            <Image height={400} src={ImgCarrousel1} alt={'Demonstração de homenagem'} />
                            {/* <p className="legend">Legend 1</p> */}
                        </div>
                        <div>
                            <Image height={400} src={ImgCarrousel2} alt={'Demonstração de homenagem'} />
                            {/* <p className="legend">Legend 2</p> */}
                        </div>
                    </Carousel>
                </CarouselStyle>
            </Container>
        );
    }
};

// ReactDOM.render(<CarouselHome />, document.querySelector('.demo-carousel'));
export default CarouselHome;
