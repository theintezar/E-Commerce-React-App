import React, { useEffect, useState } from "react";
import ProductCard from "../../Components/Card/ProductCard";
import axios from "axios";
import CategoryFilter from "../../Components/Category/Category";

const Home = () => {
  const [product, setProduct] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  console.log(selectedCategory);

  // Get product from Fake Api Store
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          selectedCategory == "All"
            ? "https://fakestoreapi.com/products"
            : `https://fakestoreapi.com/products/category/${selectedCategory}`
        );
        const data = response.data;
        setProduct(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [selectedCategory]);

  return (
    <>
      {product ? (
        <div
          className="bg-slate-100"
          style={{ height: "100%", minHeight: "100vh" }}
        >
          <CategoryFilter
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
          <ProductCard product={product} />
        </div>
      ) : (
        <h1
          className="flex justify-center items-center"
          style={{ width: "100vw", height: "100vh" }}
        >
          loding...
        </h1>
      )}
    </>
  );
};

export default Home;
