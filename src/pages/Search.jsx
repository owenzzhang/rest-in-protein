import { useLocation } from "react-router-dom";
import { client } from "../Lib/client";
import { useEffect, useState } from "react";

import Product from "../ui/Product";

function Search() {
  const location = useLocation();
  const searchParmas = new URLSearchParams(location.search);
  const searchTerm = searchParmas.get("query") ?? "";

  const searchFilter = searchTerm ? `&& name match "${searchTerm}"` : "";
  // const filer = `*[${searchTerm}]`;
  const query = `*[_type =='product' ${searchFilter}]`;
  const [searchResult, setSearchResult] = useState([]);

  useEffect(
    function () {
      try {
        async function searchResult() {
          const resultProducts = await client.fetch(query);
          setSearchResult(resultProducts);
        }
        searchResult();
      } catch (error) {
        console.error(error.message);
      }
    },
    [searchTerm]
  );

  return (
    <div className="mb-[30px] pt-10">
      <div className="bg-[url('/assets/redBanner.jpg')] bg-cover bg-center lg:h-[240px] md:h-[200px] h-[90px]"></div>
      <div className="container mx-auto">
        <div className="my-10 lg:pl-14 sm:pl-6">
          <h5 className="font-semibold lg:text-left text-center">{`Result for "${searchTerm}"`}</h5>
          <p className="font-normal lg:text-left text-center">{`${searchResult.length} results`}</p>
        </div>
        <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 ">
          {searchResult?.map((product) => (
            <Product product={product} key={product.name} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Search;
