import React from "react";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Cuisine = () => {
  const [cuisine, setCuisine] = useState([]);
  const params = useParams();

  useEffect(() => {
    getCuisine(params.type);
  }, [params.type]);

  const getCuisine = async (name) => {
    let data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`
    );
    let recipes = await data.json();
    setCuisine(recipes.results);
  };

  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-fluid gap-12"
    >
      {cuisine.map((items) => {
        return (
          <div key={items.id}>
            <Link to={"/recipe/" + items.id}>
              <img className="rounded-3xl  w-full" src={items.image} alt="" />
              <h4 className="text-center p-4">{items.title}</h4>
            </Link>
          </div>
        );
      })}
    </motion.div>
  );
};

export default Cuisine;
