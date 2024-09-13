import './App.css'
import { Header } from './components/navigation/Header'
import { Footer } from './components/navigation/Footer'
import { Hero } from './components/navigation/Hero'
import { Projects } from './components/Projects'
import { Education } from './components/Education'
import { Skills } from './components/Skills'

function App() {

  return (
      <div className="w-full max-w-4xl mx-auto">
      <Header />
      <Hero />
      <Projects/>
      <Education />
      <Skills />
      <Footer />
      </div>
  )
}

export default App
