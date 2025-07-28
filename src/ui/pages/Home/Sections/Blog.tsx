const blogPosts = [
  {
    title: "Samsung Galaxy S24 Ultra Review",
    image:
      "https://fdn.gsmarena.com/imgroot/reviews/24/samsung-galaxy-s24-ultra/lifestyle/-1024w2/gsmarena_001.jpg",
    link: "https://www.gsmarena.com/samsung_galaxy_s24_ultra-review-2661.php",
  },
   {
    title: "iPhone 15 Pro Max Hands-On",
    image:
      "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-pro-max-1.jpg",
    link: "https://www.gsmarena.com/apple_iphone_15_pro_max-12548.php",
  },
  {
    title: "OnePlus 12 In-Depth Camera Review",
    image:
      "https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-12-1.jpg",
    link: "https://www.gsmarena.com/oneplus_12-review-2665.php",
  },
];

export default function BlogSection() {
  return (
    <section className="py-12 px-4 md:px-12">
      

      <div className="grid md:grid-cols-3 gap-6">
        {/* Featured Large Post */}
        <a
          href={blogPosts[0].link}
          target="_blank"
          rel="noopener noreferrer"
          className="relative group col-span-1 md:col-span-2 rounded-xl overflow-hidden bg-white shadow-lg hover:shadow-xl transition duration-300"
        >
          <img
            src={blogPosts[0].image}
            alt={blogPosts[0].title}
            className="w-full h-[360px] object-contain group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6">
            <h3 className="text-white text-2xl font-bold group-hover:text-primary transition-colors duration-300">
              {blogPosts[0].title}
            </h3>
            <p className="text-gray-300 text-sm mt-2">Read full review →</p>
          </div>
        </a>

        {/* Two smaller posts */}
        <div className="flex flex-col gap-6">
          {blogPosts.slice(1).map((post, index) => (
            <a
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className="relative group rounded-xl overflow-hidden bg-white shadow-md hover:shadow-xl transition duration-300"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4">
                <h4 className="text-white text-lg font-semibold group-hover:text-primary transition-colors duration-300">
                  {post.title}
                </h4>
                <p className="text-gray-300 text-sm mt-1">Read more →</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
