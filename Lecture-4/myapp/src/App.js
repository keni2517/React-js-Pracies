import logo from './logo.svg';
import './App.css';
import Img from './Components/Img';
import App2 from './Components/Greeting';

function App() {
  return (
    <div className="App">
      <Img/>
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    <App2/>
    </div>
  );
}

export default App;
