import HeroHeader from "../components/HeroHeader"
import Image from "next/image"
import { Skill } from "../typings"
import { urlFor } from '../sanity';

type Props = {
  skills: Skill[];
}

const HeroAbout = ({ skills }: Props) => {
  return (
    <div>
      <div className="relative">
        <Image
          className="object-cover -z-1"
          src={urlFor(skills[8].image).url()}
          quality={20}
          priority={true}
          width={2600}
          height={2600}
          alt=""

        />
        <main className="absolute top-0 left-0 right-0">
          <HeroHeader skills={skills} />

          <div className="hidden sm:block">
            <div className="pt-10 sm:pt-16 lg:overflow-hidden lg:pt-8 lg:pb-14">
              <div className="mx-40 max-w-6xl lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                  <div className="">
                    <div className="lg:py-24">
                      <h1 className="text-4xl font-bold tracking-tight text-white sm:text-sm md:text-4xl lg:text-4xl xl:text-7xl">
                        <span className="block text-blue-800">About</span>
                        <span className="block text-blue-800">Us</span>
                      </h1>
                      <a className="mt-3 text-base text-white sm:mt-5 sm:text-md md:text-2xl lg:text-xl xl:text-4xl" href="/contact-us">
                        <button className="inline-flex items-center align-top">
                          <div>CONTACT US</div>
                        </button>
                      </a>
                    </div>
                  </div>
                  <div className="mt-12 -mb-16 sm:-mb-48 lg:relative lg:m-0">
                    <div className="mx-auto max-w-md px-6 sm:max-w-2xl lg:max-w-none lg:px-0">
                      {/* Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ */}
                      <img
                        className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                        src=""
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


          {/* More main page content here... */}
        </main>
      </div>
    </div>
  )
}

export default HeroAbout;