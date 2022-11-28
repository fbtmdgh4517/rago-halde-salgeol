const ExchangeLinks = () => {
    return (
        <div className="border border-blue-200 max-w-6xl mx-auto rounded-xl shadow-md p-4 mb-9">
            <h4 className="pb-4 text-xl font-semibold">코인 거래소</h4>
            <div className="grid grid-cols-6 gap-4 justify-items-stretch">
                <button
                    onClick={() => window.open('https://upbit.com', '_blank')}
                    className="hover:bg-blue-100/60 text-center rounded-xl hover:shadow-md"
                >
                    <img
                        className="w-12 h-12 mx-auto"
                        src="http://wiki.hash.kr/images/thumb/c/c4/%EC%97%85%EB%B9%84%ED%8A%B8_%EB%A1%9C%EA%B3%A0.png/105px-%EC%97%85%EB%B9%84%ED%8A%B8_%EB%A1%9C%EA%B3%A0.png"
                        alt=""
                        srcset=""
                    />
                    <span className="">업비트</span>
                </button>
                <button
                    onClick={() => window.open('https://www.bithumb.com', '_blank')}
                    className="hover:bg-blue-100/60 text-center rounded-xl hover:shadow-md"
                >
                    <img
                        className="w-12 h-12 mx-auto"
                        src="http://wiki.hash.kr/images/thumb/1/18/%EB%B9%97%EC%8D%B8_%EB%A1%9C%EA%B3%A0.png/105px-%EB%B9%97%EC%8D%B8_%EB%A1%9C%EA%B3%A0.png"
                        alt=""
                    />
                    <span className="">빗썸</span>
                </button>
                <button
                    onClick={() => window.open('https://coinone.co.kr/', '_blank')}
                    className="hover:bg-blue-100/60 text-center rounded-xl hover:shadow-md"
                >
                    <img
                        className="w-12 h-12 mx-auto"
                        src="http://wiki.hash.kr/images/thumb/c/cc/%EC%BD%94%EC%9D%B8%EC%9B%90_%EB%A1%9C%EA%B3%A0.png/105px-%EC%BD%94%EC%9D%B8%EC%9B%90_%EB%A1%9C%EA%B3%A0.png"
                        alt=""
                    />
                    <span className="">코인원</span>
                </button>
                <button
                    onClick={() => window.open('https://www.korbit.co.kr/', '_blank')}
                    className="hover:bg-blue-100/60 text-center rounded-xl hover:shadow-md"
                >
                    <img
                        className="w-12 h-12 mx-auto"
                        src="http://wiki.hash.kr/images/thumb/3/3d/%EC%BD%94%EB%B9%97_%EB%A1%9C%EA%B3%A0.png/105px-%EC%BD%94%EB%B9%97_%EB%A1%9C%EA%B3%A0.png"
                        alt=""
                    />
                    <span className="">코빗</span>
                </button>
                <button
                    onClick={() => window.open('https://www.hb.co.kr/ko-kr/', '_blank')}
                    className="hover:bg-blue-100/60 text-center rounded-xl hover:shadow-md"
                >
                    <img
                        className="w-12 h-12 mx-auto"
                        src="http://wiki.hash.kr/images/thumb/6/61/%ED%9B%84%EC%98%A4%EB%B9%84%EC%BD%94%EB%A6%AC%EC%95%84_%EB%A1%9C%EA%B3%A0.png/105px-%ED%9B%84%EC%98%A4%EB%B9%84%EC%BD%94%EB%A6%AC%EC%95%84_%EB%A1%9C%EA%B3%A0.png"
                        alt=""
                    />
                    <span className="">후오비코리아</span>
                </button>
                <button
                    onClick={() => window.open('https://www.binance.com/en', '_blank')}
                    className="hover:bg-blue-100/60 text-center rounded-xl hover:shadow-md"
                >
                    <img
                        className="w-12 h-12 mx-auto"
                        src="http://wiki.hash.kr/images/thumb/8/88/%EB%B0%94%EC%9D%B4%EB%82%B8%EC%8A%A4_%EB%A1%9C%EA%B3%A0.png/105px-%EB%B0%94%EC%9D%B4%EB%82%B8%EC%8A%A4_%EB%A1%9C%EA%B3%A0.png"
                        alt=""
                    />
                    <span className="">바이낸스</span>
                </button>
                <button
                    onClick={() => window.open('https://ftx.com/', '_blank')}
                    className="hover:bg-blue-100/60 text-center rounded-xl hover:shadow-md"
                >
                    <img
                        className="w-12 h-12 mx-auto"
                        src="http://wiki.hash.kr/images/thumb/d/d6/%EC%97%90%ED%94%84%ED%8B%B0%EC%97%91%EC%8A%A4_%EB%A1%9C%EA%B3%A0.png/300px-%EC%97%90%ED%94%84%ED%8B%B0%EC%97%91%EC%8A%A4_%EB%A1%9C%EA%B3%A0.png"
                        alt=""
                    />
                    <span className="">FTX</span>
                </button>
                <button
                    onClick={() => window.open('https://www.coinbase.com/', '_blank')}
                    className="hover:bg-blue-100/60 text-center rounded-xl hover:shadow-md"
                >
                    <img
                        className="w-12 h-12 mx-auto"
                        src="http://wiki.hash.kr/images/thumb/d/d7/%EC%BD%94%EC%9D%B8%EB%B2%A0%EC%9D%B4%EC%8A%A4_%EB%A1%9C%EA%B3%A0.png/300px-%EC%BD%94%EC%9D%B8%EB%B2%A0%EC%9D%B4%EC%8A%A4_%EB%A1%9C%EA%B3%A0.png"
                        alt=""
                    />
                    <span className="">코인베이스</span>
                </button>
                <button
                    onClick={() => window.open('https://www.kraken.com/', '_blank')}
                    className="hover:bg-blue-100/60 text-center rounded-xl hover:shadow-md"
                >
                    <img
                        className="w-12 h-12 mx-auto"
                        src="http://wiki.hash.kr/images/thumb/d/d1/%ED%81%AC%EB%9D%BC%EC%BC%84_%EB%A1%9C%EA%B3%A0.png/300px-%ED%81%AC%EB%9D%BC%EC%BC%84_%EB%A1%9C%EA%B3%A0.png"
                        alt=""
                    />
                    <span className="">크라켄</span>
                </button>
                <button
                    onClick={() => window.open('https://www.kucoin.com/ko', '_blank')}
                    className="hover:bg-blue-100/60 text-center rounded-xl hover:shadow-md"
                >
                    <img
                        className="w-12 h-12 mx-auto"
                        src="http://wiki.hash.kr/images/thumb/b/bd/%EC%BF%A0%EC%BD%94%EC%9D%B8_%EB%A1%9C%EA%B3%A0.png/300px-%EC%BF%A0%EC%BD%94%EC%9D%B8_%EB%A1%9C%EA%B3%A0.png"
                        alt=""
                    />
                    <span className="">쿠코인</span>
                </button>
                <button
                    onClick={() => window.open('https://www.bybit.com/en-US/', '_blank')}
                    className="hover:bg-blue-100/60 text-center rounded-xl hover:shadow-md"
                >
                    <img
                        className="w-12 h-12 mx-auto"
                        src="http://wiki.hash.kr/images/thumb/3/3a/%EB%B0%94%EC%9D%B4%EB%B9%84%ED%8A%B8_%EB%A1%9C%EA%B3%A0.png/300px-%EB%B0%94%EC%9D%B4%EB%B9%84%ED%8A%B8_%EB%A1%9C%EA%B3%A0.png"
                        alt=""
                    />
                    <span className="">바이비트</span>
                </button>
                <button
                    onClick={() => window.open('https://www.mexc.com/ko-KR', '_blank')}
                    className="hover:bg-blue-100/60 text-center rounded-xl hover:shadow-md"
                >
                    <img
                        className="w-12 h-12 mx-auto"
                        src="http://wiki.hash.kr/images/thumb/0/09/%EC%97%A0%EC%97%91%EC%8A%A4%EC%94%A8_%28%EA%B1%B0%EB%9E%98%EC%86%8C%29_%EB%A1%9C%EA%B3%A0.png/300px-%EC%97%A0%EC%97%91%EC%8A%A4%EC%94%A8_%28%EA%B1%B0%EB%9E%98%EC%86%8C%29_%EB%A1%9C%EA%B3%A0.png"
                        alt=""
                    />
                    <span className="">MEXC</span>
                </button>
            </div>
        </div>
    );
};

export default ExchangeLinks;
