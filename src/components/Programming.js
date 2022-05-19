import programmingGif from "../images/programming.gif"
import '../styles/subject.css'
import {useContext} from "react";
import { AppContext } from '../App';

const Programming = () => {

    const { userName,subject} = useContext(AppContext);

    return(
        <div className="skill-card">
            {/* <h2 className="skill-heading"> Programming</h2> */}
            <img src={programmingGif}  className="gif"/>
            <p className="skill-paragraph">  
                <h4> {userName}, my skills in {subject} are:</h4>
                <ul> 
                <li>Languages: Java,Python,R and javascript</li>
                <li>Knowledge on Html, css and React framework</li>
                <li>Data analysis and insights: <a href="https://sites.google.com/view/covid19analysis-mat328/home" target="_blank">Visit my data analysis page sample</a> </li>
                <li>Expirienced tutor in introductions classes for Java and python</li>
                </ul> 
            </p>
        </div>

    );
}

export default Programming