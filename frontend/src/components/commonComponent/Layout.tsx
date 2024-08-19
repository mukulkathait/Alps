import { Outlet } from "react-router-dom";
import { Appbar } from "../homePageComponent/Appbar";

const Layout = () => {
  return (
    <div>
      <div>
        <Appbar />
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
