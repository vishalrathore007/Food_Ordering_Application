import logo from "../images/SiteLogo.png";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser, setUserName } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);
  const totalCartItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

 


  return (
    <div className="header">
      <div className="logo">
        <Link to="/">
          <img className="logoimg" src={logo} />
        </Link>
      </div>
      <div className="humberger text-white md:hidden">
        <svg
          className="h-6 w-6 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
          />
        </svg>
      </div>
      <div className="">
        <ul className="flex gap-5  ">
          <li>Online Status : {onlineStatus ? "🟢" : "🔴"}</li>
          <li>
            <Link className="links" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="links" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="links" to="/cart">
              Cart ( {totalCartItems} )
            </Link>
          </li>
          <li>
            <button
              onClick={() =>
                btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
              }
            >
              {btnName}
            </button>
          </li>
        </ul>
      </div>
    </div>

     );
};

export default Header;
