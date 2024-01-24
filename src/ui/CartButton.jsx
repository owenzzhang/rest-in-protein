import { SlBag } from "react-icons/sl";
import Cart from "./Cart";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { useSelector } from "react-redux";

function CartButton() {
  const { isOpen, setIsopen } = useContext(CartContext);

  const totalCartQuantity = useSelector((state) =>
    state.cart.cart.reduce((acc, item) => acc + item.quantity, 0)
  );

  return (
    <div>
      <div
        onClick={() => setIsopen(!isOpen)}
        className="relative cursor-pointer "
      >
        <SlBag className="text-3xl hover:text-blue-600" />
        <div className="bg-yellow-300 absolute w-[22px] h-[22px] rounded-full top-3 -right-1 text-[15px] flex justify-center items-center font-bold tracking-[-0.1em]">
          {totalCartQuantity}
        </div>
      </div>
      <div
        className={`${
          isOpen ? "right-0" : "-right-full"
        } bg-white shadow-xl fixed top-0 bottom-0 w-full z-10 md:max-w-[500px] transition-all duration-300`}
      >
        <Cart setIsopen={setIsopen} />
      </div>
    </div>
  );
}

export default CartButton;
