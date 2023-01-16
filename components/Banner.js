import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Banner() {
  return (
    <div className="relative">
      <div className="absolute w-full h-32 bg-gradient-to-l from-gray-100 to-transparent z-20 bottom-0" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
          <div className="w-500 h-500">
            <img loading="lazy" src="https://s22.q4cdn.com/819087555/files/design/slider/essential2-(1).jpg" />
          </div>

          <div className="absolute top-0 right-0 w-6/12 h-6/12">
            <img loading="lazy" src="https://s22.q4cdn.com/819087555/files/design/slider/slider_3_img.jpg"
              alt="" />
          </div>

          <div className="absolute top-0 right-0 w-7/12 h-8/12">
            <img loading="lazy" src="https://s22.q4cdn.com/819087555/files/design/slider/slider_2_img.jpg"
              alt="" />
          </div>

      </Carousel>
    </div>
  );
}

export default Banner;
