import { FaShippingFast } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { BsShieldFillCheck } from "react-icons/bs";

import VCard from "@/ui/comps/VerticalCard";



const Virtues=[
    {name:"Fast Delivery", icon:<FaShippingFast color="black" size={60}/>, description:"We ensure your products reach you quickly and safely."},
    {name:"Quality Assurance", icon:<BsFillPatchCheckFill color="black" size={60}/>, description:"We guarantee the quality of our products with strict checks."},
    {name:"Customer Support", icon:<BiSupport color="black" size={60}/>, description:"Our support team is here to assist you with any queries."},
    {name:"Secure Payments", icon:<BsShieldFillCheck color="black" size={60} />, description:"We offer secure payment options for your peace of mind."},
]


function Virtue() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-8">
            {Virtues.map((virtue, index) => (
                <VCard key={index} name={virtue.name} icon={virtue.icon} description={virtue.description} />
            ))}
        </div>
    );
}

export default Virtue;
