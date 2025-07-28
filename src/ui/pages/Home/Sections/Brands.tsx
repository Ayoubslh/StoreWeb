import { FaApple } from "react-icons/fa";
import { SiXiaomi } from "react-icons/si";
import { SiOneplus } from "react-icons/si";
import { SiSamsung } from "react-icons/si";

const categories = [
  { id: '1', name: 'Apple', icon: <FaApple color="black" size={60}/> },
  { id: '2', name: 'Xiaomi', icon: <SiXiaomi color="black" size={60}/> },
  { id: '3', name: 'OnePlus', icon: <SiOneplus color="black" size={60}/> },
  { id: '4', name: 'Samsung', icon: <SiSamsung color="black" size={60}/> },
];


import VCard from "@/ui/comps/VerticalCard";


function Brands() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center items-center p-8 ">
      {categories.map((category) => (
        <VCard key={category.id} name={category.name} icon={category.icon} />
      ))}
    </div>
  );
}