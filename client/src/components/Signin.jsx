import React, { useState,useContext} from "react";
import { useNavigate } from "react-router-dom";
import Loginpng from "../login.png";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { userContext } from "../App";

const Login = () => {
  const {state,dispatch} = useContext(userContext);
  const navigate = useNavigate();
  const [lUserData, lOnChangeHandler] = useState({ email: "", password: "" });
  function onFilling(event) {
    let name = event.target.id;
    let val = event.target.value;
    lOnChangeHandler({ ...lUserData, [name]: val });
  }

  const handler = async (e) => {
    e.preventDefault();

    const { email, password } = lUserData;

    const res = await fetch("/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const body = await res.json();
    alert(body.result);
    if (body.lStatus === 200) {
      dispatch({type:"User",payload:true})
      navigate("/");
    }
  };

  return (
    <div className="mt-16">
      {/* This is container div */}
      <div className="container mx-auto my-auto justify-between flex w-8/12 p-5 pr-8  bg-white mdm:w-10/12 drop-shadow-2xl">
        {/* This is div for vector image */}
        <div className="vector w-1/2 my-auto mdm:hidden">
          <img src={Loginpng} alt="loginpng" />
        </div>

        {/* This is div for signin side */}
        <div className="login flex flex-col p-5 pt-14 w-5/12 mdm:w-full smm:p-0">
          <div className="flex justify-center mdm:flex mdm:justify-center mb-6">
            <h1 className="w-10/12 text-4xl font-extrabold mdm:mx-auto mdm:w-fit">
              Sign In
            </h1>
          </div>

          {/* This is form */}
          <form
            action=""
            method="post"
            className="flex flex-col space-y-4 w-full mt-10 justify-center items-center"
          >
            <div className="w-10/12 rounded-sm border-b-4 mdm:w-full flex justify-between items-center">
              <label htmlFor="email" className="inline-block">
                <MdEmail />
              </label>
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                className=" placeholder:text-lg mx-auto placeholder:text-gray-500 p-2 ml-2 w-8/12 focus:outline-none mdm:w-10/12"
                autoComplete="off"
                onChange={onFilling}
                value={lUserData.email}
              />
            </div>
            <div className="w-10/12 rounded-sm border-b-4 mdm:w-full ">
              <label htmlFor="password" className="inline-block">
                <FaLock />
              </label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                className=" placeholder:text-lg mx-auto placeholder:text-gray-500 p-2 w-8/12 ml-2 focus:outline-none mdm:w-10/12"
                autoComplete="off"
                onChange={onFilling}
                value={lUserData.password}
              />
            </div>
            <button
              className="mt-20 bg-green-500 mx-auto rounded-md h-12 w-2/3 text-xl text-white hover:bg-green-600 font-bold drop-shadow-lg hover:drop-shadow-2xl"
              type="submit"
              onClick={handler}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
