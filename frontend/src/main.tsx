import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
// import { Signup } from "./pages/Signup.tsx";
// import { Signin } from "./pages/Signin.tsx";
// import { Homepage } from "./pages/Homepage.tsx";
// import { Blog } from "./pages/Blog.tsx";
// import Layout from "./Layout.tsx";
// import { Profile } from "./pages/Profile.tsx";
// import { TextEditor } from "./pages/WriteBlog.tsx";
import { Provider } from "react-redux";
import store from "./store/store.ts";
// import AuthLayout from "./components/commonComponent/AuthLayout.tsx";
// import Landing from "./pages/Landing.tsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Landing />,
//   },
//   {
//     path: "/signup",
//     element: (
//       <AuthLayout authentication={false}>
//         <Signup />
//       </AuthLayout>
//     ),
//   },
//   {
//     path: "/signin",
//     element: (
//       <AuthLayout authentication={false}>
//         <Signin />
//       </AuthLayout>
//     ),
//   },
//   {
//     path: "/home",
//     element: (
//       // <AuthLayout authentication>
//       <Layout />
//       // </AuthLayout>
//     ),
//     children: [
//       {
//         path: "/home",
//         element: <Homepage />,
//       },
//       {
//         path: "/home/:blogId",
//         element: <Blog />,
//       },
//       {
//         path: "/home/profile",
//         element: <Profile />,
//       },
//     ],
//   },
//   {
//     path: "/new-story",
//     element: (
//       // <AuthLayout authentication>
//       <TextEditor />
//       // </AuthLayout>
//     ),
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
