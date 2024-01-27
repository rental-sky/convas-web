import React from 'react';

import { getCartItemCount } from '../../../helpers';
import ProductInfo from '../ProductInfo';
import useCartStore from '../../../store/cartStore';
import { Product } from '../../../store/productStore';

interface CheckoutItemProps {
  product: Product;
}

const CheckoutItem: React.FC<CheckoutItemProps> = ({ product }) => {
  const { items } = useCartStore();
  const { id, price } = product;

  const product_id = `${id}`;
  const totalItemCount = getCartItemCount(items, product_id);
  console.log({
    1: price,
    2: parseFloat(price.replace(/,/g, '')),
  });

  const subtotal = parseFloat(price.replace(/,/g, '')) * totalItemCount;

  return (
    <div className="cart-item">
      <ProductInfo product={product} />
      <div className="quantity">{totalItemCount}</div>
      <div className="subtotal">${subtotal}</div>
    </div>
  );
};

export default CheckoutItem;
