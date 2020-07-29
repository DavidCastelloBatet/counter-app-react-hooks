import React, { useState } from "react";
import PropTypes from "prop-types";

const CounterApp = ({ value }) => {
  const [counter, setCounter] = useState(value);

  const handleAdd = () => {
    setCounter(counter + 1);
    //setCounter((counter) => counter +1);
  };

  const handleReset = () => {
    setCounter(value);
  };

  const handleRest = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <header>
        <h1>Counter App</h1>
        <h2>
          with <span className="usestate">useState </span>hook
        </h2>
      </header>
      <section>
        <h2>
          Initial value: <span className="counter">{counter}</span>
        </h2>
        <div className="cuadro">
          <button onClick={handleAdd}>+1</button>
          <button onClick={handleReset}>Reset</button>
          <button onClick={handleRest}>-1</button>
        </div>
      </section>
    </>
  );
};

//definicion de tipos y default props

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};

CounterApp.defaultProps = {
  value: 10,
};

export default CounterApp;
