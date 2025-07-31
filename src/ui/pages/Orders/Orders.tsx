import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import { useOrderStore } from "@/store/useOrderStore";



export default function OrderPage() {
  const rawOrders = useOrderStore((state) => state.orders);
const [order, setOrders] = useState(() =>
  rawOrders.map((order) => ({
    ...order,
    items: order.items.map((item) => ({
      ...item,
      selected: true,
    })),
  }))
);
console.log("Raw orders:", order);

  console.log("Order items:", order.map(o => o.items));
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 space-y-6 text-black">
    

      {order.map((order) => {
        const total = order.items.reduce(
          (sum, item) => sum + item.product.price * item.quantity,
          0
        );

        return (
          <div
            key={order._id}
            className="bg-white border shadow-sm p-6 rounded-xl space-y-4"
          >
            {/* Header */}
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-bold text-lg">{order._id}</h2>
                <p className="text-sm text-gray-500">{order.createdAt}</p>
              </div>
              <span className="text-sm text-primary font-semibold">
                {order.status}
              </span>
            </div>

            {/* Items */}
            <div className="space-y-3">
              {order.items.map((item) => (
                <div key={item.product._id} className="flex gap-4 items-center">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <div className="flex-1">
                    <p className="font-semibold">{item.product.name}</p>
                    <p className="text-sm text-gray-500">{item.product.brand}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">
                      Qty: {item.quantity}
                    </p>
                    <p className="font-semibold">
                      ${item.product.price * item.quantity}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Total */}
            <div className="flex justify-between items-center pt-2 border-t mt-4">
              <span className="font-bold text-lg">Total</span>
              <span className="font-bold text-lg">${total.toFixed(2)}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
