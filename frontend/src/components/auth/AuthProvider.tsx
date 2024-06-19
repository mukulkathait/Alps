import { useEffect, useState } from "react";

const AuthProvider = () => {
  const [token, setToken] = useState<String | null>();

  useEffect(() => {
    const fetchUser = async () => {
      try {
      } catch (error) {
        setToken(null);
      }
    };
  }, []);
};
