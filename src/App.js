import './App.scss';
import Layout from './components/Layout/Layout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
//import Experience from './components/Experience/Experience';
//import Project from './components/Project/Project';
//import Education from './components/Education/Education';
import Contact from './components/Contact/Contact';
import Experience from './components/Experience/Experience';
import Project from './components/Project/Project';
import Education from './components/Education/Education';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/project" element={<Project />} />
          <Route path="/education" element={<Education />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;



/*
<div className="App">
      <header className="App-header">
      <Home />
        <img src={logo} className="App-logo" alt="logo" />
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
*/
//>npm i @emailjs/browser - contact form