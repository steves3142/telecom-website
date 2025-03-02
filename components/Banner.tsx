import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Project } from "../typings";
import { urlFor } from '../sanity';

type Props = {
  projects: Project[]
};

function Banner({ projects }: Props) {
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

        {/* Banner Projects */}

        {projects.map((project) => (
            <div key={project._id}>
            <img 
            loading="lazy" 
            src={urlFor(project.image).url()}
            alt="" />
            </div>
        ))}
    
      </Carousel>
    </div>
  );
}

export default Banner;
