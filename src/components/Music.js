import musicGif from "../images/music.gif"
import '../styles/subject.css'
import {useContext} from "react";
import { AppContext } from '../App';


const Music = () => {

    const { userName,subject} = useContext(AppContext);

    return(
        <div className="skill-card">
            {/* <h2 className="skill-heading"> Music</h2> */}
            <img src={musicGif}  className="gif"/>
            <p className="skill-paragraph">  
                <h4> {userName}, my skills in {subject} are: </h4>
                <ul> 
                    <li>Intruments: Piano,Guitar and Bass</li>
                    <li>Knowledge on music theory and armonization</li>
                    <li>Expirience in beat making with Fl studios,Cubase, Pro tools,etc</li>
                </ul>
                
                
                
                
                
            </p>
        </div>

    );
}

export default Music