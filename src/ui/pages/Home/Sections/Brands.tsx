import { FaApple } from "react-icons/fa";
import { SiXiaomi } from "react-icons/si";
import { SiOneplus } from "react-icons/si";
import { SiSamsung } from "react-icons/si";
import { FaGoogle } from "react-icons/fa";
import { SiSony } from "react-icons/si";

const categories = [
  { id: '1', name: 'Apple', icon: <FaApple className="text-black group-hover:text-primary  transition-all duration-500 -translate-y-[2px]" size={80}/> },
  { id: '2', name: 'Xiaomi', icon: <SiXiaomi className="text-black group-hover:text-primary  transition-all duration-500 -translate-y-[2px]" size={80}/> },
  { id: '3', name: 'OnePlus', icon: <SiOneplus className="text-black group-hover:text-primary  transition-all duration-500 -translate-y-[2px]" size={80}/> },
  { id: '4', name: 'Samsung', icon: <SiSamsung className="text-black group-hover:text-primary  transition-all duration-500 -translate-y-[2px]" size={80}/> },
  { id: '5', name: 'Google', icon: <FaGoogle className="text-black group-hover:text-primary  transition-all duration-500 -translate-y-[2px]" size={80}/> },
  { id: '6', name: 'Sony', icon: <SiSony className="text-black group-hover:text-primary  transition-all duration-500 -translate-y-[2px]" size={80}/> },
];



import HCard from "@/ui/comps/HorizontalCards";


function Brands() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center items-center p-8 ">
      {categories.map((category) => (
        // <VCard key={category.id} name={category.name} icon={category.icon} />
        <HCard key={category.id} name={category.name} icon={category.icon} />
      ))}
    </div>
  );
}

export default Brands;