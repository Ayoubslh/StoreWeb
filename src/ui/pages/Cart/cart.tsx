import { useEffect, useState } from "react";
import CartItemCard from "./../../comps/CartCard";
import {  useNavigate } from "react-router-dom";
import { useCartStore } from "@/store/useCartStore";
import { useUserStore } from "@/store/useUser";
import { useCartQuery } from "@/apis/cart/GetCart";

export default function CartPage() {
  const isLoggedIn = useUserStore((state) => state.isAuthenticated);
  const setCart = useCartStore((state) => state.setCart);

  const navigate = useNavigate();
  const { data, isLoading, isError } = useCartQuery();
  const items = data?.data?.cart.items || [];

  const [cartItems, setCartItems] = useState<any[]>([]);
  console.log(data)

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
      return;
    }

    if (items.length > 0) {
      const itemsWithSelection = items.map((item : any) => ({
        ...item,
        selected: true,
        quantity: item.quantity || 1, // ensure quantity exists
      }));

      setCart(itemsWithSelection); // update global cart
      setCartItems(itemsWithSelection); // set local cart with `selected`
    }
  }, [data, isLoggedIn, navigate, setCart, items]);

  const toggleSelection = (id: string) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.product._id === id ? { ...item, selected: !item.selected } : item
      )
    );
  };

  const handleQuantityChange = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.product._id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const selectedItems = cartItems.filter((item) => item.selected);
  const total = selectedItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  if (isLoading) return <div className="p-4">Loading...</div>;
  if (isError) return <div className="p-4 text-red-500">Failed to load cart.</div>;


  return (
    <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8 text-black">
      {/* Items list */}
      <div className="lg:col-span-2 space-y-4">
        <h1 className="text-2xl font-bold mb-2">Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <div>Your cart is empty.</div>
        ) : (
          cartItems.map((item) => (
            <CartItemCard
              key={item.product._id}
              item={item.product}
              quantity={item.quantity}
              selected={item.selected}
              toggleSelection={toggleSelection}
              handleQuantityChange={handleQuantityChange}
            />
          ))
        )}
      </div>

      {/* Summary */}
      <div className="sticky top-20 h-fit bg-white shadow-md p-6 rounded-lg border text-black">
        <h2 className="text-xl font-bold mb-4">Summary</h2>
        <div className="space-y-2">
          {selectedItems.map((item) => (
            <div key={item._id} className="flex justify-between text-sm">
              <span>
                {item.product.name} x{item.quantity}
              </span>
              <span>${item.product.price * item.quantity}</span>
            </div>
          ))}
        </div>
        <hr className="my-4" />
        <div className="flex justify-between text-lg font-bold">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <button
          className="mt-6 w-full bg-primary text-white py-2 rounded hover:bg-primary-foreground transition"
          onClick={() =>
            selectedItems.length
              ? navigate("/checkout", {
                  state: { cartItems: JSON.stringify(selectedItems) },
                })
              : alert("Please select at least one item to proceed.")
          }
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}
