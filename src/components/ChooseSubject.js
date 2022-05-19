import React from "react";
import '../styles/subject.css'
import { AppContext } from '../App';
import {useContext} from "react";

const ChooseSubject = () => {

    const { subject,setSubject } = useContext(AppContext);

    const HandleClick = (event) => {
            console.log(event.target.value)
            setSubject(event.target.value)
    }

    return (
        <div className='subject-chooser'> 
            <button onClick={HandleClick} value='Mathematics' type='button' className="subject-button"> Mathematics</button>
            <br/>
            <button onClick={HandleClick} value='Programming' type='button' className="subject-button"> Programming </button>
            <br/>
            <button onClick={HandleClick} value='Music' type='button' className="subject-button"> Music</button>
        </div>
    );

}

export default ChooseSubject