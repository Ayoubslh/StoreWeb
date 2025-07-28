import { useState } from "react";
import CartItemCard from "./../../comps/CartCard";

const initialCart = [
  {
    id: "1",
    name: "Galaxy Z Fold5",
    brand: "Samsung",
    image: "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-z-fold5-1.jpg",
    price: 1799,
    quantity: 1,
    selected: true,
  },
  {
    id: "2",
    name: "iPhone 15 Pro Max",
    brand: "Apple",
    image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-pro-max-1.jpg",
    price: 1299,
    quantity: 2,
    selected: false,
  },
];

export default function CartPage() {
  const [cartItems, setCartItems] = useState(initialCart);

  const toggleSelection = (id: string) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, selected: !item.selected } : item
      )
    );
  };

  const handleQuantityChange = (id: string, delta: number) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const selectedItems = cartItems.filter(item => item.selected);
  const total = selectedItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8  text-black">
      {/* Items list */}
      <div className="lg:col-span-2 space-y-4">
        <h1 className="text-2xl font-bold mb-2">Shopping Cart</h1>
        {cartItems.map(item => (
          <CartItemCard
            key={item.id}
            item={item}
            toggleSelection={toggleSelection}
            handleQuantityChange={handleQuantityChange}
          />
        ))}
      </div>

      {/* Summary */}
      <div className="sticky top-20 h-fit bg-white shadow-md p-6 rounded-lg border  text-black">
        <h2 className="text-xl font-bold mb-4">Summary</h2>
        <div className="space-y-2">
          {selectedItems.map(item => (
            <div key={item.id} className="flex justify-between text-sm ">
              <span>{item.name} x{item.quantity}</span>
              <span>${item.price * item.quantity}</span>
            </div>
          ))}
        </div>
        <hr className="my-4" />
        <div className="flex justify-between text-lg font-bold">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <button className="mt-6 w-full bg-primary text-white py-2 rounded hover:bg-primary-foreground transition">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}
