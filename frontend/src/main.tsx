import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Signup } from "./pages/Signup.tsx";
import { Signin } from "./pages/Signin.tsx";
import { Homepage } from "./pages/Homepage.tsx";
import { Blog } from "./pages/Blog.tsx";
import { Top } from "./Top.tsx";
import { Profile } from "./pages/Profile.tsx";
import { TextEditor } from "./components/publish/TextEditor.tsx";
import { Provider } from "react-redux";
import store from "./store/store.ts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/home",
    element: <Top />,
    children: [
      {
        path: "/home",
        element: <Homepage />,
      },
      {
        path: "/home/blog",
        element: <Blog />,
      },
      {
        path: "/home/profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "/new-story",
    element: <TextEditor />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
