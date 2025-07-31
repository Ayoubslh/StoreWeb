import { useEffect } from "react";
import { useOrderStore } from "@/store/useOrderStore";
import { useOrders } from "@/apis/Orders/GetOrders";

export default function OrderPage() {
  const { data, isLoading, isError } = useOrders();
  const setOrders = useOrderStore((state) => state.setOrders);

  // Store orders in global store
  useEffect(() => {
    if (data?.data?.orders && typeof setOrders === "function") {
      setOrders(data.data.orders);
    }
  }, [data, setOrders]);

  // Transform and flatten orders
  const orderItems = data?.data.orders.map((order: any) => ({
    ...order,
    items: order.items.map((item: any) => ({
      _id: item._id,
      name: item.product.name,
      brand: item.product.brand,
      price: item.product.price,
      image: item.product.image,
      quantity: item.quantity,
    })),
  })) || [];

  if (isLoading) return <p>Loading orders...</p>;
  if (isError) return <p>Failed to load orders.</p>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 space-y-6 text-black">
      {orderItems.map((order) => {
        const total = order.items.reduce(
          (sum: number, item: any) => sum + item.price * item.quantity,
          0
        );

        return (
          <div
            key={order._id}
            className="bg-white border shadow-sm p-6 rounded-xl space-y-4"
          >
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-bold text-lg">{order.orderid}</h2>
                <p className="text-sm text-gray-500">
                  {new Date(order.createdAt).toLocaleString()}
                </p>
              </div>
              <span className="text-sm text-primary font-semibold">
                {order.status}
              </span>
            </div>

            <div className="space-y-3">
              {order.items.map((item: any) => (
                <div key={item._id} className="flex gap-4 items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <div className="flex-1">
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-sm text-gray-500">{item.brand}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">
                      Qty: {item.quantity}
                    </p>
                    <p className="font-semibold">
                      ${item.price * item.quantity}
                    </p>
                  </div>
                </div>
              ))}
            </div>

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
