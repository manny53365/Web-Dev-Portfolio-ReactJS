import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/home/Home';
import About from './pages/about/About';
import Experience from './pages/experience/Experience';
import Projects from './pages/projects/Projects';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/experience' element={<Experience/>}/>
          <Route path='/projects' element={<Projects/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
