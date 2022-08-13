import React, { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";

const type = (typewriter) => {
  typewriter
    .typeString("Hello!!")
    .pauseFor(1000)
    .deleteAll()
    .typeString("I am a MERN Developer")
    .pauseFor(1000)
    .deleteAll()
    .typeString("Welcome To Personalized Dashboard")
    .pauseFor(1000)
    .deleteChars(22)
    .typeString("PDash")
    .pauseFor(7500)
    .start();
};

const Home = () => {
  let [userData, setUserData] = useState("");
  let [loginStatus, setLoginStatus] = useState(false);

  const getData = async () => {
    try {
      const res = await fetch("/about");
      const data = await res.json();

      console.log(data.name);
      setUserData(data.name);
      if (res.status === 401) {
        setLoginStatus(false);
      } else {
        setLoginStatus(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="flex h-screen">
        <div className="w-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full px-16 smm:px-10">
          <div className="flex flex-col justify-center items-center w-full vsmm:mt-4">
            <h1 className="inline text-6xl font-mono font-extrabold text-center smm:text-3xl vsmm:text-xl text-purple-700">
              {/* If user is authenticated then show his name */}

              {loginStatus ? (
                "Welcome, " + userData
              ) : (
                <Typewriter onInit={type} options={{ loop: false }} />
              )}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
