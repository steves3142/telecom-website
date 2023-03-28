import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image"
import ThreeAntennas from "../images/three_antennas.jpg"
import AntennaArray from "../images/antenna_array.jpg"
import Crane from "../images/crane.jpg"

function Banner() {
  return (
    <div className="relative">
      <div className="bg-white" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <img loading="lazy" src="https://links.papareact.com/gi1" />
        </div>

        <div>
        <img loading="lazy" src="https://links.papareact.com/6ff"
          alt="" />
        </div>

        <div>
        <img loading="lazy" src="https://links.papareact.com/7ma"
          alt="" />
        </div>

      </Carousel>
    </div>
  );
}

export default Banner;
