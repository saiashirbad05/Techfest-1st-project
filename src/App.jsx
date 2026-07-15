import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Features from './components/Features'
import ThemeDetail from './components/ThemeDetail'
import Timeline from './components/Timeline'
import Sponsors from './components/Sponsors'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Features />
        <ThemeDetail />
        <Timeline />
        <Sponsors />
      </main>
      <Footer />
    </div>
  )
}

export default App
