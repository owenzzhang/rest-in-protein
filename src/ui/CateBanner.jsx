import { Link } from "react-router-dom";

function CateBanner() {
  const categgories = [
    {
      alt: "guy drinking protein shake",
      src: "/assets/proteinGuy.jpg",
      to: "products/Protein%20Powder",
      name: "Protein",
    },
    {
      alt: "2 girls working out",
      src: "/assets/preGirls.jpg",
      to: "products/Pre-workout",
      name: "Pre-Workout",
    },
    {
      alt: "guy with bottle",
      src: "/assets/supplementGuy.jpg",
      to: "products/Vitamins",
      name: "Vitamins",
    },
  ];

  return (
    <div className="lg:my-[40px]">
      <div className="bg-[url('/assets/blackWall.jpg')] bg-cover object-contain pb-5">
        <h3 className="text-3xl text-center text-white uppercase font-semibold justify-center pt-9">
          Shop by categories
        </h3>
        <div className="flex lg:flex-row md:flex-row flex-col flex-wrap cursor-pointer items-center justify-center gap-9 mx-auto pt-[40px]">
          {categgories.map((item) => (
            <div className="lg:w-[15%] md:w-[25%] w-[35%] " key={item.alt}>
              <div className="border-2 border-white-200 ">
                <Link to={item.to}>
                  <img src={item.src} alt={item.alt} />
                </Link>
              </div>
              <div className="flex flex-col items-center my-5">
                <h3 className="text-white uppercase lg:text-xl md:text-lg text-base  font-semibold py-2">
                  {item.name}
                </h3>
                <Link to={item.to}>
                  <button className=" lg:text-lg text-[16px] text-white uppercase bg-blue-500 hover:bg-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                    Shop Now
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default CateBanner;
