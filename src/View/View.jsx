import React from 'react';
import Home from '../pages/Home';
import Question from '../pages/Question';
import Result from '../pages/Result';
import {Routes, Route} from 'react-router-dom';
import { DataProvider } from '../data/DataContext';


const View = () => {
    return (  
        <div>
        <DataProvider>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='question' element={<Question />}></Route>
                <Route path='result' element={<Result />}></Route>
            </Routes>
        </DataProvider>
        </div>
    );
}
 
export default View;