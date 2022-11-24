import React, { useState } from 'react';
import './Question.css';
import {ProgressBar, Button} from 'react-bootstrap';
import { QuestionData } from '../data/questiondata';

const Question = () => {

    // 
    const [questionNo, setQuestionNo] = useState(0);

    console.log('questionNo', questionNo)

    const QClickButtonA = (no) =>{
        setQuestionNo(questionNo + 1);
    }
    const QClickButtonB = (no) =>{
        setQuestionNo(questionNo + 1);
    }
    const QClickButtonC = (no) =>{
        setQuestionNo(questionNo + 1);
    }
    const QClickButtonD = (no) =>{
        setQuestionNo(questionNo + 1);
    }
    const QClickButtonE = (no) =>{
        setQuestionNo(questionNo + 1);
    }

    return (  
        <div className='Wrapper'>
            <ProgressBar striped variant="black" now={(questionNo /QuestionData.length)*100} value="50" min="0" max="100"/>
            <div className='Title'>{QuestionData[questionNo].title}</div>
            <div className='ButtonGroup'>
            <button className='QBtn' onClick={()=>QClickButtonA(1)}>{QuestionData[questionNo].answera}</button>
            <button className='QBtn' onClick={()=>QClickButtonB(0)}>{QuestionData[questionNo].answerb}</button>
            <button className='QBtn' onClick={()=>QClickButtonC(0)}>{QuestionData[questionNo].answerc}</button>
            <button className='QBtn' onClick={()=>QClickButtonD(0)}>{QuestionData[questionNo].answerd}</button>
            <button className='QBtn' onClick={()=>QClickButtonE(0)}>{QuestionData[questionNo].answere}</button>
            </div>
        </div>
    );
}
 
export default Question;

