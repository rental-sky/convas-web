import React, { useState, useEffect } from 'react';

import { InputNumber } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

import ProductInfo from './ProductInfo';
import useCartStore from '../../store/cartStore';
import { Product } from '../../store/productStore';

interface CartItemProps {
  product: Product;
}

const CartItem: React.FC<CartItemProps> = ({ product }) => {
  const [isDeleting, setDeleting] = useState(false);
  const [itemCount, setItemCount] = useState(0);

  const { id } = product;
  const product_id = `${id}`;

  const { items, removeFromCart, updateCartItemCount, getCartItemCount } =
    useCartStore();

  const removeThisItem = () => {
    setDeleting(true);
    removeFromCart(product_id);
  };

  const handleUpdateCartItem = (count = 1) => {
    console.log(count, 'HEY');
    console.log(itemCount, 'HOY');

    if (itemCount < count) {
      updateCartItemCount(product_id, true);
    } else {
      updateCartItemCount(product_id, false);
    }
  };

  useEffect(() => {
    const totalItemCount = getCartItemCount(items, product_id);
    setItemCount(totalItemCount);
  });

  return (
    <div className={`cart-item ${isDeleting ? `deleting` : ''}`}>
      <ProductInfo product={product} />
      <div className="quantity-control">
        <InputNumber
          min={1}
          max={9}
          value={itemCount}
          onChange={(count) => handleUpdateCartItem(count)}
        />
      </div>
      <div className="delete">
        <DeleteOutlined onClick={removeThisItem} />
      </div>
    </div>
  );
};

export default CartItem;
