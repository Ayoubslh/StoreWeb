import { Button } from "@/components/ui/button";


function Navbar() {
  const navLink =
    "relative text-primary text-xl font-medium  transition  duration-300 hover:text-primary-foreground underline-animation";

  return (
    <nav className="bg-white sticky top-0 w-full p-6 shadow-md flex flex-wrap sm:gap-0 justify-between items-center z-50">
   
      <div className="text-2xl font-bold text-primary">StoreWeb</div>

      
      <ul className="hidden md:flex space-x-6">
        <li><a href="/" className={navLink}>Shop</a></li>
        <li><a href="/products" className={navLink}>All Products</a></li>
        <li><a href="/brands" className={navLink}>Brands</a></li>
      </ul>

     

      {/* Auth Buttons */}
      <div className="flex space-x-2">
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
    </nav>
  );
}

export default Navbar;
