import './App.css';
import Navbar from './components/Navbar/Navbar'
import Projects from './components/Projects/Projects'
import {Routes, Route, Link} from 'react-router-dom'

import Home from "./components/Home/Home.js"

const _ = require('lodash')



function App() {







  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/projects' element={<Projects />}/>

      </Routes>
    </div>
  );
}

export default App;
