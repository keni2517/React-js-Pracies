import logo from './logo.svg';
import './App.css';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Error from './Components/Error';

function App() {
  const router = createBrowserRouter ([
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"/about",
      element:<About/>
      
    },
    {
      path:"/error",
      element:<Error/>

    }
  ])

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
