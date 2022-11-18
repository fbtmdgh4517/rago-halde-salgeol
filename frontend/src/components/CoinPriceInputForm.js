function CoinPriceInputForm(props) {
    return (
        <div className="max-w-md container mx-auto" id={props.id}>
            <label className="text-lg font-semibold" htmlFor="howMuch">
                코인의 가격
            </label>
            <input
                className={props.className}
                type="number"
                id="howMuch"
                min="0"
                ref={props.inputRef}
                // value={price}
                // onChange={priceInputChangeHandler}
            ></input>
        </div>
    );
}

export default CoinPriceInputForm;
