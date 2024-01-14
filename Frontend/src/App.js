import "./App.css";
import AddBlog from "./components/AddBlog";
import Login from "./components/Login";
import Blogs from "./components/Blogs";
import UserBlogs from "./components/UserBlogs";
import BlogDetail from "./components/BlogDetail";
import Header from "./components/header";
import { Routes, Route, BrowserRouter  } from "react-router-dom";

function App() {
  return (
    <div className="app-container">
      <div className="header-section">
        <Header />
      </div>
      <main className="main-section">
        <BrowserRouter>
          <Routes>
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/blogs" element={<Blogs />} />
            <Route exact path="/my-blogs" element={<UserBlogs />} />
            <Route exact path="/my-blogs/:id" element={<BlogDetail />} />
            <Route exact path="/blogs/add" element={<AddBlog />} />
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
