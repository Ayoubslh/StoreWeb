// CartTypes.ts
export type CartItem = {
  _id?: string;
  quantity: number;
  product: {
    _id: string;
    name: string;
    brand: string;
    image: string;
    price: number;
  };
};

export type CartType = {
  _id: string;
  user: {
    name: string;
    email: string;
  };
  items: CartItem[];
  updatedAt: string;
  __v: number;
};

export type CartState = {
  items: CartItem[];
  addItem: (product: CartItem["product"]) => void;
  removeItem: (itemId: string) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  updateItemQuantity: (itemId: string, quantity: number) => void;
  setCart: (items: CartItem[]) => void;
};
