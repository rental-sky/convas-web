import React from 'react';

import SingleProduct from './SingleProduct';
import SingleProductSkeleton from './SingleProductSkeleton/SingleProductSkeleton';
import { SingleProductContext, Breakpoints } from '../../contexts';
import { Product } from '../../store/productStore';

interface SingleProductRendererProps {
  product?: Product;
  loading: boolean;
  breakpoints: Breakpoints[];
}

const SingleProductRenderer: React.FC<SingleProductRendererProps> = ({
  product,
  loading,
  breakpoints,
}) => {
  return (
    <SingleProductContext.Provider value={breakpoints}>
      {!product || loading ? (
        <SingleProductSkeleton />
      ) : (
        <SingleProduct product={product} />
      )}
    </SingleProductContext.Provider>
  );
};

export default SingleProductRenderer;
