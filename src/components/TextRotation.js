import React from 'react';
import '../styles/text-rotation.css'

const TextRotation = () =>{
    return(
        <div className='body'>
            <div className="wrapper"> 
                {/* <h1 className='h1-text'> Welcome to Eric Aragundi Portafolio! </h1>  */}
                <div className="static-txt"> I love </div>
                <ul className="dynamic-txts">    
                    <li> <span> Mathematics</span></li>
                    <li> <span> Programming </span></li>
                    <li> <span> Music </span></li>
                </ul>
            </div>
        </div>
    );
}

export default TextRotation