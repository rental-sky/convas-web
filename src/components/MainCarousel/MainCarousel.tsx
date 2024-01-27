import { Carousel } from 'antd';
import './MainCarousel.less';

const MainCarousel = () => {
  return (
    <Carousel autoplay>
      <div>
        <img
          src="/images/carousel-demo-images/5.jpeg"
          style={{
            height: '500px',
            width: '100%',
            backgroundImage: 'url(/images/carousel-demo-images/bg-1.jpg)',
            objectFit: 'contain',
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
          src="/images/carousel-demo-images/taller-1.jpg"
          style={{
            height: '500px',
            width: '100%',
            objectFit: 'contain',
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
