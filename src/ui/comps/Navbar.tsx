import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLink =
    "relative text-primary text-lg font-medium transition duration-300 hover:text-primary-foreground underline-animation";

  return (
    <nav className="bg-white sticky top-0 w-full px-6 py-4 shadow-md flex justify-between items-center z-50">
      
      {/* Left - Hamburger menu */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-primary focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Center - Logo */}
      <div className="text-2xl font-bold text-primary">StoreWeb</div>

      {/* Right - Links (Desktop only) */}
      <ul className="hidden md:flex space-x-6 items-center">
        <li><Link to="/" className={navLink}>Shop</Link></li>
        <li><Link to="/AllProds" className={navLink}>All Products</Link></li>
        <li><Link to="/brands" className={navLink}>Brands</Link></li>
      </ul>

      {/* Auth Buttons (always visible) */}
      <div className="hidden md:flex space-x-2">
        <div className="flex space-x-2">
        <Button className="bg-white  border border-primary hover:bg-white">
          <Link to="/cart"><FaCartShopping  className="text-primary" /></Link>
        </Button>
        <Button className="bg-white  border border-primary hover:bg-white">
          <Link to="/favourites"><FaHeart className="text-primary"  /></Link>
        </Button>
        </div>
        <Button className="bg-primary text-white hover:bg-white hover:text-primary border border-primary">
          <a href="/login">Login</a>
        </Button>
        <Button
          variant="outline"
          className="text-primary hover:bg-primary hover:text-white border border-primary"
        >
          <a href="/register">Register</a>
        </Button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center space-y-4 py-6 md:hidden z-40">
          <Link to="/" className={navLink}>Shop</Link>
          <Link to="/AllProds" className={navLink}>All Products</Link>
          <Link to="/brands" className={navLink}>Brands</Link>

               <div className="flex space-x-2">
        <Button className="bg-white  border border-primary hover:bg-white">
          <Link to="/cart"><FaCartShopping  className="text-primary" /></Link>
        </Button>
        <Button className="bg-white  border border-primary hover:bg-white">
          <Link to="/favourites"><FaHeart className="text-primary"  /></Link>
        </Button>
        </div>
          <div className="flex space-x-2 pt-2">
         
            <Button className="bg-primary text-white hover:bg-white hover:text-primary border border-primary">
              <a href="/login">Login</a>
            </Button>
            <Button
              variant="outline"
              className="text-primary hover:bg-primary hover:text-white border border-primary"
            >
              <a href="/register">Register</a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
