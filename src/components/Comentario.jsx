import React, { Fragment } from 'react';
import Avatar from "./Avatar"

const Comentario = ({sujeto}) => {
    return ( 
        <Fragment>
            <h1>Comentarios</h1>
            <hr/>
            <div className="media">
                {/* <img src={sujeto.url} alt="" className="mr-3"/> */}
                <Avatar url={sujeto.url}/>
                <div className="media-body">
                    <h5 className="nt-0">{sujeto.nombre}</h5>
                    {sujeto.desc}
                </div>
            </div>
        </Fragment>
     );
}
 
export default Comentario;