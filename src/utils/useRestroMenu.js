import { useState, useEffect } from "react";
import {useSelector} from "react-redux"
// import { fetchMenuAPI } from "../utils/constant";

const useRestroMenu = (resId) => {
  
 const latlng = useSelector((store) => store.map.latlng);
 const fetchMenuAPI = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${latlng.lat}&lng=${latlng.lng}&restaurantId=`;
  const [restroInfo, setRestroInfo] = useState(null);
  useEffect(() => {
    getRestroMenu();
  }, []);

  const getRestroMenu = async () => {
    const data = await fetch(fetchMenuAPI + resId);
    const json = await data.json();
    console.log("Fetching the data" + json);
    setRestroInfo(json?.data);
  };
  return restroInfo;
};
export default useRestroMenu;
