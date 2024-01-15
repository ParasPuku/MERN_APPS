import "./App.css";
import AddBlog from "./components/AddBlog";
import Login from "./components/Login";
import Blogs from "./components/Blogs";
import UserBlogs from "./components/UserBlogs";
import BlogDetail from "./components/BlogDetail";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  console.log(isLoggedIn);
  return (
    <div className="app-container">
      <div className="header-section">
        <Header />
      </div>
      <main className="main-section">
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/blogs" element={<Blogs />} />
          <Route exact path="/blogs/add" element={<AddBlog />} />
          <Route exact path="/my-blogs" element={<UserBlogs />} />
          <Route exact path="/my-blogs/:id" element={<BlogDetail />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
