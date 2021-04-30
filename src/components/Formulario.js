import React, {useState} from 'react';

const Formulario = () => {

    const [datos, setDatos] = useState({
        nombre: "",
        apellido: ""
    })

    const handleInputChange = (event) =>{
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }

    const enviarDatos = (event) => {
        event.preventDefault();
        
    }

    return (
        <div>
            <h2>Formulario</h2>
            <form onSubmit={enviarDatos}>
                <input 
                    type="text"
                    name="nombre" 
                    placeholder="Ingrese su Nombre"
                    className="form-control mb-2"
                    onChange={handleInputChange}
                />
                <input 
                    type="text"
                    name="apellido"
                    placeholder="Ingrese su Apellido"
                    className="form-control mb-2"
                    onChange={handleInputChange}
                />
                <button className="btn btn-primary btn-block" type="submit">Enviar</button>
            </form>
            <h3>{datos.nombre} - {datos.apellido}</h3>
        </div>
    )
}

export default Formulario;