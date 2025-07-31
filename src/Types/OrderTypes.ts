import type { Item } from "./Item";

export type order = {
  _id?: string;
  orderid?: string;
  items: {
    product: Item;
    quantity: number;
  }[];
  shippingAddress: {
    street: string;
    city: string;
    zip: string;
    country: string;
  };
  totalAmount: number;
  totalPrice: number;
  deliveryDate: string;
  status: "pending" | "shipped" | "delivered" | "cancelled" | "deactivated";
  createdAt?: string;
};

export type OrderState = {
  orders: order[];
  addOrder: (newOrder: order) => void;
  removeOrder: (orderId: string) => void;
  getOrderById: (orderId: string) => order | undefined;
  updateOrderStatus: (
    orderId: string,
    status: "pending" | "shipped" | "delivered" | "cancelled" | "deactivated"
  ) => void;
};
