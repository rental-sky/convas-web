import { Carousel } from 'antd';
import './MainCarousel.less';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

const MainCarousel = () => {
  return (
    <Carousel
      autoplay
      arrows
      nextArrow={<LeftOutlined />}
      prevArrow={<RightOutlined />}
    >
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
    </Carousel>
  );
};

export default MainCarousel;
