import { useEffect, useState } from "react";
import { useAppSelector } from "../../store/stateHook";
import { useNavigate, Outlet } from "react-router-dom";

const Protected = ({ authentication = true }: { authentication: boolean }) => {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);
  const authStatus = useAppSelector((state) => state.auth?.status);

  useEffect(() => {
    if (authentication && authStatus !== authentication) {
      navigate("/signin");
    } else if (!authentication && authStatus !== authentication) {
      navigate("/home");
    }
    setLoader(false);
  }, [authStatus, navigate, authentication]);

  return loader ? <h1>Loading...</h1> : <Outlet />;
};

export default Protected;
