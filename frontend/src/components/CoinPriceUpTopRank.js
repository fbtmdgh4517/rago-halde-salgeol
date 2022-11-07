import { useEffect, useState } from 'react';
import axios from '../../node_modules/axios/index';
import ReactApexChart from 'react-apexcharts';
import CoinPriceDownTopRank from './CoinPriceDownTopRank';

const CoinPriceUpTopRank = () => {
    const [coinUpPrices, setCoinUpPrices] = useState([]);
    const [coinDownPrices, setCoinDownPrices] = useState([]);
    const coinsCurrentPriceArr = [];
    const coinsPastPriceArr = [];
    const coinsPriceUpArr = [];
    const coinsPriceDownArr = [];
    const coinsKoreanName = [];
    const coinsEnglishName = [];
    const [chartData, setChartData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [period, setPeriod] = useState('1주일');
    const [isFetching, setIsFetching] = useState(false);
    const pastYear = new Date();
    let coinsCurrentprice = '';
    let coinsPastPrice = '';
    let coinsMarket = '';
    let date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const oneWeekBeforePriceDate = new Date(year, month, day - 7, hour + 9, minute).toISOString().substr(0, 19) + 'Z';
    const oneMonthBeforePriceDate = new Date(year, month - 1, day, hour + 9, minute).toISOString().substr(0, 19) + 'Z';
    const threeMonthBeforePriceDate =
        new Date(year, month - 3, day, hour + 9, minute).toISOString().substr(0, 19) + 'Z';
    const sixMonthBeforePriceDate = new Date(year, month - 6, day, hour + 9, minute).toISOString().substr(0, 19) + 'Z';
    const oneYearBeforePriceDate = new Date(year - 1, month, day, hour + 9, minute).toISOString().substr(0, 19) + 'Z';

    useEffect(() => {
        if (period === '1주일') {
            axios.get('https://api.upbit.com/v1/market/all').then((res) => {
                const krwCoins = res.data.filter((coin) => coin.market.startsWith('KRW-'));
                for (let i = 0; i < krwCoins.length; i++) {
                    coinsKoreanName.push(krwCoins[i].korean_name);
                    coinsEnglishName.push(krwCoins[i].market);
                }

                const getCurrentPastPrice = (i) => {
                    let fetchCoin = setTimeout(() => {
                        console.log('실행중');
                        axios.get(`https://api.upbit.com/v1/ticker?markets=${krwCoins[i].market}`).then((res) => {
                            coinsCurrentprice += res.data[0].trade_price + ',';
                        });
                        axios
                            .get(
                                `https://api.upbit.com/v1/candles/days?market=${krwCoins[i].market}&to=${oneWeekBeforePriceDate}&count=1`
                            )
                            .then((res) => {
                                coinsPastPrice += res.data[0].trade_price + ',';
                            });
                        i++;
                        countPrice(i);
                    }, 100);
                    // if (isFetching === true) {
                    //     clearTimeout(fetchCoin);
                    // }
                };
                const countPrice = (i) => {
                    if (i < krwCoins.length) {
                        getCurrentPastPrice(i);
                    } else {
                        coinsPastPriceArr.push(coinsPastPrice.split(','));
                        coinsCurrentPriceArr.push(coinsCurrentprice.split(','));
                        for (let n = 0; n < coinsEnglishName.length; n++) {
                            // if (((coinsCurrentPriceArr[0][n] / coinsPastPriceArr[0][n]) * 100 - 100).toFixed(2) > 0) {
                            // console.log(`현재 ${coinsKoreanName[n]}`);
                            // console.log(coinsCurrentPriceArr[0][n]);
                            // console.log(`과거 ${coinsKoreanName[n]}`);
                            // console.log(coinsPastPriceArr[0][n]);
                            // console.log(`상승률 ${coinsKoreanName[n]}`);
                            // console.log(
                            //     ((coinsCurrentPriceArr[0][n] / coinsPastPriceArr[0][n]) * 100 - 100).toFixed(2)
                            // );
                            coinsPriceUpArr.push([
                                coinsKoreanName[n],
                                coinsEnglishName[n],
                                ((coinsCurrentPriceArr[0][n] / coinsPastPriceArr[0][n]) * 100 - 100).toFixed(2),
                            ]);
                            coinsPriceDownArr.push([
                                coinsKoreanName[n],
                                coinsEnglishName[n],
                                ((coinsCurrentPriceArr[0][n] / coinsPastPriceArr[0][n]) * 100 - 100).toFixed(2),
                            ]);
                            // }
                        }
                        coinsPriceUpArr.sort(function (a, b) {
                            return b[2] - a[2];
                        });
                        coinsPriceDownArr.sort(function (a, b) {
                            return a[2] - b[2];
                        });

                        if (coinsPriceUpArr[krwCoins.length - 1][2] === 'NaN') {
                            coinsPriceUpArr.pop();
                        }
                        if (coinsPriceDownArr[krwCoins.length - 1][2] === 'NaN') {
                            coinsPriceDownArr.pop();
                        }
                        console.log(coinsPriceUpArr);
                        console.log(coinsPriceDownArr);

                        const coinsPriceUpArrSlice = coinsPriceUpArr.slice(0, 5);
                        const coinsPriceDownArrSlice = coinsPriceDownArr.slice(0, 5);
                        console.log(coinsPriceUpArrSlice);
                        console.log(coinsPriceDownArrSlice);
                        setCoinUpPrices(coinsPriceUpArrSlice);
                        setCoinDownPrices(coinsPriceDownArrSlice);
                        setLoading(false);
                    }
                };

                countPrice(0);
                // axios.get('https://api.upbit.com/v1/candles/months?market=KRW-BTC&count=12').then((res) => {
                //     setChartData(res.data);
                // });
            });
        }
        if (period === '1개월') {
            console.log('1개월');
            axios.get('https://api.upbit.com/v1/market/all').then((res) => {
                const krwCoins = res.data.filter((coin) => coin.market.startsWith('KRW-'));
                for (let i = 0; i < krwCoins.length; i++) {
                    coinsKoreanName.push(krwCoins[i].korean_name);
                    coinsEnglishName.push(krwCoins[i].market);
                }

                const getCurrentPastPrice = (i) => {
                    let fetchCoin = setTimeout(() => {
                        console.log('실행중');
                        axios.get(`https://api.upbit.com/v1/ticker?markets=${krwCoins[i].market}`).then((res) => {
                            coinsCurrentprice += res.data[0].trade_price + ',';
                        });
                        axios
                            .get(
                                `https://api.upbit.com/v1/candles/days?market=${krwCoins[i].market}&to=${oneMonthBeforePriceDate}&count=1`
                            )
                            .then((res) => {
                                coinsPastPrice += res.data[0].trade_price + ',';
                            });
                        i++;
                        countPrice(i);
                    }, 100);
                    // if (isFetching === true) {
                    //     clearTimeout(fetchCoin);
                    // }
                };
                const countPrice = (i) => {
                    if (i < krwCoins.length) {
                        getCurrentPastPrice(i);
                    } else {
                        coinsPastPriceArr.push(coinsPastPrice.split(','));
                        coinsCurrentPriceArr.push(coinsCurrentprice.split(','));
                        for (let n = 0; n < coinsEnglishName.length; n++) {
                            coinsPriceUpArr.push([
                                coinsKoreanName[n],
                                coinsEnglishName[n],
                                ((coinsCurrentPriceArr[0][n] / coinsPastPriceArr[0][n]) * 100 - 100).toFixed(2),
                            ]);
                            coinsPriceDownArr.push([
                                coinsKoreanName[n],
                                coinsEnglishName[n],
                                ((coinsCurrentPriceArr[0][n] / coinsPastPriceArr[0][n]) * 100 - 100).toFixed(2),
                            ]);
                        }
                        coinsPriceUpArr.sort(function (a, b) {
                            return b[2] - a[2];
                        });
                        coinsPriceDownArr.sort(function (a, b) {
                            return a[2] - b[2];
                        });

                        if (coinsPriceUpArr[krwCoins.length - 1][2] === 'NaN') {
                            coinsPriceUpArr.pop();
                        }
                        if (coinsPriceDownArr[krwCoins.length - 1][2] === 'NaN') {
                            coinsPriceDownArr.pop();
                        }
                        console.log(coinsPriceUpArr);
                        console.log(coinsPriceDownArr);

                        const coinsPriceUpArrSlice = coinsPriceUpArr.slice(0, 5);
                        const coinsPriceDownArrSlice = coinsPriceDownArr.slice(0, 5);
                        console.log(coinsPriceUpArrSlice);
                        console.log(coinsPriceDownArrSlice);
                        setCoinUpPrices(coinsPriceUpArrSlice);
                        setCoinDownPrices(coinsPriceDownArrSlice);
                        setLoading(false);
                    }
                };

                countPrice(0);
            });
        }
        if (period === '3개월') {
            console.log('3개월');
            axios.get('https://api.upbit.com/v1/market/all').then((res) => {
                const krwCoins = res.data.filter((coin) => coin.market.startsWith('KRW-'));
                for (let i = 0; i < krwCoins.length; i++) {
                    coinsKoreanName.push(krwCoins[i].korean_name);
                    coinsEnglishName.push(krwCoins[i].market);
                }

                const getCurrentPastPrice = (i) => {
                    let fetchCoin = setTimeout(() => {
                        console.log('실행중');
                        axios.get(`https://api.upbit.com/v1/ticker?markets=${krwCoins[i].market}`).then((res) => {
                            coinsCurrentprice += res.data[0].trade_price + ',';
                        });
                        axios
                            .get(
                                `https://api.upbit.com/v1/candles/days?market=${krwCoins[i].market}&to=${threeMonthBeforePriceDate}&count=1`
                            )
                            .then((res) => {
                                coinsPastPrice += res.data[0].trade_price + ',';
                            });
                        i++;
                        countPrice(i);
                    }, 100);
                    // if (isFetching === true) {
                    //     clearTimeout(fetchCoin);
                    // }
                };
                const countPrice = (i) => {
                    if (i < krwCoins.length) {
                        getCurrentPastPrice(i);
                    } else {
                        coinsPastPriceArr.push(coinsPastPrice.split(','));
                        coinsCurrentPriceArr.push(coinsCurrentprice.split(','));
                        for (let n = 0; n < coinsEnglishName.length; n++) {
                            coinsPriceUpArr.push([
                                coinsKoreanName[n],
                                coinsEnglishName[n],
                                ((coinsCurrentPriceArr[0][n] / coinsPastPriceArr[0][n]) * 100 - 100).toFixed(2),
                            ]);
                            coinsPriceDownArr.push([
                                coinsKoreanName[n],
                                coinsEnglishName[n],
                                ((coinsCurrentPriceArr[0][n] / coinsPastPriceArr[0][n]) * 100 - 100).toFixed(2),
                            ]);
                        }
                        coinsPriceUpArr.sort(function (a, b) {
                            return b[2] - a[2];
                        });
                        coinsPriceDownArr.sort(function (a, b) {
                            return a[2] - b[2];
                        });

                        if (coinsPriceUpArr[krwCoins.length - 1][2] === 'NaN') {
                            coinsPriceUpArr.pop();
                        }
                        if (coinsPriceDownArr[krwCoins.length - 1][2] === 'NaN') {
                            coinsPriceDownArr.pop();
                        }
                        console.log(coinsPriceUpArr);
                        console.log(coinsPriceDownArr);

                        const coinsPriceUpArrSlice = coinsPriceUpArr.slice(0, 5);
                        const coinsPriceDownArrSlice = coinsPriceDownArr.slice(0, 5);
                        console.log(coinsPriceUpArrSlice);
                        console.log(coinsPriceDownArrSlice);
                        setCoinUpPrices(coinsPriceUpArrSlice);
                        setCoinDownPrices(coinsPriceDownArrSlice);
                        setLoading(false);
                    }
                };

                countPrice(0);
            });
        }
        if (period === '6개월') {
            console.log('6개월');
            console.log(sixMonthBeforePriceDate);
            axios.get('https://api.upbit.com/v1/market/all').then((res) => {
                const krwCoins = res.data.filter((coin) => coin.market.startsWith('KRW-'));
                for (let i = 0; i < krwCoins.length; i++) {
                    coinsKoreanName.push(krwCoins[i].korean_name);
                    coinsEnglishName.push(krwCoins[i].market);
                }

                const getCurrentPastPrice = (i) => {
                    let fetchCoin = setTimeout(() => {
                        console.log('실행중');
                        axios.get(`https://api.upbit.com/v1/ticker?markets=${krwCoins[i].market}`).then((res) => {
                            coinsCurrentprice += res.data[0].trade_price + ',';
                        });
                        axios
                            .get(
                                `https://api.upbit.com/v1/candles/days?market=${krwCoins[i].market}&to=${sixMonthBeforePriceDate}&count=1`
                            )
                            .then((res) => {
                                coinsPastPrice += res.data[0].trade_price + ',';
                            });
                        i++;
                        countPrice(i);
                    }, 100);
                    // if (isFetching === true) {
                    //     clearTimeout(fetchCoin);
                    // }
                };
                const countPrice = (i) => {
                    if (i < krwCoins.length) {
                        getCurrentPastPrice(i);
                    } else {
                        coinsPastPriceArr.push(coinsPastPrice.split(','));
                        coinsCurrentPriceArr.push(coinsCurrentprice.split(','));
                        for (let n = 0; n < coinsEnglishName.length; n++) {
                            coinsPriceUpArr.push([
                                coinsKoreanName[n],
                                coinsEnglishName[n],
                                ((coinsCurrentPriceArr[0][n] / coinsPastPriceArr[0][n]) * 100 - 100).toFixed(2),
                            ]);
                            coinsPriceDownArr.push([
                                coinsKoreanName[n],
                                coinsEnglishName[n],
                                ((coinsCurrentPriceArr[0][n] / coinsPastPriceArr[0][n]) * 100 - 100).toFixed(2),
                            ]);
                        }
                        coinsPriceUpArr.sort(function (a, b) {
                            return b[2] - a[2];
                        });
                        coinsPriceDownArr.sort(function (a, b) {
                            return a[2] - b[2];
                        });

                        if (coinsPriceUpArr[krwCoins.length - 1][2] === 'NaN') {
                            coinsPriceUpArr.pop();
                        }
                        if (coinsPriceDownArr[krwCoins.length - 1][2] === 'NaN') {
                            coinsPriceDownArr.pop();
                        }
                        console.log(coinsPriceUpArr);
                        console.log(coinsPriceDownArr);

                        const coinsPriceUpArrSlice = coinsPriceUpArr.slice(0, 5);
                        const coinsPriceDownArrSlice = coinsPriceDownArr.slice(0, 5);
                        console.log(coinsPriceUpArrSlice);
                        console.log(coinsPriceDownArrSlice);
                        setCoinUpPrices(coinsPriceUpArrSlice);
                        setCoinDownPrices(coinsPriceDownArrSlice);
                        setLoading(false);
                    }
                };

                countPrice(0);
            });
        }
        if (period === '1년') {
            console.log('1년');
            axios.get('https://api.upbit.com/v1/market/all').then((res) => {
                const krwCoins = res.data.filter((coin) => coin.market.startsWith('KRW-'));
                for (let i = 0; i < krwCoins.length; i++) {
                    coinsKoreanName.push(krwCoins[i].korean_name);
                    coinsEnglishName.push(krwCoins[i].market);
                }

                const getCurrentPastPrice = (i) => {
                    let fetchCoin = setTimeout(() => {
                        console.log('실행중');
                        axios.get(`https://api.upbit.com/v1/ticker?markets=${krwCoins[i].market}`).then((res) => {
                            coinsCurrentprice += res.data[0].trade_price + ',';
                        });
                        axios
                            .get(
                                `https://api.upbit.com/v1/candles/days?market=${krwCoins[i].market}&to=${oneYearBeforePriceDate}&count=1`
                            )
                            .then((res) => {
                                coinsPastPrice += res.data[0].trade_price + ',';
                            });
                        i++;
                        countPrice(i);
                    }, 100);
                    // if (isFetching === true) {
                    //     clearTimeout(fetchCoin);
                    // }
                };
                const countPrice = (i) => {
                    if (i < krwCoins.length) {
                        getCurrentPastPrice(i);
                    } else {
                        coinsPastPriceArr.push(coinsPastPrice.split(','));
                        coinsCurrentPriceArr.push(coinsCurrentprice.split(','));
                        for (let n = 0; n < coinsEnglishName.length; n++) {
                            coinsPriceUpArr.push([
                                coinsKoreanName[n],
                                coinsEnglishName[n],
                                ((coinsCurrentPriceArr[0][n] / coinsPastPriceArr[0][n]) * 100 - 100).toFixed(2),
                            ]);
                            coinsPriceDownArr.push([
                                coinsKoreanName[n],
                                coinsEnglishName[n],
                                ((coinsCurrentPriceArr[0][n] / coinsPastPriceArr[0][n]) * 100 - 100).toFixed(2),
                            ]);
                        }
                        coinsPriceUpArr.sort(function (a, b) {
                            return b[2] - a[2];
                        });
                        coinsPriceDownArr.sort(function (a, b) {
                            return a[2] - b[2];
                        });

                        if (coinsPriceUpArr[krwCoins.length - 1][2] === 'NaN') {
                            coinsPriceUpArr.pop();
                        }
                        if (coinsPriceDownArr[krwCoins.length - 1][2] === 'NaN') {
                            coinsPriceDownArr.pop();
                        }
                        console.log(coinsPriceUpArr);
                        console.log(coinsPriceDownArr);

                        const coinsPriceUpArrSlice = coinsPriceUpArr.slice(0, 5);
                        const coinsPriceDownArrSlice = coinsPriceDownArr.slice(0, 5);
                        console.log(coinsPriceUpArrSlice);
                        console.log(coinsPriceDownArrSlice);
                        setCoinUpPrices(coinsPriceUpArrSlice);
                        setCoinDownPrices(coinsPriceDownArrSlice);
                        setLoading(false);
                    }
                };

                countPrice(0);
            });
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
            <div className="border border-blue-600 max-w-5xl container mx-auto rounded-xl shadow-md p-4 flex text-center">
                <div className="w-3/6">
                    <h4 className="pb-4 text-xl font-semibold">상승률 상위 코인</h4>
                    <select
                        className="shadow-md border border-blue-500 rounded-lg mb-4"
                        style={{ width: 100 }}
                        onChange={periodChangeHandler}
                        value={period}
                    >
                        <option value="1주일">1주일</option>
                        <option value="1개월">1개월</option>
                        <option value="3개월">3개월</option>
                        <option value="6개월">6개월</option>
                        <option value="1년">1년</option>
                    </select>
                    {!loading ? (
                        <div className="text-center">
                            <table className="container mx-auto text-center">
                                <thead className="table-dark">
                                    <tr>
                                        <th scope="col">코인명</th>
                                        <th scope="col">상승률</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {coinUpPrices.map((coin) => {
                                        return (
                                            <tr>
                                                <th scope="row">{coin[0]}</th>
                                                <td>{coin[2]}%</td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <p>잠시만 기다려주세요</p>
                    )}
                </div>
                <CoinPriceDownTopRank loading={loading} coinDownPrices={coinDownPrices}></CoinPriceDownTopRank>
            </div>
        </>
    );
};

export default CoinPriceUpTopRank;
