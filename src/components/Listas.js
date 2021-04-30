import React,{Fragment, useState} from 'react';

const Listas = () => {
    // trabajando con KEYS: Cuando ejecutes este código, serás advertido que una key debería ser proporcionada para ítems de lista. Una “key” es un atributo especial string que debes incluir al crear listas de elementos, cuando tenemos un ciclo nos pide una key, los index empiezan en cero 

    const [array, setArray] = useState([1,2,3,4,5,6])

    return (
        <Fragment>
            <ul>
                {
                    array.map((item, index) => 
                        <li key={index}>
                            {item} - {index}
                        </li>
                    )
                }
            </ul>
        </Fragment>
    );
}
 
export default Listas;