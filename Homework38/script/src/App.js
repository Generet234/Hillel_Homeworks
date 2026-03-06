import Card from './components/Card.jsx'
import './App.css'

function App() {

  return (
    <div className="App">
        <Card title='Hi friend'/>
        <Card text='I am Ivan'/>
        <Card title='Hi friend' text='I am Ivan'/>
    </div>
  )
}

export default App
