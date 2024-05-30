import logo from './logo.svg';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Edit from './Componenets/Edit';
import Login from './Componenets/Login';
import Create from './Componenets/Create';
import Register from './Componenets/Register';
import Navbar from './Componenets/Navbar';
import { TableOne } from './Componenets/Home';


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
      {/* <BasicTable/> */}
    </div>
  );
}

export default App;
