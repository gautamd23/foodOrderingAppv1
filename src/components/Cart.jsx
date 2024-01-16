import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CategoryItems from "./CategoryItems";
import { IMG_URL } from "../utils/constant";
import { clearCart } from "../utils/cartSlice";
import { Link } from "react-router-dom";

export default function Cart() {
  const cartItems = useSelector((store) => store?.cart?.items);
  console.log(cartItems);
  const dispatch = useDispatch();
  function handleClearCart() {
    dispatch(clearCart());
  }
  return (
    <div className="mt-6 w-6/12 m-auto">
      {/* <div className="font-bold mt-8 text-center text-2xl">Cart</div> */}
      {cartItems.length === 0 ? (
        <div className=" flex flex-col items-center">
          <h1 className="mt-6 text-center font-bold text-2xl">
            Your cart is empty
          </h1>
          <p className="mt-3 text-center">
            You can go to home page to view more restaurants
          </p>
          <Link to="/"><button className="mt-6 font-bold py-2 px-4 bg-orange-500 rounded-lg align-middle text-white">SEE RESTAURANTS NEAR YOU</button></Link>
          </div>
      ) : (
        <div className="p-2 m-2 text-left ">
          <button
            className="bg-orange-500 py-2 px-2 rounded-lg text-white"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
        </div>
      )}
      {cartItems.map((item) => {
        console.log(item.name);
        return (
          <>
            <div className="flex justify-between items-center border-b-2 py-4 ml-2">
              <div className="flex flex-col py-2 w-10/12">
                <span className=" text-sm font-semibold">{item.name}</span>
                <span className="text-sm">
                  ₹{item.price ? item.price / 100 : item.defaultPrice / 100}
                </span>
                <p className="text-xs mt-1">{item.description}</p>
              </div>
              <div className="w-2/12 px-3 relative">
                <div className="absolute">
                  <button
                    onClick={() => handleAdd(item)}
                    className=" bg-orange-500 text-white shadow-lg rounded-tl-none rounded-bl-none rounded-md px-2 "
                  >
                    -
                  </button>
                </div>
                <img
                  className="w-[75px] h-[75px] rounded-md mr-2"
                  src={IMG_URL + item.imageId}
                ></img>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}
