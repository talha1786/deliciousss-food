import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/searched/" + input);
  };

  return (
    <form
      onSubmit={submitHandler}
      className="my-4 mx-12 position-relative w-full"
    >
      <FaSearch className="position-absolute top-[50%] left-0 translate-y-[270%] translate-x-[62%] text-white"></FaSearch>
      <input
        className="border-none bg-[linear-gradient(35deg,_#7a0000,_#363232)] text-[1.5rem] rounded-2xl text-white px-12 py-4 outline-none w-full"
        onChange={(e) => setInput(e.target.value)}
        type="text"
        value={input}
      />
    </form>
  );
};

export default Search;
