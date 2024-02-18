import React from 'react';

import ProductItem from './ProductItem';
import { ProductImage } from './ProductImage';
import MainRowLayout from '../MainRowLayout/MainRowLayout';
import './ProductList.less';
import {
  Product,
  ProductImage as ProductImageType,
} from '../../store/productStore';

interface SaleProductListProps {
  products: (Product | ProductImageType)[];
  onlyImage?: boolean;
}

const ProductList: React.FC<SaleProductListProps> = ({
  products,
  onlyImage = false,
}) => {
  const productsImages = onlyImage ? (products as ProductImageType[]) : [];
  const productsItems = onlyImage ? [] : (products as Product[]);

  return (
    <MainRowLayout rowClassName="product-list">
      {productsImages.length > 0 &&
        productsImages.map((product) => (
          <ProductImage product={product} key={product.id} />
        ))}

      {productsItems.length > 0 &&
        productsItems.map((product) => (
          <ProductItem product={product} key={product.id} />
        ))}
    </MainRowLayout>
  );
};

export default ProductList;
