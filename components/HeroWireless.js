import HeroHeader from "./HeroHeader";


function HeroWireless() {
    return (
        <div className='bg-hero-wireless pb-96'>
            <main>
                <HeroHeader />
                <div className="pt-10 sm:pt-16 lg:overflow-hidden lg:pt-8 lg:pb-14">
                    <div className="mx-40 max-w-6xl lg:px-8">
                        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                            <div className="">
                                <div className="lg:py-24">
                                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:mt-6 xl:text-6xl">
                                        <span className="block">Wireless</span>
                                        <span className="block text-indigo-400">Services</span>
                                    </h1>
                                    <a className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl" href="/contact-us">
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
    )
}

export default HeroWireless