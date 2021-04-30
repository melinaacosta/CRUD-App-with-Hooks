import React, { Fragment } from 'react';

const Avatar = ({url}) => {
    return ( 
        <Fragment>        
            <img src={url} alt="" className="mr-3"/> 
        </Fragment>
     );
}
 
export default Avatar;