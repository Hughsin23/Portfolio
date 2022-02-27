import './App.css';
import Navbar from './components/Navbar/Navbar'
import Projects from './components/Projects/Projects'
import About from "./components/About/About.js"
import Flipcard from "./components/project_flipcards/Flipcards"

const _ = require('lodash')



function App() {







  return (
    <div className="App">
      <Navbar />
      <Flipcard projectName="tictactoe" />
      {/* <About />
      <Projects /> */}
    </div>
  );
}

export default App;
