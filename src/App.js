import './App.css';
import CardComponent from './components/CardComponent';
import {useState} from "react"

function App() {
  const [backgroundColor, setBackgroundColor] = useState("000000")

  return (
    <div className="App">
      <CardComponent backgroundColor={backgroundColor} setBackgroundColor={setBackgroundColor}/>
    </div>
  );
}

export default App;
