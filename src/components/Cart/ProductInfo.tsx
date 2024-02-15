import React from 'react';
import Link from 'next/link';

import { Col, Row, Typography } from 'antd';
import { Product } from '../../store/productStore';
import useCartStore from '../../store/cartStore';

const { Title, Text } = Typography;

interface ProductInfoProps {
  product: Product;
}

const ProductInfo: React.FC<ProductInfoProps> = ({ product }) => {
  const { id, name, images, regular_price, sale_price, on_sale, slug, prices } =
    product;
  const featured_image = images.length > 0 ? images[0].src : '';
  const product_id = `${id}`;

  const items = useCartStore((state) => state.items);

  const priceTarif = items.find((item) => item.id === product_id);
  const isTarif = !!prices;
  return (
    <>
      <div className="featured-pp">
        <Link
          href="/product/[...product]"
          as={`/product/${product_id}/${slug}`}
        >
          <a>{featured_image && <img src={featured_image} />}</a>
        </Link>
      </div>
      <div className="description">
        <Link
          href="/product/[...product]"
          as={`/product/${product_id}/${slug}`}
        >
          <a>
            <Title style={{ fontSize: '1rem' }}>{name}</Title>
            {isTarif ? (
              <Text>${`${priceTarif?.price}`}</Text>
            ) : (
              <div>
                <Text
                  type="secondary"
                  delete={on_sale}
                  className={`${on_sale ? 'on_sale' : 'regular'}`}
                >
                  ${regular_price}
                </Text>
                {on_sale && (
                  <Text style={{ marginLeft: 10 }}>${sale_price}</Text>
                )}
              </div>
            )}
          </a>
        </Link>
      </div>
    </>
  );
};

export default ProductInfo;
