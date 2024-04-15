import React, { useEffect, useState } from 'react';

import { Row, Col, Typography } from 'antd';
import MainLayout from '../components/MainLayout/MainLayout';
import CartListRenderer from '../components/Cart/CartListRenderer';
import { FrownFilled } from '@ant-design/icons';

import OrderSummary from '../components/Cart/OrderSummary';

import { CartContext, SkeletonListContext } from '../contexts';
import './cart.less';
import useProductStore from '../store/productStore';
import useCartStore from '../store/cartStore';

const Cart = () => {
  const { items, totalItems, getCartIds, calculateTotalPrice, initializeCart } =
    useCartStore();
  const { cartProducts, fetchProductsByIds } = useProductStore();
  const itemsLength = items.length;
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    initializeCart();
  }, []);

  useEffect(() => {
    if (itemsLength > 0) {
      const cartItemIds = getCartIds(items);

      fetchProductsByIds(cartItemIds);
    }
  }, [itemsLength]);

  useEffect(() => {
    setTotalPrice(calculateTotalPrice(items));
  }, [items]);

  return (
    <CartContext.Provider
      value={{
        totalPrice,
      }}
    >
      <SkeletonListContext.Provider
        value={{ xl: 14, lg: 24, md: 24, sm: 24, xs: 24 }}
      >
        <MainLayout title={`Covans Rental Snow - Cart`}>
          {cartProducts.length > 0 ? (
            <Row className="cart-wrapper boxed-width">
              <Col xl={14} lg={24} md={24} sm={24} xs={24}>
                <CartListRenderer
                  cartProducts={cartProducts}
                  totalItems={totalItems}
                />
              </Col>
              <Col xl={10} lg={24} md={24} sm={24} xs={24} className="">
                <OrderSummary
                  cartProducts={cartProducts}
                  totalItems={totalItems}
                  totalPrice={totalPrice}
                />
              </Col>
            </Row>
          ) : (
            <Col
              span={24}
              className="empty-state "
              style={{
                gap: 20,
              }}
            >
              <FrownFilled style={{ fontSize: 48 }} />
              <Typography.Title level={4}>
                Tu carrito aun esta vacio
              </Typography.Title>
            </Col>
          )}
        </MainLayout>
      </SkeletonListContext.Provider>
    </CartContext.Provider>
  );
};

export default Cart;
