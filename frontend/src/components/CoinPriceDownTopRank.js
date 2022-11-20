import { useEffect } from 'react';
import { useState } from 'react';
import axios from '../../node_modules/axios/index';

const CoinPriceDownTopRank = (props) => {
    const [coinsInfo, setCoinsInfo] = useState([]);
    const coinsInfoArr = [];
    const coinsMarketCode = [];
    const filteredPaprikaApiData = [];

    useEffect(() => {
        if (props.period === '1일') {
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
                    return a.quotes.KRW.percent_change_24h - b.quotes.KRW.percent_change_24h;
                });

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
        if (props.period === '1주일') {
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
                    return a.quotes.KRW.percent_change_7d - b.quotes.KRW.percent_change_7d;
                });
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
        if (props.period === '1개월') {
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
                    return a.quotes.KRW.percent_change_30d - b.quotes.KRW.percent_change_30d;
                });

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
        if (props.period === '1년') {
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
                    return a.quotes.KRW.percent_change_1y - b.quotes.KRW.percent_change_1y;
                });

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
        </div>
    );
};

export default CoinPriceDownTopRank;
