import './App.css';
import Topbar from './Components/Topbar';
import Homepage from './Components/Homepage';
import About from './Components/About';
import Skills from './Components/Skills';
import Qualification from './Components/Qualification';
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Topbar/>
      <Homepage/>
      <About/>
      <Skills/>
      <Qualification/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
