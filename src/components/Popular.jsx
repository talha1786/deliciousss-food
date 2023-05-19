import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";

const Popular = () => {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    const check = localStorage.getItem("popular");
    if (check) {
      setPopular(JSON.parse(check));
    } else {
      let api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
      );
      let data = await api.json();
      localStorage.setItem("popular", JSON.stringify(data.recipes));
      setPopular(data.recipes);
      console.log(data.recipes);
    }
  };
  return (
    <div className="mx-8 my-12">
      <h3 className="text-lg font-bold">Popular Picks</h3>
      <Splide
        options={{
          perPage: 4,
          arrows: false,
          pagination: false,
          drag: "free",
          gap: "5rem",
        }}
      >
        {popular.map((recipes) => {
          return (
            <SplideSlide>
              <div
                className=" min-h-[25] w-full h-full rounded-lg overflow-hidden position-relative"
                key={recipes.id}
              >
                <Link to={"/recipe/" + recipes.id}>
                  <p className="position-absolute z-10 left-1/2 bottom-0  translate-y-36  text-white w-full text-center text-sm font-medium flex h-1/3 justify-center items-center">
                    {recipes.title}
                  </p>
                  <img
                    className="rounded-2xl w-full  position-absolute left-0 h-full object-cover"
                    src={recipes.image}
                    alt={recipes.title}
                  />
                  <div class="z-[3] position-absolute w-full h-full bg-gradient-to-r from-black to-gray-900 ..."></div>
                </Link>
              </div>
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  );
};

export default Popular;
