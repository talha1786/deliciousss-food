import React from "react";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Searched = () => {
  const [searched, setSearched] = useState([]);
  const params = useParams();

  useEffect(() => {
    getSearched(params.search);
  }, [params.search]);

  const getSearched = async (name) => {
    let data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`
    );
    let recipes = await data.json();
    setSearched(recipes.results);
  };
  return (
    <div className="grid grid-cols-fluid gap-12">
      {searched.map((items) => {
        return (
          <div key={items.id}>
            <Link to={"/recipe/" + items.id}>
              <img className="rounded-3xl  w-full" src={items.image} alt="" />
              <h4 className="text-center p-4">{items.title}</h4>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Searched;
