import { Link } from "react-router-dom";
import { urlFor } from "../Lib/client";

function Product({ product: { image, name, price } }) {
  return (
    <div className="flex item-center justify-center relative transition ease-in-out duration-150 hover:-translate-y-3">
      <Link to={`/product/${name}`}>
        <div>
          <div>
            <img
              src={image && urlFor(image[0]).url()}
              alt={name}
              className="lg:h-[300px] md:h-[240px] h-[220px]"
            />
          </div>
          <div className="text-center pb-9 pt-3">
            <p className="font-semibold lg:text-[18px] mdd:text-[16px] text-[14px] text-gray-800">
              {name}
            </p>
            <p className="text-gray-600 text-[18px]">{`£${price}`}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Product;
