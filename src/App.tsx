import Navigation from './components/navigation'
import Hero from './components/hero'
import mobilehero from './assets/images/image-hero-mobile.png'
import desktophero from './assets/images/image-hero-desktop.png'
import './App.css'

function App() {

  return (
    <div className=' font-epilogue bg-[hsl(0,0%,98%)]'>
      <div className=' flex flex-col'>
        <Navigation/>
        <img src={mobilehero} alt="image-hero-mobile" className=' lg:hidden' />
        <div className=' lg:flex lg:px-44 lg:gap-4 lg:mt-10'>
          <img src={desktophero} alt="image-hero-desktop" className='hidden lg:flex lg:order-2 lg:w-full lg:h-full' />
          <Hero/>
        </div>
        
      </div>
    </div>
  )
}

export default App
