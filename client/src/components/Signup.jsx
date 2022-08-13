import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Signup from "../signup.png";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { HiUser } from "react-icons/hi";

const Register = () => {
  const navigate = useNavigate();
  const [rUserData, rOnChangeHandler] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cpassword: "",
  });

  function onFilling(event) {
    let name = event.target.id;
    let value = event.target.value;
    rOnChangeHandler({ ...rUserData, [name]: value });
  }

  const postData = async (e) => {
    e.preventDefault();
    const { name, email, phone, work, password, cpassword } = rUserData;
    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        work,
        password,
        cpassword,
      }),
    });

    const data = await res.json();
    alert(data.result);

    if (data.regStatus === 201) {
      navigate("/signin");
    }

  };
  return (
    <div className="mt-10">
      {/* This is container div */}
      <div className="container mx-auto my-auto justify-between flex w-8/12 p-5 pt-1 pl-8  bg-white mdm:w-10/12 drop-shadow-2xl">
        {/* This is div for signin side */}
        <div className="login flex flex-col p-5 pt-10 w-1/2 mdm:w-full smm:p-0">
          <div className="flex justify-center mdm:flex mdm:justify-center mb-6">
            <h1 className="w-10/12 text-4xl font-extrabold mdm:mx-auto mdm:w-fit">
              Sign Up
            </h1>
          </div>

          {/* This is form */}
          <form
            method="POST"
            className="flex flex-col space-y-4 w-full mt-8 justify-center items-center"
          >
            <div className="w-10/12 rounded-sm border-b-4 mdm:w-full flex justify-between items-center">
              <label htmlFor="name" className="inline-block">
                <HiUser />
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                className=" placeholder:text-lg mx-auto placeholder:text-gray-500 p-1 ml-2 w-8/12 focus:outline-none mdm:w-10/12"
                autoComplete="off"
                onChange={onFilling}
                value={rUserData.name}
              />
            </div>
            <div className="w-10/12 rounded-sm border-b-4 mdm:w-full ">
              <label htmlFor="email" className="inline-block">
                <MdEmail />
              </label>
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                className=" placeholder:text-lg mx-auto placeholder:text-gray-500 p-1 w-8/12 ml-2 focus:outline-none mdm:w-10/12"
                autoComplete="off"
                onChange={onFilling}
                value={rUserData.email}
              />
            </div>
            <div className="w-10/12 rounded-sm border-b-4 mdm:w-full ">
              <label htmlFor="pnumber" className="inline-block">
                📞
              </label>
              <input
                type="tel"
                id="phone"
                placeholder="Mobile Number"
                className=" placeholder:text-lg mx-auto placeholder:text-gray-500 p-1 w-8/12 ml-2 focus:outline-none mdm:w-10/12"
                autoComplete="off"
                onChange={onFilling}
                value={rUserData.phone}
              />
            </div>
            <div className="w-10/12 rounded-sm border-b-4 mdm:w-full ">
              <label htmlFor="profession" className="inline-block">
                🧑‍🏭
              </label>
              <input
                type="text"
                id="work"
                placeholder="Your Profession"
                className=" placeholder:text-lg mx-auto placeholder:text-gray-500 p-1 w-8/12 ml-2 focus:outline-none mdm:w-10/12"
                autoComplete="off"
                onChange={onFilling}
                value={rUserData.work}
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
                className=" placeholder:text-lg mx-auto placeholder:text-gray-500 p-1 w-8/12 ml-2 focus:outline-none mdm:w-10/12"
                autoComplete="off"
                onChange={onFilling}
                value={rUserData.password}
              />
            </div>
            <div className="w-10/12 rounded-sm border-b-4 mdm:w-full ">
              <label htmlFor="cpassword" className="inline-block">
                <FaLock />
              </label>
              <input
                type="password"
                id="cpassword"
                placeholder="Confirm Password"
                className=" placeholder:text-lg mx-auto placeholder:text-gray-500 p-1 w-8/12 ml-2 focus:outline-none mdm:w-10/12"
                onChange={onFilling}
                value={rUserData.cpassword}
              />
            </div>
            <button
              className="mt-16 bg-green-500 mx-auto rounded-md h-12 w-2/3 text-xl text-white hover:bg-green-600 font-bold drop-shadow-lg hover:drop-shadow-2xl"
              type="submit"
              onClick={postData}
            >
              Sign Up
            </button>
          </form>
        </div>

        {/* This is div for vector image */}
        <div className="vector w-1/2 my-auto mdm:hidden">
          <img src={Signup} alt="loginpng" />
        </div>
      </div>
    </div>
  );
};

export default Register;

