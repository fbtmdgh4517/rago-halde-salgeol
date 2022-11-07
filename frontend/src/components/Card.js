function Card(props) {
    return (
        <div className={props.className} id={props.id}>
            {props.children}
        </div>
    );
}

export default Card;
