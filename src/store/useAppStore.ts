import create from 'zustand';

export type CartItem = {
  name: string;
  image: string;
  price: number;
  brand: string;
  type: string;
  available: boolean;
  count?: number;
  size?: string[];
};

export type AppStore = {
  cartItems: CartItem[];
  total: number;
  addCartItem: (item: CartItem) => void;
  removeCartItem: (item: CartItem) => void;
  addCount: (item: CartItem) => void;
  removeCount: (item: CartItem) => void;
  showMenu: boolean;
  setShowMenu: (show: boolean) => void;
};

const useAppStore = create<AppStore>((set) => ({
  cartItems: [],
  showMenu: false,
  addCartItem: (item: CartItem) =>
    set((state) => ({
      cartItems: [...state.cartItems, { ...item, count: 1 }],
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
  setShowMenu: (show: boolean) => set(() => ({ showMenu: show })),
}));

export default useAppStore;
