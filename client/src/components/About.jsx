import React, { useState, useEffect } from "react";
import { MdEmail } from "react-icons/md";
import { FaAddressCard } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  let [userData, setUserData] = useState({});

  const getData = async () => {
    try {
      const res = await fetch("/about");
      if (res.status === 401) {
        navigate("/signin");
      }

      const data = await res.json();

      setUserData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div className="heading flex flex-col justify-center items-center space-y-7 my-8 smm:space-y-3">
        <div className="name text-7xl font-semibold font-serif text-center smm:text-3xl smtmd:text-4xl">
          {userData.name}
        </div>
        <div className="profession text-4xl font-bold text-purple-600 text-center font-mono smm:text-2xl">
          {userData.work}
        </div>
      </div>

      <div className="container mx-auto my-auto justify-between flex w-10/12 p-2 mt-4">
        {/* This is for the contact details */}
        <div className="contactDetail flex justify-between w-full space-x-6 smm:flex-col smm:space-x-0">
          <div className="pPhone flex items-center p-4 px-3 shadow-lg w-1/3 smm:w-full smtmd:p-2 smtmd:px-1">
            <div className="font-bold ml-2 smtmd:ml-2">📞</div>
            <div className="px-7 w-full smtmd:px-4">
              <h1 className="text-lg font-bold ">Phone</h1>
              <h1 className="text-sm">{userData.phone}</h1>
            </div>
          </div>
          <div className="pEmail flex items-center p-4 px-3 shadow-lg w-1/3 smm:w-full smtmd:p-2 smtmd:px-1">
            <div className="font-bold ml-3 smtmd:ml-2">
              <MdEmail />
            </div>
            <div className="px-7 w-full smtmd:px-4">
              <h1 className="text-lg font-bold">Email</h1>
              <h1 className="text-sm">{userData.email}</h1>
            </div>
          </div>
          <div className="pAddress flex items-center p-4 px-3 shadow-lg w-1/3 smm:w-full smtmd:p-2 smtmd:px-1">
            <div className="font-bold ml-3 smtmd:ml-2">
              <FaAddressCard />
            </div>
            <div className="px-7 w-full smtmd:px-4">
              <h1 className="text-lg font-bold">Profession</h1>
              <h1 className="text-sm">{userData.work}</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
