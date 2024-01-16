import React, { useState } from "react";
import CategoryItems from "./CategoryItems";

export default function ResCategory({data,showItem, setShowIndex , veg}) {
  // const [showItem, setShowItem] = useState(false)
  // console.log(category.itemCards);
  // const {itemCards} = category.card.card;

  function handleClick() {
    setShowIndex();
  }
  console.log(data)
  return (
    <div className="w-full my-4  py-3 px-4  shadow-md rounded-md">
      <div className="font-bold flex justify-between cursor-pointer" onClick={handleClick}>
        <span >
          {data.title} ({data.itemCards.length})
        </span>
        <span>🔽</span>
      </div>
      <div className="my-2">
        {showItem && data?.itemCards?.map((item)=>{
          {/* console.log(item.card.info.isVeg) */}
          return <CategoryItems lists={item} />
        })}
      
      </div>
    </div>
  );
}
