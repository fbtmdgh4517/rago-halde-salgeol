function CoinPriceInputForm(props) {
    return (
        <div className="max-w-md container mx-auto" id={props.id}>
            <label className="text-lg font-semibold" htmlFor="howMuch">
                구매금액
            </label>
            <input
                className={props.className}
                type=""
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
