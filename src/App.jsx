import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'

function App() {


  return (
     <div className="bg-white text-gray-900 font-sans">
      <Navbar />
      <main className="pt-16">
        <Hero />
      </main>
    </div>
  )
}

export default App
