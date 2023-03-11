import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link';
import Image from 'next/image';
import MSNT from '../images/MSNT_Logo.png'


export default function Header() {
  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-[#5a5a5a1a] hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">

                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Link href="/">
                    {/* <img
                    className="hidden h-8 w-auto lg:block"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt="Your Company"
                  /> */}
                    <Image
                      className="h-14 w-auto"
                      src={MSNT}
                    />
                  </Link>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                  <Link
                    href="/about"
                    className="inline-flex items-center border-b-2 hover:border-indigo-500 px-1 pt-1 text-sm font-medium text-gray-900"
                  >
                    About
                  </Link>
                  <Link
                    href="wireless-services"
                    className="inline-flex items-center border-b-2 hover:border-indigo-500 px-1 pt-1 text-sm font-medium text-gray-900"
                  >
                    Wireless Services
                  </Link>
                  <Link
                    href="fiber-services"
                    className="inline-flex items-center border-b-2 hover:border-indigo-500 px-1 pt-1 text-sm font-medium text-gray-900"
                  >
                    Fiber Services
                  </Link>
                  <Link
                    href="contact-us"
                    className="inline-flex items-center border-b-2 hover:border-indigo-500 px-1 pt-1 text-sm font-medium text-gray-900"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 pt-2 pb-4">
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
              <Disclosure.Button
                as="a"
                href="/about"
                className="block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700"
              >
                About
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/wireless-services"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 "
              >
                Wireless Services
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="fiber-services"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
              >
                Fiber Services
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="contact-us"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
              >
                Contact
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
