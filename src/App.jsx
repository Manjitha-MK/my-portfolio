import './App.css'
import About from './components/About'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Project'
import Skills from './components/Skills'

function App() {


  return (
     <div className="bg-white text-gray-900 font-sans">
      <Navbar />
      <main className="pt-16">
        <section id='home'><Hero /></section>
        <section id='about'><About /></section>
        <section id='projects'><Projects /></section>
        <section id='skills'><Skills /></section>
      </main>
    </div>
  )
}

export default App
