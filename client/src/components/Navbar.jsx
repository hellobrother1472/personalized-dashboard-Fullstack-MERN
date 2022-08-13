import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import { userContext } from "../App";

function Navbar() {
  const { state, dispatch } = useContext(userContext);
  let [smallState, changeState] = useState(false);
  function onClickHandler() {
    changeState((prevEvent) => {
      return !prevEvent;
    });
  }
  const RenderMenu = () => {
    if (state) {
      return (
        <ul className="flex space-x-12 justify-center items-center cursor-pointer smm:hidden">
          <li className="font-semibold hover:text-purple-700 hover:text-lg">
            <Link to="/">Home</Link>
          </li>
          <li className="font-semibold hover:text-purple-700 hover:text-lg">
            <Link to="/about">AboutMe</Link>
          </li>
          <li className="font-semibold hover:text-purple-700 hover:text-lg">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="font-semibold hover:text-purple-700 hover:text-lg">
            <Link to="/logout">Logout</Link>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="flex space-x-12 justify-center items-center cursor-pointer smm:hidden">
          <li className="font-semibold hover:text-purple-700 hover:text-lg">
            <Link to="/">Home</Link>
          </li>
          <li className="font-semibold hover:text-purple-700 hover:text-lg">
            <Link to="/about">AboutMe</Link>
          </li>
          <li className="font-semibold hover:text-purple-700 hover:text-lg">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="font-semibold hover:text-purple-700 hover:text-lg">
            <Link to="/signin">Sign In</Link>
          </li>

          <li className="font-semibold hover:text-purple-700 hover:text-lg">
            <Link to="/signup">Sign Up</Link>
          </li>
        </ul>
      );
    }
  };

  const SmallRenderMenu = () => {
    if (state) {
      return (
        <ul className="flex flex-col space-y-4 py-5 items-center">
          <li
            className="font-semibold hover:text-purple-600 hover:text-lg"
            onClick={onClickHandler}
          >
            <Link to="/">Home</Link>
          </li>
          <li
            className="font-semibold hover:text-purple-600 hover:text-lg"
            onClick={onClickHandler}
          >
            <Link to="/about">AboutMe</Link>
          </li>
          <li
            className="font-semibold hover:text-purple-600 hover:text-lg"
            onClick={onClickHandler}
          >
            <Link to="/contact">Contact</Link>
          </li>
          <li
            className="font-semibold hover:text-purple-600 hover:text-lg"
            onClick={onClickHandler}
          >
            <Link to="/logout">Logout</Link>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="flex flex-col space-y-4 py-5 items-center">
          <li
            className="font-semibold hover:text-purple-600 hover:text-lg"
            onClick={onClickHandler}
          >
            <Link to="/">Home</Link>
          </li>
          <li
            className="font-semibold hover:text-purple-600 hover:text-lg"
            onClick={onClickHandler}
          >
            <Link to="/about">AboutMe</Link>
          </li>
          <li
            className="font-semibold hover:text-purple-600 hover:text-lg"
            onClick={onClickHandler}
          >
            <Link to="/contact">Contact</Link>
          </li>
          <li
            className="font-semibold hover:text-purple-600 hover:text-lg"
            onClick={onClickHandler}
          >
            <Link to="/signin">Sign In</Link>
          </li>
          <li
            className="font-semibold hover:text-purple-600 hover:text-lg"
            onClick={onClickHandler}
          >
            <Link to="/signup">Sign Up</Link>
          </li>
        </ul>
      );
    }
  };

  return (
    <div>
      {/* Div of NavBar */}
      <div className="flex justify-between items-center p-3 pl-8 pr-10 bg-transparent">
        <div className="flex justify-center items-center logo">
          <img className=" w-10 mr-4" src={logo} alt="logo" />
          <h1 className="font-bold text-3xl smm:text-2xl smtmd:hidden">
            <Link to="/">PDash</Link>{" "}
          </h1>
        </div>

        <div
          className={"flex flex-col space-y-1 py-2.5 sm:hidden w-5"}
          onClick={onClickHandler}
        >
          <div className="p-0.5 bg-slate-500"></div>
          <div className="p-0.5 bg-slate-500"></div>
          <div className="p-0.5 bg-slate-500"></div>
        </div>
        <RenderMenu />
      </div>

      {/* Div of toogled one */}
      <div className={smallState ? "sm:hidden z-10" : "hidden sm:hidden"}>
        <div className=" w-screen bg-purple-300"></div>
        <SmallRenderMenu />
      </div>
    </div>
  );
}

export default Navbar;
