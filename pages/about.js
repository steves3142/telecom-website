import React from "react";
import HeroHeader from "../components/HeroHeader";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroAbout from "../components/HeroAbout";
import Image from "next/image"
import AboutUsImage from "../images/tower_base.jpg";

const stats = [
    { label: 'Founded', value: '2001' },
    // { label: 'Offices', value: '2' },
    { label: 'Completed Projects', value: '500+' },
    // { label: 'Raised', value: '$25M' },
]


export default function About() {
    return (
        <div>
            <header className="sticky top-0 z-10">
                <Header />
            </header>

            <HeroAbout />

            <div className="relative bg-white py-16 sm:py-24">
                <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:items-start lg:gap-24 lg:px-8">
                    <div className="relative sm:py-16 lg:py-0">
                        <div aria-hidden="true" className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen">
                            <div className="absolute inset-y-0 right-1/2 w-full rounded-r-3xl bg-gray-50 lg:right-72" />
                            <svg
                                className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
                                width={404}
                                height={392}
                                fill="none"
                                viewBox="0 0 404 392"
                            >
                                <defs>
                                    <pattern
                                        id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
                                        x={0}
                                        y={0}
                                        width={20}
                                        height={20}
                                        patternUnits="userSpaceOnUse"
                                    >
                                        <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                                    </pattern>
                                </defs>
                                <rect width={404} height={392} fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)" />
                            </svg>
                        </div>
                        <div className="relative mx-auto max-w-md px-6 sm:max-w-3xl lg:max-w-none lg:px-0 lg:py-20">
                            {/* Testimonial card*/}
                            <div className="relative overflow-hidden rounded-2xl pt-64 pb-10 shadow-xl">
                                {/* <img
                                    className="absolute inset-0 h-full w-full object-cover"
                                    src=""
                                    alt=""
                                /> */}
                                <div className="absolute inset-0 bg-indigo-500 mix-blend-multiply" />
                                <div className="absolute inset-0 bg-gradient-to-t from-indigo-600 via-indigo-600 opacity-90" />
                                <div className="relative px-8">
                                    <blockquote className="mt-8">
                                        <div className="relative text-lg font-medium text-white md:flex-grow">
                                            <svg
                                                className="absolute top-0 left-0 h-8 w-8 -translate-x-3 -translate-y-2 transform text-indigo-400"
                                                fill="currentColor"
                                                viewBox="0 0 32 32"
                                                aria-hidden="true"
                                            >
                                                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                                            </svg>
                                            <p className="relative">
                                                Tincidunt integer commodo, cursus etiam aliquam neque, et. Consectetur pretium in volutpat, diam.
                                                Montes, magna cursus nulla feugiat dignissim id lobortis amet.
                                            </p>
                                        </div>

                                        <footer className="mt-4">
                                            <p className="text-base font-semibold text-indigo-200">Sarah Williams, CEO at Workcation</p>
                                        </footer>
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative mx-auto max-w-md px-6 sm:max-w-3xl lg:px-0">
                        {/* Content area */}
                        <div className="pt-12 sm:pt-16 lg:pt-20">
                            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                Who We Are
                            </h2>
                            <div className="mt-6 space-y-6 text-gray-500">
                                <p className="text-lg">
                                    SBA Communications Corporation (SBA) is a leading independent owner and operator of wireless communications infrastructure including towers, buildings, rooftops, distributed antenna systems (DAS) and small cells. Founded in 1989 and headquartered in Boca Raton, Florida, SBA has operations and offices in sixteen markets throughout the Americas, Africa and the Philippines. We are listed on NASDAQ under the symbol SBAC and our organization is part of the S&P 500. SBA is also one of the top Real Estate Investment Trusts (REITs) based on market capitalization.
                                </p>
                                <h3>What we do</h3>
                                <p className="text-base leading-7">
                                    By “Building Better Wireless®“, SBA generates revenue from two primary businesses:
                                </p>
                                <h3>Site development</h3>
                                <p className="text-base leading-7">
                                    We can assist wireless service providers and operators in developing their own networks through site acquisition, zoning, construction and equipment installation.
                                </p>
                            </div>
                        </div>

                        {/* Stats section */}
                        <div className="mt-10">
                            <dl className="grid grid-cols-2 gap-x-4 gap-y-8">
                                {stats.map((stat) => (
                                    <div key={stat.label} className="border-t-2 border-gray-100 pt-6">
                                        <dt className="text-base font-medium text-gray-500">{stat.label}</dt>
                                        <dd className="text-3xl font-bold tracking-tight text-gray-900">{stat.value}</dd>
                                    </div>
                                ))}
                            </dl>
                            <div className="mt-10">
                                <a href="#" className="text-base font-medium text-indigo-600">
                                    Learn more about how we're changing the world
                                    <span aria-hidden="true"> &rarr;</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="">
                    <Image src={AboutUsImage}
                    />
                </div>
            </div>


            <Footer />
        </div>
    )
}