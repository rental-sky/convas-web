import React, { useMemo, useState } from 'react';
import {
  Row,
  Col,
  Typography,
  Descriptions,
  Button,
  Tag,
  List,
  Card,
} from 'antd';
import cartNotification from './CartNotification';

import { SingleProductContext } from '../../contexts';
import './SingleProduct.less';
import useCartStore, { Cart } from '../../store/cartStore';
import { Product } from '../../store/productStore';
import { CarOutlined } from '@ant-design/icons';

const { Text, Title } = Typography;
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
    sizes,
    price,
    prices,
  } = product;
  const productId = `${id}`;
  const featured_image = images.length > 0 ? images[0].src : '';

  const [seletecDays, setSelectedDays] = useState(1);

  const isTarif = !!prices;

  const addItemToCart = () => {
    const price = isTarif ? prices[seletecDays - 1] : product.price;

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
          {featured_image && (
            <img
              src={featured_image}
              style={{
                height: 500,
                width: '100%',
                backgroundColor: '#fafafa',
                objectFit: 'cover',
              }}
            />
          )}
        </Col>
        <Col
          xl={breakpoints[1].xl}
          lg={breakpoints[1].lg}
          md={breakpoints[1].md}
          sm={breakpoints[1].sm}
          className="product-description"
        >
          <Descriptions title={name} column={1}>
            {isTarif ? (
              <>
                <Title level={4}>Precios</Title>
                <Row gutter={16}>
                  {prices.map((price, key) => (
                    <Card.Grid
                      style={{
                        backgroundColor:
                          key + 1 === seletecDays ? '#1890ff5F' : undefined,
                      }}
                    >
                      <div
                        onClick={() => {
                          setSelectedDays(key + 1);
                        }}
                      >
                        {`${key + 1} Dia $${price}`}
                      </div>
                    </Card.Grid>
                  ))}
                </Row>
              </>
            ) : (
              <Item key="price" label="Precio" className="price-description">
                <Text
                  type="secondary"
                  delete={on_sale}
                  className={`${on_sale ? 'on_sale' : 'regular'}`}
                >
                  ${regular_price}
                </Text>
                {on_sale && (
                  <Text style={{ marginLeft: 15 }}>${sale_price}</Text>
                )}
              </Item>
            )}

            <Item key="desc" label="Descripcion">
              <p dangerouslySetInnerHTML={{ __html: description }} />
            </Item>

            <Text type="secondary">Tallas:</Text>
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
          <Card
            title={
              <Row align="middle" justify="space-around">
                <Title level={4} style={{ marginBottom: 0 }}>
                  Envios
                </Title>
                <CarOutlined />
              </Row>
            }
            style={{
              width: 300,
            }}
          >
            <Text type="secondary">
              Gratis a cualquier parte de tierra del fuego y a cualquiera hora!
            </Text>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default SingleProduct;
