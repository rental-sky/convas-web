import React from 'react';

import { Product } from '../../../actions';

import { getCartItemCount } from '../../../helpers';
import ProductInfo from '../ProductInfo';
import useCartStore from '../../../store/cartStore';

interface CheckoutItemProps {
  product: Product;
}

const CheckoutItem: React.FC<CheckoutItemProps> = ({ product }) => {
  const { items } = useCartStore();
  const { id, price } = product;

  const product_id = `${id}`;
  const totalItemCount = getCartItemCount(items, product_id);
  const subtotal = parseFloat(price) * totalItemCount;

  return (
    <div className="cart-item">
      <ProductInfo product={product} />
      <div className="quantity">{totalItemCount}</div>
      <div className="subtotal">${subtotal}</div>
    </div>
  );
};

export default CheckoutItem;
