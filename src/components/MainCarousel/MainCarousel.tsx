import { Carousel } from 'antd';
import './MainCarousel.less';

const MainCarousel = () => {
  return (
    <Carousel autoplay>
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
          src="/images/carousel-demo-images/2.jpg"
          style={{
            height: '500px',
            width: '100%',
            objectFit: 'cover',
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
