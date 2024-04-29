import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import { Contact } from './pages/Contact';
import { Navbar } from './Navbar';
import { useState, createContext } from 'react';

export const AppContext = createContext();

//state management using USeContext hook, this can be used when we need to avoid unnecsessary props getting 
//passed
function App() {
  const [user, setUser] = useState("Suba");

  return (<div className='App'>
    <AppContext.Provider value = {{user, setUser}}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h1> 404 PAGE NOT FOUND</h1>} />
        </Routes>
      </Router>
    </AppContext.Provider>
  </div>
  );

}





export default App


