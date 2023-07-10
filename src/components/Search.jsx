import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [input, setInput] = useState("");
  let navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate(`/searched/${input}`);
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="search"
        className="w-64 border h-10 ml-4 my-5 px-2 rounded-md
         bg-gray-100 "
      />
    </form>
  );
};

export default Search;
