import { useState } from "react";
import { SlMagnifier } from "react-icons/sl";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const nav = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    if (searchQuery.length > 1) {
      nav(`/Search?query=${searchQuery}`);
      setSearchQuery("");
    } else {
      setIsAnimating(!isAnimating);
    }
  }

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className={`${
        isAnimating ? "animate-shake" : "animate-none"
      } border-solid border-2 rounded relative w-full`}
    >
      <input
        placeholder="Search"
        className="items-center py-2 px-2 w-full"
        type="text"
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button className="absolute top-0 right-0 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        <SlMagnifier className="text-2xl" />
      </button>
    </form>
  );
}

export default SearchBar;
