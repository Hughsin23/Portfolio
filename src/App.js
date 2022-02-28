import './App.css';
import Navbar from './components/Navbar/Navbar.js'
import Projects from './components/Projects/Projects.js'
import About from "./components/About/About.js"
import Footer from "./components/Footer/Footer.js"
const _ = require('lodash')



function App() {







  return (
    <div className="App">
      <Navbar />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
