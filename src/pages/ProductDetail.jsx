import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { client, urlFor } from "../Lib/client";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

import { useDispatch } from "react-redux";
import { addItems } from "../slices/cartSlice";
import Recommend from "../ui/Recommend";

function ProductDetail() {
  const { id } = useParams();
  const searchFilter = id ? `&& name match "${id}"` : "";
  const query = `*[_type =='product' ${searchFilter}]`;
  const [whichImage, setWhichImage] = useState(0);
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  function handleAddToCart(product) {
    dispatch(addItems(product));
  }

  useEffect(
    function () {
      try {
        async function getApiData() {
          const data = await client.fetch(query);
          setProducts(data);
        }
        getApiData();
      } catch (error) {
        console.error(error.message);
      }
    },
    [id]
  );

  useEffect(() => {
    window.scrollTo(0, 0);
    setWhichImage(0);
  }, [id]);

  return (
    <div className="container mx-auto mt-10">
      {products.map((product) => (
        <div className="flex lg:flex-row md:flex-col flex-col lg:gap-5 justify-center items-center ">
          <div className="grid-container grid grid-cols-4 items-center gap-6 lg:pl-0 md:pl-[30px] pl-[40px]">
            <div className="order-last col-span-3">
              <img
                className="lg:max-w-[400px] md:max-w-[350px] max-w-[200px]"
                src={urlFor(product.image && product.image[whichImage]).url()}
              />
            </div>
            <div className="flex flex-col col-span-1 gap-3">
              {product.image?.map((item, index) => (
                <img
                  className={`max-w-[130px] cursor-pointer ${
                    index === whichImage ? "border-2 border-blue-300" : ""
                  }`}
                  src={urlFor(item).url()}
                  onClick={() => setWhichImage(index)}
                  key={item._id}
                />
              ))}
            </div>
          </div>
          <div className="lg:max-w-[400px] md:max-w-[560px] max-w-[300px] ">
            <h1 className="uppercase font-bold lg:text-4xl text-xl py-4">
              {product.name}
            </h1>
            <div className="flex items-center gap-2 pb-4">
              <div className="flex flex-row text-blue-500">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiOutlineStar />
              </div>
              <p className="text-gray-700">(20)</p>
            </div>
            <h4 className="uppercase font-semibold">Description:</h4>
            <p className="lg:w-[500px] my-4">{product.details}</p>
            <p className="text-bold lg:text-2xl text-xl py-4">
              £{product.price}
            </p>
            <div className="flex flex-col mt-4">
              {/* <h3 className="uppercase pb-2 font-semibold">Quantity: </h3> */}
              {/* <div className="flex flex-row items-center">
                <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-3 px-4 rounded-l">
                  -
                </button>
                <span className="w-[418px] text-center py-[11px] border-y-[1px] border-grey-300 font-light">
                  1
                </span>
                <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-3 px-4 rounded-r">
                  +
                </button>
              </div> */}
              <div className="my-6">
                {product.flavour && (
                  <form className="flex flex-col">
                    <label className="uppercase pb-2 font-semibold">
                      Choose a flavour
                    </label>
                    <select className="border-solid border-grey-400 border-[1px] py-4 rounded lg:w-[500px] w-full px-2 font-light">
                      {product.flavour?.map((each) => (
                        <option>{each}</option>
                      ))}
                    </select>
                  </form>
                )}
              </div>
              <div>
                <button
                  type="button"
                  className="bg-blue-500 hover:bg-blue-800 text-white tracking-wide font-semibold text-lg py-4 lg:w-[500px] w-full border border-blue-500 hover:border-transparent rounded"
                  onClick={() => handleAddToCart(product)}
                >
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
      <Recommend />
    </div>
  );
}

export default ProductDetail;
