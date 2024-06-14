import React, { useState } from 'react';
import './styles/calculator.css';

const Calc = () => {
  const [input, setInput] = useState('');

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        setInput(eval(input).toString());
      } catch (e) {
        setInput('Error');
      }
      return;
    }

    if (value === 'C') {
      setInput('');
      return;
    }

    setInput(input + value);
  };

  return (
    <div className="cal">
      <div className="display">{input}</div>
      <div className="buttons">
        {['7', '8', '9', '/'].map((value) => (
          <button key={value} onClick={() => handleButtonClick(value)}>
            {value}
          </button>
        ))}
        {['4', '5', '6', '*'].map((value) => (
          <button key={value} onClick={() => handleButtonClick(value)}>
            {value}
          </button>
        ))}
        {['1', '2', '3', '-'].map((value) => (
          <button key={value} onClick={() => handleButtonClick(value)}>
            {value}
          </button>
        ))}
        {['0', '.', '=', '+'].map((value) => (
          <button key={value} onClick={() => handleButtonClick(value)}>
            {value}
          </button>
        ))}
        <button onClick={() => handleButtonClick('C')}>C</button>
      </div>
    </div>
  );
};

export default Calc;
