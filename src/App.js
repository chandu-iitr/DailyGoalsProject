import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './Components/About'
import Carrers from './Components/Carrers'
import Contact from './Components/Contact'
import Footer from './Components/Footer';
import User from './Components/User';

function App() {
  return (
    <BrowserRouter>
        <Header/>
        
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/user/:id' element={<User />} />
          <Route path='/carrers' element={<Carrers />} />
        </Routes>

        <Footer/>
    </BrowserRouter>
  );
}

export default App;
