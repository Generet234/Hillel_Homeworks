import './App.css'
import MarkdownEditor from "./MarkdownEditor/index.js";

function App() {

  return (
    <MarkdownEditor onContentChange={console.log}/>
  )
}

export default App
