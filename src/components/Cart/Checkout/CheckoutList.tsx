import React from 'react';
import CheckoutItem from './CheckoutItem';

import { CartContext } from '../../../contexts';
import './CheckoutList.less';
import { Product } from '../../../store/productStore';
import { Radio } from 'antd';

interface CheckoutListProps {
  products: Product[];
}

const CheckoutList: React.FC<CheckoutListProps> = ({ products }) => {
  const { totalPrice } = React.useContext(CartContext);

  return (
    <div className="checkout-list">
      <div className="table-heading">
        <div>Productos</div>
        <div>Monto</div>
        <div>Subtotal</div>
      </div>
      {products.map((product) => {
        return <CheckoutItem product={product} key={product.id} />;
      })}

      <div className="overall-total-price">
        <div
          style={{
            fontSize: '1rem',
          }}
        >
          TOTAL:{' '}
          <span
            style={{
              fontSize: '1rem',
            }}
          >
            ${totalPrice}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CheckoutList;
