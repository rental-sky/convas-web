import create from 'zustand';

export interface ProductImage {
  id: number;
  src: string;
  alt: string;
}

export interface Product {
  id: number;
  name: string;
  slug: string;
  date_created: string;
  description: string;
  price: string;
  regular_price: string;
  sale_price: string;
  on_sale: boolean;
  related_ids: number[];
  images: ProductImage[];
}

export type CategoryStore = {
  saleProducts: Product[];
  categoryProducts: Product[];
  currentProduct?: Product;
  cartProducts: Product[];
};

const useAppStore = create<CategoryStore>((set) => ({
  saleProducts: [],
  categoryProducts: [],
  cartProducts: [],
  currentProduct: undefined,
  setSaleProducts: (saleProducts: Product[]) => set({ saleProducts }),
  setCategoryProducts: (categoryProducts: Product[]) =>
    set({ categoryProducts }),
  setCurrentProduct: (currentProduct: Product) => set({ currentProduct }),
  setCartProducts: (cartProducts: Product[]) => set({ cartProducts }),
}));

export default useAppStore;
