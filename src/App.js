import './App.css';
import Navbar from './components/Navbar/Navbar'
import Projects from './components/Projects/Projects'
import About from "./components/About/About.js"

const _ = require('lodash')



function App() {







  return (
    <div className="App">
      <Navbar />
      <About />
      <Projects />
    </div>
  );
}

export default App;
