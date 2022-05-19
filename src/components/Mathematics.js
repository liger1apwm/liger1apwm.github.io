import mathGif from "../images/mathGif.gif"
import '../styles/subject.css'
import {useContext} from "react";
import { AppContext } from '../App';

const Mathematics = () => {

    const { userName,subject} = useContext(AppContext);

    return(
        <div className="skill-card">
            {/* <h2 className="skill-heading"> Mathematics</h2> */}
            <img src={mathGif}  className="gif"/>
            <p className="skill-paragraph">  
                <h4>{userName}, my skills in {subject} are: </h4>
                <ul> 
                <li>CRLA certified tutor</li>
                <li>Expirienced with any class from Algebra,Pre Calculus,Calculus 1,Calculus 2,etc </li>
                <li>Privite tutor in advance math classes like differential equations and Linear Algebra </li>
                <li>Knowledge of Mathemetica, Maple and other mathematics programs</li>
                </ul> 
            </p>
        </div>

    );
}

export default Mathematics