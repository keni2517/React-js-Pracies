
import './App.css';
import {BrowserRouter, Routes , Route} from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Pages/Home';
import Css from './Components/Pages/Css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/html-css' element={<Css/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
