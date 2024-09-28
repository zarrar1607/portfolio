import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './components/Layout/Layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import Experience from './components/Experience/Experience';
import Project from './components/Project/Project';
import Education from './components/Education/Education';
import Resume from './components/Resume/Resume';


function App() {
  return (
    <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/project" element={<Project />} />
          <Route path="/education" element={<Education />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
  );
}

export default App;



/*
function App() {
  return (
<div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>
          ABCD
        </p>
      </header>
    </div>
    
  );
}

export default App;
*/
//>npm i @emailjs/browser - contact form

//https://react-spring.dev/docs/concepts/animated-elements
//https://www.copycat.dev/blog/react-animation-libraries/
//https://www.react-reveal.com/
