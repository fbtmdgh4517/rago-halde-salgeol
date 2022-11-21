import { useState } from 'react';
import { useEffect } from 'react';
import axios from '../../../node_modules/axios/index';

const NewsListContainer = () => {
    const newsArray = [];
    const [news, setNews] = useState([]);

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
                    {news.map((news) => (
                        <tr className="hover:bg-blue-100/60">
                            <td className="pt-1">
                                <a href={news.link}>{news.title}</a>
                            </td>
                            <td className="text-center">
                                <span>{new Date(news.pubDate).toLocaleString()}</span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default NewsListContainer;
