import React, { useEffect, useState } from 'react';

import { Row, Col } from 'antd';
import MainLayout from '../components/MainLayout/MainLayout';
import CartListRenderer from '../components/Cart/CartListRenderer';

import OrderSummary from '../components/Cart/OrderSummary';

import { CartContext, SkeletonListContext, Breakpoints } from '../contexts';
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
        <MainLayout title={`Convans eCommerce - Cart`}>
          <Row className="cart-wrapper boxed-width">
            <Col xl={14} lg={24} md={24} sm={24} xs={24}>
              <CartListRenderer
                cartProducts={cartProducts}
                totalItems={totalItems}
              />
            </Col>
            <Col xl={10} lg={24} md={24} sm={24} xs={24}>
              <OrderSummary
                cartProducts={cartProducts}
                totalItems={totalItems}
                totalPrice={totalPrice}
              />
            </Col>
          </Row>
        </MainLayout>
      </SkeletonListContext.Provider>
    </CartContext.Provider>
  );
};

export default Cart;
