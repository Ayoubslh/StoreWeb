import type { Item } from './Item';

export type order={
    _id?: string;
    
    items: Item[];
      address: string;
    name: string;
    email: string;
    city: string;
    zip: string;
    cardNumber: string;
    expiry: string;
    cvc: string;
    nameOnCard: string;
    totalPrice: number;
    orderDate: string;
    
    status: 'pending' | 'completed' | 'cancelled';
}

export type OrderState = {
    orders: order[];
    addOrder: (newOrder: order) => void;
    removeOrder: (orderId: string) => void;
    getOrderById: (orderId: string) => order | undefined;
    updateOrderStatus: (orderId: string, status: 'pending' | 'completed' | 'cancelled') => void;
};