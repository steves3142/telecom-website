import React, { useState, useMemo, useRef } from 'react';
import { useScrollPosition } from '@n8tb1t/use-scroll-position'

import HeroHeader from "./HeroHeader";
import Header from "../components/Header";
import WirelessHeader from "../images/farm_tower.jpeg";
import Image from "next/image";


function HeroWireless() {
    
    const [showOnScroll, setShowOnScroll] = useState(false)

    useScrollPosition(
        ({ prevPos, currPos }) => {
            console.log(currPos.x)
            console.log(currPos.y)
            const revealPos = -61;
            let isShow = currPos.y < revealPos;
            if ( isShow ) setShowOnScroll(isShow)
            else { 
                isShow = false; 
                setShowOnScroll(isShow)
            }
        },
        [showOnScroll]
    )

    return(
        <div>
            <div className="relative">
                <Image className="bg-hero-about" src={WirelessHeader} />
                <div className="absolute top-0 left-0 right-0">
                    <HeroHeader />
                    <div className="visible showOnScroll:invisible sticky top-0">
                        {showOnScroll ? 
                        <Header /> : 
                        <div>
                            <br></br>
                            <br></br>
                            <br></br>
                        </div>} 
                    </div>

                    <main>
                        <div className="pt-10 sm:pt-16 lg:overflow-hidden lg:pt-8 lg:pb-14">
                            <div className="mx-40 max-w-6xl lg:px-8">
                                <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                                    <div className="">
                                        <div className="lg:py-24">
                                            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:mt-6 xl:text-6xl">
                                                <span className="block">Wireless</span>
                                                <span className="block text-indigo-400">Services</span>
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

export default HeroWireless