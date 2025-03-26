import React, { useEffect } from "react";
import CartItems from "./CartItems";
import { useSelector,useDispatch } from "react-redux";
import { useState } from "react";
import { clearCart } from "../utils/cartSlices";

const Cart = () => {
  const cartItem = useSelector((store) => store.cart.items);
  const totalPrice = useSelector((store) => store.cart.totalPrice);
  const dispatch = useDispatch();
  if (cartItem.length === 0)
    return (
      <div className="cart errorBOX">
        <h1 className="font-bold uppercase">
          Cart is Empty , Add item to Cart
        </h1>
      </div>
    );
  return (
    <div className=" p-4 cart   max-w-[800px] mx-auto mt-32 flex gap-6 bg-slate-50 rounded-lg shadow-xl">
      <div className="left-box w-[70%] rounded-lg shadow-md bg-slate-100  p-2">
        <p className="uppercase font-bold text-center text-lg   p-2">
          Cart Item
        </p>
        <button
          className="bg-white text-sky-600 uppercase font-bold p-2 mt-2 rounded-lg shadow-xl"
          onClick={() => {
            dispatch(clearCart());
          }}
        >
          Clear Cart ➡️
        </button>
        {cartItem.map((item, index) => (
          <CartItems key={item.id} item={item} setItemCost itemCost />
        ))}
      </div>
      <div className="rounded-lg shadow-md bg-sky-600 text-white  p-6 text-center flex flex-col justify-between h-[400px] my-auto">
          <h2 className="font-bold uppercase text-center">Your Bill</h2>
        <div className="form p-2 flex flex-col gap-4 ">
          <input
            type="text"
            className="p-2 rounded-md text-black "
            placeholder="Name"
          />
          <input
            type="text"
            className="p-2 rounded-md text-black "
            placeholder="Address"
          />
        </div>
        <div className="bill flex flex-col gap-3 border-b-white border-b-4 border-dashed pb-2  ">
          <div className="amount flex justify-between  ">
            <p className="text-white font-semibold">Subtotal</p>{" "}
            <p className="text-white font-semibold">₹{totalPrice.toFixed(2)}</p>
          </div>
          <div className="amount flex justify-between border-b-white border-b-4 border-dashed pb-2 ">
            <p className="text-white font-semibold">Extra Charges </p>{" "}
            <p className="text-white font-semibold">₹100</p>
          </div>
          <div className="amount flex justify-between  ">
            <p className="text-white font-semibold">Total</p>{" "}
            <p className="text-white font-semibold">
              ₹{(totalPrice+ Number(100)).toFixed(2)}
            </p>
          </div>
        </div>
        <button className="bg-white text-sky-600 uppercase font-bold p-2 mt-2 rounded-lg shadow-xl">
          CheckOut ➡️
        </button>
      </div>
    </div>
  );
};

export default Cart;
