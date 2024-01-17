import React, { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';

import MainLayout from '../../components/MainLayout/MainLayout';

import ProductListRenderer from '../../components/ProductList/ProductListRenderer';
import MainPageHeader from '../../components/MainPageHeader/MainPageHeader';
import useProductStore, { ProducStore } from '../../store/productStore';

const Category = () => {
  const [isLoading, setLoading] = useState(false);

  const router = useRouter();
  const { category: categoryParam } = router.query;
  const currentCategoryName = categoryParam ? categoryParam[1] : '...';

  const [categoryProducts] = useProductStore((s: ProducStore) => [
    s.categoryProducts,
  ]);

  const categoriesProducts = useMemo(() => {
    if (!categoryProducts) return [];

    return categoryProducts[currentCategoryName];
  }, [categoryProducts, categoryProducts]);

  useEffect(() => {
    if (!categoriesProducts) setLoading(true);
    else setLoading(false);
  }, [categoriesProducts]);

  return (
    <MainLayout title={`Covans - ${currentCategoryName} category`}>
      <MainPageHeader
        title={`Category: ${currentCategoryName}`}
        subTitle={currentCategoryName}
      />
      <ProductListRenderer
        spin={isLoading}
        products={categoriesProducts}
        breakpoints={{ xl: 6, lg: 6, md: 6, sm: 12, xs: 24 }}
      />
    </MainLayout>
  );
};

export default Category;
