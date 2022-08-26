import '../styles/App.css';
import Button from './Button';
import Screen from './Screen';
import '../styles/Button.css';
import { useState } from 'react';
import { calculatorButtons } from "../data/calculator-base-button-data";

function App() {
  const [opA, setA] = useState('');
  const [opB, setB] = useState('');
  const [operator, setOp] = useState('');
  const [display, setDisplay] = useState('');
  const ACCEPTED_OPS = ['+','-','*','/'];

  function calculate (a, b, op) {
    if (isNaN(a) === true || isNaN(b) === true ){
      console.log('Go away hacker');
      return;
    } else {
      if ( ACCEPTED_OPS.indexOf(op) === -1 ) {
        console.log('Not an acceptable operator');
      } else {
        let result = '';
        switch (op) {
          case '+':
            result = Number(a) + Number(b);
            return result;
          case '-':
            result = Number(a) - Number(b);
            return result;
          case '/':
            result = Number(a) / Number(b);
            return result;
          case '*':
            result = Number(a) * Number(b);
            return result;
          default:   
        }
      }
    }
  }

  function handleClick ( value, type ) {
    switch (type) {
      case 'number':
        if (operator === '') {
          setA(opA + value);
          setDisplay(display + value);
          console.log(opA,'a');
        } else {
          setB(opB + value);
          setDisplay(display + value);
          console.log(opB,'b');
        }
        break;
      case 'operator':
        setOp(operator + value);
        setDisplay(display + value);
        break;
      case 'enter':
        const result = calculate(opA, opB, operator);
        setDisplay(`${result}`);
        break;
      case 'clear':
        console.log(value);
        if (value === 'All Clear') {
          setDisplay('');
          setA('');
          setB('');
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
