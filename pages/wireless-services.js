import React from "react";
import HeroHeader from "../components/HeroHeader";
import Header from "../components/Header"; 
import Footer from "../components/Footer";
import HeroWireless from "../components/HeroWireless";

export default function Wireless() {
    return (
        <div>
            <Header />
            {/* <div className="bg-gray-700">
            <HeroHeader />
            </div> */}
            <HeroWireless />
            <Footer />
        </div>
    )
}