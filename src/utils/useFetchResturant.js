import { useState, useEffect } from "react";

export default function useFetchResturant() {
  const [listOfResturants, setListOfResturants] = useState([]);
  const [filteredResturant, setFilteredResturant] = useState([]);
  const [vegOnly, setVegOnly] = useState([]);
  const [foodList, setFoodlist] = useState([]);

  useEffect(function () {
    async function fetchRes() {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.875294&lng=76.623942&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();

      setListOfResturants(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilteredResturant(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFoodlist(
        json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info
      );
    }
    fetchRes();
  }, []);
  return [listOfResturants, filteredResturant, setFilteredResturant, foodList];
}
