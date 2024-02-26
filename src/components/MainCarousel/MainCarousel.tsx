import { Carousel } from 'antd';
import './MainCarousel.less';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
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

const MainCarousel = () => {
  return (
    <CarouselWrapper autoplay arrows>
      <div>
        <img
          src="/images/carousel-demo-images/convans.png"
          style={{
            height: '500px',
            width: '100%',
            objectFit: 'cover',
          }}
        />
      </div>
      <div>
        <img
          src="/images/carousel-demo-images/1.jpg"
          style={{
            height: '500px',
            width: '100%',
            objectFit: 'cover',
          }}
        />
      </div>
      <div>
        <img
          src="/images/carousel-demo-images/taller-2.png"
          style={{
            height: '500px',
            width: '100%',
            objectFit: 'cover',
            backgroundColor: '#ccc',
          }}
        />
      </div>
      <div>
        <img
          src="/images/carousel-demo-images/3.jpg"
          style={{
            height: '500px',
            width: '100%',
            objectFit: 'cover',
          }}
        />
      </div>
      <div>
        <img
          src="/images/carousel-demo-images/4.jpg"
          style={{
            height: '500px',
            width: '100%',
            objectFit: 'cover',
          }}
        />
      </div>
    </CarouselWrapper>
  );
};

export default MainCarousel;
