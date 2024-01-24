import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { client } from "../Lib/client";

function MobileNav({ setNavMobile }) {
  const [cat, setCat] = useState("");

  useEffect(
    function () {
      try {
        async function getCategories() {
          const data = await client.fetch(
            `*[_type =='product' && '${cat}' in categories]`
          );
        }
        getCategories();
      } catch (error) {
        console.error(error.message);
      }
    },
    [cat]
  );

  function handleProtein() {
    setCat("Protein Powder");
    setNavMobile(false);
  }

  function handleVitamins() {
    setCat("Vitamins");
    setNavMobile(false);
  }

  function handlePre() {
    setCat("Pre-workout");
    setNavMobile(false);
  }

  return (
    <div className="h-full w-[80%] p-8 bg-black">
      <div
        onClick={() => setNavMobile(false)}
        className="flex justify-end mb-8 cursor-pointer"
      >
        <span className="text-3xl text-white">&times;</span>
      </div>
      <div className="text-white flex flex-col gap-y-6">
        <Link to="products/Protein Powder">
          <span className="uppercase font-medium" onClick={handleProtein}>
            Protein Powerder
          </span>
        </Link>
        <Link to="products/Pre-workout">
          <span className="uppercase font-medium" onClick={handlePre}>
            Pre-workout
          </span>
        </Link>
        <Link to="products/Vitamins">
          <span className="uppercase font-medium" onClick={handleVitamins}>
            Vitamins
          </span>
        </Link>
      </div>
    </div>
  );
}

export default MobileNav;
