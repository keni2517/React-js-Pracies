import logo from './logo.svg';
import './App.css';
import ComA from './Components/ComA';
import { createContext } from 'react';

const Context1 = createContext()

function App() {
  return (
    <div className="App">
      <Context1.Provider value="keni">
      <ComA/>
</Context1.Provider>
    </div>
  );
}

export {Context1};
export default App;
