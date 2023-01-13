import React from "react";
import HeroHeader from "../components/HeroHeader";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroAbout from "../components/HeroAbout";

export default function About() {
    return (
        <div>
            <Header />
            {/* <div className="bg-gray-700">
            <HeroHeader />
            </div> */}

            <HeroAbout />
            
            <Footer />

        </div>
    )
}