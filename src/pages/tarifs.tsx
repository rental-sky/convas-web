import React, { useEffect, useState } from 'react';

import MainLayout from '../components/MainLayout/MainLayout';

import ProductListRenderer from '../components/ProductList/ProductListRenderer';
import MainPageHeader from '../components/MainPageHeader/MainPageHeader';
import useProductStore, { ProducStore } from '../store/productStore';
import { track } from '../firebasecConfig';

const Tarifs = () => {
  const [isLoading, setLoading] = useState(true);
  const [saleProducts] = useProductStore((s: ProducStore) => [s.saleProducts]);

  useEffect(() => {
    if (saleProducts && saleProducts.length > 0) setLoading(false);
  }, [saleProducts]);

  useEffect(() => {
    track('view_tarifs', {});
  }, []);

  return (
    <MainLayout title={`Covans - Tarifs category`}>
      <MainPageHeader
        title={`Tarifas `}
        subTitle={'Conoce nuestras tarifas y promociones.'}
      />
      <ProductListRenderer
        spin={isLoading}
        products={saleProducts}
        breakpoints={{ xl: 6, lg: 6, md: 6, sm: 12, xs: 24 }}
      />
    </MainLayout>
  );
};

export default Tarifs;
