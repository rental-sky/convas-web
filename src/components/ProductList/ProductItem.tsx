import React from 'react';
import Link from 'next/link';

import { Row, Col, Card, Typography, Button, Tag } from 'antd';
import { SkeletonListContext } from '../../contexts';
import { Product } from '../../store/productStore';

const { Text, Title, Paragraph } = Typography;

interface SaleProductItemProps {
  product: Product;
}

const SaleProductItem: React.FC<SaleProductItemProps> = ({ product }) => {
  const { xl, md, sm, lg, xs } = React.useContext(SkeletonListContext);
  const {
    id,
    slug,
    name,
    regular_price,
    sale_price,
    on_sale,
    images,
    sizes,
    prices,
  } = product;

  const isTarif = !!prices;

  const featured_image = images.length > 0 ? images[0] : '';
  return (
    <Link href="/product/[...product]" as={`/product/${id}/${slug}`}>
      <Col xl={xl} lg={lg} md={md} sm={sm} xs={xs} className="centered-col">
        <Card
          hoverable
          cover={
            featured_image ? (
              <img
                alt={featured_image.alt}
                src={featured_image.src}
                style={{
                  height: '300px',
                  width: '100%',
                  objectFit: 'cover',
                }}
              />
            ) : null
          }
        >
          {isTarif ? (
            <>
              <Row>
                <Text style={{ textAlign: 'center' }} strong>
                  {name}
                </Text>
                {on_sale && !isTarif && (
                  <Button style={{ marginLeft: 10 }}>Oferta!</Button>
                )}
              </Row>
              <Row>
                {Array.isArray(sizes) ? (
                  sizes.map((size, key) => (
                    <Tag key={key + size} color="success">
                      {size}
                    </Tag>
                  ))
                ) : (
                  <Tag color="success">{sizes}</Tag>
                )}
              </Row>
              {prices.slice(0, 3).map((price, key) => (
                <Col key={key}>
                  <Row gutter={8}>
                    <Text type="secondary">{`${key + 1} Dia $${price} `}</Text>
                  </Row>
                </Col>
              ))}
              <Text
                style={{
                  fontFamily: 'monospace',
                  display: 'flex',
                  fontSize: '0.7rem',
                  textAlign: 'end',
                  color: '#1890ff',
                }}
              >
                Ver mas precios
              </Text>
            </>
          ) : (
            <div
              style={{
                gap: '2px',
                flexDirection: 'column',
                display: 'flex',
              }}
            >
              <Row>
                <Text style={{ textAlign: 'center' }} strong>
                  {name}
                </Text>
                {on_sale && !isTarif && (
                  <Button style={{ marginLeft: 10 }}>Oferta!</Button>
                )}
              </Row>
              <Text style={{ marginTop: '1rem' }} strong>
                Medidas:
              </Text>
              <Row>
                {Array.isArray(sizes) ? (
                  sizes.map((size, key) => (
                    <Tag key={key + size} color="success">
                      {size}
                    </Tag>
                  ))
                ) : (
                  <Tag color="success">{sizes}</Tag>
                )}
              </Row>

              <Text type="secondary" style={{ marginTop: '1rem' }} strong>
                Precio:
              </Text>
              <Row>
                <Text
                  delete={on_sale}
                  style={{
                    fontSize: '1.2rem',
                    fontWeight: 'bold',
                  }}
                >
                  ${regular_price}
                </Text>
                {on_sale && <Text>${sale_price}</Text>}
              </Row>
            </div>
          )}
        </Card>
      </Col>
    </Link>
  );
};

export default SaleProductItem;
