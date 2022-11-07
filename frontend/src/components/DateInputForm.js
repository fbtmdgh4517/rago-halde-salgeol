function DateInputForm(props) {
    return (
        <div className="max-w-md container mx-auto" id={props.id}>
            <label className="" htmlFor="when">
                언제
            </label>
            <input className={props.className} type="datetime-local" name="when" id="when" ref={props.inputRef} />
        </div>
    );
}

export default DateInputForm;
