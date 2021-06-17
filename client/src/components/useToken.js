import { useState } from "react";

export default function useToken() {
  const getToken = () => {
    const tokenString = localStorage.getItem("token");

    return tokenString;
  };

  const [token, setToken] = useState(getToken());

  const saveToken = (userToken) => {
    localStorage.setItem("token", userToken.token.access_token);
    setToken(userToken.token.access_token);
  };

  return {
    setToken: saveToken,
    token,
  };
}
