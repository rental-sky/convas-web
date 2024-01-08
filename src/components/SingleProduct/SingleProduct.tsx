import React, { useMemo } from 'react';
import { Row, Col, Typography, Descriptions, Button } from 'antd';
import cartNotification from './CartNotification';

import { SingleProductContext } from '../../contexts';
import './SingleProduct.less';
import useCartStore, { Cart } from '../../store/cartStore';
import { Product } from '../../store/productStore';

const { Text } = Typography;
const { Item } = Descriptions;

interface SingleProductProps {
  product: Product;
}

const SingleProduct: React.FC<SingleProductProps> = ({ product }) => {
  const breakpoints = React.useContext(SingleProductContext);
  const { addToCart, items } = useCartStore();

  const {
    id,
    name,
    description,
    images,
    regular_price,
    sale_price,
    on_sale,
    price,
  } = product;
  const productId = `${id}`;
  const featured_image = images.length > 0 ? images[0].src : '';

  const addItemToCart = () => {
    const item: Cart = {
      id: productId,
      price,
      count: 1,
    };

    addToCart(item);
    cartNotification();
  };

  const isItemInCart = useMemo(() => {
    return items.some((item: Cart) => item.id === productId);
  }, [items, productId]);

  return (
    <>
      <Row className="product-wrapper" justify="space-around">
        <Col
          xl={breakpoints[0].xl}
          lg={breakpoints[0].lg}
          md={breakpoints[0].md}
          sm={breakpoints[0].sm}
          className="product-image"
        >
          {featured_image && <img src={featured_image} />}
        </Col>
        <Col
          xl={breakpoints[1].xl}
          lg={breakpoints[1].lg}
          md={breakpoints[1].md}
          sm={breakpoints[1].sm}
          className="product-description"
        >
          <Descriptions title={name} column={1}>
            <Item key="price" label="Price" className="price-description">
              <Text
                type="secondary"
                delete={on_sale}
                className={`${on_sale ? 'on_sale' : 'regular'}`}
              >
                ${regular_price}
              </Text>
              {on_sale && <Text style={{ marginLeft: 15 }}>${sale_price}</Text>}
            </Item>
            <Item key="desc" label="Description">
              <p dangerouslySetInnerHTML={{ __html: description }} />
            </Item>
            <Item key="button" label="">
              <Button
                type="primary"
                onClick={addItemToCart}
                disabled={isItemInCart}
              >
                Añadir al carrito
              </Button>
            </Item>
          </Descriptions>
        </Col>
      </Row>
    </>
  );
};

export default SingleProduct;
