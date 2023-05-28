import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'; 
import Image from 'next/image'; 
import { Skill } from "../typings"
import { urlFor } from '../sanity';

type Props = {
    skills: Skill[];
}


const navigation = [
    { name: 'About', href: `${process.env.NEXT_PUBLIC_BASE_URL}/about`, current: false },
    { name: 'Wireless Services',  href: `${process.env.NEXT_PUBLIC_BASE_URL}/wireless-services`, current: false },
    { name: 'Certifications', href: `${process.env.NEXT_PUBLIC_BASE_URL}/certifications`, current: false },
    { name: 'Contact', href: `${process.env.NEXT_PUBLIC_BASE_URL}/contact-us`, current: false },
]

const HeroHeader = ( { skills }:Props ) => {
    return(
        <div>
            <Popover as="header" className="relative">
                <div className="pt-6">
                    <nav className="relative mx-auto flex max-w-7xl items-center justify-between px-6" aria-label="Global">
                        <div className="flex flex-1 items-center">
                            <div className="flex w-full items-center justify-between md:w-auto">
                                <Link href="/">
                                    {/* <span className="sr-only">Your Company</span> */}
                                    {/* <img
                                        className="h-8 w-auto sm:h-10"
                                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                                        alt=""
                                    /> */}
                                    <img 
                                    className="h-36 w-auto lg:h-20 md:h-12 hidden sm:block"
                                    src={urlFor(skills[6].image).url()}
                                    />
                                 </Link>
                            </div>
                            <div className="hidden space-x md:ml-10 md:flex">
                                {navigation.map((item) => (
                                    <a key={item.name} href={item.href} className="rounded-xl text-2xl font-medium py-2 px-4 text-white transition duration-300 hover:ease-in hover:bg-[#5a5a5a1a] xl:text-4xl">
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </nav>
                </div>

                <Transition
                    as={Fragment}
                    enter="duration-150 ease-out"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="duration-100 ease-in"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    <Popover.Panel focus className="absolute inset-x-0 top-0 z-10 origin-top transform p-2 transition md:hidden">
                        <div className="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
                            <div className="flex items-center justify-between px-5 pt-4">
                                <div>
                                    <Link href="/">
                                    <img
                                        className="h-8 w-auto"
                                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                        alt=""
                                    />
                                    </Link>
                                </div>
                                <div className="-mr-2">
                                    <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600">
                                        <span className="sr-only">Close menu</span>
                                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                    </Popover.Button>
                                </div>
                            </div>
                            <div className="pt-5 pb-6">
                                <div className="space-y-1 px-2">
                                    {navigation.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50"
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Popover.Panel>
                </Transition>
            </Popover>
        </div>
    )
}

export default HeroHeader