import React, {useState} from "react";
import classNames from 'classnames';
export const TodoCard = ({todo}) => {
    const [isPressed, setPressed] = useState(false);

    const clickHandler = () => setPressed((prev) => !prev);

    const cardClass = classNames('card',{
        'btn-pressed': isPressed,
        'btn-over': !isPressed
    })
    return (
        <React.Fragment>
        <hr/>
        <div className={cardClass} onClick={clickHandler}>
            <div className="card-body">
                <h5 className="card-title">{todo.title}</h5>
                <p className="card-text">{todo.description}</p>
            </div>
        </div>
    </React.Fragment>)
}