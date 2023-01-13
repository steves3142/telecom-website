import React from "react";
import HeroHeader from "../components/HeroHeader";
import Header from "../components/Header"; 
import Footer from "../components/Footer";
import HeroFiber from "../components/HeroFiber";

export default function Fiber() {
    return (
        <div>
            <Header />
            {/* <div className="bg-gray-700">
            <HeroHeader />
            </div> */}
            <HeroFiber />
            <Footer />
        </div>
    )
}