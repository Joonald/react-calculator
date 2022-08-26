import '../styles/App.css';
import Button from './Button';
import Screen from './Screen';
import '../styles/Button.css';
import { useState } from 'react';
import { calculatorButtons } from "../data/calculator-base-button-data";

function App() {
  const [display, setDisplay] = useState('');
  const [calc, setCalc] = useState('');

  function handleClick ( value, type ) {
    switch (type) {
      case 'number':
        setDisplay(display + value);
        setCalc(calc + value);
        console.log(value);
        break;
      case 'operator':
        setDisplay(display + value);
        setCalc(calc + value);
        break;
      case 'enter':
        const result = eval(calc); //eslint-disable-line
        setDisplay(`${result}`);
        break;
      case 'clear':
        console.log(value);
        if (value === 'All Clear') {
          setDisplay('');
          setCalc('');
        } else {
          setDisplay(display.slice( 0 , -1 ))
        } break;
        default:
    }
  }

  return (
    <div>
      <h1>React Calculator</h1>
      <div className="App">
        <Screen text={ display ? display :'0'}/>
        <div className='button-wrapper'>
          {calculatorButtons.map((btn) => 
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
