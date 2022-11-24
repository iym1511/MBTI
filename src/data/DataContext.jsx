import { createContext, useState } from "react";
import zipdak  from '../img/zipdak.jpg';
import modun from '../img/modun.jpg';

const DataContext = createContext();

const DataProvider = (({children}) => {
    const [question, setQuestion] = useState([
        {
            id:1,
            title: "문제1",
            answera: "목재",
            answerb: "철근",
            answerc: "고무",
            answerd: "유리",
            answere: "시멘트",
            type: "EI",
        },
        {
            id:2,
            title: "문제2",
            answera: "애플",
            answerb: "삼성",
            answerc: "lG",
            answerd: "스카이",
            answere: "모토로라",
            type: "EI",
        },
        {
            id:3,
            title: "문제3",
            answera: "아이폰13",
            answerb: "아이폰14",
            answerc: "갤럭시 s22 Ultra",
            answerd: "갤럭시 s22",
            answere: "아이폰14 pro",
            type: "SN",
        },
        {
            id:4,
            title: "문제4",
            answera: "부산",
            answerb: "여수",
            answerc: "서울",
            answerd: "인천",
            answere: "대전",
            type: "SN",
        },
        {
            id:5,
            title: "문제5",
            answera: "부산",
            answerb: "여수",
            answerc: "서울",
            answerd: "인천",
            answere: "대전",
            type: "TF",
        },
        {
            id:6,
            title: "문제6",
            answera: "부산",
            answerb: "여수",
            answerc: "서울",
            answerd: "인천",
            answere: "대전",
            type: "TF",
        },
        {
            id:7,
            title: "문제7",
            answera: "부산",
            answerb: "여수",
            answerc: "서울",
            answerd: "인천",
            answere: "대전",
            type: "JP",
        },
        {
            id:8,
            title: "문제8",
            answera: "부산",
            answerb: "여수",
            answerc: "서울",
            answerd: "인천",
            answere: "대전",
            type: "JP",
        }
    ])
    
    const [result, setResult] = useState([
        {
            id: 1,
            name: '집닥1',
            best : '인테리어공사업체',
            desc : "밝고 미니멀리즘한 분위기",
            image : `${zipdak}`
        },
        {
            id: 2,
            name: '집닥2',
            best : '인테리어공사업체',
            desc : "깔끔하고 모던한 분위기",
            image : `${modun}`
        },
        {
            id: 3,
            name: '집닥3',
            best : '인테리어공사업체',
            desc : "밝고 미니멀리즘한 분위기",
            image : `${zipdak}`
        },
        {
            id: 4,
            name: '집닥4',
            best : '인테리어공사업체',
            desc : "밝고 미니멀리즘한 분위기",
            image : `${zipdak}`
        },
        {
            id: 5,
            name: '집닥5',
            best : '인테리어공사업체',
            desc : "밝고 미니멀리즘한 분위기",
            image : `${zipdak}`
        },
        {
            id: 6,
            name: '집닥6',
            best : '인테리어공사업체',
            desc : "밝고 미니멀리즘한 분위기",
            image : `${zipdak}`
        },
    ])
    const value = {
        state: { question,result },
        action: { setQuestion,setResult }
    }
    return <DataContext.Provider value={value}>{children}</DataContext.Provider>

})

const {Consumer :DataConsumer} = DataContext;

export {DataConsumer , DataProvider};

export default DataContext;