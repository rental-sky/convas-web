import React, { useState } from 'react';
import { Typography, Button, Calendar } from 'antd';

import CheckoutModal from './Checkout/CheckoutModal';
import { Product } from '../../store/productStore';

const { Title, Text } = Typography;

interface OrderSummaryProps {
  cartProducts: Product[];
  totalItems: number;
  totalPrice: number;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({
  cartProducts,
  totalItems,
  totalPrice,
}) => {
  const [modalVisibility, setModalVisibility] = useState(false);

  return (
    <div className="order-summary">
      <Title level={3}>Orden</Title>
      <div>
        <Text type="secondary">Total</Text>
        <Text
          disabled={cartProducts.length === 0}
          style={{
            fontSize: '1rem',
          }}
        >
          ARS{' '}
          {Number(totalPrice).toLocaleString('es-AR', {
            style: 'currency',
            currency: 'ARS',
          })}
        </Text>
      </div>
      <Button
        type="primary"
        size="middle"
        disabled={cartProducts.length === 0 || totalItems === 0}
        onClick={() => setModalVisibility(true)}
      >
        CHECKOUT
      </Button>
      <CheckoutModal
        visible={modalVisibility}
        hideModal={() => setModalVisibility(false)}
      />
    </div>
  );
};

export default OrderSummary;
