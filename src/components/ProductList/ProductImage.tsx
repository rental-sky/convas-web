import React from 'react';

import { Col, Card } from 'antd';
import { SkeletonListContext } from '../../contexts';
import { ProductImage as ProductImageType } from '../../store/productStore';

const ProductImage = ({ product }: { product: ProductImageType }) => {
  const { xl, md, sm, lg, xs } = React.useContext(SkeletonListContext);
  const { alt, src } = product;

  return (
    <Col xl={xl} lg={lg} md={md} sm={sm} xs={xs} className="centered-col">
      <Card
        hoverable
        cover={
          <img
            alt={alt}
            src={src}
            style={{
              height: '300px',
              width: '100%',
              objectFit: 'cover',
            }}
          />
        }
      />
    </Col>
  );
};

export { ProductImage };
