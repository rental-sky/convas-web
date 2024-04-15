import { create } from 'zustand';
import api from '../api';

export interface ProductImage {
  id: number;
  src: string;
  alt: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: string;
  regular_price: string;
  available: boolean;
  brand: string;
  sizes: string[];
  prices?: string[];
  sale_price: string;
  on_sale: boolean;
  images: ProductImage[];
}

export type ProducStore = {
  saleProducts: Product[];
  categoryProducts: {
    [key: string]: ProductImage[];
  };
  currentProduct?: Product;
  cartProducts: Product[];
  fetchProductById: (id: string) => void;
  fetchProductsByIds: (ids: string) => void;
  setCurrentProduct: (currentProduct: Product) => void;
  setCartProducts: (cartProducts: Product[]) => void;
  init: () => Promise<void>;
};

const useProductStore = create<ProducStore>((set, get) => ({
  saleProducts: [],
  categoryProducts: {},
  cartProducts: [],
  currentProduct: undefined,
  setSaleProducts: (saleProducts: Product[]) => set({ saleProducts }),
  setCurrentProduct: (currentProduct: Product) => set({ currentProduct }),
  setCartProducts: (cartProducts: Product[]) => set({ cartProducts }),
  fetchProductById: (id: string) => {
    const allProducts = get().saleProducts;

    if (allProducts.length === 0) return;

    const product = allProducts.find((product: Product) => product?.id === id);

    if (!product) {
      return;
    }
    get().setCurrentProduct(product);
  },
  fetchProductsByIds: (ids: string) => {
    const allProducts = get().saleProducts;

    const products = allProducts.filter((product: Product) =>
      ids.includes(String(product.id))
    );

    if (!products) {
      throw new Error(`Product with id not found`);
    }

    get().setCartProducts(products);
  },
  init: async () => {
    try {
      // const response = await api.products.list();
      const tarif = await api.tarif.list();

      const tables = Array.from(
        { length: 21 },
        (_, index) => `/images/tables/${index + 1}t.JPG`
      ).map((src, index) => ({
        id: index + 1,
        src,
        alt: `Table ${index + 1}`,
      }));

      const boots = Array.from(
        { length: 13 },
        (_, index) => `/images/boots/${index + 1}b.JPG`
      ).map((src, index) => ({
        id: index + 1,
        src,
        alt: `Boots ${index + 1}`,
      }));

      const helmets = Array.from(
        { length: 10 },
        (_, index) => `/images/helmets/${index + 1}h.JPG`
      ).map((src, index) => ({
        id: index + 1,
        src,
        alt: `Helmets ${index + 1}`,
      }));

      const googles = Array.from(
        { length: 17 },
        (_, index) => `/images/googles/${index + 1}g.JPG`
      ).map((src, index) => ({
        id: index + 1,
        src,
        alt: `Googles ${index + 1}`,
      }));

      set({
        categoryProducts: {
          tables,
          boots,
          helmets,
          googles,
        },
        saleProducts: tarif,
      });
    } catch (error) {
      // TODO: Handle error
    }
  },
}));

export default useProductStore;
