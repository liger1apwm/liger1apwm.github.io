import React from "react";
import ChooseSubject from "./ChooseSubject";
import '../styles/subject.css'


const Subject = () => {

    

    return(
        <div className="subject-wrapper">
            <h3 className="subject-title"> Choose a subject to look at my skills!</h3>
            <ChooseSubject > </ChooseSubject>

        </div>
    );
}

export default Subject