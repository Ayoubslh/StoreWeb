import { IoCheckmarkCircleOutline } from "react-icons/io5";

const orders = [
  {
    id: "ORD-872394",
    date: "2025-07-28",
    status: "Delivered",
    items: [
      {
        id: "1",
        name: "Samsung Galaxy Z Fold5",
        brand: "Samsung",
        image:
          "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-z-fold5-1.jpg",
        price: 1799,
        quantity: 1,
      },
    ],
  },
  {
    id: "ORD-872395",
    date: "2025-07-20",
    status: "Processing",
    items: [
      {
        id: "2",
        name: "iPhone 15 Pro Max",
        brand: "Apple",
        image:
          "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-pro-max-1.jpg",
        price: 1299,
        quantity: 2,
      },
    ],
  },
  {
    id: "ORD-872396",
    date: "2025-07-10",
    status: "Shipped",
    items: [
      {
        id: "3",
        name: "OnePlus 12",
        brand: "OnePlus",
        image:
          "https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-12-1.jpg",
        price: 899,
        quantity: 1,
      },
    ],
  },
];

export default function OrderPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 space-y-6 text-black">
      <h1 className="text-2xl font-bold mb-4">My Orders</h1>

      {orders.map((order) => {
        const total = order.items.reduce(
          (sum, item) => sum + item.price * item.quantity,
          0
        );

        return (
          <div
            key={order.id}
            className="bg-white border shadow-sm p-6 rounded-xl space-y-4"
          >
            {/* Header */}
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-bold text-lg">{order.id}</h2>
                <p className="text-sm text-gray-500">{order.date}</p>
              </div>
              <span className="text-sm text-primary font-semibold">
                {order.status}
              </span>
            </div>

            {/* Items */}
            <div className="space-y-3">
              {order.items.map((item) => (
                <div key={item.id} className="flex gap-4 items-center">
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
