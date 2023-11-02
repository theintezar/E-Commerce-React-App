import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { FaPlusCircle, FaMinusCircle, FaTrash } from "react-icons/fa";

function CartPage() {
  const { cartState, dispatch } = useContext(CartContext);

  const getTotalPrice = () => {
    return cartState.items.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div
      className="container mx-auto my-8 p-4 mt-20 bg-slate-100"
      style={{ width: "100%", minHeight: "100vh" }}
    >
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      {cartState?.items?.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartState.items.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-b border-gray-300 py-4"
            >
              <div className="flex items-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 object-contain rounded-md"
                />
                <div className="ml-4">
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                  <p className="text-gray-600">
                    ${item.price} Quantity:{item.quantity}
                  </p>
                </div>
              </div>

              <div className="grid justify-center items-center">
                <div className="font-semibold">
                  ${item.price * item.quantity}
                </div>
                <div className="flex justify-center items-center">
                  <FaPlusCircle
                    onClick={() => {
                      dispatch({ type: "INCREMENT_ITEM", payload: item.id });
                      console.log("hello world");
                    }}
                    className="p-1 bg-orange-400 rounded-full hover:bg-white cursor-pointer"
                    color="black"
                    size={30}
                  />
                  <FaMinusCircle
                    onClick={() => {
                      dispatch({ type: "DECREMENT_ITEM", payload: item.id });
                    }}
                    className="p-1 bg-orange-400 rounded-full hover:bg-white cursor-pointer"
                    color="black"
                    size={30}
                  />
                  <FaTrash
                    onClick={() => {
                      dispatch({ type: "REMOVE_FROM_CART", payload: item.id });
                    }}
                    className="p-1 bg-orange-400 rounded-full hover:bg-white cursor-pointer"
                    color="black"
                    size={30}
                  />
                </div>
              </div>
            </div>
          ))}
          <div className="mt-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-lg font-semibold">Total:</p>
              </div>
              <div className="font-semibold">${getTotalPrice()}</div>
            </div>
            <button className="mt-4 bg-orange-400 text-white py-2 px-4 rounded-md hover:bg-orange-600">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPage;
