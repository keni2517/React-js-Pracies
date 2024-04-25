import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Componet/Home';
import About from './Componet/About';
import Setting from './Componet/Setting';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/setting' element={<Setting/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
