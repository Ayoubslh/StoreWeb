import { IoPhonePortraitOutline } from "react-icons/io5";
import { FaTabletAlt } from "react-icons/fa";
import { IoIosLaptop } from "react-icons/io";
import { BsSmartwatch } from "react-icons/bs";
import VCard from "@/ui/comps/VerticalCard";
const categories = [
  {
    id: '1',
    name: 'Phone',
    icon: <IoPhonePortraitOutline className="text-black group-hover:text-primary  transition-all duration-500 -translate-y-[2px]" size={60} />,
  },
  {
    id: '2',
    name: 'Tablet',
    icon: <FaTabletAlt className="text-black group-hover:text-primary  transition-all duration-500 -translate-y-[2px]" size={60} />,
  },
  {
    id: '3',
    name: 'Laptop',
    icon: <IoIosLaptop className="text-black group-hover:text-primary  transition-all duration-500 -translate-y-[2px]" size={60} />,
  },
  {
    id: '4',
    name: 'Smartwatche',
    icon: <BsSmartwatch className="text-black group-hover:text-primary  transition-all duration-500 -translate-y-[2px]" size={60} />,
  },
];

function Categories(){
  return (
    <div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8   justify-center items-center p-8">
      {categories.map((category) => (
        <VCard key={category.id} name={category.name} icon={category.icon} description="" />
      ))}
    </div>
  );
}
export default Categories;