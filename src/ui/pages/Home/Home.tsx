import Hero from "./Sections/Hero";
import Categories from "./Sections/categories";
import Products from "./Sections/PhonesProds";
import Virtue from "./Sections/Virtue";
import { Button } from "@/components/ui/button";
import { FaArrowRight } from "react-icons/fa";
import Brands from "./Sections/Brands";
import BlogSection from "./Sections/Blog";
import Reviews from "./Sections/Reviews";

function Home() {
  return (
    
    <div className="flex flex-col items-center min-h-screen bg-background">
      
      {/* Hero Section */}
      <Hero />

      {/* Separator */}
      <hr className="w-[80%] border-t border-gray-200 my-12" />

      {/* Categories Section */}
      <section className="text-center px-4">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-primary">Shop by Category</h2>
        <p className="text-lg text-gray-600 mb-8">Explore our wide range of products</p>
        <Categories />
      </section>

      <hr className="w-[80%] border-t border-gray-200 my-12" />

      {/* Products Section */}
      <section className="text-center px-4">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-primary">Featured Products</h2>
        <p className="text-lg text-gray-600 mb-8">Discover our most popular products</p>
        <Products />
        <Button size="lg" className="mt-6 bg-primary text-white px-6 py-3 rounded-lg hover:bg-white hover:text-primary transition">
          See more <FaArrowRight className="inline ml-2" />
        </Button>
      </section>

      <hr className="w-[80%] border-t border-gray-200 my-12" />
        {/* New Arrivals Section */}
        <section className="text-center px-4">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-primary">New Arrivals</h2>
          <p className="text-lg text-gray-600 mb-8">Check out the latest additions to our store</p>
          <Products />
        </section>
           <hr className="w-[80%] border-t border-gray-200 my-12" />
      {/* Brands Section */}
      <section className="text-center px-4">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-primary">Brands</h2>
        <p className="text-lg text-gray-600 mb-8">Explore products from your favorite brands</p>
        <Brands />
      </section>

      <hr className="w-[80%] border-t border-gray-200 my-12" />
      {/* All Products Section */}
      <section className="text-center px-4">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-primary">Our Products</h2>
        <p className="text-lg text-gray-600 mb-8">Browse our complete collection</p>
        <Products />
        <Button size="lg" className="mt-6 bg-primary text-white px-6 py-3 rounded-lg hover:bg-white hover:text-primary transition">
          See More <FaArrowRight className="inline ml-2" />
        </Button>
      </section>

   

      <hr className="w-[80%] border-t border-gray-200 my-12" />
        {/*Blog Section */}
      <section className="text-center px-4">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-primary">From Our Blog</h2>
        <p className="text-lg text-gray-600 mb-8">Latest news and updates from our store</p>
        <BlogSection />
      
      </section>
       <hr className="w-[80%] border-t border-gray-200 my-12" />
      {/* Reviews Section */}
     
      <section className="text-center px-4">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-primary">What Our Customers Say</h2>
        <p className="text-lg text-gray-600 mb-8">Read reviews from our satisfied customers</p>
         <Reviews />
      </section>
      <hr className="w-[80%] border-t border-gray-200 my-12" />
    

      {/* Virtue Section */}
      <Virtue />
    </div>
  );
}

export default Home;
