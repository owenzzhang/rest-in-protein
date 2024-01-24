import Hero from "../ui/Hero";
import ProductSlider from "../ui/ProductSlider";
import Promotion from "../ui/Promotion";
import CateBanner from "../ui/CateBanner";

function Home() {
  return (
    <>
      <div>
        <Hero />
      </div>
      <section className="container mx-auto my-[50px]">
        <h2 className="font-bold text-4xl text-center pb-[40px]">
          Latest products
        </h2>
        <ProductSlider />
      </section>
      <CateBanner />
      <Promotion />
    </>
  );
}

export default Home;
