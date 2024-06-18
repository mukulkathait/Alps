import { Outlet } from "react-router-dom";
import { Appbar } from "./components/Homepage/Appbar";

export const Top = () => {
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
