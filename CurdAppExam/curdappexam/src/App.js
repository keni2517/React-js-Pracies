import logo from './logo.svg';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Edit from './Components/Edit';
import Login, { SignInOne } from './Components/Login';
import Create from './Components/Create';
import Register, { SignUpOne } from './Components/Register';
import Navbar from './Components/Navbar';
import Home, { TableOne } from './Components/Home';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/home' element={<TableOne/>}/>
        <Route path='/edit/:id' element={<Edit/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/create' element={<Create/>}/>
        <Route path='/re' element={<Register/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
