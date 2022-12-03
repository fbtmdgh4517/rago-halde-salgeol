import { useEffect, useState } from 'react';
import axios from '../../node_modules/axios/index';
import CoinPriceDownTopRank from './CoinPriceDownTopRank';

const CoinPriceUpTopRank = () => {
    const [coinsInfo, setCoinsInfo] = useState([]);
    const coinsInfoArr = [];
    const coinsMarketCode = [];
    const filteredPaprikaApiData = [];
    const [period, setPeriod] = useState('1일');

    useEffect(() => {
        if (period === '1일') {
            const fetchData = async () => {
                const response2 = await axios.get('https://api.upbit.com/v1/market/all');
                const krwCoin = response2.data.filter((coin) => coin.market.startsWith('KRW-'));
                krwCoin.map((coin) => {
                    coinsMarketCode.push(coin.market.substr(4, coin.market.length));
                });

                const response = await axios.get('https://api.coinpaprika.com/v1/tickers?quotes=KRW');
                const filteredResponse = response.data.filter((coin) => coinsMarketCode.includes(coin.symbol));
                filteredResponse.map((coin) => {
                    filteredPaprikaApiData.push(coin);
                });

                filteredPaprikaApiData.sort((a, b) => {
                    return b.quotes.KRW.percent_change_24h - a.quotes.KRW.percent_change_24h;
                });

                console.log('코인 파프리카 api에서 가져온 코인의 정보');
                console.log(response.data);
                console.log('업비트 api에서 가져온 코인의 정보');
                console.log(krwCoin);
                console.log(
                    '코인 파프리카 api에서 가져온 코인의 정보 중에서 업비트 api에 포함된 코인의 정보를 뽑아온 것'
                );
                console.log(filteredPaprikaApiData);

                for (let i = 0; i < 5; i++) {
                    coinsInfoArr.push([
                        filteredPaprikaApiData[i].name,
                        filteredPaprikaApiData[i].quotes.KRW.percent_change_24h,
                    ]);
                }
                setCoinsInfo(coinsInfoArr);
            };
            fetchData();
        }
        if (period === '1주일') {
            const fetchData = async () => {
                const response2 = await axios.get('https://api.upbit.com/v1/market/all');
                const krwCoin = response2.data.filter((coin) => coin.market.startsWith('KRW-'));
                krwCoin.map((coin) => {
                    coinsMarketCode.push(coin.market.substr(4, coin.market.length));
                });

                const response = await axios.get('https://api.coinpaprika.com/v1/tickers?quotes=KRW');
                const filteredResponse = response.data.filter((coin) => coinsMarketCode.includes(coin.symbol));
                filteredResponse.map((coin) => {
                    filteredPaprikaApiData.push(coin);
                });

                filteredPaprikaApiData.sort((a, b) => {
                    return b.quotes.KRW.percent_change_7d - a.quotes.KRW.percent_change_7d;
                });

                console.log('코인 파프리카 api에서 가져온 코인의 정보');
                console.log(response.data);
                console.log('업비트 api에서 가져온 코인의 정보');
                console.log(krwCoin);
                console.log('코인 파프리카 api에서 가져온 코인의 정보 중에서 업비트 api에 포함된 코인의 정보');
                console.log(filteredPaprikaApiData);

                for (let i = 0; i < 5; i++) {
                    coinsInfoArr.push([
                        filteredPaprikaApiData[i].name,
                        filteredPaprikaApiData[i].quotes.KRW.percent_change_7d,
                    ]);
                }

                setCoinsInfo(coinsInfoArr);
            };
            fetchData();
        }
        if (period === '1개월') {
            const fetchData = async () => {
                const response2 = await axios.get('https://api.upbit.com/v1/market/all');
                const krwCoin = response2.data.filter((coin) => coin.market.startsWith('KRW-'));
                krwCoin.map((coin) => {
                    coinsMarketCode.push(coin.market.substr(4, coin.market.length));
                });

                const response = await axios.get('https://api.coinpaprika.com/v1/tickers?quotes=KRW');
                const filteredResponse = response.data.filter((coin) => coinsMarketCode.includes(coin.symbol));
                filteredResponse.map((coin) => {
                    filteredPaprikaApiData.push(coin);
                });

                filteredPaprikaApiData.sort((a, b) => {
                    return b.quotes.KRW.percent_change_30d - a.quotes.KRW.percent_change_30d;
                });

                console.log('코인 파프리카 api에서 가져온 코인의 정보');
                console.log(response.data);
                console.log('업비트 api에서 가져온 코인의 정보');
                console.log(krwCoin);
                console.log('코인 파프리카 api에서 가져온 코인의 정보 중에서 업비트 api에 포함된 코인의 정보');
                console.log(filteredPaprikaApiData);

                for (let i = 0; i < 5; i++) {
                    coinsInfoArr.push([
                        filteredPaprikaApiData[i].name,
                        filteredPaprikaApiData[i].quotes.KRW.percent_change_30d,
                    ]);
                }
                setCoinsInfo(coinsInfoArr);
            };
            fetchData();
        }
        if (period === '1년') {
            const fetchData = async () => {
                const response2 = await axios.get('https://api.upbit.com/v1/market/all');
                const krwCoin = response2.data.filter((coin) => coin.market.startsWith('KRW-'));
                krwCoin.map((coin) => {
                    coinsMarketCode.push(coin.market.substr(4, coin.market.length));
                });

                const response = await axios.get('https://api.coinpaprika.com/v1/tickers?quotes=KRW');
                const filteredResponse = response.data.filter((coin) => coinsMarketCode.includes(coin.symbol));
                filteredResponse.map((coin) => {
                    filteredPaprikaApiData.push(coin);
                });

                console.log(coinsMarketCode);
                console.log(filteredPaprikaApiData);

                filteredPaprikaApiData.sort((a, b) => {
                    return b.quotes.KRW.percent_change_1y - a.quotes.KRW.percent_change_1y;
                });

                console.log('코인 파프리카 api에서 가져온 코인의 정보');
                console.log(response.data);
                console.log('업비트 api에서 가져온 코인의 정보');
                console.log(krwCoin);
                console.log('코인 파프리카 api에서 가져온 코인의 정보 중에서 업비트 api에 포함된 코인의 정보');
                console.log(filteredPaprikaApiData);
                for (let i = 0; i < 5; i++) {
                    coinsInfoArr.push([
                        filteredPaprikaApiData[i].name,
                        filteredPaprikaApiData[i].quotes.KRW.percent_change_1y,
                    ]);
                }
                setCoinsInfo(coinsInfoArr);
            };
            fetchData();
        }
    }, [period]);

    const periodChangeHandler = (event) => {
        setPeriod(event.target.value);
    };

    return (
        <>
            <div className="bg-white max-w-6xl mx-auto text-center mb-9 rounded-xl shadow-md border border-blue-200">
                <div className="max-w-5xl mx-auto flex">
                    <div className="w-3/6 pr-4">
                        <h4 className=" text-xl font-bold pt-4">상승률 상위 코인</h4>
                    </div>
                    <div className="w-3/6 pl-4">
                        <h4 className=" text-xl font-bold pt-4">하락률 상위 코인</h4>
                    </div>
                </div>
                <div className="max-w-5xl mx-auto rounded-xl p-1 text-center">
                    <select
                        className="shadow-md bg-white border border-blue-100 rounded-lg max-w-5xl mx-auto text-center w-40"
                        onChange={periodChangeHandler}
                        value={period}
                    >
                        <option value="1일">1일</option>
                        <option value="1주일">1주일</option>
                        <option value="1개월">1개월</option>
                        <option value="1년">1년</option>
                    </select>
                </div>
                <div className="flex">
                    <div className="w-3/6 text-center pr-4">
                        <div className="text-center rounded-xl px-4 pb-2">
                            <table className="container mx-auto text-center">
                                <thead className="">
                                    <tr className="border-b border-b-blue-100">
                                        <th scope="col" className="py-1">
                                            코인명
                                        </th>
                                        <th scope="col">상승률</th>
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
                    </div>
                    <CoinPriceDownTopRank period={period}></CoinPriceDownTopRank>
                </div>
            </div>
        </>
    );
};

export default CoinPriceUpTopRank;
