import '../styles/App.css';
import Button from './Button';
import Screen from './Screen';
import '../styles/Button.css';

import { calculatorButtons } from "../data/calculator-base-button-data";

function App() {
  function handleClick(value) {
    console.log(value)
  }
  return (
    <div>
      <h1>React Calculator</h1>
      <div className="App">
        <Screen/>
        <div className='button-wrapper'>
          {calculatorButtons.map((btn, i) => 
          <Button 
          key={btn.value}
          value={btn.value}
          text={btn.text}
          className={btn.type}
          type={btn.type}
          handleClick={handleClick}
          />)}
        </div>
      </div>
    </div>
  );
}

export default App;
