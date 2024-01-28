import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/home/Home';
import Skills from './pages/skills/Skills';
import Experience from './pages/experience/Experience';
import Projects from './pages/projects/Projects';
import Login from './pages/login/Login';
// import Signup from './pages/signup/Signup';
import AddExperience from './pages/experience/AddExperience';
import AddProject from './pages/projects/AddProject';
import AddSkill from './pages/skills/AddSkill';

import './App.css';

function App() {

  const { user } = useAuthContext();

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/skills' element={<Skills/>}/>
          <Route path='/experience' element={<Experience/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/login' element={<Login/>}/>
          {/* <Route path='/signup' element={<Signup />}/> */}
          <Route path='/addskill' element={user ? <AddSkill /> : <Navigate to='/' />}/>
          <Route path='/addproject' element={user ? <AddProject /> : <Navigate to='/' />}/>
          <Route path='/addexperience' element={user ? <AddExperience /> : <Navigate to='/' />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
