import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { FaOpencart } from "react-icons/fa";
import { CartContext } from "../../Context/CartContext";

const Header = () => {
  const { cartState } = useContext(CartContext);
  return (
    <nav
      className="p-3 fixed w-full top-0 bg-orange-400"
      style={{ zIndex: 999 }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <NavLink to="/" className="font-medium text-xl text-white" exact>
          Tab28
        </NavLink>
        <div>
          <p className=" bg-red-600 rounded-full text-xs h-4 w-4 flex justify-center items-center relative right-0 top-1 left-3 text-white font-bold">
            {cartState.items.length}
          </p>

          <NavLink
            to="/Cart"
            className={({ isActive }) =>
              `${isActive ? "text-white" : "text-white"} font-medium text-sm`
            }
          >
            <FaOpencart size={30} />
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Header;
