import axios from "../api/axios";
import { useAppDispatch, useAppSelector } from "../store/stateHook";
import { login } from "../store/authSlice";

const useRefreshToken = () => {
  const dispatch = useAppDispatch();
  const selector = useAppSelector((state) => state.auth);

  const refresh = async () => {
    const response = await axios.get("/api/v1/user/refresh", {
      withCredentials: true,
    });
    console.log(selector);
    dispatch(
      login({
        ...selector,
        token: response.data.accessToken,
      })
    );
    return response.data.accessToken;
  };
  return refresh;
};

export default useRefreshToken;
