import React from 'react';
import HeroHeader from "../components/HeroHeader"
import Image from "next/image"

import { Skill } from "../typings"
import { urlFor } from '../sanity';

type Props = {
    skills: Skill[];
}

const Hero = ({ skills }: Props) => {

    return (
        <div>
            <div className="relative">
                <Image
                    className="object-cover -z-1"
                    src={urlFor(skills[4].image).url()}
                    quality={50}
                    priority={true}
                    width={2600}
                    height={2600}
                    alt=""

                />

                <div className="absolute top-0 left-0 right-0">
                    <HeroHeader skills={skills} />

                    <main className="hidden sm:block">
                        <div className="pt-10 xsm:pt-16 lg:overflow-hidden lg:pt-8 lg:pb-14">
                            <div className="lg:visible">
                                <div className="mx-40 max-w-6xl lg:px-8">
                                    <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                                        <div>
                                            <div className="lg:py-24">
                                                <h1 className="text-4xl font-bold tracking-tight text-blue-800 sm:text-sm md:text-4xl lg:text-4xl xl:text-7xl">
                                                    <span className="block">A better way to</span>
                                                    <span className="block text-blue-800">Build Telecom Infrastructure</span>
                                                </h1>
                                                <p className="mt-3 text-base text-gray-100 sm:mt-5 sm:text-md md:text-2xl lg:text-xl xl:text-4xl">
                                                    We're here to help you build to new heights.
                                                </p>
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
        </div>

    )
}

export default Hero