import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from './Card';

function CoinNews(props) {
    const [coinNews, setCoinNews] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const ID_KEY = 'zuQk494JI7Fxpjylx8gN';
            const SECRET_KEY = 'IZTyzeJ0qk';

            try {
                const response = await axios.get('https://openapi.naver.com/v1/search/news.json', {
                    params: {
                        query: '코인',
                        display: 20,
                    },
                    headers: {
                        'X-Naver-Client-Id': ID_KEY,
                        'X-Naver-Client-Secret': SECRET_KEY,
                    },
                });
                console.log(response.data.items);
                setCoinNews(response.data.items);
            } catch (e) {
                console.log(e);
            }
        };
        fetchData();
    }, []);

    return (
        <Card className={props.className}>
            <h1 className="mb-5 fw-bold text-success">코인 뉴스</h1>
            {coinNews.map((news) => {
                news.title = news.title.replace(/<b>/g, '');
                news.title = news.title.replace(/<\/b>/g, '');
                news.title = news.title.replace(/&quot;/g, '');
                news.title = news.title.replace(/&apos;/g, '');
                return (
                    <div key={news.link}>
                        <a href={news.link}>{news.title}</a>
                    </div>
                );
            })}
        </Card>
    );
}

export default CoinNews;
