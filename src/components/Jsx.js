import React, {Fragment} from 'react';

const Jsx = () => {
    const temperatura = 21;
    // const element = <img src={user.avatarUrl}></img>; No pongas comillas rodeando llaves cuando insertes una expresión JavaScript en un atributo. Debes utilizar comillas (para los valores de los strings) o llaves (para las expresiones), pero no ambas en el mismo atributo.

    return (
        <Fragment>
            <h2>Frío o Calor?</h2>
            <p>
                {
                    temperatura > 20 ? 'Calor!' : 'Frio!'
                }
            </p>
        </Fragment>
    );
}
 
export default Jsx;