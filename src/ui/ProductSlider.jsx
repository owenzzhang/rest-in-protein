import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Product from "./Product";
import { useContext } from "react";
import { ProductContext } from "../Context/ProductContext";

function ProductSlider() {
  const { products } = useContext(ProductContext);

  return (
    <Swiper
      modules={[Autoplay, Navigation]}
      loop={true}
      navigation={true}
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetweenSlides: 30,
        },
        769: {
          slidesPerView: 2,
          spaceBetweenSlides: 30,
        },
        1024: {
          slidesPerView: 4,
          spaceBetweenSlides: 30,
        },
        1440: {
          slidesPerView: 5,
          spaceBetweenSlides: 30,
        },
      }}
      autoplay={{
        clickable: true,
        disableOnInteraction: true,
      }}
    >
      <>
        {products?.map((product) => (
          <SwiperSlide key={product.name}>
            {" "}
            <Product product={product} />{" "}
          </SwiperSlide>
        ))}
      </>
    </Swiper>
  );
}

export default ProductSlider;
