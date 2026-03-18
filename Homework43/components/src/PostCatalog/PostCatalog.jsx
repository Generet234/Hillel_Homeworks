import {useState, useEffect} from 'react'
import './PostCatalog.css'
function PostCatalog() {
    const [array, setArray] = useState([])
    useEffect(() => {
        const getData = async () => {
            const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`)
            const json = await res.json()
            setArray(json)
        }
        getData()
    })
    return (
        <div className="posts">
            <ul className="posts__list">
                {array.map((item) =>
                    <li className="posts_single-post" data-post-id={item.id} key={item.id}>
                        <h3 className="posts__post-title">{item.title}</h3>
                        <p className="posts__post-description">{item.body}</p>
                    </li>)}
            </ul>
        </div>
    )
}

export default PostCatalog