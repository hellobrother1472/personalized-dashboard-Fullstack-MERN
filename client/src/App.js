import React, { createContext, useReducer } from "react";
import { Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import ErrorPage from "./components/ErrorPage";
import Logout from "./components/Logout";
import { reducer, initialState } from "../src/reducer/useReducer"

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} exact />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="*" element={<ErrorPage />} />
      <Route path="/logout" element={<Logout />} />
    </Routes>
  )
}

export const userContext = createContext();  // Creating a context
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="flex flex-col" >
      <userContext.Provider value={{ state, dispatch }}>
        <Navbar />
        <Routing />
      </userContext.Provider>
    </div>
  );
}

export default App;
