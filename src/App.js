import './App.css';

import Home from './Components/Home';
import About from './Components/About';
import Project from './Components/Project';
import Contact from './Components/Contact';
import Github from './Components/Github';
import Skill from './Components/Skill';
import Navbaar from './Components/Navbaar';


function App() {
  return (
    <div className="">
    <Navbaar/>
    <div className="bg-gray-900 p-4 text-white py-5" >
    <Home/> 
    <About/>
    <Skill/>
    <Project/>
    <Github/>
    <Contact/>
    </div>
    </div>
  );
}

export default App;
