import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { CartContext } from "../../Context/CartContext";

const ProductDetails = () => {
  const [product, setProduct] = useState([]);
  let { id } = useParams();
  const { dispatch } = useContext(CartContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/${id}`
        );
        const data = response.data;
        setProduct(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [id]);
  return (
    <section
      class="text-gray-600 body-font overflow-hidden bg-slate-100"
      style={{ height: "100%" }}
    >
      <div class="container px-5 py-24 mx-auto">
        <div class="lg:w-4/5 mx-auto flex flex-wrap p-5">
          <img
            alt="ecommerce"
            class="lg:w-1/2 w-full lg:h-auto h-64 object-contain object-center rounded bg-white p-10"
            src={product.image}
          />
          <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 class="text-sm title-font text-gray-500 tracking-widest">
              {product.category}
            </h2>
            <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">
              {product.title}{" "}
            </h1>
            <div class="flex mb-4">
              <span class="flex items-center">
                <span class="text-gray-600 ml-3">4 Reviews</span>
                <span class="text-grey-600 ml-3">{product?.rating?.rate}</span>
                <span class="text-yellow-500 ml-3">
                  <AiFillStar />
                </span>
              </span>
            </div>
            <p class="leading-relaxed">{product.description}</p>
            <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5"></div>
            <div class="flex">
              <span class="title-font font-medium text-2xl text-gray-900">
                ${product.price}
              </span>
              <button
                class="flex ml-auto text-white bg-orange-400 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded"
                onClick={() => {
                  dispatch({ type: "ADD_TO_CART", payload: product });
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
