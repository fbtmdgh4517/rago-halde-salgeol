import { useEffect } from 'react';
import { useState } from 'react';
import axios from '../../node_modules/axios/index';

const CoinPriceDownTopRank = (props) => {
    // const [coinDownPrices, setCoinDownPrices] = useState([]);
    // const downPrice = props.coinsPriceChangeArr;
    // console.log(props.loading);
    // if (props.loading === false) {
    //     setCoinDownPrices(
    //         props.coinsPriceChangeArr.sort(function (a, b) {
    //             return a[2] - b[2];
    //         })
    //     );
    // }
    const [coinsInfo, setCoinsInfo] = useState([]);
    const coinsInfoArr = [];

    useEffect(() => {
        if (props.period === '1주일') {
            const fetchData = async () => {
                const response = await axios.get('https://api.coinpaprika.com/v1/tickers?quotes=KRW');
                response.data.sort((a, b) => {
                    return a.quotes.KRW.percent_change_7d - b.quotes.KRW.percent_change_7d;
                });
                response.data = response.data.slice(0, 5);
                for (let i = 0; i < 5; i++) {
                    console.log(response.data[i].name);
                    console.log(response.data[i].quotes.KRW.percent_change_7d);
                    coinsInfoArr.push([response.data[i].name, response.data[i].quotes.KRW.percent_change_7d]);
                }
                console.log(coinsInfoArr);
                setCoinsInfo(coinsInfoArr);
            };
            fetchData();
        }
        if (props.period === '1개월') {
            const fetchData = async () => {
                const response = await axios.get('https://api.coinpaprika.com/v1/tickers?quotes=KRW');
                response.data.sort((a, b) => {
                    return a.quotes.KRW.percent_change_30d - b.quotes.KRW.percent_change_30d;
                });
                response.data = response.data.slice(0, 5);
                for (let i = 0; i < 5; i++) {
                    console.log(response.data[i].name);
                    console.log(response.data[i].quotes.KRW.percent_change_30d);
                    coinsInfoArr.push([response.data[i].name, response.data[i].quotes.KRW.percent_change_30d]);
                }
                console.log(coinsInfoArr);
                setCoinsInfo(coinsInfoArr);
            };
            fetchData();
        }
        if (props.period === '1년') {
            const fetchData = async () => {
                const response = await axios.get('https://api.coinpaprika.com/v1/tickers?quotes=KRW');
                response.data.sort((a, b) => {
                    return a.quotes.KRW.percent_change_1y - b.quotes.KRW.percent_change_1y;
                });
                response.data = response.data.slice(0, 5);
                for (let i = 0; i < 5; i++) {
                    console.log(response.data[i].name);
                    console.log(response.data[i].quotes.KRW.percent_change_1y);
                    coinsInfoArr.push([response.data[i].name, response.data[i].quotes.KRW.percent_change_1y]);
                }
                console.log(coinsInfoArr);
                setCoinsInfo(coinsInfoArr);
            };
            fetchData();
        }
    }, [props.period]);

    return (
        <div className="w-1/2 text-center pl-4">
            <div className="text-center rounded-xl px-4">
                <table className="container mx-auto text-center">
                    <thead className="">
                        <tr className="border-b border-b-blue-100">
                            <th scope="col" className="py-1">
                                코인명
                            </th>
                            <th scope="col">하락률</th>
                        </tr>
                    </thead>
                    <tbody>
                        {coinsInfo.map((coin) => {
                            return (
                                <tr className="hover:bg-blue-100/60">
                                    <th scope="row" className="py-1">
                                        {coin[0]}
                                    </th>
                                    <td>{coin[1]}%</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            {/* {!props.loading ? (
                <div className="text-center rounded-xl px-4">
                    <table className="container mx-auto text-center">
                        <thead className="">
                            <tr className="border-b border-b-blue-100">
                                <th scope="col" className="py-1">
                                    코인명
                                </th>
                                <th scope="col">하락률</th>
                            </tr>
                        </thead>
                        <tbody>
                            {coinsInfo.map((coin) => {
                                return (
                                    <tr className="hover:bg-blue-100/60">
                                        <th scope="row" className="py-1">
                                            {coin[0]}
                                        </th>
                                        <td>{coin[1]}%</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            ) : (
                <p>잠시만 기다려주세요</p>
            )} */}
        </div>
    );
};

export default CoinPriceDownTopRank;
