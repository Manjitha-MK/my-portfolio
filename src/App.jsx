import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Project'
import Skills from './components/Skills'
import AdminHomePage from './Admin/adminhomepage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Admin route */}
        <Route path="/admin/*" element={<AdminHomePage />} />

        {/* Main portfolio site route */}
        <Route
          path="/"
          element={
            <div className="bg-white text-gray-900 font-sans">
              <Navbar />
              <main className="pt-16">
                <section id="home"><Hero /></section>
                <section id="about"><About /></section>
                <section id="projects"><Projects /></section>
                <section id="skills"><Skills /></section>
                <section id="contact"><Contact /></section>
              </main>
              <Footer />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
