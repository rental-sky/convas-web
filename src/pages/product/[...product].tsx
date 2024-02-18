import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import MainLayout from '../../components/MainLayout/MainLayout';
import SingleProductRenderer from '../../components/SingleProduct/SingleProductRenderer';

import useProductStore, { ProducStore } from '../../store/productStore';

const Product = () => {
  const [isLoading, setLoading] = useState(false);

  const router = useRouter();
  const { product: productParam } = router.query;
  const productId = productParam ? productParam[0] : null;

  const [currentProduct, fetchProductById] = useProductStore(
    (s: ProducStore) => [s.currentProduct, s.fetchProductById]
  );
  const currentProductId = `${currentProduct?.id ?? ''}`;
  const currentProductName = currentProduct?.name ?? '...';

  useEffect(() => {
    if (!productId) return;
    setLoading(true);
    fetchProductById(productId);
  }, [productId]);

  useEffect(() => {
    if (!currentProductId) return;

    setLoading(false);
  }, [currentProduct]);

  return (
    <MainLayout title={`Covans Snowboard  - ${currentProductName}`}>
      <SingleProductRenderer
        product={currentProduct}
        loading={isLoading}
        breakpoints={[
          { xl: 10, lg: 10, md: 10, sm: 24, xs: 0 },
          { xl: 14, lg: 14, md: 14, sm: 24, xs: 0 },
        ]}
      />
    </MainLayout>
  );
};

export default Product;
