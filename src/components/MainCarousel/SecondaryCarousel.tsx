import { Carousel } from 'antd';
import styled from 'styled-components';

const CarouselWrapper = styled(Carousel)`
  > .slick-dots li button {
    width: 16px;
    height: 16px;
    margin-left: 8px;
    margin-right: 8px;
    background-color: black;
    border-width: 1px;
    border-color: white;
    border-radius: 100%;
  }
  > .slick-dots li.slick-active button {
    width: 16px;
    height: 16px;
    border-radius: 100%;
    background: '#fff';
    border-color: black;
    border-width: 2px;
  }

  @media (max-width: 768px) {
    > .slick-dots li button {
      width: 1px;
      height: 1px;
      margin-left: 1px;
      margin-right: 1px;
      background-color: black;
      border-width: 1px;
      border-color: white;
      border-radius: 100%;
    }
    > .slick-dots li.slick-active button {
      width: 1px;
      height: 1px;
      border-radius: 100%;
      background: '#fff';
      border-color: black;
      border-width: 2px;
    }
  }
`;

const images = Array.from(
  { length: 22 },
  (_, index) => `/images/${index + 1}.JPG`
);

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
          <CenteredImage
            src={image}
            style={{
              objectFit: 'cover',
            }}
          />
        </div>
      ))}
    </CarouselWrapper>
  );
};

export default SecondaryCarousel;
