import posts from '/src/constants/data.json';
import {Link, useParams} from "react-router-dom";
import formatDate from "../helpers/formatDate.js"

function BlogDetail() {
    const {postId} = useParams()
    const post = posts.find(post => post.id === parseInt(postId, 10))

    return (
        <>
            <h1>{post.title}</h1>
            <h2>{post.subtitle}</h2>
            <p>Geschreven door {post.author} op {formatDate(post.created)}</p>
            <p>{post.content}</p>
            <p>{post.comments} reacties - {post.shares} keer gedeeld</p>
            <Link to="/posts" >Terug naar de overzichtspagina</Link>
        </>
    )
}


export default BlogDetail;

