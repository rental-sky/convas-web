import create from 'zustand';

export type CartItem = {
  name: string;
  image: string;
  price: number;
  brand: string;
  available: boolean;
  count?: number;
};

export type AppStore = {
  cartItems: CartItem[];
  total: number;
  addCartItem: (item: CartItem) => void;
  removeCartItem: (item: CartItem) => void;
  addCount: (item: CartItem) => void;
  removeCount: (item: CartItem) => void;
};

const useAppStore = create<AppStore>((set) => ({
  cartItems: [],
  addCartItem: (item: CartItem) =>
    set((state) => ({
      cartItems: [...state.cartItems, item],
      total: state.total + item.price,
    })),
  removeCartItem: (item: CartItem) =>
    set((state) => ({
      cartItems: state.cartItems.filter((i) => i.name !== item.name),
      total: state.total - item.price,
    })),
  addCount: (item: CartItem) =>
    set((state) => ({
      cartItems: state.cartItems.map((i) =>
        i.name === item.name ? { ...i, count: (i.count || 1) + 1 } : i
      ),
      total: state.total + item.price,
    })),
  removeCount: (item: CartItem) =>
    set((state) => ({
      cartItems: state.cartItems.map((i) =>
        i.name === item.name ? { ...i, count: (i.count || 1) - 1 } : i
      ),
      total: state.total - item.price,
    })),
  total: 0,
}));

export default useAppStore;
