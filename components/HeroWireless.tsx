import React, { useState, useMemo, useRef } from 'react';
import HeroHeader from "./HeroHeader";
import Image from "next/image";
import { Skill } from "../typings"
import { urlFor } from '../sanity';

type Props = {
    skills: Skill[];
}

const HeroWireless = ({ skills }: Props) => {

    return (
        <div>
            <div className="relative">
                <Image
                    className="object-cover -z-1"
                    src={urlFor(skills[5].image).url()}
                    quality={20}
                    priority={true}
                    width={2600}
                    height={2600}
                    alt=""
                />
                <div className="absolute top-0 left-0 right-0">
                    <HeroHeader skills={skills} />

                    <main>
                        <div className="pt-10 sm:pt-16 lg:overflow-hidden lg:pt-8 lg:pb-14">
                            <div className="mx-40 max-w-6xl lg:px-8">
                                <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                                    <div className="">
                                        <div className="lg:py-24">
                                            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:mt-6 xl:text-6xl">
                                                <span className="block">Wireless</span>
                                                <span className="block text-blue-800">Services</span>
                                            </h1>
                                            <a className="mt-3 text-base text-white sm:mt-5 sm:text-xl lg:text-lg xl:text-xl" href="/contact-us">
                                                <button className="inline-flex items-center align-top">
                                                    <div>CONTACT US</div>
                                                </button>

                                            </a>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </main>

                </div>
            </div>

        </div>
    )
}

export default HeroWireless;
