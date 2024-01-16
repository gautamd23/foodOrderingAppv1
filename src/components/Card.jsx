import React from "react";
// import {resturant} from '../utils/mockData';
import { IMG_URL } from "../utils/constant";

export default function Card({ resturants }) {
  const { info } = resturants;
  // console.log(info);

  return (
    <div className="w-60 h-auto  m-3 justify-center  pb-4  px-2 py-2 rounded-lg  hover:shadow-lg">
      <img
        className="w-full h-[200px] rounded-lg shadow-lg"
        src={`${IMG_URL}${info.cloudinaryImageId}`}
      ></img>
      <h4 className="font-bold mt-2">{info.name}</h4>
      <p className="text-sm py-1 overflow-x-hidden whitespace-pre-wrap">
        {info.cuisines.join(",").substring(0, 28) + "..."}
      </p>

      <p className="text-sm py-0.5">Rating:{info.avgRatingString}</p>
      <p className="text-sm py-0.5">Delivery time:{info.sla.deliveryTime}</p>
    </div>
  );
}

export function withRatingTag(Card) {
  return function (props) {
    return (
      <>
        <label className="absolute ml-5 mt-5 p-2 rounded-tl-lg bg-orange-600 text-white">
          Top Rated
        </label>
        <Card {...props} />
      </>
    );
  };
}
