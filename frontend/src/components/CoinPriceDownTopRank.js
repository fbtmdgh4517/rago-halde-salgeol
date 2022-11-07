import { useState } from 'react';

const CoinPriceDownTopRank = (props) => {
    // const [coinDownPrices, setCoinDownPrices] = useState([]);
    // const downPrice = props.coinsPriceChangeArr;
    console.log(props.loading);
    // if (props.loading === false) {
    //     setCoinDownPrices(
    //         props.coinsPriceChangeArr.sort(function (a, b) {
    //             return a[2] - b[2];
    //         })
    //     );
    // }

    return (
        <div className="w-1/2 text-center">
            <h4 className="pb-4 text-xl font-semibold mb-10">하락률 상위 코인</h4>
            {!props.loading ? (
                <div className="text-center">
                    <table className="container mx-auto text-center">
                        <thead className="table-dark">
                            <tr>
                                <th scope="col">코인명</th>
                                <th scope="col">상승률</th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.coinDownPrices.map((coin) => {
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
    );
};

export default CoinPriceDownTopRank;
