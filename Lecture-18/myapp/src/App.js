import logo from './logo.svg';
import './App.css';
import React,{useRef} from "react"

function App() {
    const ref = useRef()

    const handleRef = () =>{
      ref.current.focus();
      //ref .current.style.display="none";
      ref .current.style.borderColor="red";
    }
  return (
    <div className="App">
      <input type='text' ref={ref}></input>
      <button onClick={handleRef}>Click me</button>
    </div>
  );
}

export default App;
