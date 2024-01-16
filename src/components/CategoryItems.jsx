import React from "react";
import { IMG_URL } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

export default function CategoryItems({ lists }) {
  const dispatch = useDispatch();

  function handleAdd(lists) {
    dispatch(addItem(lists));
    // console.log(list)
  }
  console.log(lists);
  const {info} = lists.card;
  return (
    <div className="flex justify-between items-center border-b-2 py-4 ml-2 ">
      <div className="flex flex-col py-2 w-10/12">
        <span className=" text-sm font-semibold">{info.name}</span>
        <span className="text-sm">
          ₹{info.price ? info.price / 100 : info.defaultPrice / 100}
        </span>
        <p className="text-xs mt-1">{info.description}</p>
      </div>
      <div className="w-2/12 px-3 relative">
        <div className="absolute">
          <button
            onClick={() => handleAdd(info)}
            className=" bg-orange-500 text-white shadow-lg rounded-tl-none rounded-bl-none rounded-md px-2 "
          >
            Add
          </button>
        </div>
        <img
          className="w-[75px] h-[75px] rounded-md mr-2"
          src={IMG_URL + info.imageId}
        ></img>
      </div>
    </div>
  );
}
