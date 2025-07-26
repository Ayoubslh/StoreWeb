
import Home from './ui/pages/Home/Home';
import Navbar from './ui/comps/Navbar';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Footer from './ui/comps/Footer';




function App() {

  return (
    <QueryClientProvider client={new QueryClient()}>
    <div className='bg-background text-white min-h-screen min-w-screen'>
      <p className='text-lg font-bold text-white text-center  bg-primary p-4'>
        Welcome to StoreWeb! Your one-stop shop for all your needs.
      </p>
      <Navbar />
      <Home />
      <Footer />
    </div>
    </QueryClientProvider>
  )
}

export default App
