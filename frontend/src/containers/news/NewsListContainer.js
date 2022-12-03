import { useState } from 'react';
import { useEffect } from 'react';
import Pagination from 'react-js-pagination';
import axios from '../../../node_modules/axios/index';

const NewsListContainer = () => {
    const newsArray = [];
    const [news, setNews] = useState([]);
    const [limit, setLimit] = useState(20);
    const [page, setPage] = useState(1);
    const offset = (page - 1) * limit;

    const pageChangeHandler = (page) => {
        setPage(page);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/search/news');
                console.log(response.data.items);
                for (let i = 0; i < response.data.items.length; i++) {
                    let newsItem = {};
                    newsItem.title = response.data.items[i].title.replace(/(<([^>]+)>)|&quot;|&apos;/gi, '');
                    newsItem.link = response.data.items[i].link.replace(/(<([^>]+)>)|&quot;/gi, '');
                    newsItem.description = response.data.items[i].description.replace(/(<([^>]+)>)|&quot;/gi, '');
                    newsItem.pubDate = response.data.items[i].pubDate.replace(/(<([^>]+)>)|&quot;/gi, '');
                    newsArray.push(newsItem);
                }
                console.log(newsArray);
                setNews(newsArray);
            } catch (e) {
                console.log(e);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="border border-blue-200 max-w-5xl mx-auto rounded-xl shadow-md p-4">
            <table className="container">
                <thead className="text-center">
                    <tr>
                        <th scope="col" className="pb-1">
                            제목
                        </th>
                        <th scope="col">등록일</th>
                    </tr>
                </thead>
                <tbody>
                    {news.slice(offset, offset + limit).map((news) => (
                        <tr className="hover:bg-blue-100/60">
                            <td className="pt-1">
                                <button onClick={() => window.open(`${news.link}`, '_blank')}>{news.title}</button>
                            </td>
                            <td className="text-center">
                                <span>{new Date(news.pubDate).toLocaleString()}</span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="mx-auto items-center flex justify-center">
                <Pagination
                    innerClass="inline-flex items-center -space-x-px"
                    itemClassFirst="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700"
                    itemClassLast="block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700"
                    itemClass="px-3 py-2 leading-tight bg-white border border-gray-300"
                    activeClass="z-10 px-3 py-2 leading-tight text-white border border-blue-300 bg-blue-500"
                    activePage={page}
                    itemsCountPerPage={20}
                    totalItemsCount={news.length}
                    pageRangeDisplayed={5}
                    prevPageText={'<'}
                    nextPageText={'>'}
                    onChange={pageChangeHandler}
                />
            </div>
        </div>
    );
};

export default NewsListContainer;
