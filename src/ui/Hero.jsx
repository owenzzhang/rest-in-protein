import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="bg-[url('/assets/heroBanner.jpg')] bg-cover bg-center lg:h-[600px] md:h-[400px] sm:h-[350px] ">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto pt-[40px] place-self-center lg:col-span-7">
          <h1 className="max-w-[400px] mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">
            Welcome to Rest In Protein
          </h1>
          <p className="max-w-[500px] mb-6 font-semibold text-gray-100 lg:mb-8 md:text-lg lg:text-xl">
            Elevate Your Fitness Journey with Premium Protein
          </p>
          <Link to="products/Protein%20Powder">
            <button className="inline-flex uppercase items-center justify-center px-8 py-3 text-base font-bold text-center text-blue-500 border border-blue-500 rounded-lg hover:bg-blue-500  hover:text-white focus:ring-4 focus:ring-gray-100 ">
              Shop Now
            </button>
          </Link>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex"></div>
      </div>
    </section>
  );
}

export default Hero;
