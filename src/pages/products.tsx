import React, { useEffect, useState } from 'react';

import MainLayout from '../components/MainLayout/MainLayout';

import ProductListRenderer from '../components/ProductList/ProductListRenderer';
import MainPageHeader from '../components/MainPageHeader/MainPageHeader';
import useProductStore, { ProducStore } from '../store/productStore';
import { track } from '../firebasecConfig';

const Products = () => {
  const [isLoading, setLoading] = useState(true);
  const [products] = useProductStore((s: ProducStore) => [s.products]);

  useEffect(() => {
    if (products && products.length > 0) setLoading(false);
  }, [products]);

  useEffect(() => {
    track('view_all_products', {});
  }, []);

  return (
    <MainLayout title={`Covans - Tarifs category`}>
      <MainPageHeader
        title={`Productos `}
        subTitle={'Conoce nuestros productos.'}
      />
      <ProductListRenderer
        spin={isLoading}
        products={products}
        breakpoints={{ xl: 6, lg: 6, md: 6, sm: 12, xs: 24 }}
      />
    </MainLayout>
  );
};

export default Products;
