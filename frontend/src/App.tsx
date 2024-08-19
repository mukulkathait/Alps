import Landing from "./pages/Landing";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Homepage from "./pages/Homepage";
import Blog from "./pages/Blog";
import Profile from "./pages/Profile";
import WriteBlog from "./pages/WriteBlog";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/commonComponent/Layout";
import Missing from "./pages/Missing";
import AuthLayout from "./components/commonComponent/AuthLayout";
import EditBlog from "./pages/EditBlog";

const App = () => {
  return (
    <Routes>
      {/* public routes */}
      <Route path="/" element={<AuthLayout authentication={false} />}>
        <Route path="/" element={<Landing />} />
        <Route path="signup" element={<Signup />} />
        <Route path="signin" element={<Signin />} />
      </Route>

      <Route path="/" element={<AuthLayout authentication />}>
        <Route path="/" element={<Layout />}>
          {/* protected routes */}

          <Route path="home" element={<Homepage />} />
          <Route path="home/:blogId" element={<Blog />} />
          <Route path="home/profile" element={<Profile />} />
        </Route>

        <Route path="/new-story" element={<WriteBlog />} />
        <Route path="/edit-story/:blogId" element={<EditBlog />} />
      </Route>
      {/* catch all */}
      <Route path="*" element={<Missing />} />
    </Routes>
  );
};

export default App;
