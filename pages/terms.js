import React from "react";
import HeroHeader from "../components/HeroHeader";
import Header from "../components/Header";
import HeroTerms from "../components/HeroTerms";
import Footer from "../components/Footer";

export default function Contact() {
    return (
        <div>
            <header className="sticky top-0 z-1">
                <Header />
            </header>
            <HeroTerms />

            <div className="relative overflow-hidden bg-white py-16">
                <div className="hidden lg:absolute lg:inset-y-0 lg:block lg:h-full lg:w-full lg:[overflow-anchor:none]">
                    <div className="relative mx-auto h-full max-w-prose text-lg" aria-hidden="true">
                        <svg
                            className="absolute top-12 left-full translate-x-32 transform"
                            width={404}
                            height={384}
                            fill="none"
                            viewBox="0 0 404 384"
                        >
                            <defs>
                                <pattern
                                    id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                                    x={0}
                                    y={0}
                                    width={20}
                                    height={20}
                                    patternUnits="userSpaceOnUse"
                                >
                                    <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                                </pattern>
                            </defs>
                            <rect width={404} height={384} fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)" />
                        </svg>
                        <svg
                            className="absolute top-1/2 right-full -translate-y-1/2 -translate-x-32 transform"
                            width={404}
                            height={384}
                            fill="none"
                            viewBox="0 0 404 384"
                        >
                            <defs>
                                <pattern
                                    id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                                    x={0}
                                    y={0}
                                    width={20}
                                    height={20}
                                    patternUnits="userSpaceOnUse"
                                >
                                    <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                                </pattern>
                            </defs>
                            <rect width={404} height={384} fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
                        </svg>
                        <svg
                            className="absolute bottom-12 left-full translate-x-32 transform"
                            width={404}
                            height={384}
                            fill="none"
                            viewBox="0 0 404 384"
                        >
                            <defs>
                                <pattern
                                    id="d3eb07ae-5182-43e6-857d-35c643af9034"
                                    x={0}
                                    y={0}
                                    width={20}
                                    height={20}
                                    patternUnits="userSpaceOnUse"
                                >
                                    <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                                </pattern>
                            </defs>
                            <rect width={404} height={384} fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)" />
                        </svg>
                    </div>
                </div>
                <div className="relative px-6 lg:px-8">
                    <div className="mx-auto max-w-prose text-lg">
                        <h1>
                            <span className="block text-center text-lg font-semibold text-indigo-600">Propriety Information</span>
                            <span className="mt-2 block text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                                MSNT Terms & Conditions
                            </span>
                        </h1>
                        <p className="mt-8 text-xl leading-8 text-gray-500">
                            All materials contained in this website are the property of MSNT or its subsidiaries or affiliated companies
                            and/or third-party licensors. All trade names and trademarks are proprietary to MSNT or its affiliates or
                            licensors. No material from this website or any Internet site owned, operated, licensed or controlled by MSNT or
                            our affiliates may be copied or reproduced distributed in any way.
                        </p>
                    </div>
                    <div className="prose prose-lg prose-indigo mx-auto mt-6 text-gray-500">
                        <h2>Disclaimers</h2>
                        <p>
                            The use of this website is at your own risk. MSNT does not warrant that the aspects of this website will be
                            uninterrupted or free of errors. The material in this website could include technical inaccuracies or other errors.
                            The accessibility of this website may be interrupted due to technical circumstances. MSNT does not warrant that
                            this website or the server that it makes accessible are free from viruses or other harmful components. MSNT or
                            its subsidiaries or affiliated companies involved in creating, producing or delivering this website shall not be liable
                            for any direct or indirect damages due to your (the “user”) use of or access to the website. MSNT may revise these
                            terms and other information on this website at their discretion by updating or revising any information on this website,
                            with the revisions taking effect as of the date of its posting on the website. MSNT reserves the right to change
                            any information on this website at any time, without notice.
                        </p>
                    </div>
                </div>
            </div>


            <Footer />
        </div>
    )
}
