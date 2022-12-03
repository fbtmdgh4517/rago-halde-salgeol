import { memo, useEffect, useState } from 'react';
import { useFetchMarketCode, useUpbitWebSocket } from '../../node_modules/use-upbit-api/lib/index';

const RealTimePriceTable = memo(function RealTimePriceTable({ socketData }) {
    socketData.sort(function (a, b) {
        return b.acc_trade_price_24h - a.acc_trade_price_24h;
    });
    socketData = socketData.slice(0, 5);
    return (
        <table className="container mx-auto text-center">
            <thead>
                <tr>
                    <th className="py-3">코인</th>
                    <th>현재가</th>
                    <th>전일 대비 값</th>
                    <th>전일 대비 등락률</th>
                    <th>24시간 누적 거래대금</th>
                    <th>52주 최고가</th>
                    <th>52주 최저가</th>
                </tr>
            </thead>
            <tbody>
                {socketData.map((data) => (
                    <tr className="hover:bg-blue-100/60" key={data.code}>
                        <td className="py-1">{data.code}</td>
                        <td>{data.trade_price.toLocaleString()}</td>
                        <td className={data.signed_change_price > 0 ? 'text-red-500' : 'text-blue-600'}>
                            {data.signed_change_price}
                        </td>
                        <td className={data.signed_change_rate > 0 ? 'text-red-500' : 'text-blue-600'}>
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

const InterestCoin = () => {
    const { isLoading, marketCodes } = useFetchMarketCode();
    const [targetMarketCode, setTargetMarketCode] = useState([]);

    useEffect(() => {
        if (!isLoading && marketCodes) {
            setTargetMarketCode(marketCodes.filter((ele) => ele.market.includes('KRW')));
        }
    }, [isLoading, marketCodes]);

    // ticker socket state
    const webSocketOptions = { throttle_time: 400, max_length_queue: 100 };
    const { socket, isConnected, socketData } = useUpbitWebSocket(targetMarketCode, 'ticker', webSocketOptions);

    // 연결 컨트롤 버튼 이벤트 핸들러
    // const connectButtonHandler = (evt) => {
    //     if (isConnected && socket) {
    //         socket.close();
    //     }
    // };

    return (
        <>
            <div className="border border-blue-200 max-w-6xl mx-auto rounded-xl shadow-md p-4 mb-9">
                <h4 className="pb-4 text-xl font-semibold">거래량 상위 코인</h4>
                {socketData ? <RealTimePriceTable socketData={socketData} /> : <div>Ticker Loading...</div>}
            </div>
        </>
    );
};

export default memo(InterestCoin);
