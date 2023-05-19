import React from "react";
import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import { NavLink } from "react-router-dom";

const Categorys = () => {
  return (
    <div className="flex justify-center my-8 mx-0">
      <NavLink
        className="flex flex-col justify-center items-center rounded-[50%] mr-8 no-underline w-20 h-20  text-cyan-500 bg-[linear-gradient(32deg,_#808d23,_#db3c3c)] cursor-pointer scale-[0.8]"
        to={"/cuisine/Italian"}
      >
        <FaPizzaSlice className="text-[1.5rem]" />
        <h4 className="text-[0.8rem] text-white">Italian</h4>
      </NavLink>
      <NavLink
        className="flex flex-col justify-center items-center rounded-[50%] mr-8 no-underline w-20 h-20  text-cyan-500 bg-[linear-gradient(32deg,_#808d23,_#db3c3c)] cursor-pointer scale-[0.8]"
        to={"/cuisine/Americian"}
      >
        <FaHamburger className="text-[1.5rem]" />
        <h4 className="text-[0.8rem] text-white">Americian</h4>
      </NavLink>
      <NavLink
        className="flex flex-col justify-center items-center rounded-[50%] mr-8 no-underline w-20 h-20 text-cyan-500 bg-[linear-gradient(32deg,_#808d23,_#db3c3c)] cursor-pointer scale-[0.8]"
        to={"/cuisine/Chineses"}
      >
        <GiNoodles className="text-[1.5rem]" />
        <h4 className="text-[0.8rem] text-white">Chineses</h4>
      </NavLink>
      <NavLink
        className="flex flex-col justify-center items-center rounded-[50%] mr-8 no-underline w-20 h-20 text-cyan-500 bg-[linear-gradient(32deg,_#808d23,_#db3c3c)] cursor-pointer scale-[0.8]"
        to={"/cuisine/japanese"}
      >
        <GiChopsticks className="text-[1.5rem]" />
        <h4 className=" text-[0.8rem] text-white">japanese</h4>
      </NavLink>
    </div>
  );
};

export default Categorys;
