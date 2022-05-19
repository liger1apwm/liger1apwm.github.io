import React from "react";
import ChooseSubject from "./ChooseSubject";
import '../styles/subject.css'
import {useContext} from "react";
import { AppContext } from '../App';
import Mathematics from "./Mathematics";
import Programming from "./Programming";
import Music from "./Music"



const Subject = () => {

    const { userName,setUserName,subject, setSubject} = useContext(AppContext);

    const SubjectPicked = (props) => {
        if(props.subjectPick === 'Mathematics'){
            return(
                <Mathematics> </Mathematics>
            );
        }
        if(props.subjectPick === 'Programming'){
            return(
                <Programming> </Programming>
            );
        }
        if(props.subjectPick === 'Music'){
            return(
                <Music> </Music>
            );
        }
    
    }

    return(
        <div className="subject-wrapper">
            <h3 className="subject-title"> Choose a subject to look at my skills!</h3>
            <ChooseSubject > </ChooseSubject>
            
            <SubjectPicked subjectPick={subject}> </SubjectPicked> 

            
            
            
            
        </div>
    );
}

export default Subject