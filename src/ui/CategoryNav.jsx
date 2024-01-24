import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Product from "./Product";
import { useContext } from "react";
import { ProductContext } from "../Context/ProductContext";

function CategoryNav() {
  const { products } = useContext(ProductContext);

  const [productList, setProductList] = useState([]);

  useEffect(
    function () {
      setProductList(products);
    },
    [products]
  );

  function handleProtein() {
    const proteins = products.filter(
      (product) => product.categories == "Protein Powder"
    );
    setProductList(proteins);
  }

  function handlePre() {
    const pres = products.filter(
      (product) => product.categories == "Pre-workout"
    );
    setProductList(pres);
  }

  function handleVita() {
    const vita = products.filter((product) => product.categories == "Vitamins");
    setProductList(vita);
  }

  return (
    <div className="container mx-auto">
      <div>
        <h3 className="text-center py-6">Browse Categories</h3>
        <div className="flex items-center gap-1 justify-evenly ">
          <button onClick={handleProtein}>Protein Powder</button>
          <button onClick={handlePre}>Pre Workout</button>
          <button onClick={handleVita}>Vitamins</button>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-5">
        {productList.map((product) => (
          <Product product={product} key={product._id} />
        ))}
      </div>
    </div>
  );
}

export default CategoryNav;
