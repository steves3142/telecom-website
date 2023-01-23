import React from "react";
import HeroHeader from "../components/HeroHeader";
import Header from "../components/Header";
import HeroContact from "../components/HeroContact";
import Footer from "../components/Footer";
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'

export default function Contact() {
    return (
        <div>
            <header className="sticky top-0 z-1">
                <Header />
            </header>
            <HeroContact />

            <div className="bg-gray-100">
                <div className="mx-auto max-w-7xl py-16 px-6 sm:py-24 lg:px-8">
                    <div className="relative bg-white shadow-xl">
                        <h2 className="sr-only">Contact us</h2>

                        <div className="grid grid-cols-1 lg:grid-cols-3">
                            {/* Contact information */}
                            <div className="relative overflow-hidden bg-indigo-700 py-10 px-6 sm:px-10 xl:p-12">
                                <div className="pointer-events-none absolute inset-0 sm:hidden" aria-hidden="true">
                                    <svg
                                        className="absolute inset-0 h-full w-full"
                                        width={343}
                                        height={388}
                                        viewBox="0 0 343 388"
                                        fill="none"
                                        preserveAspectRatio="xMidYMid slice"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z"
                                            fill="url(#linear1)"
                                            fillOpacity=".1"
                                        />
                                        <defs>
                                            <linearGradient
                                                id="linear1"
                                                x1="254.553"
                                                y1="107.554"
                                                x2="961.66"
                                                y2="814.66"
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop stopColor="#fff" />
                                                <stop offset={1} stopColor="#fff" stopOpacity={0} />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                                <div
                                    className="pointer-events-none absolute top-0 right-0 bottom-0 hidden w-1/2 sm:block lg:hidden"
                                    aria-hidden="true"
                                >
                                    <svg
                                        className="absolute inset-0 h-full w-full"
                                        width={359}
                                        height={339}
                                        viewBox="0 0 359 339"
                                        fill="none"
                                        preserveAspectRatio="xMidYMid slice"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z"
                                            fill="url(#linear2)"
                                            fillOpacity=".1"
                                        />
                                        <defs>
                                            <linearGradient
                                                id="linear2"
                                                x1="192.553"
                                                y1="28.553"
                                                x2="899.66"
                                                y2="735.66"
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop stopColor="#fff" />
                                                <stop offset={1} stopColor="#fff" stopOpacity={0} />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                                <div
                                    className="pointer-events-none absolute top-0 right-0 bottom-0 hidden w-1/2 lg:block"
                                    aria-hidden="true"
                                >
                                    <svg
                                        className="absolute inset-0 h-full w-full"
                                        width={160}
                                        height={678}
                                        viewBox="0 0 160 678"
                                        fill="none"
                                        preserveAspectRatio="xMidYMid slice"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z"
                                            fill="url(#linear3)"
                                            fillOpacity=".1"
                                        />
                                        <defs>
                                            <linearGradient
                                                id="linear3"
                                                x1="192.553"
                                                y1="325.553"
                                                x2="899.66"
                                                y2="1032.66"
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop stopColor="#fff" />
                                                <stop offset={1} stopColor="#fff" stopOpacity={0} />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                                <h3 className="text-lg font-medium text-white">Contact information</h3>
                                <p className="mt-6 max-w-3xl text-base text-indigo-50">
                                    Drop us a line and we'll get back to you within 48 hours.
                                </p>
                                <dl className="mt-8 space-y-6">
                                    <dt>
                                        <span className="sr-only">Phone number</span>
                                    </dt>
                                    <dd className="flex text-base text-indigo-50">
                                        <PhoneIcon className="h-6 w-6 flex-shrink-0 text-indigo-200" aria-hidden="true" />
                                        <span className="ml-3">+1 (973) 332-6258</span>
                                    </dd>
                                    <dd className="flex text-base text-indigo-50">
                                        <PhoneIcon className="h-6 w-6 flex-shrink-0 text-indigo-200" aria-hidden="true" />
                                        <span className="ml-3">+1 (862) 257-3336</span>
                                    </dd>

                                    <dt>
                                        <span className="sr-only">Email</span>
                                    </dt>
                                    <dd className="flex text-base text-indigo-50">
                                        <EnvelopeIcon className="h-6 w-6 flex-shrink-0 text-indigo-200" aria-hidden="true" />
                                        <span className="ml-3">msusanibar@msnt-telecom.com</span>
                                    </dd>
                                </dl>
                                <ul role="list" className="mt-8 flex space-x-12">
                                    <li>
                                        <a className="text-indigo-200 hover:text-indigo-100" href="#">
                                            <span className="sr-only">Facebook</span>
                                            <svg
                                                width={24}
                                                height={24}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-6 w-6"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    d="M22.258 1H2.242C1.556 1 1 1.556 1 2.242v20.016c0 .686.556 1.242 1.242 1.242h10.776v-8.713h-2.932V11.39h2.932V8.887c0-2.906 1.775-4.489 4.367-4.489 1.242 0 2.31.093 2.62.134v3.037l-1.797.001c-1.41 0-1.683.67-1.683 1.653v2.168h3.362l-.438 3.396h-2.924V23.5h5.733c.686 0 1.242-.556 1.242-1.242V2.242C23.5 1.556 22.944 1 22.258 1"
                                                    fill="currentColor"
                                                />
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="text-indigo-200 hover:text-indigo-100" href="#">
                                            <span className="sr-only">LinkedIn</span>
                                            <svg className="h-7 w-7" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                                                <path
                                                    fillRule="evenodd"
                                                    d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            {/* Contact form */}
                            <div className="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
                                <h3 className="text-lg font-medium text-gray-900">Get In Touch</h3>
                                <form action="#" method="POST" className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                                    <div>
                                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-900">
                                            First name
                                        </label>
                                        <div className="mt-1">
                                            <input
                                                type="text"
                                                name="first-name"
                                                id="first-name"
                                                autoComplete="given-name"
                                                className="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="last-name" className="block text-sm font-medium text-gray-900">
                                            Last name
                                        </label>
                                        <div className="mt-1">
                                            <input
                                                type="text"
                                                name="last-name"
                                                id="last-name"
                                                autoComplete="family-name"
                                                className="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                                            Email
                                        </label>
                                        <div className="mt-1">
                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                autoComplete="email"
                                                className="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between">
                                            <label htmlFor="phone" className="block text-sm font-medium text-gray-900">
                                                Phone
                                            </label>
                                        </div>
                                        <div className="mt-1">
                                            <input
                                                type="text"
                                                name="phone"
                                                id="phone"
                                                autoComplete="tel"
                                                className="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                                aria-describedby="phone-optional"
                                            />
                                        </div>
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label htmlFor="business" className="block text-sm font-medium text-gray-900">
                                            Business Name
                                        </label>
                                        <div className="mt-1">
                                            <input
                                                type="text"
                                                name="business"
                                                id="business"
                                                className="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                            />
                                        </div>
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label htmlFor="subject" className="block text-sm font-medium text-gray-900">
                                            Subject
                                        </label>
                                        <div className="mt-1">
                                            <input
                                                type="text"
                                                name="subject"
                                                id="subject"
                                                className="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                            />
                                        </div>
                                    </div>
                                    <div className="sm:col-span-2">
                                        <div className="flex justify-between">
                                            <label htmlFor="message" className="block text-sm font-medium text-gray-900">
                                                How can we help you?
                                            </label>
                                            <span id="message-max" className="text-sm text-gray-500">
                                                Max. 500 characters
                                            </span>
                                        </div>
                                        <div className="mt-1">
                                            <textarea
                                                id="message"
                                                name="message"
                                                rows={4}
                                                className="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                                aria-describedby="message-max"
                                                defaultValue={''}
                                            />
                                        </div>
                                    </div>
                                    <div className="sm:col-span-2 sm:flex sm:justify-end">
                                        <button
                                            type="submit"
                                            className="mt-2 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <Footer />
        </div>
    )
}

