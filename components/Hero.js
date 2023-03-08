import React, { useState, useMemo, useRef } from 'react';
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import Header from "../components/Header"

import HeroHeader from "./HeroHeader"
import FirstPageHeader from "../images/fall.jpeg"
import Image from "next/image"

function Hero() {

    // const [showOnScroll, setShowOnScroll] = useState(false)

    // useScrollPosition(
    //     ({ prevPos, currPos }) => {
    //         console.log(currPos.x)
    //         console.log(currPos.y)
    //         const revealPos = -61;
    //         let isShow = currPos.y < revealPos;
    //         if (isShow) setShowOnScroll(isShow)
    //         else {
    //             isShow = false;
    //             setShowOnScroll(isShow)
    //         }
    //     },
    //     [showOnScroll]
    // )


    return (
        <div>
            <div className="">

                <Image className="max-h-full" src={FirstPageHeader} />

                <div className="absolute top-0 left-0 right-0">
                    <HeroHeader />

                    <main>
                        
                            <div className="relative py-24 sm:py-32 lg:pb-40">
                                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                                    <div className="mx-auto max-w-2xl text-center">
                                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                                            Data to enrich your online business
                                        </h1>
                                        <p className="mt-6 text-lg leading-8 text-gray-600">
                                            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
                                            fugiat veniam occaecat fugiat aliqua.
                                        </p>
                                        <div className="mt-10 flex items-center justify-center gap-x-6">
                                            <a
                                                href="#"
                                                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                            >
                                                Get started
                                            </a>
                                            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                                                Learn more <span aria-hidden="true">→</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        {/* <div className="mx-auto max-w-7xl py-16 px-6 sm:py-24 lg:px-8">
                                        <div className="relative">
                                            <h1 className="sr-only">
                                                <span className="block text-xs">A better way to</span>
                                                <span className="block text-indigo-400 text-xs">Build Telecom Infrastructure</span>
                                            </h1>
                                            {/* <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-sm lg:base xl:text-xl">
                                                We're here to help you build to new heights.
                                            </p> 
                                        </div>
                                        </div>
                                        */}
                        {/* More main page content here... */}
                    </main>
                </div>
            </div>
        </div>

    )
}

export default Hero