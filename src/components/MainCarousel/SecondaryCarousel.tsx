import { Carousel, Row } from 'antd';
import styled from 'styled-components';

const CarouselWrapper = styled(Carousel)`
  > .slick-dots li button {
    width: 18px;
    height: 18px;
    margin-left: 8px;
    margin-right: 8px;
    background-color: black;
    border-width: 1px;
    border-color: white;
    border-radius: 100%;
  }
  > .slick-dots li.slick-active button {
    width: 20px;
    height: 20px;
    border-radius: 100%;
    background: '#fff';
    border-color: black;
    border-width: 2px;
  }
`;

const images = Array.from(
  { length: 22 },
  (_, index) => `/images/${index + 1}.JPG`
);

const BlurBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(5px);
`;

const CenteredImage = styled.img`
  display: block;
  margin: auto;
  max-width: 100%;
  max-height: 100%;
  height: 500px;
`;

const SecondaryCarousel = () => {
  return (
    <CarouselWrapper
      autoplay
      style={{
        height: '500px',
      }}
    >
      {images.map((image, index) => (
        <div key={index}>
          <CenteredImage src={image} />
        </div>
      ))}
    </CarouselWrapper>
  );
};

export default SecondaryCarousel;
