import React from 'react';

import CartList from './CartList';
import SkeletonList from '../SkeletonList/SkeletonList';
import { Product } from '../../store/productStore';

interface CartListRendererProps {
  cartProducts: Product[];
  totalItems: number;
}

const CartListRenderer: React.FC<CartListRendererProps> = ({
  cartProducts,
  totalItems,
}) => {
  return (
    <>
      {cartProducts.length > 0 && totalItems > 0 ? (
        <CartList products={cartProducts} />
      ) : (
        <SkeletonList itemCount={totalItems} />
      )}
    </>
  );
};

export default CartListRenderer;
