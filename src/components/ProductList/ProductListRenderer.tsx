import React from 'react';
import ProductList from './ProductList';
import Spinner from '../Spinner/Spinner';

import SkeletonList from '../SkeletonList/SkeletonList';
import { SkeletonListContext, Breakpoints } from '../../contexts';
import { Product, ProductImage } from '../../store/productStore';

interface ProductListRendererProps {
  products: (Product | ProductImage)[];
  skeletonCount?: number;
  skeleton?: boolean;
  spin?: boolean;
  onlyImage?: boolean;
  breakpoints: Breakpoints;
}

const ProductListRenderer: React.FC<ProductListRendererProps> = ({
  products = [],
  skeleton,
  skeletonCount = 0,
  spin,
  breakpoints,
  onlyImage,
}) => {
  return (
    <SkeletonListContext.Provider value={breakpoints}>
      {skeleton && products.length === 0 && (
        <SkeletonList itemCount={skeletonCount} />
      )}
      {products.length > 0 && !spin && (
        <ProductList products={products} onlyImage={onlyImage} />
      )}
      {spin && <Spinner />}
    </SkeletonListContext.Provider>
  );
};

export default ProductListRenderer;
