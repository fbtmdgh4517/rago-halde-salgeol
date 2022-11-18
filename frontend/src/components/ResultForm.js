function ResultForm(props) {
    const renderResult = (color) => {
        const result = [];

        // if (color === 'red') {
        //     result.push(<img alt="pepegood" key="good" src={goodImg} className="result-img"></img>);
        //     result.push(<br key="br1"></br>);
        // } else {
        //     result.push(<img alt="pepebad" key="bad" src={badImg} className="result-img"></img>);
        //     result.push(<br key="br2"></br>);
        // }

        for (let i = 0; i < props.resultText.split(' ').length - 2; i++) {
            result.push(<span key={i}>{props.resultText.split(' ')[i]} </span>);
        }

        for (let j = 8; j <= 9; j++) {
            result.push(
                <span style={{ color: color }} key={j}>
                    <b>{props.resultText.split(' ')[j]}</b>{' '}
                </span>
            );
        }

        return <div>{result}</div>;
    };

    return (
        <div id={props.id} className="border border-blue-200 max-w-5xl mx-auto rounded-xl shadow-md p-4 m-4">
            {props.resultText.endsWith('벌었다.') && renderResult('red')}
            {props.resultText.endsWith('잃었다.') && renderResult('blue')}
        </div>
    );
}

export default ResultForm;
