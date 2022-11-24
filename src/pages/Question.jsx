import React, { useContext, useState } from 'react';
import './Question.css';
import {ProgressBar, Button} from 'react-bootstrap';
import {createSearchParams, useNavigate} from 'react-router-dom'
import DataContext from '../data/DataContext';



const Question = () => {
    const data = useContext(DataContext);
    // 
    const [questionNo, setQuestionNo] = useState(0);
    const navigate = useNavigate();
    const [totalScore, setTotalScore] = useState([
        {id: "EI", score: 0},
        {id: "SN", score: 0},
        {id: "TF", score: 0},
        {id: "JP", score: 0},
    ])

    let dastQu = data.state.question[questionNo];

    

    console.log('totalScore', totalScore);

    const QClickButton = (no, type) =>{
        const newScore = totalScore.map((s)=>
            s.id === type ? {id: s.id, score: s.score + no} : s
        );

        setTotalScore(newScore);
        
        // 정해진 문재수만큼 출력
        if(data.state.question.length !== questionNo + 1) {
            // 다음문제로 문제수 증가
            setQuestionNo(questionNo + 1);
        } else {   // 정해진 문재수 다음으로 넘어갔을때
            // mbti도출
            const mbti = newScore.reduce(
                (acc, curr)=>    // 현재배열객체 스코어가 2보다 크면 ? 첫번째글자  : 2보다작으면 두번째글자
                    acc + (curr.score >= 2 ? curr.id.substring(0,1) : curr.id.substring(1,2)),
                    ""
            );
            console.log('mbti', mbti)
            // 결과 페이지 이동
            navigate({
                pathname: "/result",
                search: `?${createSearchParams({
                    mbti: mbti,
                })}`
            });
        }
      

        console.log('newScore', newScore)
        // if (type === "EI"){
        //     // 기존 스코어에 더할 값을 계산 (기존의 값 + 배점)
        //     const addScore = totalScore[0].score + no;
        //     // 새로운 객체
        //     const newObject = {id: "EI", score: addScore}
        //     // splice 통해 새로운 객체를 해당객체 자리에 넣어줌
        //     // 0번째 index에 1첫번째 요소를 지워줌
        //     totalScore.splice(0, 1, newObject);
        // }
        // else if (type === "SN"){
        //     const addScore = totalScore[1].score + no;
        //     const newObject = {id: "SN", score: addScore}
        //     totalScore.splice(1, 1, newObject);
        // }
        // else if (type === "TF"){
        //     const addScore = totalScore[2].score + no;
        //     const newObject = {id: "TF", score: addScore}
        //     totalScore.splice(2, 1, newObject);
        // }
        // else if (type === "JP"){
        //     const addScore = totalScore[3].score + no;
        //     const newObject = {id: "JP", score: addScore}
        //     totalScore.splice(3, 1, newObject);
        // }

        
    }



    return (  
        <div className='Wrapper'>
            <ProgressBar striped variant="black" now={(questionNo) /data.state.question.length*100} value="50" min="0" max="100"/>
            <div className='Title'>{dastQu.title}</div>
            <div className='ButtonGroup'>
            <button className='QBtn' onClick={()=>QClickButton(4, dastQu.type)}>{dastQu.answera}</button>
            <button className='QBtn' onClick={()=>QClickButton(3, dastQu.type)}>{dastQu.answerb}</button>
            <button className='QBtn' onClick={()=>QClickButton(2, dastQu.type)}>{dastQu.answerc}</button>
            <button className='QBtn' onClick={()=>QClickButton(1, dastQu.type)}>{dastQu.answerd}</button>
            <button className='QBtn' onClick={()=>QClickButton(0, dastQu.type)}>{dastQu.answere}</button>
            </div>
        </div>
    );
}
 
export default Question;

