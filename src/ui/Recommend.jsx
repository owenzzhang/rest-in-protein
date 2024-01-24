import Product from "../ui/Product";
import { ProductContext } from "../Context/ProductContext";
import { useContext } from "react";

function Recommend() {
  const { products } = useContext(ProductContext);

  return (
    <div className="mt-[120px] ">
      <h3 className="text-center font-semibold text-2xl uppercase">
        Recommeded for you
      </h3>
      <div className="relative h-[400px] w-full overflow-x-hidden ">
        <div className="flex flex-row justify-center gap-[15px] animate-infinite-scroll mt-[20px] absolute whitespace-nowrap will-change-transform lg:w-[600%] md:w-[1200%] w-[1400%]">
          {products.map((items) => (
            <Product product={items} key={items._id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Recommend;
