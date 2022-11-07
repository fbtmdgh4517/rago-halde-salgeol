import { useState } from 'react';
import CoinNews from './CoinNews';
import InputForm from './InputForm';
import ResultForm from './ResultForm';

const CoinCalculator = () => {
    const [resultText, setResultText] = useState('날짜와 마켓과 코인과 양을 선택하세요.');

    const resultChangeHandler = (result) => {
        setResultText(result);
    };
    return (
        <>
            <InputForm id="main" setResultText={resultChangeHandler}></InputForm>
            <ResultForm id="result" resultText={resultText}></ResultForm>
        </>
    );
};

export default CoinCalculator;
