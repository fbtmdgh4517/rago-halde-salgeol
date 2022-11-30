function CoinSelectForm(props) {
    const krwCoins = props.coins.filter((coin) => coin.market.startsWith('KRW-'));
    // const btcCoins = props.coins.filter((coin) => coin.market.startsWith('BTC-'));
    // const usdtCoins = props.coins.filter((coin) => coin.market.startsWith('USDT-'));

    return (
        <div className="max-w-md container mx-auto" id={props.id}>
            <label className="text-lg font-semibold" htmlFor="selectCoin">
                코인종류
            </label>
            <select className={props.className} id="selectCoin" ref={props.inputRef}>
                <option value="코인을 선택하세요">코인을 선택하세요</option>
                {krwCoins.map((coin) => {
                    return (
                        <option value={coin.market} key={coin.market}>
                            {coin.korean_name} {coin.market}
                        </option>
                    );
                })}
                {/* {props.market === 'KRW' &&
                    krwCoins.map((coin) => {
                        return (
                            <option value={coin.market} key={coin.market}>
                                {coin.korean_name} {coin.market}
                            </option>
                        );
                    })}
                ; */}
                {/* {props.market === 'BTC' &&
                    btcCoins.map((coin) => {
                        return (
                            <option value={coin.market} key={coin.market}>
                                {coin.korean_name} {coin.market}
                            </option>
                        );
                    })}
                ;
                {props.market === 'USDT' &&
                    usdtCoins.map((coin) => {
                        return (
                            <option value={coin.market} key={coin.market}>
                                {coin.korean_name} {coin.market}
                            </option>
                        );
                    })}
                ; */}
            </select>
        </div>
    );
}

export default CoinSelectForm;
