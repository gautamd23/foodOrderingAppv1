import React, { useEffect, useState } from "react";
import "./index.css";
import Header from "./components/Header";
import Body from "./components/Body";
import resturant from "./utils/mockData";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext";
import appStore from "./utils/appStore";
import { Provider } from "react-redux";


export default function App() {
  const [userName, setUserName] = useState();

  useEffect(function(){
    const data = {
      name:"Gautam"
    }
    setUserName(data.name)
  },[])
  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{
      loginUserName:userName
    }}>
    <div className="app">
      <Header />
      <Outlet />
      <div className="footer"></div>
    </div>
    </UserContext.Provider>
    </Provider>
  );
}
