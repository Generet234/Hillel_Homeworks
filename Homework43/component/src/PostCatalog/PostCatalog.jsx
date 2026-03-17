import {useState} from 'react'
import './PostCatalog.css'
function PostCatalog() {
    const [count, setCount] = useState(0)
    const [array, setArray] = useState([])
    const getData = async () => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${count}`)
        const json = await res.json()
        setArray((array) => [...array, json])
        setCount(count => count + 1)
    }
    if (count >= 0 && count <= 100) {
        getData()
    }
    return (
        <div className="posts">
            <ul className="posts__list">
                {array.map((item) =>
                    <li className="posts_single-post" data-post-id={item.id}>
                        <h3 className="posts__post-title">{item.title}</h3>
                        <p className="posts__post-description">{item.body}</p>
                    </li>)}
            </ul>
        </div>
    )
}

export default PostCatalog
