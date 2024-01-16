import React, { useEffect, useState } from "react";
import Card, { withRatingTag } from "./Card";
import ShimmerUi from "./ShimmerUi";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useFetchResturant from "../utils/useFetchResturant";
import FoodBanner from "./FoodBanner";
import Slider from "react-slick";
import { IMG_URL } from "../utils/constant";
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "black",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "black",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
}

export default function Body() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 4,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();
  const [listOfResturants, filteredResturant, setFilteredResturant, foodList] =
    useFetchResturant();

  console.log(listOfResturants);
  console.log(foodList);
  const RatingCard = withRatingTag(Card);
  if (listOfResturants?.length === 0) return <ShimmerUi />;
  if (onlineStatus == false)
    return <h1 className="body"> Looks like you are offline...!!</h1>;
  return (
    <div className="w-[100%] flex flex-col items-center m-auto">
      <div className="w-[1000px] flex flex-col text-center my-6 gap-6">
        <div className="  justify-between text-left">
          <h1 className="font-bold text-2xl">Whats on your mind?</h1>
        </div>
        <div>
          <Slider {...settings}>
            {foodList?.map((item) => {
              return (
                <div>
                  <img
                    className="w-32 mx-3"
                    src={`${IMG_URL}${item.imageId}`}
                  ></img>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
      <div className="w-[1000px] border-b-2 mb-8"></div>
      <div>
        <h1 className="font-bold text-2xl w-[1000px] text-left mb-3">
          Restaurants with online food delivery{" "}
        </h1>
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
