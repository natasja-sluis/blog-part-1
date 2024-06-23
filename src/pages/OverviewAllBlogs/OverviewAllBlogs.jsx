import posts from '/src/constants/data.json';
import "./overview-blog-page.css"
import {Link} from "react-router-dom";

function OverviewAllBlogs() {

    return (
        <>
            <section className="outer-content-container">
                <div className="inner-content-container">
                    <h1>Bekijk alle {posts.length} posts op het platform</h1>
                    <ul className="overview-blog-list">
                        {posts.map((post) => (
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
                </div>

            </section>
        </>
    )
}

export default OverviewAllBlogs;