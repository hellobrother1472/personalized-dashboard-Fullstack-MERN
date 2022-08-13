import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../App";

const Logout = () => {
  const { state, dispatch } = useContext(userContext);
  const navigate = useNavigate();
  const logoutFunc = async () => {
    try {
      const res = await fetch("/logout");

      if (res.status === 401) {
        navigate("/signin");
      } else {
        dispatch({ type: "User", payload: false });
        const data = await res.json();
        navigate("/signin");
        alert(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    logoutFunc();
  }, []);

  return <div></div>;
};

export default Logout;
