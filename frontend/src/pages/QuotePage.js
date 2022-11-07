import { memo, useEffect, useState } from 'react';
import axios from '../../node_modules/axios/index';
import { useFetchMarketCode, useUpbitWebSocket } from '../../node_modules/use-upbit-api/lib/index';
import HeaderContainer from '../containers/common/HeaderContainer';

const RealTimePriceTable = memo(function RealTimePriceTable({ socketData }) {
    return (
        <table className="container mx-auto text-center">
            <thead>
                <tr>
                    <th>코인</th>
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
                    <tr key={data.code}>
                        <td>{data.code}</td>
                        <td>{data.trade_price.toLocaleString()}</td>
                        <td className={data.signed_change_price > 0 ? 'text-red-500' : 'text-blue-700'}>
                            {data.signed_change_price}
                        </td>
                        <td className={data.signed_change_rate > 0 ? 'text-red-500' : 'text-blue-700'}>
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

    useEffect(() => {
        if (!isLoading && marketCodes) {
            setTargetMarketCode(marketCodes.filter((ele) => ele.market.includes('KRW')));
        }
    }, [isLoading, marketCodes]);

    // ticker socket state
    const webSocketOptions = { throttle_time: 400, max_length_queue: 100 };
    const { socket, isConnected, socketData } = useUpbitWebSocket(targetMarketCode, 'ticker', webSocketOptions);

    // 연결 컨트롤 버튼 이벤트 핸들러
    const connectButtonHandler = (evt) => {
        if (isConnected && socket) {
            socket.close();
        }
    };

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await axios.get()
    //         }
    //     }
    // }, []);

    return (
        <>
            <HeaderContainer />
            <div className="border border-blue-600 max-w-5xl container mx-auto rounded-xl shadow-md p-4 my-4">
                <h4 className="pb-4 text-xl font-semibold">시세 조회</h4>
                <div>Connected : {isConnected ? '🟢' : '🔴'}</div>
                {socketData ? <RealTimePriceTable socketData={socketData} /> : <div>Ticker Loading...</div>}
            </div>
        </>
    );
};

export default memo(QuotePage);
