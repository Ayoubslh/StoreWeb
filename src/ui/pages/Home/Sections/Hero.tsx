function Hero() {
  return (
    <div className="bg-accent px-6 py-10 text-black w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      
      {/* Text Section */}
      <section className="flex flex-col items-center md:items-start text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
          Welcome to StoreWeb
        </h1>
        <p className="text-base sm:text-lg mb-6">
          Your one-stop shop for all your needs.
        </p>
        <button className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-secondary-dark transition">
          Shop Now
        </button>
      </section>

      {/* Image Section */}
      <section className="flex justify-center">
        <img
          src="/Hero7.jpg"
          alt="Hero"
          className="w-full max-w-md h-auto object-contain rounded-lg shadow-lg"
        />
      </section>

    </div>
  );
}

export default Hero;
