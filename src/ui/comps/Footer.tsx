

function Footer() {
  return (
    <footer className="bg-primary text-white py-4 bottom-0 w-full">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} StoreWeb. All rights reserved.</p>
        <p>Follow us on social media!</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#" className="text-white hover:text-gray-400">Facebook</a>
          <a href="#" className="text-white hover:text-gray-400">Twitter</a>
          <a href="#" className="text-white hover:text-gray-400">Instagram</a>
        </div>
      </div>
    </footer>
  );
}
export default Footer;