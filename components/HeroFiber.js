import HeroHeader from "./HeroHeader";


function HeroFiber() {
    return (
        <div className='bg-hero-fiber pb-96'>
            <main>
            <HeroHeader />
                <div className="pt-10 sm:pt-16 lg:overflow-hidden lg:pt-8 lg:pb-14">
                    <div className="mx-40 max-w-6xl lg:px-8">
                        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                            <div className="">
                                <div className="lg:py-24">
                                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:mt-6 xl:text-6xl">
                                        <span className="block">Fiber</span>
                                        <span className="block text-indigo-400">Services</span>
                                    </h1>
                                    <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                                        
                                    </p>
                                </div>
                            </div>
                            <div className="mt-12 -mb-16 sm:-mb-48 lg:relative lg:m-0">
                                <div className="mx-auto max-w-md px-6 sm:max-w-2xl lg:max-w-none lg:px-0">
                                    {/* Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ */}
                                    <img
                                        className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                                        src=""
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* More main page content here... */}
            </main>
        </div>
    )
}

export default HeroFiber