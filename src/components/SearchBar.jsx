import React from "react";
import useFetchResturant from "../utils/useFetchResturant";
import { useState } from "react";
import Card, { withRatingTag } from "./Card";
import { Link } from "react-router-dom";
import ShimmerUi from "./ShimmerUi";

export default function SearchBar() {
  const [listOfResturants, filteredResturant, setFilteredResturant, foodList] =
    useFetchResturant();
  const [searchText, setSearchText] = useState("");
  const RatingCard = withRatingTag(Card);
  if (listOfResturants?.length === 0) return <ShimmerUi />;
  return (
    <div className="w-[100%] flex flex-col justify-center items-center">
      <div className="m-8 flex gap-6 ">
        <input
          className="rounded-lg pl-2 bg-slate-100 outline-none shadow-sm"
          placeholder="Search Resturant..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        ></input>
        <button
          className="py-2 px-5 bg-orange-500  rounded-lg text-white"
          onClick={() => {
            let filteredRes = listOfResturants.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );

            setFilteredResturant(filteredRes);
          }}
        >
          Search
        </button>
      </div>
      <div className="flex flex-grid flex-wrap items-center m-auto justify-center">
        {filteredResturant?.map((res) => {
          {
            /* console.log(res.info); */
          }
          return (
            <Link to={"/resturant/" + res?.info?.id} key={res?.info?.id}>
              {/* {res?.info?.avgRating > 4.5 ? <RatingCard resturants={res}/> :<Card resturants={res} />} */}
              {res?.info?.avgRating > 4.2 ? (
                <RatingCard resturants={res} />
              ) : (
                <Card resturants={res} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
