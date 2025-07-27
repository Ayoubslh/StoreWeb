

function Hero() {
  return (
    <div className="bg-accent  p-8 text-black text-center w-full mx-auto h-full  grid grid-cols-2 justify-center items-center">
       <section className="flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to StoreWeb</h1>
      <p className="text-lg mb-6">Your one-stop shop for all your needs.</p>
      <button className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-secondary-dark transition">
        Shop Now
      </button>
      </section>
        <section className="flex justify-center">
            <img
            src="/Hero7.jpg"
            alt="Hero"
            className="w-full max-w-md h-auto object-cover rounded-lg shadow-lg"
            />
        </section>
      
           
        
    </div>
  );
}
export default Hero;