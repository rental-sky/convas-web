import create from 'zustand';
// import Cookies from 'js-cookie';

export const CART_ITEMS = 'CART_ITEMS';
export const CART_ITEMS_DELIMETER = ',';

export interface Cart {
  id: string;
  price: string;
  count: number;
}

export type CartStore = {
  totalItems: number;
  items: Cart[];
  addToCart: (cartItem: Cart) => void;
  updateCartItemCount: (id: string, add: boolean) => void;
  removeFromCart: (id: string) => void;
  saveToCartCookie: (cartItems: Cart[]) => void;
  getCartCookie: () => void;
  getCartCookieArr: () => Cart[];
  calculateTotalPrice: (cartItems: Cart[]) => number;
  getCartIds: (cartItems: Cart[]) => string;
  getCartItemCount: (cartItems: Cart[], currentProductId: string) => number;
  initializeCart: () => void;
};

const useCartStore = create<CartStore>((set, get) => ({
  totalItems: 0,
  items: [],
  addToCart: (cartItem: Cart) => {
    set((state: CartStore) => {
      const index = state.items.map((item) => item.id).indexOf(cartItem.id);
      if (index > -1) {
        state.items[index].count += 1;
      }
      return {
        totalItems: state.totalItems + 1,
        items: [cartItem, ...state.items],
      };
    });
    get().saveToCartCookie(get().items);
  },
  getCartItemCount: (cartItems: Cart[], currentProductId: string) => {
    return cartItems.find((item) => item.id === currentProductId)?.count || 0;
  },
  updateCartItemCount: (id: string, add: boolean) => {
    set((state: CartStore) => {
      const index = state.items.map((item) => item.id).indexOf(id);
      if (index > -1) {
        state.items[index].count += add ? 1 : -1;
      }
      return {
        totalItems: state.totalItems + 1,
        items: [...state.items],
      };
    }),
      get().saveToCartCookie(get().items);
  },
  removeFromCart: (id: string) => {
    set((state: CartStore) => {
      const index = state.items.map((item) => item.id).indexOf(id);
      if (index > -1) {
        state.items.splice(index, 1);
      }
      return {
        totalItems: state.totalItems - 1,
        items: [...state.items],
      };
    }),
      get().saveToCartCookie(get().items);
  },
  saveToCartCookie: (cartItems: Cart[]) => {
    // Cookies.set(CART_ITEMS, JSON.stringify(cartItems), { expires: 7 });
  },
  getCartCookie: () => {
    // return Cookies.get(CART_ITEMS) || '';
  },
  getCartCookieArr: () => {
    // const cartCookieStr = Cookies.get(CART_ITEMS) || '';
    // const cartItems = cartCookieStr ? JSON.parse(cartCookieStr) : [];
    return [];
  },
  calculateTotalPrice: (cartItems: Cart[]) => {
    return cartItems.reduce((acc, item) => {
      return acc + Number(item.price) * item.count;
    }, 0);
  },
  getCartIds: (cartItems: Cart[]) => {
    return cartItems.map((item) => item.id).join(',');
  },
  initializeCart: () => {
    // const cartCookieStr = Cookies.get(CART_ITEMS) || '';
    // const cartItems = cartCookieStr ? JSON.parse(cartCookieStr) : [];
    // set((state: CartStore) => {
    //   return {
    //     ...state,
    //     totalItems: cartItems.length,
    //     items: cartItems,
    //   };
    // });
  },
}));

export default useCartStore;
