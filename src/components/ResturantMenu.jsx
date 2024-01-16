import React, { useState } from "react";
import ShimmerUi from "./ShimmerUi";
import { useParams } from "react-router-dom";
import useReturantMenu from "../utils/useReturantMenu";
import ResCategory from "./ResCategory";
import Switch from "react-switch";
import useFetchResturant from "../utils/useFetchResturant";

export default function ResturantMenu() {
  const [showIndex, setShowIndex] = useState(null);
  const { resId } = useParams();
  const resInfo = useReturantMenu(resId);
  const [listOfResturants, filteredResturant, setFilteredResturant, foodList] =
    useFetchResturant();
  const [isVeg, setIsVeg] = useState([]);

  if (resInfo === null) return <ShimmerUi />;
  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  const { name, cuisines, avgRating, totalRatingsString, costForTwo } =
    resInfo?.cards[0]?.card?.card?.info;
  const { deliveryTime } = resInfo?.cards[0]?.card?.card?.info?.sla;
  //   console.log(resInfo?.cards[0]?.card?.card?.info)
  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  console.log(itemCards);

  // console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards)

  return (
    <div className="mt-16 w-6/12 mx-auto ">
      <div className="mt-3 flex justify-between items-center px-2 pb-4 border-b-2">
        <div className="flex flex-col gap-2">
          <h1 className="font-bold  text-2xl ">{name}</h1>
          <p className="text-sm ">{cuisines.join(" /")}</p>
        </div>
        <div className="flex flex-col gap-2 items-center ">
          <p className="font-bold">⭐{avgRating}</p>
          <p className="text-sm">{totalRatingsString}</p>
        </div>
      </div>
      <div className="px-2 py-4 flex border-b-2 gap-5 items-center mb-3">
        <p className="font-bold">🕒 {deliveryTime} minutes</p>
        <p className="font-bold"> ₹ {costForTwo / 100} for two</p>
      </div>
      <div className="px-2 py-2 flex items-center border-b-2 gap-3">
        <label className="font-bold text-sm pb-2">Veg only</label>
        <input
          type="checkbox"
          value="veg"
          onChange={(e) => {
            if (e.target.checked) {
              setIsVeg(true);
            }
          }}
        ></input>
      </div>

      {categories.map((category, index) => {
        return (
          <ResCategory
            data={category.card.card}
            veg={isVeg}
            showItem={index === showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
          />
        );
      })}
    </div>
  );
}
