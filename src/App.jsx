import Home from './components/Layouts/Home/index';
import About from './components/Layouts/About/index';
import Skills from './components/Layouts/Skills/index';
import Contact from './components/Layouts/Contact/index';
import Services from './components/Layouts/Services';
import Footer from './components/Layouts/Footer';
import Projects from './components/Layouts/Projects';
import { useDispatch, useSelector } from 'react-redux';

const App = () => {
  const isDarkMode = useSelector(state=>state.darkMode.status)
  return (
    <div className={`
    ${isDarkMode?'bg-black text-white':'bg-white'}`}>
    <Home />
    <About />
    <Skills />
    <Services />
    <Projects />
    <Contact />
    <Footer />
    </div>
  )
}

export default App