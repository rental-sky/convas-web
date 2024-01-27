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
import { Card, Col, Row, Tag, Typography } from 'antd';

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
        src: 'https://http2.mlstatic.com/D_NQ_NP_920849-MLA54959641321_042023-O.webp',
      },
    },
  ];

  return (
    <MainLayout title="Convans Store">
      <MainCarousel />

      <div className="site-card-wrapper">
        <Row gutter={16}>
          <Col span={8}>
            <Card
              bordered={false}
              title={
                <Row align="middle">
                  <CarOutlined
                    style={{
                      fontSize: '1.5rem',
                      marginBottom: 0,
                    }}
                  />
                  <div style={{ width: '2rem' }} />
                  <Title level={4} style={{ marginBottom: 0 }}>
                    Envios
                  </Title>
                </Row>
              }
            >
              <Col>
                <Text type="secondary">
                  Hacemos el envio{' '}
                  <Tag key={'GRATIS'} color="success">
                    GRATIS
                  </Tag>
                  a cualquier parte de tierra del fuego y a cualquiera hora!
                </Text>
              </Col>
            </Card>
          </Col>
          <Col span={8}>
            <Card
              bordered={false}
              title={
                <Row align="middle">
                  <SettingOutlined
                    style={{
                      fontSize: '1.5rem',
                      marginBottom: 0,
                    }}
                  />
                  <div style={{ width: '2rem' }} />
                  <Title level={4} style={{ marginBottom: 0 }}>
                    Taller
                  </Title>
                </Row>
              }
            >
              <Text type="secondary">
                Traenos tu equipo y te lo dejamos como{' '}
                <Tag key={'GRATIS'} color="blue">
                  NUEVO
                </Tag>
              </Text>
            </Card>
          </Col>
          <Col span={8}>
            <Card
              title={
                <Row align="middle">
                  <CreditCardOutlined
                    style={{
                      fontSize: '1.5rem',
                      marginBottom: 0,
                    }}
                  />
                  <div style={{ width: '2rem' }} />
                  <Title level={4} style={{ marginBottom: 0 }}>
                    Pagos
                  </Title>
                </Row>
              }
              bordered={false}
            >
              <Text type="secondary">
                Reserva y paga online, o con transferencia bancaria. aceptamos{' '}
                <Tag key={'GRATIS'} color="green">
                  Multiples medios de pago!
                </Tag>
              </Text>
            </Card>
          </Col>
        </Row>
      </div>

      <SimpleHeading title="Ofertas" level={2} />
      <ProductListRenderer
        skeleton
        skeletonCount={4}
        products={saleProducts}
        breakpoints={{ xl: 6, lg: 6, md: 6, sm: 12, xs: 24 }}
      />

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
