import React, { useState, useMemo, useRef } from 'react';
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import Header from "../components/Header"
import HeroHeader from "../components/HeroHeader"


function FloatingNav() {

    const [showOnScroll, setShowOnScroll] = useState(false)

    useScrollPosition(
        ({ prevPos, currPos }) => {
            console.log(currPos.x)
            console.log(currPos.y)
            const revealPos = -61;
            let isShow = currPos.y < revealPos;
            if (isShow) setShowOnScroll(isShow)
            else {
                isShow = false;
                setShowOnScroll(isShow)
            }
        },
        [showOnScroll]
    )

    return (
        <div>
             
            {/* <Image className="bg-hero-about" src={FirstPageHeader} /> */}
            <HeroHeader />
            <div className="absolute top-0 left-0 right-0 z-10">
        
                {/* {showOnScroll ?
                    <Header /> : <HeroHeader />} */}
                   
            </div>
            
        </div>

    )
}

export default FloatingNav