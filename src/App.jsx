import './App.css'
import {Routes, Route} from 'react-router-dom'
import Navigation from '/src/components/navigation/Navigation'
import HomePage from '/src/pages/Homepage/HomePage'
import NewBlogPost from "/src/pages/NewBlogPost/NewBlogPost";
import OverviewAllBlogs from "/src/pages/OverviewAllBlogs/OverviewAllBlogs";
import NotFound from "/src/pages/NotFound/NotFound";
import Posts from "./pages/BlogDetail/BlogDetail.jsx";

function App() {
    return (<>
                <Navigation/>
                <Routes>
                    <Route
                        path="/"
                        element={<HomePage/>}
                    />
                    <Route
                        path="/NewBlogPost"
                        element={<NewBlogPost/>}
                    />
                    <Route
                        path="/posts"
                        element={<OverviewAllBlogs/>}
                    />
                    <Route
                        path="/posts/:postId"
                        element={<Posts/>}
                    />
                    <Route
                        path="*"
                        element={<NotFound/>}
                    />
                </Routes>
        </>
    )
}

export default App
