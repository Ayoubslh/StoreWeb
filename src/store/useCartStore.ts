// cartStore.ts
import { create } from 'zustand';
import type { CartState, CartItem } from './../Types/CartTypes';


export const useCartStore = create<CartState>((set, get) => ({
  items: [],

  addItem: (product) =>
    set((state) => {
      const existing = state.items.find((i) => i.product._id === product._id);
      if (existing) {
        return {
          items: state.items.map((i) =>
            i.product._id === product._id
              ? { ...i, quantity: i.quantity + 1 }
              : i
          ),
        };
      }
      return {
        items: [
          ...state.items,
          {
            
            product,
            quantity: 1,
          },
        ],
      };
    }),

  removeItem: (itemId) =>
    set((state) => ({
      items: state.items.filter((item) => item._id !== itemId),
    })),

  clearCart: () => set({ items: [] }),

  getTotalPrice: () =>
    get().items.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    ),

  updateItemQuantity: (itemId, quantity) =>
    set((state) => ({
      items: state.items.map((item) =>
        item._id === itemId ? { ...item, quantity } : item
      ),
    })),

  setCart: (fetchedItems) => set({ items: fetchedItems }),
}));
