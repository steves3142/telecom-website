import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Banner() {
  return (
    <div className="relative">
      <div className="absolute w-full h-32 bg-gradient-to-l from-gray-100 to-transparent bottom-0" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div className="w-500 h-500 overflow-hidden">
          <img loading="lazy" src="https://s22.q4cdn.com/819087555/files/design/slider/essential2-(1).jpg" />
          <div className="absolute top-28">
            <div className="flex flex-col">
              <div className="absolute left-60">
                <h1 className="text-xl font-bold tracking-tight text-white sm:text-6xl lg:mt-6 xl:text-7xl">
                  <span className="block text-indigo-400">Essential Infrastructure</span>
                </h1>
                <p className="mt-3 text-base text-gray-400 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                  In our business, it is all about the signal. Our clients depend on MSNT to provide the wireless infrastructure that allows them to transmit the signal to their customers. Your organization can find solutions to network coverage and capacity needs with our full spectrum of services.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute top-0 right-0 w-6/12 h-6/12">
          <img loading="lazy" src="https://s22.q4cdn.com/819087555/files/design/slider/slider_3_img.jpg"
            alt="" />
          <div className="absolute top-28">
            <div className="flex flex-col">
              <div className="absolute left-20">
                <h1 className="text-xl font-bold tracking-tight text-white sm:text-6xl lg:mt-6 xl:text-5xl">
                  <span className="block text-indigo-400">Connecting people, places and events in the Tri-State.</span>
                </h1>
                <p className="mt-3 text-base text-gray-400 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                  MSNT offers seamless integration for all communities in the New Jersey and New York tri-state area.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute top-0 right-0 w-7/12 h-8/12">
          <img loading="lazy" src="https://s22.q4cdn.com/819087555/files/design/slider/slider_2_img.jpg"
            alt="" />
          <div className="absolute top-28">
            <div className="flex flex-col">
              <div className="absolute -left-60 ">
                <h1 className="text-xl font-bold tracking-tight text-white sm:text-6xl lg:mt-6 xl:text-7xl">
                  <span className="block text-indigo-400">Providing continuous improvements to our network infrastructure.</span>
                </h1>
                <p className="mt-3 text-base text-gray-400 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                MSNT assists wireless service providers in developing their own networks through site acquisition, zoning, construction and equipment installation. We are always focusing on our primary goal.
                </p>
              </div>
            </div>
          </div>
        </div>

      </Carousel>
    </div>
  );
}

export default Banner;
