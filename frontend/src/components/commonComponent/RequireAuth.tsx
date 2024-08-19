import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../../store/stateHook";

const RequireAuth = () => {
  const auth = useAppSelector((state) => state.auth);
  const location = useLocation();

  return auth.status ? (
    <Outlet />
  ) : (
    <Navigate to="/signin" state={{ from: location }} replace />
  );
};

export default RequireAuth;
