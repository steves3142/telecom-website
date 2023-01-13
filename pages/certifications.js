import React from "react";
import HeroHeader from "../components/HeroHeader";
import Header from "../components/Header"; 
import Footer from "../components/Footer";
import HeroCert from "../components/HeroCert";

export default function Certifications() {
    return (
        <div>
            <Header />
            {/* <div className="bg-gray-700">
            <HeroHeader />
            </div> */}
            <HeroCert />
            <Footer />
        </div>
    )
}