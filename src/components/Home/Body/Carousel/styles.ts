import styled from "styled-components";

export const Container = styled.section`
    align-items: center;
    justify-content: center;
    width: 50%;
    margin: 0 auto;
    padding-top: 1rem;
`;

export const CarouselStyle = styled.div`
/* CONFIGURAR O CAROUSEL */

    .carousel.carousel-slider {
        overflow: inherit;
        /* overflow: scroll; */
        }
    
        .carousel .control-next.control-arrow, .carousel .control-next.control-arrow:hover{
            background-color: transparent;
            right: -100px;
        }
        
        .carousel .control-prev.control-arrow, .carousel .control-prev.control-arrow:hover {
            background-color: transparent;
            left: -100px;
        }
    
        .carousel .control-arrow, .carousel.carousel-slider .control-arrow{
            opacity: 1;
        }
    
        .carousel .control-next.control-arrow:before {
            content: '';
            border: solid var(--black);
            border-width: 0 8px 8px 0;
            display: inline-block;
            padding: 14px;
            transform: rotate(-45deg);
            -webkit-transform: rotate(-45deg);
        }
        
        .carousel .control-prev.control-arrow:before {
            content: '';
            border: solid var(--black);
            border-width: 0 8px 8px 0;
            display: inline-block;
            padding: 14px;
            transform: rotate(135deg);
            -webkit-transform: rotate(135deg);
        }
    
        .carousel .control-dots .dot {
            position: relative;
            background-color: var(--black);
        }
        .carousel .control-dots {
            margin: -1rem 0;
        }
        
`; 