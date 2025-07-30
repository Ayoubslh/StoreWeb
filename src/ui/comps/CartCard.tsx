import { IoCheckmark, IoEllipseOutline, IoAdd, IoRemove } from "react-icons/io5";
import {Link} from "react-router-dom";


interface CartItem {
  _id: string;
  name: string;
  brand: string;
  image: string;
  price: number;
  quantity: number;
  selected: boolean;
}

interface Props {
  item: CartItem;
  toggleSelection: (id: string) => void;
  handleQuantityChange: (id: string, delta: number) => void;
}

export default function CartItemCard({
  item,
  toggleSelection,
  handleQuantityChange,
}: Props) {
  return (
    
    <div
      className={`flex items-center gap-4 p-4 rounded-xl border-2 w-full h-36 transition-all duration-300
        ${item.selected
          ? "border-primary bg-primary/10 shadow-inner"
          : "border-gray-300 bg-gray-100"}
      `}
    >
      {/* Selection Button */}
      <button
        onClick={() => toggleSelection(item._id)}
        className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300
          ${item.selected ? "bg-primary" : "bg-gray-400"}
        `}
      >
        {item.selected ? (
          <IoCheckmark className="text-white text-sm" />
        ) : (
          <IoEllipseOutline className="text-white text-sm" />
        )}
      </button>

      {/* Product Image */}
      <Link to={`/details/${item._id}`} className="h-full aspect-square overflow-hidden rounded-md">
      <div className="h-full aspect-square overflow-hidden rounded-md">
        <img
          src={item.image}
          alt={item.name}
          className="object-cover h-full w-full"
        />
      </div>
      </Link>

      {/* Product Info and Controls */}
      <div className="flex flex-col justify-between h-full flex-1 py-1">
        <div>
          <h3 className="font-bold text-lg">{item.name}</h3>
          <p className="text-gray-600">{item.brand}</p>
        </div>

        <div className="flex items-center justify-between">
          <span className="font-bold text-lg">${item.price}</span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleQuantityChange(item._id, -1)}
              className="bg-gray-200 w-7 h-7 flex items-center justify-center rounded-full"
            >
              <IoRemove size={16} />
            </button>
            <span className="font-bold">{item.quantity}</span>
            <button
              onClick={() => handleQuantityChange(item._id, 1)}
              className="bg-gray-200 w-7 h-7 flex items-center justify-center rounded-full"
            >
              <IoAdd size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
   
  );
}
