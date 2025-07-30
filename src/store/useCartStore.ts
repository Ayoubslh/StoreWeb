import {create} from 'zustand';
import type {CartState} from './../Types/CartTypes';

export const useCartStore = create<CartState>((set, get) => ({
    items: [],
    addItem: (item) => set((state) => 
        { 
            const existingItem = state.items.find(i => i._id === item._id);   
            if (existingItem) {
                return {
                    items: state.items.map(i =>
                        i._id === item._id ? { ...i, quantity: (i.quantity || 1) + 1 } : i
                    )
                };
            }
            return { items: [...state.items, { ...item, quantity: 1 }] };
        }),
    removeItem: (itemId) => set((state) => ({ items: state.items.filter(item => item._id !== itemId) })),
    clearCart: () => set({ items: [] }),
    getTotalPrice: () => get().items.reduce((total, item) => total + item.price, 0),
    updateItemQuantity: (itemId, quantity) => set((state) => ({
        items: state.items.map(item =>
            item._id === itemId ? { ...item, quantity } : item
        )
    }))
}));
