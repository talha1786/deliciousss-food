import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Recipe = () => {
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("Instructions");
  const params = useParams();

  const getDetails = async () => {
    let data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    let detailData = await data.json();
    setDetails(detailData);
  };

  useEffect(() => {
    getDetails();
  }, [params.name]);

  return (
    <div className="mt-36 mb-20 flex ">
      <div className="min-w-[30%]">
        <h2 className="mb-8">{details.title}</h2>
        <img src={details.image} alt="" />
      </div>
      <div className="ml-40">
        <button
          onClick={() => setActiveTab("instructions")}
          className={`px-8 py-4 text-[#313131] bg-white border-2 border-solid border-black mr-8 font-[600] ${
            activeTab === "instructions" ? "actives" : ""
          }`}
        >
          Instructions
        </button>
        <button
          onClick={() => setActiveTab("ingredients")}
          className={`px-8 py-4 text-[#313131] bg-white border-2 border-solid border-black mr-8 font-[600] ${
            activeTab === "ingredients" ? "actives" : ""
          }`}
        >
          Ingredients
        </button>
        {activeTab === "instructions" && (
          <div>
            <h3>{details.instructions}</h3>
          </div>
        )}
        {activeTab === "ingredients" && (
          <ul className="mt-8">
            {details.extendedIngredients.map((ingredients) => (
              <li className="text-[1.2rem] leading-10" key={ingredients.id}>
                {ingredients.originals}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Recipe;
