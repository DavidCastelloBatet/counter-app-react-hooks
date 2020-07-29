import React from "react";
import PropTypes from "prop-types";
//import React, { Fragment } from "react";

const PrimeraApp = ({ saludo, edad, subtitulo }) => {
  return (
    <>
      <h1>
        {saludo} y tengo {edad} años.
      </h1>
      <p>{subtitulo}</p>
    </>
  );
};

//Definimos que tipo de props hay que pasar y si es obligatorio

PrimeraApp.propTypes = {
  saludo: PropTypes.string.isRequired, //string y obligatorio
  edad: PropTypes.number, //numero y no obligatorio
};

//Definir propiedades por defecto

PrimeraApp.defaultProps = {
  subtitulo: "Subtitulo por defecto",
};

export default PrimeraApp;
