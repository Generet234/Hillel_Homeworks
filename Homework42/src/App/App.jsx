import { useState } from 'react'
import './App.css'

function App() {
    const [count, setCount] = useState(0)
    const [array, setArray] = useState([])

    const increaseHandler = () => {
        setCount(() => count + 1);
        setArray(array => [...array, count + 1])
    }
    const decreaseHandler = () => {
        setCount(() => count - 1);
        setArray(array => [...array, count -1])
        console.log(count)
    }
    const deleteHandler = (e) => {
        e.target.remove()
    }
    return (
            <div className="app">
                <div className="btn-group font-monospace" role="group">
                    <button type="button" className="btn btn-outline-success" onClick={increaseHandler}>+</button>
                    <button type="button" className="btn btn-outline-danger" onClick={decreaseHandler}>-</button>
                </div>
            <div className='list-group' >
                {array.map((item) => <button type="button" className="list-group-item list-group-item-action" onClick={deleteHandler}>{item}</button>)}
            </div>
        </div>
    )
}

export default App
