import React from 'react';
import Link from 'next/link';

import { Row, Col, Card, Typography, Button } from 'antd';
import { SkeletonListContext } from '../../contexts';
import { Product } from '../../store/productStore';
const { Text } = Typography;

interface SaleProductItemProps {
  product: Product;
}

const SaleProductItem: React.FC<SaleProductItemProps> = ({ product }) => {
  const { xl, md, sm, lg, xs } = React.useContext(SkeletonListContext);
  const { id, slug, name, regular_price, sale_price, on_sale, images } =
    product;

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
                  objectFit: 'contain',
                }}
              />
            ) : null
          }
        >
          <Row>
            <Text style={{ textAlign: 'center' }} strong>
              {name}
            </Text>
            {on_sale && <Button style={{ marginLeft: 10 }}>Sale!</Button>}
          </Row>
          <Row>
            <Text type="secondary" delete={on_sale}>
              {`$${regular_price}`}
            </Text>
            {on_sale && (
              <Text style={{ marginLeft: 15 }}>{`$${sale_price}`}</Text>
            )}
          </Row>
        </Card>
      </Col>
    </Link>
  );
};

export default SaleProductItem;
