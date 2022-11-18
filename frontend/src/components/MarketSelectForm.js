function MarketSelectForm(props) {
    const marketChangeHandler = (event) => {
        props.onChangeMarket(event.target.value);
    };

    return (
        <div className="max-w-md container mx-auto" id={props.id}>
            <label className="text-lg font-semibold" htmlFor="selectMarket">
                코인 마켓
            </label>
            <select className={props.className} id="selectMarket" ref={props.inputRef} onChange={marketChangeHandler}>
                <option value="마켓을 선택하세요">마켓을 선택하세요</option>
                <option value="KRW">KRW 마켓</option>
                <option value="BTC">BTC 마켓</option>
                <option value="USDT">USDT 마켓</option>
            </select>
        </div>
    );
}

export default MarketSelectForm;
