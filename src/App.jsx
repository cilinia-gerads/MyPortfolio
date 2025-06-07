// import './App.css'
import Navbar from './components/Navbar/Navbar'
import Intro from './components/Intro/Intro'
import AboutMe from './components/Aboutme/AboutMe'
import Projects from './components/Projects/Project'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
      <Navbar />
      <Intro />
      <hr />
      <AboutMe />
      <hr />
      <Projects />
      <hr />
      <Contact />
      <Footer />
    </>
  )
}

export default App
