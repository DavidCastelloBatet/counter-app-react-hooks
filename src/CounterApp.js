import React from "react";
import PropTypes from "prop-types";

const CounterApp = ({ value }) => {
  const handleAdd = () => {
    value = value + 1;
    console.log("Hola Mundo");
    console.log(value);
  };

  return (
    <>
      <h1>Counter App</h1>
      <h2>
        with <span className="usestate">useState hook</span>
      </h2>
      <h2>Initial value: {value}</h2>
      <div className="cuadro">
        <button onClick={handleAdd}>+1</button>
        <button>Resset</button>
        <button>-1</button>
      </div>
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
