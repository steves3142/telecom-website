import React from "react";
import HeroHeader from "../components/HeroHeader";
import Header from "../components/Header"; 
import Footer from "../components/Footer";

export default function Wireless() {
    return (
        <div>
            <Header />
            <div className="bg-gray-700">
            <HeroHeader />
            </div>
            <Footer />
        </div>
    )
}