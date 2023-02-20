import './App.css';
import Topbar from './Topbar';
import Homepage from './Homepage';
import About from './About';
import Skills from './Skills';
import Qualification from './Qualification';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Footer from './Footer';

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
