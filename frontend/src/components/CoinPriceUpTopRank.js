import { useEffect, useState } from 'react';
import axios from '../../node_modules/axios/index';
import ReactApexChart from 'react-apexcharts';
import CoinPriceDownTopRank from './CoinPriceDownTopRank';

const CoinPriceUpTopRank = () => {
    // const [coinChangePercent, setCoinChangePercent] = useState([]);
    // const [coinsName, setCoinsName] = useState([]);
    const [coinsInfo, setCoinsInfo] = useState([]);
    const coinsInfoArr = [];
    const coinsChangePercentArr = [];

    const [coinUpPrices, setCoinUpPrices] = useState([]);
    const [coinDownPrices, setCoinDownPrices] = useState([]);
    // const coinsCurrentPriceArr = [];
    // const coinsPastPriceArr = [];
    // const coinsPriceUpArr = [];
    // const coinsPriceDownArr = [];
    // const coinsKoreanName = [];
    // const coinsEnglishName = [];
    // const [chartData, setChartData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [period, setPeriod] = useState('1주일');
    const [isFetching, setIsFetching] = useState(false);
    // const pastYear = new Date();
    // let coinsCurrentprice = '';
    // let coinsPastPrice = '';
    // let coinsMarket = '';
    // let date = new Date();
    // const year = date.getFullYear();
    // const month = date.getMonth();
    // const day = date.getDate();
    // const hour = date.getHours();
    // const minute = date.getMinutes();
    // const oneWeekBeforePriceDate = new Date(year, month, day - 7, hour + 9, minute).toISOString().substr(0, 19) + 'Z';
    // const oneMonthBeforePriceDate = new Date(year, month - 1, day, hour + 9, minute).toISOString().substr(0, 19) + 'Z';
    // const threeMonthBeforePriceDate =
    //     new Date(year, month - 3, day, hour + 9, minute).toISOString().substr(0, 19) + 'Z';
    // const sixMonthBeforePriceDate = new Date(year, month - 6, day, hour + 9, minute).toISOString().substr(0, 19) + 'Z';
    // const oneYearBeforePriceDate = new Date(year - 1, month, day, hour + 9, minute).toISOString().substr(0, 19) + 'Z';

    useEffect(() => {
        if (period === '1주일') {
            const fetchData = async () => {
                const response = await axios.get('https://api.coinpaprika.com/v1/tickers?quotes=KRW');
                response.data.sort((a, b) => {
                    return b.quotes.KRW.percent_change_7d - a.quotes.KRW.percent_change_7d;
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
        if (period === '1개월') {
            const fetchData = async () => {
                const response = await axios.get('https://api.coinpaprika.com/v1/tickers?quotes=KRW');
                response.data.sort((a, b) => {
                    return b.quotes.KRW.percent_change_30d - a.quotes.KRW.percent_change_30d;
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
        if (period === '1년') {
            const fetchData = async () => {
                const response = await axios.get('https://api.coinpaprika.com/v1/tickers?quotes=KRW');
                response.data.sort((a, b) => {
                    return b.quotes.KRW.percent_change_1y - a.quotes.KRW.percent_change_1y;
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
    }, [period]);
    // console.log(chartData);

    const periodChangeHandler = (event) => {
        setIsFetching(true);
        setLoading(true);
        setPeriod(event.target.value);
    };

    return (
        <>
            <div className="bg-white max-w-5xl mx-auto text-center mb-16 rounded-xl shadow-md border border-blue-200">
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
                        {/* {!loading ? (
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
                        ) : (
                            <p>잠시만 기다려주세요</p>
                        )} */}
                    </div>
                    <CoinPriceDownTopRank
                        loading={loading}
                        coinDownPrices={coinDownPrices}
                        period={period}
                    ></CoinPriceDownTopRank>
                </div>
            </div>
        </>
    );
};

export default CoinPriceUpTopRank;
