import { Link } from "react-router-dom";

function Promotion() {
  return (
    <section className=" py-9 lg:pt-0">
      <div className="container mx-auto">
        <h3 className="text-3xl text-center font-semibold uppercase py-8">
          Our current offers
        </h3>
        <div className="flex flex-col gap-y-[30px] xl:flex-row xl:gap-x-[30px]">
          <div className="flex flex-col items-center justify-center w-full max-w-lg lg:max-w-[800px] mx-auto  bg-gray-200 rounded-[8px] pt-8">
            <div className="uppercase text-[20px] text-center font-medium leading-tight w-[400px] pb-5">
              Grab our email exclusive FREE shaker today when you spend £10,
            </div>
            <Link to="products/Protein%20Powder">
              <button className="upppercase text-blue-700 font-medium mt-3 py-1 px-4 border border-blue-500 hover:border-transparent hover:bg-blue-500 hover:text-white rounded">
                Shop Now
              </button>
            </Link>
            <img src="/assets/shaker.png" className="z-20  w-[280px]" />
          </div>
          <div className="flex flex-col gap-y-[30px] w-full max-w-lg mx-auto h-[500px]">
            <div className="grad flex-1 h-[250px] rounded-[8px] overflow-hidden relative p-6  bg-gray-200">
              <div className="flex flex-col max-w-[144px] h-full justify-center ">
                <div className="text-[16px] uppercase font-medium leading-tight pb-4">
                  Save 10% when you buy Hair Gummies
                </div>
                <Link to="product/Hair%20Gummies">
                  <button className="upppercase text-blue-700 font-medium mt-3 py-1 px-4 border border-blue-500 hover:border-transparent hover:bg-blue-500 hover:text-white rounded">
                    Shop Now
                  </button>
                </Link>
              </div>
              <img
                src="/assets/gummie.png"
                className="absolute z-20 -top-6 right-6 w-[300px]"
              />
            </div>
            <div>
              <div className="grad flex-1 h-[250px] rounded-[8px] overflow-hidden relative p-6   bg-gray-200">
                <div className="flex flex-col max-w-[144px] h-full justify-center ">
                  <div className="text-[16px] uppercase font-medium leading-tight pb-4">
                    Save 20% when you buy ON pre-workout
                  </div>
                  <Link to="product/ON%20Energy%20pre-workout">
                    <button className="upppercase text-blue-700 font-medium mt-3 py-1 px-4 border border-blue-500 hover:border-transparent hover:bg-blue-500 hover:text-white rounded">
                      Shop Now
                    </button>
                  </Link>
                </div>
                <img
                  src="/assets/ON.png"
                  className="absolute z-20 -top-2 lg:right-6 md:right-7 right-1 w-[300px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Promotion;
