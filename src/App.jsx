import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustedBy from './components/TrustedBy'
import TrainingPrograms from './components/TrainingPrograms'
import PlacementServices from './components/PlacementServices'
import WhyChoose from './components/WhyChoose'
import PlacementTimeline from './components/PlacementTimeline'
import StudentBenefits from './components/StudentBenefits'
import StatsCounter from './components/StatsCounter'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import LoadingScreen from './components/LoadingScreen'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {isLoading && <LoadingScreen />}
      {!isLoading && (
        <div className="min-h-screen bg-white">
          <div className="loading-bar" />
          <Navbar />
          <main>
            <Hero />
            <TrustedBy />
            <TrainingPrograms />
            <PlacementServices />
            <WhyChoose />
            <PlacementTimeline />
            <StudentBenefits />
            <StatsCounter />
            <Testimonials />
            <FAQ />
            <ContactForm />
          </main>
          <Footer />
        </div>
      )}
    </>
  )
}

export default App
