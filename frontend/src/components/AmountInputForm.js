function AmountInputForm(props) {
    const amountInputChangeHandler = (event) => {
        props.onChangeAmount(event.target.value);
    };

    return (
        <div className="max-w-md container mx-auto" id={props.id}>
            <label className="text-lg font-semibold" htmlFor="howMany">
                환산 개수
            </label>
            <input
                className={props.className}
                type="number"
                id="howMany"
                min="0"
                ref={props.inputRef}
                value={props.amount}
                onChange={amountInputChangeHandler}
                disabled
            ></input>
        </div>
    );
}

export default AmountInputForm;
