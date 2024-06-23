import "./overview-blog-page.css"
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

function OverviewAllBlogs() {

    const [posts, setPosts] = useState([]);
    const [loaded, toggleLoaded] = useState(false);
    const [error, toggleError] = useState(false);


    useEffect(() => {
        const getPosts = async () => {
            toggleError(false);
            toggleLoaded(false);
            try {
                const response = await axios.get("http://localhost:3000/posts");
                setPosts(response.data);
                toggleLoaded(true);
            } catch(error) {
                console.log(error);
                toggleError(true);
            }
        }
        getPosts();
    }, []);

    return (
        <>
            <section className="outer-content-container">
                <div className="inner-content-container">
                    <h1>Bekijk alle {posts.length} posts op het platform</h1>
                    <ul className="overview-blog-list">
                        {loaded && posts.map((post) => (
                            <li key={post.id}>
                                <div className="blog-overview-container">
                                    <div className="information-container">
                                        <Link className="blog-detail-link" to={`/posts/${post.id}`}>{post.title} </Link>
                                        ({post.author})
                                    </div>
                                    <div className="engagement-container">
                                        {post.comments} reacties - {post.shares} keer gedeeld
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                    {error && <p className="error-message">Sorry, er is iets misgegaan</p>}
                </div>

            </section>
        </>
    )
}

export default OverviewAllBlogs;