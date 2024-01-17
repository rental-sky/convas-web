import React from 'react';

import ProductItem from './ProductItem';
import MainRowLayout from '../MainRowLayout/MainRowLayout';
import './ProductList.less';
import { Product } from '../../store/productStore';

interface SaleProductListProps {
  products: Product[];
}

const ProductList: React.FC<SaleProductListProps> = ({ products }) => {
  return (
    <MainRowLayout rowClassName="product-list">
      {products.map((product) => {
        return <ProductItem product={product} key={product.id} />;
      })}
    </MainRowLayout>
  );
};

export default ProductList;
