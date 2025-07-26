import Hero from "./Sections/Hero";
import Categories from "./Sections/categories";

function Home() {
  return (
    <div className=" flex flex-col items-center justify-center min-h-screen bg-background ">
      <Hero />
      <br className="w-full border-t border-gray-200 my-8" />
      <h2 className="text-5xl font-bold mb-6 text-primary">Shop by Category</h2>
      <p className="text-lg mb-8 text-gray-600">
        Explore our wide range of products
      </p>

      <Categories />
    </div>
  );
}
export default Home;
