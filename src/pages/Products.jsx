import { useState, useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { client } from "../Lib/client";
import Product from "../ui/Product";
import SortFilter from "../ui/SortFilter";

function Products() {
  const { id } = useParams();
  const [result, setResult] = useState([]);

  useEffect(
    function () {
      try {
        async function getFilterData() {
          const data = await client.fetch(
            `*[_type =='product' && '${id}' in categories]`
          );
          setResult(data);
        }
        getFilterData();
      } catch (error) {
        console.error(error.message);
      }
    },
    [result]
  );

  const [searchParams] = useSearchParams();
  const sortBy = searchParams.get("sort");

  const modifier = sortBy === "descending" ? -1 : 1;

  const sortedProducts = result.sort((a, b) => (a.price - b.price) * modifier);

  return (
    <div>
      <div className="bg-[url('/assets/banner.jpg')] bg-cover bg-center lg:h-[300px] h-[200px]"></div>
      <div className="container mx-auto">
        <main className="pt-[30px]">
          <div className="flex flex-row items-center justify-between mx-9">
            <h2 className="text-center uppcase lg:text-3xl md:text-lg text-[12px] font-bold my-8">
              {`Shop Our ${id}`}
            </h2>
            <SortFilter />
          </div>
          <div className="grid-col-2 grid lg:grid-cols-5 md:grid-cols-3 items-center gap-[20px]">
            {sortedProducts?.map((product) => (
              <Product product={product} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default Products;
