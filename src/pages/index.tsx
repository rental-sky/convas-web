import React, { useEffect } from 'react';

import MainLayout from '../components/MainLayout/MainLayout';
import MainCarousel from '../components/MainCarousel/MainCarousel';
import CategoryListRenderer from '../components/CategoryList/CategoryListRenderer';
import ProductListRenderer from '../components/ProductList/ProductListRenderer';
import SimpleHeading from '../components/SimpleHeading';
import useProductStore, { ProducStore } from '../store/productStore';
import {
  CarOutlined,
  CreditCardOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { Card, Col, Layout, Row, Tag, Typography } from 'antd';
import MainRowLayout from '../components/MainRowLayout/MainRowLayout';
import SecondaryCarousel from '../components/MainCarousel/SecondaryCarousel';

const { Text, Title } = Typography;

const Home = () => {
  const [saleProducts] = useProductStore((s: ProducStore) => [s.saleProducts]);

  // mock
  const mainCategories = [
    {
      id: 1,
      name: 'Tablas',
      slug: 'tables',
      description:
        'Tabla de snowboard de alto rendimiento para freestyle y pista.',
      parent: 0,
      count: 120,
      image: {
        id: 101,
        src: 'https://cloudfront-eu-central-1.images.arcpublishing.com/diarioas/V5A7SMGUGNI5DAGYTCXLA7L76E.jpg',
      },
    },
    {
      id: 2,
      name: 'Cascos',
      slug: 'helmets',
      description:
        'Casco de snowboard con tecnología de absorción de impactos y diseño cómodo.',
      parent: 0,
      count: 80,
      image: {
        id: 102,
        src: 'https://meollo.net/wp-content/uploads/2018/10/jessica-tuttle-613596-unsplash-1030x814.jpg',
      },
    },
    {
      id: 3,
      name: 'Botas',
      slug: 'boots',
      description:
        'Botas de snowboard con ajuste flexible y soporte óptimo para el tobillo.',
      parent: 0,
      count: 150,
      image: {
        id: 103,
        src: 'https://www.eraescola.com/wp-content/uploads/2021/06/botasdesnow.jpg',
      },
    },
    {
      id: 4,
      name: 'Antiparras',
      slug: 'googles',
      description:
        'Antiparras de alta definición con protección UV y anti-vaho.',
      parent: 0,
      count: 200,
      image: {
        id: 104,
        src: 'https://i.ibb.co/VmpKYJK/eb691b67-a5a1-476c-8539-08aeaaa7c591.jpg',
      },
    },
  ];

  const cardsData = [
    {
      icon: <CarOutlined />,
      title: 'Envios',
      content: (
        <Text type="secondary">
          Hacemos el envio{' '}
          <Tag key={'GRATIS'} color="success">
            GRATIS
          </Tag>
          a cualquier parte de tierra del fuego y a cualquiera hora!
        </Text>
      ),
    },
    {
      icon: <SettingOutlined />,
      title: 'Taller',
      content: (
        <Text type="secondary">
          Traenos tu equipo y te lo dejamos como{' '}
          <Tag key={'GRATIS'} color="blue">
            NUEVO
          </Tag>
        </Text>
      ),
    },
    {
      icon: <CreditCardOutlined />,
      title: 'Pagos',
      content: (
        <Text type="secondary">
          Reserva y paga online, o con transferencia bancaria. Aceptamos
          Multiples medios de{' '}
          <Tag key={'GRATIS'} color="green">
            pago!
          </Tag>
        </Text>
      ),
    },
  ];

  return (
    <MainLayout title="Convans Store Snowboard">
      <MainCarousel />

      <Row justify="center" className="product-list">
        {cardsData.map((card, index) => (
          <Col key={index} xs={24} md={8}>
            <Card
              bordered={false}
              title={
                <Row align="middle">
                  {card.icon}
                  <div style={{ width: '2rem' }} />
                  <Title level={4} style={{ marginBottom: 0 }}>
                    {card.title}
                  </Title>
                </Row>
              }
            >
              {card.content}
            </Card>
          </Col>
        ))}
      </Row>

      <SimpleHeading title="Ofertas" level={2} />
      <ProductListRenderer
        skeleton
        skeletonCount={4}
        products={saleProducts}
        breakpoints={{ xl: 6, lg: 6, md: 6, sm: 12, xs: 24 }}
      />

      <SimpleHeading title="Nosotros" />

      <SecondaryCarousel />

      <SimpleHeading title="Categorias" />
      <CategoryListRenderer
        categories={mainCategories}
        breakpoints={{
          xl: 8,
          lg: 8,
          md: 8,
          sm: 24,
          xs: 24,
        }}
      />
    </MainLayout>
  );
};

export default Home;
