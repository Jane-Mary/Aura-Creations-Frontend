import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FeaturedPlanners from './components/FeaturedPlanners'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <HeroSection />
      <FeaturedPlanners />
      <Footer />
    </div>
  )
}

export default App
