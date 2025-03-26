import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLocation } from "../utils/mapSlices";
function Map() {
  const [search, setSearch] = useState("");
  const [loaction, setLoaction] = useState("jaipur");
  const dispatch = useDispatch();
  const [address, setAddress] = useState({})

  const mapLatlng = useSelector((store) => store.map.latlng);
  const locationFetch = async () => {
    const url = `https://trueway-geocoding.p.rapidapi.com/Geocode?address=${loaction}%3CREQUIRED%3E&language=en`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "151afa8dfdmsh00c2dfad96360b9p1cb249jsn8e5608e0129f",
        "X-RapidAPI-Host": "trueway-geocoding.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setAddress(result.results[0]);
      dispatch(setLocation({ ...result.results[0].location }));
      console.log(address);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    locationFetch();
  }, [loaction]);

  return (
    <div className="mt-28 p-4">
      <div className="mb-4 flex justify-center gap-4">
        <input
          className="border border-black p-1 rounded-md w-60 "
          value={search}
          placeholder="Enter Address ..."
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <button
          className="bg-orange-500 text-white p-1 uppercase font-bold rounded-md px-2"
          onClick={() => {
            setLoaction(search);
          }}
        >
          Search
        </button>
      </div>
      <div className="box text-center uppercase bg-green-700 text-white rounded-md p-2 font-bold w-[80%] mx-auto ">
        Resturant Near by {address?.address ?address?.address :"Jaipur"}
      </div>
    </div>
  );
}
// export { result };
export default Map;
