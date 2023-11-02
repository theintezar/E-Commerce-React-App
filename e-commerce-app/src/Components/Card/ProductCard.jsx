import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BsFillCartPlusFill } from "react-icons/bs";
import { CartContext } from "../../Context/CartContext";

const ProductCard = ({ product }) => {
  const { dispatch } = useContext(CartContext);

  return (
    <>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-12 mx-auto">
          <div class="flex flex-wrap -m-4">
            {product.map((item) => (
              <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                <Link
                  to={`/details/${item.id}`}
                  class="block relative h-48 rounded overflow-hidden bg-white"
                >
                  <img
                    alt="ecommerce"
                    class="object-contain object-center w-full h-full block"
                    src={item.image}
                  />
                </Link>
                <div class="mt-4">
                  <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                    {item.category}
                  </h3>
                  <h2 class="text-gray-900 title-font text-lg font-medium">
                    {item.title}
                  </h2>
                  <p class="mt-1">${item.price}</p>
                  <BsFillCartPlusFill
                    onClick={() => {
                      dispatch({ type: "ADD_TO_CART", payload: item });
                    }}
                    size={25}
                    className="hover:text-blue-700"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductCard;
