import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
    const [loading, setLoading] = useState(0)
    const [array, setArray] = useState([])

    const renderIncrease = () => {
        setCount(() => count + 1);
        setArray(array => [...array, count + 1])
    }
    const renderDecrease = () => {
      setCount(() => count - 1);
      setArray(array => [...array, count -1])
      console.log(count)
    }
    return (
        <>
        <div>
            <div className="btn-group font-monospace" role="group">
              <button type="button" className="btn btn-outline-success" onClick={renderIncrease}>+</button>
              <button type="button" className="btn btn-outline-danger" onClick={renderDecrease}>-</button>
          </div>
      </div>
            <div className='list-group' >
            {array.map((item) => <button type="button" className="list-group-item list-group-item-action" >{item}</button>)}
            </div>
    </>
  )
}

export default App
