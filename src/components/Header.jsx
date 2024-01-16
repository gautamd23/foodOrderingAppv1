import React, { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link, NavLink } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { Provider, useSelector } from "react-redux";
import appStore from "../utils/appStore";
import SearchBar from "./SearchBar";

export default function Header() {
  const onlineStatus = useOnlineStatus();
  const [btn, setbtn] = useState("Login");
  const data = useContext(UserContext);
  // console.log(data);

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <div className="flex justify-between shadow-lg p-2">
      <div className="ml-7">
        <Link to="/">
          <img className="w-20 rounded-full" src={LOGO_URL}></img>
        </Link>
      </div>

      <div className="flex items-center gap-5 mr-8">
        <ul className="flex justify-between gap-5 items-center">
          <li>
            {/* <SearchBar /> */}
            <NavLink
              to="/search"
              className={({ isActive }) =>
                isActive ? "text-orange-600" : "text-black"
              }
            >
              🔎 Search
            </NavLink>
          </li>
          <li>Online status:{onlineStatus ? "🟢" : "🔴"}</li>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-orange-600" : "text-black"
              }
            >
              Offers
            </NavLink>
          </li>

          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive ? "text-orange-600" : "text-black"
            }
          >
            <li>Cart ({cartItems.length} items)</li>
          </NavLink>

          {/* <li>{data.loginUserName}</li> */}
          <li>
            <button
              className="py-2 px-4 bg-orange-500 rounded-lg align-middle text-white"
              onClick={() =>
                btn === "Login" ? setbtn("Logout") : setbtn("Login")
              }
            >
              {btn}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
