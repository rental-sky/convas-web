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
import { WhatsAppOutlined } from '@ant-design/icons';

import { SingleProductContext } from '../../contexts';
import './SingleProduct.less';
import useCartStore, { Cart } from '../../store/cartStore';
import { Product } from '../../store/productStore';
import { CarOutlined } from '@ant-design/icons';

const { Text, Title, Paragraph } = Typography;
const { Item } = Descriptions;

interface SingleProductProps {
  product: Product;
}

const GridItem = ({
  title,
  subtitle,
  selected,
  onClick,
}: {
  title: string;
  subtitle: string;
  selected: boolean;
  onClick: () => void;
}) => {
  return (
    <div
      className={`grid-item ${selected ? 'selected' : ''}`}
      onClick={onClick}
    >
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
};

const generateWhatsAppMessage = (Product: Product) => {
  // Generar el mensaje inicial con los detalles del pedido
  let message = `¡Hola! Estoy interesado en este producto de Covans Rental Snow
  :\n\n`;

  const { price, name, brand } = Product;

  // Fill product
  message += `*${name}*\n`;
  message += `Precio: ${price}\n`;
  message += `Marca: ${brand}\n\n`;

  // fill thanks and wait for response
  message += `\n\nGracias! Espero tu respuesta.`;

  // Codificar el mensaje para que sea una URL válida para WhatsApp
  message = encodeURIComponent(message);

  // Crear la URL para abrir WhatsApp con el mensaje
  const whatsappURL = `https://api.whatsapp.com/send?phone=${5492901403225}&text=${message}`;

  return whatsappURL;
};

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
    characteristics,
    type,
    prices,
  } = product;
  const productId = `${id}`;

  const [seletecDays, setSelectedDays] = useState(1);

  const [currentImageIdx, setCurrentImageIdx] = useState(0);

  const prevSlide = () => {
    const resetToVeryBack = currentImageIdx === 0;
    const index = resetToVeryBack ? images.length - 1 : currentImageIdx - 1;
    setCurrentImageIdx(index);
  };

  const nextSlide = () => {
    const resetIndex = currentImageIdx === images.length - 1;
    const index = resetIndex ? 0 : currentImageIdx + 1;
    setCurrentImageIdx(index);
  };

  const isTarif = type !== 'product' && prices;

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

  const imageSlides = images.map((image, index) => (
    <img
      key={index}
      src={image.src}
      alt={image.alt}
      className={`slide ${index === currentImageIdx ? 'active' : ''}`}
    />
  ));

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
          <div className="carousel-container">
            <button onClick={prevSlide} className="carousel-button prev">
              &#10094;
            </button>
            <button onClick={nextSlide} className="carousel-button next">
              &#10095;
            </button>
            <div className="carousel">{imageSlides}</div>
          </div>
        </Col>
        <Col
          xl={breakpoints[1].xl}
          lg={breakpoints[1].lg}
          md={breakpoints[1].md}
          sm={breakpoints[1].sm}
          className="product-description"
        >
          <Descriptions title={name} column={1}>
            {isTarif ? null : (
              <Item key="price" className="price-description">
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 4,
                  }}
                >
                  <Text
                    style={{
                      fontSize: '1rem',
                      color: 'gray',
                      fontWeight: 'bold',
                    }}
                  >
                    Precio
                  </Text>
                  <Text
                    type="secondary"
                    style={{
                      fontSize: '2rem',
                      fontWeight: 'bold',
                      color: on_sale ? 'red' : 'black',
                    }}
                    delete={on_sale}
                  >
                    ${regular_price}
                  </Text>
                  {on_sale && (
                    <Text style={{ marginLeft: 15 }}>${sale_price}</Text>
                  )}
                </div>
              </Item>
            )}

            <Item key="desc">
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 8,
                }}
              >
                <Text
                  style={{
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    color: 'gray',
                  }}
                >
                  Descripcion
                </Text>
                <Paragraph
                  type="secondary"
                  style={{
                    fontSize: '0.8rem',
                  }}
                >
                  {description}
                </Paragraph>
              </div>
            </Item>
            <Text
              style={{
                fontSize: '1rem',
                fontWeight: 'bold',
                color: 'gray',
              }}
            >
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

            {characteristics && (
              <Item key="settings">
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 8,
                  }}
                >
                  <Text
                    style={{
                      fontSize: '1rem',
                      fontWeight: 'bold',
                      color: 'gray',
                    }}
                  >
                    Caracteristicas
                  </Text>
                  <List
                    size="small"
                    split
                    dataSource={characteristics}
                    renderItem={(item) => (
                      <List.Item
                        style={{
                          fontSize: '0.7rem',
                          fontWeight: 'bold',
                        }}
                      >
                        {item}
                      </List.Item>
                    )}
                  />
                </div>
              </Item>
            )}
          </Descriptions>
          <div className="grid-container">
            {prices?.map((item, index) => (
              <GridItem
                key={index}
                selected={index + 1 === seletecDays}
                onClick={() => setSelectedDays(index + 1)}
                title={`Dia ${index + 1}`}
                subtitle={`$${item}`}
              />
            ))}
          </div>

          <Item key="button" label="" className="container-button">
            {type === 'tarif' ? (
              <Button
                type="primary"
                size="large"
                onClick={addItemToCart}
                disabled={isItemInCart}
                className="add-to-cart-button"
              >
                Añadir al carrito
              </Button>
            ) : (
              <Button
                size="large"
                onClick={() => {
                  window.open(generateWhatsAppMessage(product), '_blank');
                }}
                className="add-to-cart-button"
                style={{
                  display: 'flex',

                  alignItems: 'center',
                  backgroundColor: '#25d366',
                  fontSize: '1em',
                  fontWeight: 'bold',
                  color: 'white',
                }}
              >
                Consultar
                <WhatsAppOutlined style={{ fontSize: 20, color: 'white' }} />
              </Button>
            )}
          </Item>

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
              marginTop: 20,
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
