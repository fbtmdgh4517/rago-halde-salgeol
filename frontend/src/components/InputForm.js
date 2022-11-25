import AmountInputForm from './AmountInputForm';
import CoinPriceInputForm from './CoinPriceInputForm';
import CoinSelectForm from './CoinSelectForm';
import DateInputForm from './DateInputForm';
import MarketSelectForm from './MarketSelectForm';
import Card from './Card';
import { useRef, useState, useEffect, useCallback } from 'react';
import axios from 'axios';

function InputForm(props) {
    const [coins, setCoins] = useState([]);
    const [market, setMarket] = useState('');
    const [amount, setAmount] = useState('');
    const timeInputRef = useRef();
    const amountInputRef = useRef();
    const coinInputRef = useRef();
    const marketInputRef = useRef();
    const priceInputRef = useRef();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://api.upbit.com/v1/market/all');
                setCoins(response.data);
            } catch (e) {
                console.log(e);
            }
        };
        fetchData();
    }, []);

    const coinSubmitHandler = async (event) => {
        event.preventDefault();

        const enteredTime = timeInputRef.current.value;
        let enteredAmount = amountInputRef.current.value;
        const enteredCoin = coinInputRef.current.value;
        // const enteredMarket = marketInputRef.current.value;
        let enteredPrice = priceInputRef.current.value;

        const selectedDate = new Date(enteredTime);
        const year = selectedDate.getFullYear();
        const month = selectedDate.getMonth() + 1;
        const day = selectedDate.getDate();
        const hour = selectedDate.getHours();
        const minutes = selectedDate.getMinutes();
        const dateText = `${year}년 ${month}월 ${day}일 ${hour}시 ${minutes}분`;

        // console.log(enteredTime);
        // console.log(enteredMarket);
        // console.log(enteredCoin);
        // console.log(enteredAmount);
        // console.log('-------------------');
        try {
            const selectedTimeCoinInfo = await axios.get(
                `https://api.upbit.com/v1/candles/minutes/1?market=${enteredCoin}&to=${enteredTime}:00Z&count=1`
            );
            console.log(selectedTimeCoinInfo.data[0]);
            const selectedTimeCoinPrice = selectedTimeCoinInfo.data[0].trade_price;

            if (enteredAmount === '' || enteredAmount !== enteredPrice / selectedTimeCoinPrice) {
                setAmount((enteredPrice / selectedTimeCoinPrice).toFixed(8));
                enteredAmount = (enteredPrice / selectedTimeCoinPrice).toFixed(8);
            }

            const currentCoinInfo = await axios.get(`https://api.upbit.com/v1/ticker?markets=${enteredCoin}`);
            console.log(currentCoinInfo.data[0]);
            const currentCoinMarket = currentCoinInfo.data[0].market;
            const currentCoinPrice = currentCoinInfo.data[0].trade_price;
            const currentCoinName = coins.filter((coin) => {
                return coin.market === currentCoinMarket;
            });
            // console.log(currentCoinName);

            if (enteredPrice === '') {
                alert('코인의 가격를 입력하세요');
            } else {
                const currentPriceMultiplyAmount = parseInt(currentCoinPrice * enteredAmount);
                const timePriceMultiplyAmount = parseInt(selectedTimeCoinPrice * enteredAmount);

                if (currentPriceMultiplyAmount > timePriceMultiplyAmount) {
                    props.setResultText(
                        `${dateText}에 ${currentCoinName[0].korean_name}을(를) ${enteredAmount}개 샀다면 ${(
                            currentPriceMultiplyAmount - timePriceMultiplyAmount
                        ).toLocaleString()}원 벌었다.`
                    );
                } else if (currentPriceMultiplyAmount < timePriceMultiplyAmount) {
                    props.setResultText(
                        `${dateText}에 ${currentCoinName[0].korean_name}을(를) ${enteredAmount}개 샀다면 ${(
                            timePriceMultiplyAmount - currentPriceMultiplyAmount
                        ).toLocaleString()}원 잃었다.`
                    );
                }
                // if (currentPriceMultiplyAmount > timePriceMultiplyAmount && market.startsWith('KRW')) {
                //     props.setResultText(
                //         `${dateText}에 ${currentCoinName[0].korean_name}을(를) ${enteredAmount}개 샀다면 ${(
                //             currentPriceMultiplyAmount - timePriceMultiplyAmount
                //         ).toLocaleString()}원 벌었다.`
                //     );
                // } else if (currentPriceMultiplyAmount < timePriceMultiplyAmount && market.startsWith('KRW')) {
                //     props.setResultText(
                //         `${dateText}에 ${currentCoinName[0].korean_name}을(를) ${enteredAmount}개 샀다면 ${(
                //             timePriceMultiplyAmount - currentPriceMultiplyAmount
                //         ).toLocaleString()}원 잃었다.`
                //     );
                // }

                // if (currentPriceMultiplyAmount > timePriceMultiplyAmount && market.startsWith('BTC')) {
                //     props.setResultText(
                //         `${dateText}에 ${
                //             currentCoinName[0].korean_name
                //         }을(를) ${enteredPrice}${enteredAmount}개 샀다면 ${(
                //             currentPriceMultiplyAmount - timePriceMultiplyAmount
                //         ).toLocaleString()}BTC 벌었다.`
                //     );
                // } else if (currentPriceMultiplyAmount < timePriceMultiplyAmount && market.startsWith('BTC')) {
                //     props.setResultText(
                //         `${dateText}에 ${
                //             currentCoinName[0].korean_name
                //         }을(를) ${enteredPrice}${enteredAmount}개 샀다면 ${(
                //             timePriceMultiplyAmount - currentPriceMultiplyAmount
                //         ).toLocaleString()}BTC 잃었다.`
                //     );
                // }

                // if (currentPriceMultiplyAmount > timePriceMultiplyAmount && market.startsWith('USDT')) {
                //     props.setResultText(
                //         `${dateText}에 ${
                //             currentCoinName[0].korean_name
                //         }을(를) ${enteredPrice}${enteredAmount}개 샀다면 ${(
                //             currentPriceMultiplyAmount - timePriceMultiplyAmount
                //         ).toLocaleString()}$ 벌었다.`
                //     );
                // } else if (currentPriceMultiplyAmount < timePriceMultiplyAmount && market.startsWith('USDT')) {
                //     props.setResultText(
                //         `${dateText}에 ${
                //             currentCoinName[0].korean_name
                //         }을(를) ${enteredPrice}${enteredAmount}개 샀다면 ${(
                //             timePriceMultiplyAmount - currentPriceMultiplyAmount
                //         ).toLocaleString()}$ 잃었다.`
                //     );
                // }
            }
        } catch (e) {
            alert('날짜와 코인을 선택하세요');
        }
    };

    const amountInputChangeHandler = useCallback((enteredAmount) => {
        setAmount(enteredAmount);
    }, []);

    const marketChangeHandler = useCallback((selectedMarket) => {
        setMarket(selectedMarket);
    }, []);

    return (
        <div id={props.id} className="border border-blue-200 max-w-5xl mx-auto rounded-xl shadow-md p-4">
            <h4 className="pb-4 text-xl font-semibold">코인 계산기</h4>
            {/* <span>날짜, 마켓 종류, 코인, 금액을 입력하고 버튼을 누르면 </span> */}
            <form className="mt-4" onSubmit={coinSubmitHandler} action="">
                <DateInputForm
                    className="border border-blue-200 max-w-md container mx-auto rounded-xl shadow-md p-4"
                    id="dateForm"
                    inputRef={timeInputRef}
                ></DateInputForm>
                <br />
                {/* <MarketSelectForm
                    className="border border-blue-200 max-w-md container mx-auto rounded-xl shadow-md p-4"
                    id="selectMarketForm"
                    inputRef={marketInputRef}
                    onChangeMarket={marketChangeHandler}
                ></MarketSelectForm> */}
                {/* <br /> */}
                <CoinSelectForm
                    className="border border-blue-200 max-w-md container mx-auto rounded-xl shadow-md p-4"
                    id="selectCoinForm"
                    inputRef={coinInputRef}
                    market={market}
                    coins={coins}
                ></CoinSelectForm>
                <br />
                <CoinPriceInputForm
                    className="border border-blue-200 max-w-md container mx-auto rounded-xl shadow-md p-4"
                    id="priceForm"
                    inputRef={priceInputRef}
                ></CoinPriceInputForm>
                <br />
                <AmountInputForm
                    className="border border-blue-200 max-w-md container mx-auto rounded-xl shadow-md p-4"
                    id="amountForm"
                    onChangeAmount={amountInputChangeHandler}
                    inputRef={amountInputRef}
                    amount={amount}
                ></AmountInputForm>
                <br />
                <button className="shadow-md h-[35px] w-[85px] rounded-3xl bg-blue-500 px-2 py-0.5 text-base font-medium text-white hover:bg-blue-700 container mx-auto transition ease-in-out hover:scale-110">
                    샀었다면
                </button>
            </form>
        </div>
    );
}

export default InputForm;
