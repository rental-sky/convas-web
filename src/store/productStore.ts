import create from 'zustand';
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
  sale_price: string;
  on_sale: boolean;
  images: ProductImage[];
}

export type ProducStore = {
  saleProducts: Product[];
  categoryProducts: {
    [key: string]: Product[];
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
    const allProducts = get().saleProducts.concat(
      get().categoryProducts.tables,
      get().categoryProducts.boots,
      get().categoryProducts.helmets,
      get().categoryProducts.googles
    );

    console.log(allProducts);

    const product = allProducts.find((product: Product) => product.id === id);

    if (!product) {
      throw new Error(`Product with id ${id} not found`);
    }
    get().setCurrentProduct(product);
  },
  fetchProductsByIds: (ids: string) => {
    const allProducts = get().saleProducts.concat(
      get().categoryProducts.tables,
      get().categoryProducts.boots,
      get().categoryProducts.helmets,
      get().categoryProducts.googles
    );

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
      const response = await api.products.list();

      const { tables, boots, helmets, googles } = response;

      set({
        categoryProducts: {
          tables,
          boots,
          helmets,
          googles,
        },
      });
    } catch (error) {
      // TODO: Handle error
    }
  },
}));

export default useProductStore;
