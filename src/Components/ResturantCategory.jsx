import { CDN_URL } from "../utils/constant";
import ResturantCatRes from "./ResturantCatRes";
import dummyImg from "../images/SiteLogo.png";
import {addItem,sumTotalPrice} from "../utils/cartSlices";
import {useDispatch} from "react-redux" 
const ResturnatCategory = ({ info, RestroId }) => {
  const dispatch = useDispatch();
  const addItemHandler = (item) => {
    const itemPrice = item.card.info.price
      ? item.card.info.price / 100
      : item.card.info.defaultPrice / 100;
    dispatch(addItem({ ...item.card.info, RestroId: RestroId }));
    dispatch(sumTotalPrice(itemPrice));
  };
  return (
    <div className="">
      {info.map((res) => {
        return (
          <div
            key={res.card.info.id}
            className="rest flex justify-between items-center bg-slate-100 p-2 mt-4 rounded-lg shadow-xl"
          >
            <div className="desc w-9/12 p-1">
              <h2 className="font-semibold">
                {res.card.info.name} ₹
                {res.card.info.price
                  ? res.card.info.price / 100
                  : res.card.info.defaultPrice / 100}
              </h2>
              <p className="font-medium">{res.card.info.description}</p>
            </div>
            <div className="img w-2/12 relative ">
              <img
                className="rounded-lg shadow-2xl"
                src={CDN_URL + res.card.info.imageId}
                alt=""
                onError={(e) => (e.target.src = dummyImg)}
              />
              <button
                className="absolute sm:bottom-1 sm:left-6 bg-black text-white p-1 rounded-md sm:text-md uppercase text-xs "
                onClick={() => addItemHandler(res)}
              >
                ➕Add➕
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ResturnatCategory;
