

import Navbar from './ui/comps/Navbar';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Footer from './ui/comps/Footer';
import{Routes, Route} from 'react-router-dom';
import PhoneDetailsPage from './ui/pages/item_details/details';
import CartPage from './ui/pages/Cart/cart';
import OrderPage from './ui/pages/Orders/Orders';
import FavouritesPage from './ui/pages/Favourites/favourite';
import Home from './ui/pages/Home/Home';


const queryClient = new QueryClient();


function App() {

  return (
    <QueryClientProvider client={queryClient}>
    <div className='bg-background text-whitemin-h-screen min-w-screen'>
      <p className='text-lg font-bold text-white text-center  bg-primary p-4'>
        Welcome to StoreWeb! Your one-stop shop for all your needs.
      </p>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<PhoneDetailsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/orders" element={<OrderPage />} />
        <Route path="/favourites" element={<FavouritesPage />} />
      </Routes>
      <Footer />
    </div>
    </QueryClientProvider>
  )
}

export default App
