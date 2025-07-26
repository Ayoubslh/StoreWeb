
import Home from './ui/pages/Home/Home';
import Navbar from './ui/comps/Navbar';




function App() {

  return (
    <div className='bg-background text-white min-h-screen min-w-screen'>
      <p className='text-lg font-bold text-white text-center  bg-primary p-4'>
        Welcome to StoreWeb! Your one-stop shop for all your needs.
      </p>
      <Navbar />
      <Home />
    </div>
  )
}

export default App
