import React, { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import MainLayout from '../../components/MainLayout/MainLayout';
import { fetchCategoryProducts, fetchCategory } from '../../actions';

import ProductListRenderer from '../../components/ProductList/ProductListRenderer';
import MainPageHeader from '../../components/MainPageHeader/MainPageHeader';
import useProductStore from '../../store/productStore';

const Category = () => {
  const [isLoading, setLoading] = useState(false);

  const router = useRouter();
  const { category: categoryParam } = router.query;
  const category_id = categoryParam ? categoryParam[0] : null;
  const currentCategoryName = categoryParam ? categoryParam[1] : '...';

  const { categoryProducts } = useProductStore();

  const categoriesProducts = useMemo(() => {
    if (!categoryProducts) return [];

    return categoryProducts[currentCategoryName];
  }, [categoryProducts, categoryProducts]);

  useEffect(() => {
    if (!categoriesProducts) setLoading(true);
    else setLoading(false);
  }, [categoriesProducts]);

  console.log(categoriesProducts, 'HEY');

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
