import { IoPhonePortraitOutline } from "react-icons/io5";
import { CiHeadphones } from "react-icons/ci";
import { IoIosLaptop } from "react-icons/io";
import { BsSmartwatch } from "react-icons/bs";
import VCard from "@/ui/comps/VerticalCard";
const categories = [
  {
    id: '1',
    name: 'Phones',
    icon: <IoPhonePortraitOutline className="text-black group-hover:text-primary  transition-all duration-500 -translate-y-[2px]" size={60} />,
  },
  {
    id: '2',
    name: 'Earphones',
    icon: <CiHeadphones className="text-black group-hover:text-primary  transition-all duration-500 -translate-y-[2px]" size={60} />,
  },
  {
    id: '3',
    name: 'Laptops',
    icon: <IoIosLaptop className="text-black group-hover:text-primary  transition-all duration-500 -translate-y-[2px]" size={60} />,
  },
  {
    id: '4',
    name: 'Smartwatches',
    icon: <BsSmartwatch className="text-black group-hover:text-primary  transition-all duration-500 -translate-y-[2px]" size={60} />,
  },
];

function Categories(){
  return (
    <div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8   justify-center items-center p-8">
      {categories.map((category) => (
        <VCard key={category.id} name={category.name} icon={category.icon} />
      ))}
    </div>
  );
}
export default Categories;