import React, { useState, Fragment } from 'react';

  // sfc click
const Contador = () => {
  // Declara una nueva variable de estado, que llamaremos "count", el beneficio de hooks es que hace las cosas reactivas, setCount nos sirve para modificar la variable count, el useState especifica el valor inicial, puede ser un numero, un bololeano , un array o un objeto lit.
  const [count, setCount] = useState(0);

  return (
    <Fragment>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </Fragment>
  );
}

export default Contador;