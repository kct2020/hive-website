import React from "react";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import BlogPostPage from "./BlogPostPage";
import BlogPost from "./components/BlogPost";
import BloggerPage from "./components/BloggerPage";
import usePosts from "./hooks/usePosts";
import "./components/styles.css";

// Main application component that renders navigation and routes
function App() {
  // Fetch recent posts from the specified user using the usePosts hook
  const { recentPosts } = usePosts("keithtaylor");

  return (
    <div className="app">
      <h1 className="app__title">Welcome to Keith Taylor's Blog</h1>
      <BrowserRouter>
        <nav className="app__nav">
          <Link to="/">Home</Link>
          <span> | </span>
          <div className="dropdown">
            <Link className="dropbtn" to="#">
              Recommended Bloggers
            </Link>
            <div className="dropdown-content">
              <Link to="/blogger/edicted">keithtaylor</Link>
              <Link to="/blogger/edicted">edicted</Link>
              <Link to="/blogger/theycallmedan">theycallmedan</Link>
              <Link to="/blogger/taskmaster4450">taskmaster4450</Link>
              <Link to="/blogger/khaleelkazi">khaleelkazi</Link>
            </div>
          </div>
        </nav>
        <div className="app__container">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <div className="posts-container app__posts-container">
                  <div className="post-items-wrapper">
                    <div className="post-items app__post-items">
                      {recentPosts.map((post, index) => (
                        <BlogPost
                          key={post.permlink}
                          post={post}
                          index={index}
                        />
                      ))}
                    </div>
                    </div>
                  </div>
                </>
              }
            />
            <Route path="/post/:author/:permlink" element={<BlogPostPage />} />
            <Route
              path="/blogger/:username"
              element={<BloggerPage />}
            />
          </Routes>
        </div>
      </BrowserRouter>
      <div className="hive-icon">
        <img
          src="https://hive.blog/images/hive-blog-logo.svg"
          alt="hive logo"
          width="150px"
        />
      </div>
    </div>
  );
}

export default App;