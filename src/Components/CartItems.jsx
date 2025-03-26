import React from "react";
import { CDN_URL } from "../utils/constant";
import { addItem, removeItems,sumTotalPrice } from "../utils/cartSlices";
import { useState } from "react";
import dummyImg from "../images/SiteLogo.png";
import {useDispatch,useSelector} from "react-redux";

function CartItems({ item }) {
  const [itemCount, setItemCount] = useState(item.quantity);
  const dispatch = useDispatch();
  const itemPrice = item.price ? item.price / 100 : item.defaultPrice / 100;
  return (
    <div className="cart-item flex bg-indigo-100 mt-5 p-2  items-center justify-between  shadow-lg  ">
      <div className="img w-[100px] mr-2">
        <img
          src={CDN_URL + item.imageId}
          alt=""
          className="w-[100%] overflow-hidden shadow-xl rounded-lg"
          onError={(e) => (e.target.src = dummyImg)}
        />
      </div>
      <div className="itemDetails flex gap-2  ">
        <div className="flex gap-6 uppercase  justify-center items-center">
          <p className="w-[100px] font-semibold">{item.name}</p>
          <p className="font-semibold">₹{itemPrice}</p>
        </div>
      </div>
      <div className="btns flex bg-white w-[100px] justify-center gap-2 items-center  rounded-lg shadow-md">
        <button
          className="py-1"
          onClick={() => {
            dispatch(addItem(item));
            dispatch(sumTotalPrice(itemPrice));
          }}
        >
          ➕
        </button>
        <p className=" rounded-md shadow-sm bg-blue-500 px-3 text-white font-bold">
          {item.quantity}
        </p>
        <button
          className="py-1"
          onClick={() => {
            dispatch(removeItems(item.id));
            dispatch(sumTotalPrice(-itemPrice));
          }}
        >
          ➖
        </button>
      </div>
    </div>
  );
}

export default CartItems;
