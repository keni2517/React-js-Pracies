import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar/Navbar';
import Home from './Pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './Pages/About';
import Data from './Pages/Data';
import Contact from './Pages/Contact';
import Login from './Pages/Login';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/home' element={Data.map((cva, ind) => {
          return <Home key={ind} name={cva.name} age={cva.age} id={cva.id} img={cva.img} />
        })} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/login' element={<Login/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
