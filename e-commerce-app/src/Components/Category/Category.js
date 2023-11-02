import axios from "axios";
import React, { useEffect, useState } from "react";

const CategoryFilter = ({ selectedCategory, setSelectedCategory }) => {
  const [category, setCategory] = useState([]);

  // Get Category from Fake Api Store
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://fakestoreapi.com/products/categories"
        );
        const data = response.data;
        setCategory(["All", ...data]);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <div className="flex items-center space-x-4 ml-5">
      <label className="text-gray-600  mt-24">Filter by Category:</label>
      <select
        value={selectedCategory}
        onChange={handleCategoryChange}
        className="p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 mt-24"
      >
        {category.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryFilter;
