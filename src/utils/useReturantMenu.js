import { useState, useEffect } from "react";
import { MENU_API } from "./constant";

export default function useReturantMenu(resId) {
  const [resinfo, setResInfo] = useState(null);
  useEffect(function () {
    async function fetchMenu() {
      const data = await fetch(MENU_API + resId);
      const res = await data.json();

      setResInfo(res.data);
    }
    fetchMenu();
  }, []);
  return resinfo;
}
