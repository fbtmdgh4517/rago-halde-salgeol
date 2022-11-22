import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from '../../node_modules/axios/index';

const NewsListPreview = () => {
    const [news, setNews] = useState([]);
    const newsArray = [];
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/search/news');
                // console.log(response.data.items);
                for (let i = 0; i < 10; i++) {
                    let newsItem = {};
                    newsItem.title = response.data.items[i].title.replace(/(<([^>]+)>)|&quot;|&apos;|&amp;/gi, '');
                    newsItem.link = response.data.items[i].link.replace(/(<([^>]+)>)|&quot;/gi, '');
                    newsItem.description = response.data.items[i].description.replace(/(<([^>]+)>)|&quot;/gi, '');
                    newsItem.pubDate = response.data.items[i].pubDate.replace(/(<([^>]+)>)|&quot;/gi, '');
                    newsArray.push(newsItem);
                }
                // console.log(newsArray);
                setNews(newsArray);
            } catch (e) {
                console.log(e);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="bg-white border border-blue-200 w-full shadow-md p-4 mb-9 rounded-xl">
            <div className="grid grid-cols-4 pb-4">
                <h4 className="max-w-5xl rounded-xl text-xl font-semibold col-span-3">뉴스</h4>
                <Link to="/news" className="text-base text-gray-700 text-right col-span-1">
                    더보기
                </Link>
            </div>
            <table className="table-auto w-full">
                <tbody>
                    {news.map((news) => (
                        <tr className="hover:bg-blue-100/60">
                            <td className="pt-1">
                                <button onClick={() => window.open(`${news.link}`, '_blank')}>
                                    {news.title.length < 32 ? news.title : `${news.title.slice(0, 32)}...`}
                                </button>
                                {/* <a href={news.link}>
                                    {news.title.length < 32 ? news.title : `${news.title.slice(0, 32)}...`}
                                </a> */}
                            </td>
                            <td className="text-right">
                                <span className="text-sm">{new Date(news.pubDate).toLocaleDateString()}</span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default NewsListPreview;
