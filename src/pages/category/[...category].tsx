import React, { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';

import MainLayout from '../../components/MainLayout/MainLayout';

import ProductListRenderer from '../../components/ProductList/ProductListRenderer';
import MainPageHeader from '../../components/MainPageHeader/MainPageHeader';
import useProductStore, { ProducStore } from '../../store/productStore';

const MAP_CATEGORY_TITLE = {
  helmets: {
    title: 'Cascos',
    subtitle: 'Cascos para snowboard de alto rendimiento.',
  },
  tables: {
    title: 'Tablas',
    subtitle: 'Tablas para snowboard de alto rendimiento.',
  },
  boots: {
    title: 'Botas',
    subtitle: 'Botas para snowboard de alto rendimiento.',
  },
  googles: {
    title: 'Antiparras',
    subtitle: 'Antiparras para snowboard de alto rendimiento.',
  },
};

const Category = () => {
  const [isLoading, setLoading] = useState(true);

  const router = useRouter();
  const { category: categoryParam } = router.query;
  const currentCategoryName = (
    categoryParam ? categoryParam[1] : '...'
  ) as keyof typeof MAP_CATEGORY_TITLE;

  const [categoryProducts] = useProductStore((s: ProducStore) => [
    s.categoryProducts,
  ]);

  const categoriesProducts = useMemo(() => {
    if (!categoryProducts) return [];

    return categoryProducts[currentCategoryName];
  }, [categoryProducts, categoryProducts]);

  useEffect(() => {
    if (categoriesProducts && categoriesProducts.length > 0) setLoading(false);
  }, [categoriesProducts]);

  return (
    <MainLayout title={`Covans - ${currentCategoryName} category`}>
      <MainPageHeader
        title={`${MAP_CATEGORY_TITLE[currentCategoryName]?.title}`}
        subTitle={MAP_CATEGORY_TITLE[currentCategoryName]?.subtitle}
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
