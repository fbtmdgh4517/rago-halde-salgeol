import { memo, useEffect, useState } from 'react';
import axios from '../../node_modules/axios/index';
import { useFetchMarketCode, useUpbitWebSocket } from '../../node_modules/use-upbit-api/lib/index';
import HeaderContainer from '../containers/common/HeaderContainer';

const RealTimePriceTable = memo(function RealTimePriceTable({
    socketData,
    codeClickHandler,
    tradePriceClickHandler,
    signedChangePriceClickHandler,
    signedChangeRateClickHandler,
    accTradePrice24hClickHandler,
    highest52WeekPriceClickHandler,
    lowest52WeekPriceClickHandler,
}) {
    return (
        <table className="container mx-auto text-center">
            <thead>
                <tr>
                    <th onClick={codeClickHandler} className="py-3">
                        코인
                    </th>
                    <th onClick={tradePriceClickHandler}>현재가</th>
                    <th onClick={signedChangePriceClickHandler}>전일 대비 값</th>
                    <th onClick={signedChangeRateClickHandler}>전일 대비 등락률</th>
                    <th onClick={accTradePrice24hClickHandler}>24시간 누적 거래대금</th>
                    <th onClick={highest52WeekPriceClickHandler}>52주 최고가</th>
                    <th onClick={lowest52WeekPriceClickHandler}>52주 최저가</th>
                </tr>
            </thead>
            <tbody>
                {socketData.map((data) => (
                    <tr className="hover:bg-blue-100/60" key={data.code}>
                        <td className="py-1">{data.code}</td>
                        <td>{data.trade_price.toLocaleString()}</td>
                        <td className={data.signed_change_price > 0 ? 'text-red-600' : 'text-blue-600'}>
                            {data.signed_change_price}
                        </td>
                        <td className={data.signed_change_rate > 0 ? 'text-red-600' : 'text-blue-600'}>
                            {(data.signed_change_rate * 100).toFixed(2)}%
                        </td>
                        <td>{data.acc_trade_price_24h.toLocaleString('ko-KR', { maximumFractionDigits: 0 })}원</td>
                        <td>{data.highest_52_week_price.toLocaleString()}</td>
                        <td>{data.lowest_52_week_price.toLocaleString()}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
});

const QuotePage = () => {
    const { isLoading, marketCodes } = useFetchMarketCode();
    const [targetMarketCode, setTargetMarketCode] = useState([]);

    const [isCodeDownSort, setIsCodeDownSort] = useState();
    const [isTradePriceDownSort, setIsTradePriceDownSort] = useState();
    const [isSignedChangePriceDownSort, setIsSignedChangePriceDownSort] = useState();
    const [isSignedChangeRateDownSort, setIsSignedChangeRateDownSort] = useState();
    const [isAccTradePrice24hDownSort, setIsAccTradePrice24hDownSort] = useState();
    const [isHighest52WeekPriceDownSort, setIsHighest52WeekPriceDownSort] = useState();
    const [isLowest52WeekPriceDownSort, setIsLowest52WeekPriceDownSort] = useState();

    useEffect(() => {
        if (!isLoading && marketCodes) {
            setTargetMarketCode(marketCodes.filter((ele) => ele.market.includes('KRW')));
        }
    }, [isLoading, marketCodes]);

    useEffect(() => {
        //코드명 정렬
        if (isCodeDownSort === true) {
            setIsTradePriceDownSort();
            setIsSignedChangePriceDownSort();
            setIsSignedChangeRateDownSort();
            setIsAccTradePrice24hDownSort();
            setIsHighest52WeekPriceDownSort();
            setIsLowest52WeekPriceDownSort();
            socketData.sort((a, b) => {
                if (a.code < b.code) return -1;
                if (a.code > b.code) return 1;
                if (a === b) return 0;
            });
        }
        if (isCodeDownSort === false) {
            setIsTradePriceDownSort();
            setIsSignedChangePriceDownSort();
            setIsSignedChangeRateDownSort();
            setIsAccTradePrice24hDownSort();
            setIsHighest52WeekPriceDownSort();
            setIsLowest52WeekPriceDownSort();
            socketData.sort((a, b) => {
                if (a.code > b.code) return -1;
                if (a.code < b.code) return 1;
                if (a === b) return 0;
            });
        }

        //현재가 정렬
        if (isTradePriceDownSort === true) {
            setIsCodeDownSort();
            setIsSignedChangePriceDownSort();
            setIsSignedChangeRateDownSort();
            setIsAccTradePrice24hDownSort();
            setIsHighest52WeekPriceDownSort();
            setIsLowest52WeekPriceDownSort();
            socketData.sort((a, b) => b.trade_price - a.trade_price);
        }
        if (isTradePriceDownSort === false) {
            setIsCodeDownSort();
            setIsSignedChangePriceDownSort();
            setIsSignedChangeRateDownSort();
            setIsAccTradePrice24hDownSort();
            setIsHighest52WeekPriceDownSort();
            setIsLowest52WeekPriceDownSort();
            socketData.sort((a, b) => a.trade_price - b.trade_price);
        }

        //전일 대비 값 정렬
        if (isSignedChangePriceDownSort === true) {
            setIsCodeDownSort();
            setIsTradePriceDownSort();
            setIsSignedChangeRateDownSort();
            setIsAccTradePrice24hDownSort();
            setIsHighest52WeekPriceDownSort();
            setIsLowest52WeekPriceDownSort();
            socketData.sort((a, b) => b.signed_change_price - a.signed_change_price);
        }
        if (isSignedChangePriceDownSort === false) {
            setIsCodeDownSort();
            setIsTradePriceDownSort();
            setIsSignedChangeRateDownSort();
            setIsAccTradePrice24hDownSort();
            setIsHighest52WeekPriceDownSort();
            setIsLowest52WeekPriceDownSort();
            socketData.sort((a, b) => a.signed_change_price - b.signed_change_price);
        }

        //전일 대비 등락률 정렬
        if (isSignedChangeRateDownSort === true) {
            setIsCodeDownSort();
            setIsTradePriceDownSort();
            setIsSignedChangePriceDownSort();
            setIsAccTradePrice24hDownSort();
            setIsHighest52WeekPriceDownSort();
            setIsLowest52WeekPriceDownSort();
            socketData.sort((a, b) => b.signed_change_rate - a.signed_change_rate);
        }
        if (isSignedChangeRateDownSort === false) {
            setIsCodeDownSort();
            setIsTradePriceDownSort();
            setIsSignedChangePriceDownSort();
            setIsAccTradePrice24hDownSort();
            setIsHighest52WeekPriceDownSort();
            setIsLowest52WeekPriceDownSort();
            socketData.sort((a, b) => a.signed_change_rate - b.signed_change_rate);
        }

        //24시간 누적 거래대금 정렬
        if (isAccTradePrice24hDownSort === true) {
            setIsCodeDownSort();
            setIsTradePriceDownSort();
            setIsSignedChangePriceDownSort();
            setIsSignedChangeRateDownSort();
            setIsHighest52WeekPriceDownSort();
            setIsLowest52WeekPriceDownSort();
            socketData.sort((a, b) => b.acc_trade_price_24h - a.acc_trade_price_24h);
        }
        if (isAccTradePrice24hDownSort === false) {
            setIsCodeDownSort();
            setIsTradePriceDownSort();
            setIsSignedChangePriceDownSort();
            setIsSignedChangeRateDownSort();
            setIsHighest52WeekPriceDownSort();
            setIsLowest52WeekPriceDownSort();
            socketData.sort((a, b) => a.acc_trade_price_24h - b.acc_trade_price_24h);
        }

        //52주 최고가 정렬
        if (isHighest52WeekPriceDownSort === true) {
            setIsCodeDownSort();
            setIsTradePriceDownSort();
            setIsSignedChangePriceDownSort();
            setIsSignedChangeRateDownSort();
            setIsAccTradePrice24hDownSort();
            setIsLowest52WeekPriceDownSort();
            socketData.sort((a, b) => b.highest_52_week_price - a.highest_52_week_price);
        }
        if (isHighest52WeekPriceDownSort === false) {
            setIsCodeDownSort();
            setIsTradePriceDownSort();
            setIsSignedChangePriceDownSort();
            setIsSignedChangeRateDownSort();
            setIsAccTradePrice24hDownSort();
            setIsLowest52WeekPriceDownSort();
            socketData.sort((a, b) => a.highest_52_week_price - b.highest_52_week_price);
        }

        //52주 최저가 정렬
        if (isLowest52WeekPriceDownSort === true) {
            setIsCodeDownSort();
            setIsTradePriceDownSort();
            setIsSignedChangePriceDownSort();
            setIsSignedChangeRateDownSort();
            setIsAccTradePrice24hDownSort();
            setIsHighest52WeekPriceDownSort();
            socketData.sort((a, b) => b.lowest_52_week_price - a.lowest_52_week_price);
        }
        if (isLowest52WeekPriceDownSort === false) {
            setIsCodeDownSort();
            setIsTradePriceDownSort();
            setIsSignedChangePriceDownSort();
            setIsSignedChangeRateDownSort();
            setIsAccTradePrice24hDownSort();
            setIsHighest52WeekPriceDownSort();
            socketData.sort((a, b) => a.lowest_52_week_price - b.lowest_52_week_price);
        }
    }, [
        isCodeDownSort,
        isTradePriceDownSort,
        isSignedChangePriceDownSort,
        isSignedChangeRateDownSort,
        isAccTradePrice24hDownSort,
        isHighest52WeekPriceDownSort,
        isLowest52WeekPriceDownSort,
    ]);

    // ticker socket state
    const webSocketOptions = { throttle_time: 400, max_length_queue: 100 };
    const { socket, isConnected, socketData } = useUpbitWebSocket(targetMarketCode, 'ticker', webSocketOptions);

    const codeClickHandler = () => {
        setIsCodeDownSort(!isCodeDownSort);
    };

    const tradePriceClickHandler = () => {
        setIsTradePriceDownSort(!isTradePriceDownSort);
    };

    const signedChangePriceClickHandler = () => {
        setIsSignedChangePriceDownSort(!isSignedChangePriceDownSort);
    };

    const signedChangeRateClickHandler = () => {
        setIsSignedChangeRateDownSort(!isSignedChangeRateDownSort);
    };

    const accTradePrice24hClickHandler = () => {
        setIsAccTradePrice24hDownSort(!isAccTradePrice24hDownSort);
    };

    const highest52WeekPriceClickHandler = () => {
        setIsHighest52WeekPriceDownSort(!isHighest52WeekPriceDownSort);
    };

    const lowest52WeekPriceClickHandler = () => {
        setIsLowest52WeekPriceDownSort(!isLowest52WeekPriceDownSort);
    };

    // 연결 컨트롤 버튼 이벤트 핸들러
    // const connectButtonHandler = (evt) => {
    //     if (isConnected && socket) {
    //         socket.close();
    //     }
    // };

    return (
        <>
            <HeaderContainer />
            <div className="border border-blue-200 max-w-5xl mx-auto rounded-xl shadow-md p-4">
                <h4 className="pb-4 text-xl font-semibold">시세 조회</h4>
                {/* <div className="pb-3">Connected : {isConnected ? '🟢' : '🔴'}</div> */}
                {socketData ? (
                    <RealTimePriceTable
                        socketData={socketData}
                        codeClickHandler={codeClickHandler}
                        tradePriceClickHandler={tradePriceClickHandler}
                        signedChangePriceClickHandler={signedChangePriceClickHandler}
                        signedChangeRateClickHandler={signedChangeRateClickHandler}
                        accTradePrice24hClickHandler={accTradePrice24hClickHandler}
                        highest52WeekPriceClickHandler={highest52WeekPriceClickHandler}
                        lowest52WeekPriceClickHandler={lowest52WeekPriceClickHandler}
                    />
                ) : (
                    <div>Ticker Loading...</div>
                )}
            </div>
        </>
    );
};

export default memo(QuotePage);
