import { toast } from "react-hot-toast";
import { SlArrowLeft } from "react-icons/sl";
import { useState } from "react";
import { urlFor } from "../Lib/client";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteItem,
  increaseQuantity,
  decreaseQuantity,
} from "../slices/cartSlice";
import { FaMinusCircle } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";
import Spinner from "./Spinner";

function Cart({ setIsopen }) {
  const [isLoading, setIsLoading] = useState(false);
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const totalCartPrice = useSelector((state) =>
    state.cart.cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
  );

  const totalCartQuantity = useSelector((state) =>
    state.cart.cart.reduce((acc, item) => acc + item.quantity, 0)
  );

  function handleDeleteItem(id) {
    dispatch(deleteItem(id));
    toast.error("item removed");
  }

  function handelIncreaseQty(id) {
    dispatch(increaseQuantity(id));
  }

  function handleDecreaseQty(id) {
    dispatch(decreaseQuantity(id));
  }

  return (
    <div>
      <div className="flex flex-row  items-center px-4 py-4 gap-5">
        <button
          className="cursor-pointer flex justify-start text-2xl items-center py-3"
          onClick={() => setIsopen(false)}
        >
          <SlArrowLeft />
        </button>
        <span className="capitalize text-[20px] font-medium text-gray-800 ">
          {`${totalCartQuantity} ${
            totalCartQuantity > 1 ? "items" : "item"
          } in your cart`}
        </span>
      </div>
      {cart.length < 1 && (
        <div>
          <h3 className="text-2xl font-bold text-center py-8 text-gray-800">
            Your Shopping Bag is Empty
          </h3>
        </div>
      )}
      <div className="mt-[15px] max-h-[630px] py-[20px] px-[10px] overflow-scroll">
        {cart.length >= 1 &&
          cart.map((item) => (
            <div
              className="flex flex-row gap-5 mb-4 px-3 py-3 bg-gray-50 rounded"
              key={item._id}
            >
              <img
                src={urlFor(item?.image[0]).url()}
                className="w-[110px] h-[120px]"
              />
              <div>
                <div>
                  <h5 className="font-bold text-[18px]">{item.name}</h5>
                </div>
                <div className="mt-[20px]">
                  <div className="flex flex-row gap-10">
                    <p className="flex items-center gap-5">
                      <span
                        className="cursor-pointer"
                        onClick={() => handleDecreaseQty(item._id)}
                      >
                        <FaMinusCircle />
                      </span>
                      <span className="text-[16px] font-semibold">
                        {item.quantity}
                      </span>
                      <span
                        className="cursor-pointer"
                        onClick={() => handelIncreaseQty(item._id)}
                      >
                        <FaPlusCircle />
                      </span>
                    </p>
                    <p className="font-semibold text-gray-700">{`£${item.price}`}</p>
                  </div>
                  <button
                    className="mt-[18px] text-lg hover:text-red-600"
                    onClick={() => handleDeleteItem(item._id)}
                  >
                    <RiDeleteBin5Line />
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
      {cart.length >= 1 && (
        <div class="border-t border-gray-200 px-4 py-6 sm:px-6  bottom-0">
          <div class="flex justify-between text-base font-medium text-gray-900">
            <p>Subtotal</p>
            <p>£{Math.round(totalCartPrice * 100) / 100}</p>
          </div>
          <p class="mt-0.5 text-sm text-gray-500">
            Shipping and taxes calculated at checkout.
          </p>
          <div class="mt-6">
            <button
              class="flex items-center gap-4 justify-center w-full rounded-md border border-transparent bg-blue-500 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-700"
              disabled={isLoading}
            >
              <span>{isLoading && <Spinner />}</span>
              <span>{isLoading ? "Loading..." : "Checkout"}</span>
            </button>
          </div>
          <div class="mt-6 flex justify-center text-center text-sm text-gray-500">
            <p>
              or
              <button
                type="button"
                class="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Continue Shopping
                <span aria-hidden="true"> &rarr;</span>
              </button>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
