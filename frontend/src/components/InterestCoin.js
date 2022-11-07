import ReactApexChart from 'react-apexcharts';

const InterestCoin = () => {
    return (
        <div className="border border-blue-600 max-w-5xl container mx-auto rounded-xl shadow-md p-4 m-4">
            <h4 className="pb-4 text-xl font-semibold">관심종목</h4>
            <div className="grid grid-cols-2 gap-4">
                <table className="table-auto border border-blue-500 text-center">
                    <thead className="table-dark">
                        <tr>
                            <th scope="col" className="border border-blue-500">
                                코인명
                            </th>
                            <th scope="col" className="border border-blue-500">
                                현재 가격(krw)
                            </th>
                            <th scope="col" className="border border-blue-500">
                                현재 가격(usd)
                            </th>
                            <th scope="col" className="border border-blue-500">
                                변동률
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row" className="border border-blue-500">
                                무슨코인
                            </th>
                            <td className="border border-blue-500">
                                10000 <span>krw</span>
                            </td>
                            <td className="border border-blue-500">
                                10000 <span>usd</span>
                            </td>
                            <td className="border border-blue-500">10000 몇퍼</td>
                        </tr>
                        <tr>
                            <th scope="row" className="border border-blue-500">
                                무슨코인2
                            </th>
                            <td className="border border-blue-500">
                                10000 <span>krw</span>
                            </td>
                            <td className="border border-blue-500">
                                10000 <span>usd</span>
                            </td>
                            <td className="border border-blue-500">10000 몇퍼</td>
                        </tr>
                        <tr>
                            <th scope="row" className="border border-blue-500">
                                무슨코인3
                            </th>
                            <td className="border border-blue-500">
                                10000 <span>krw</span>
                            </td>
                            <td className="border border-blue-500">
                                10000 <span>usd</span>
                            </td>
                            <td className="border border-blue-500">10000 몇퍼</td>
                        </tr>
                        <tr>
                            <th scope="row" className="border border-blue-500">
                                무슨코인4
                            </th>
                            <td className="border border-blue-500">
                                10000 <span>krw</span>
                            </td>
                            <td className="border border-blue-500">
                                10000 <span>usd</span>
                            </td>
                            <td className="border border-blue-500">10000 몇퍼</td>
                        </tr>
                        <tr>
                            <th scope="row" className="border border-blue-500">
                                무슨코인5
                            </th>
                            <td className="border border-blue-500">
                                10000 <span>krw</span>
                            </td>
                            <td className="border border-blue-500">
                                10000 <span>usd</span>
                            </td>
                            <td className="border border-blue-500">10000 몇퍼</td>
                        </tr>
                    </tbody>
                </table>
                <div className="">
                    <ReactApexChart
                        type="line"
                        series={[
                            {
                                name: 'High - 2013',
                                data: [28, 29, 33, 36, 32, 32, 33],
                            },
                            {
                                name: 'Low - 2013',
                                data: [12, 11, 14, 18, 17, 13, 13],
                            },
                        ]}
                        width="350"
                        options={{
                            chart: {
                                type: 'line',
                                dropShadow: {
                                    enabled: true,
                                    color: '#000',
                                    top: 18,
                                    left: 7,
                                    blur: 10,
                                    opacity: 0.2,
                                },
                                toolbar: {
                                    show: false,
                                },
                            },
                            colors: ['#77B6EA', '#545454'],
                            stroke: {
                                curve: 'smooth',
                            },
                            title: {
                                text: 'Average High & Low Temperature',
                                align: 'left',
                            },
                            grid: {
                                borderColor: '#e7e7e7',
                            },
                            markers: {
                                size: 1,
                            },
                            xaxis: {
                                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
                                title: {
                                    text: 'Month',
                                },
                            },
                            yaxis: {
                                title: {
                                    text: 'Temperature',
                                },
                                min: 5,
                                max: 40,
                            },
                            legend: {
                                position: 'top',
                                horizontalAlign: 'right',
                                floating: true,
                                offsetY: -25,
                                offsetX: -5,
                            },
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default InterestCoin;
