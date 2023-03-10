import styled from "styled-components";

export const Container = styled.section`
  align-items: center;
  justify-content: center;
  width: 30%;
  height: 100%;
  margin: 0 auto;
  padding-top: 1rem;
  margin-bottom: 11rem;
  @media (max-width: 800px) {
    width: 95%;
    
  }

  h1 {
    margin-top: 3rem;
    font-size: 3rem;
    font-weight: 600;
  }

  p {
    color: var(--black);
    margin-top: 3rem;
    text-align: justify;
  }
  `;

export const CarouselStyle = styled.div`
  /* CONFIGURAR O CAROUSEL */
  margin-bottom: 10rem;

  .carousel.carousel-slider {
    overflow: inherit;
    /* overflow: scroll; */
  }

  .carousel .control-next.control-arrow,
  .carousel .control-next.control-arrow:hover {
    background-color: transparent;
    right: -100px;
  }

  .carousel .control-prev.control-arrow,
  .carousel .control-prev.control-arrow:hover {
    background-color: transparent;
    left: -100px;
  }

  .carousel .control-arrow,
  .carousel.carousel-slider .control-arrow {
    opacity: 1;
  }
  @media (max-width: 800px) {
    .carousel.carousel-slider .control-arrow {
      opacity: 0;
    }
    width: 95%;
    /* height: 100%; */
  }
  .carousel .control-next.control-arrow:before {
    content: "";
    border: solid var(--black);
    border-width: 0 8px 8px 0;
    display: inline-block;
    padding: 14px;
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
  }

  .carousel .control-prev.control-arrow:before {
    content: "";
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

  @media (max-width: 600px) {
    .carousel .control-next.control-arrow:before {
      content: "";
      border: solid var(--black);
      border-width: 0;
      display: inline-block;
      padding: 0;
      transform: rotate(0deg);
      -webkit-transform: rotate(0deg);
    }

    .carousel .control-prev.control-arrow:before {
      content: "";
      border: solid var(--black);
      border-width: 0;
      display: inline-block;
      padding: 0;
      transform: rotate(0deg);
      -webkit-transform: rotate(0deg);
    }

    .carousel .control-next.control-arrow,
    .carousel .control-next.control-arrow:hover {
      background-color: rgba(0, 0, 0, 0.5);
      right: -1rem;
    }

    .carousel .control-prev.control-arrow,
    .carousel .control-prev.control-arrow:hover {
      background-color: rgba(0, 0, 0, 0.5);
      left: -1rem;
    }
  }
`;

export const DivImage = styled.div`
  img {
    border-radius: 80%;
  }
`;
