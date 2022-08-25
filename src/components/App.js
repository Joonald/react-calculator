import '../styles/App.css';
import Button from './Button';
import { calculatorButtons } from "../data/calculator-base-button-data";

function App() {
  function handleClick(value) {
    console.log(value)
  }
  return (
    <div className="App">
      <h1>React Calculator</h1>
      {calculatorButtons.map((btn, i) => 
      <Button value={btn.value} handleClick={handleClick} text={btn.text} key={i}/>)}
    </div>
  );
}

export default App;
