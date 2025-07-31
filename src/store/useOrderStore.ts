import { create } from 'zustand';
import type { OrderState, order } from './../Types/OrderTypes';

export const useOrderStore = create<OrderState>((set, get) => ({
  orders: [],

  

  addOrder: (newOrder: order) =>
    set((state) => ({
      orders: [...state.orders, newOrder],
    })),

  removeOrder: (orderId: string) =>
    set((state) => ({
      orders: state.orders.filter((order) => order._id !== orderId),
    })),

  getOrderById: (orderId: string) =>
    get().orders.find((order) => order._id === orderId),

  updateOrderStatus: (
    orderId: string,
    status: 'pending' | 'shipped' | 'delivered' | 'cancelled' | 'deactivated'
  ) =>
    set((state) => ({
      orders: state.orders.map((order) =>
        order._id === orderId ? { ...order, status } : order
      ),
    })),
    setOrders: (orders: order[]) => set({ orders }),
    
}));
