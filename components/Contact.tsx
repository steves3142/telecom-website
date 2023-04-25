import Image from 'next/image';
import Map from '../images/map.png'
import { Skill } from "../typings"
import { urlFor } from '../sanity';

type Props = {
    skills: Skill[];
  }

//   const sendEmail(e) {
//     e.preventDefault();

//     emailjs.sendForm()

//   }

  const Contact = ( { skills }: Props) => {
    return (
        <div className="relative bg-white">

            <div className="lg:absolute lg:inset-0 lg:left-1/2">
                <img
                    className="h-64 w-full bg-white object-scale-down sm:h-80 lg:absolute lg:h-full"
                    src={urlFor(skills[2].image).url()}
                    alt=""
                />
            </div>

            <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-24 lg:pt-32">
                <div className="rounded-3xl shadow-2xl px-6 lg:px-8">
                    <div className="p-4 first-letter:mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900">Let's work together</h2>
                        <p className="mt-2 text-lg leading-8 text-gray-600">
                            MSNT is licensed and provides a full portfolio of services in more than 10 states nationwide. For more information about where we are currently licensed, please utilize the form below to reach out to our licensing department.
                        </p>
                        <form action="#" method="" className="mt-16">
                        {/* <form action="#" method="" className="mt-16" onSubmit={sendEmail}> */}
                            <div className="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                                        First name
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            type="text"
                                            name="first-name"
                                            id="first-name"
                                            autoComplete="given-name"
                                            className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
                                        Last name
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            type="text"
                                            name="last-name"
                                            id="last-name"
                                            autoComplete="family-name"
                                            className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                                        Email
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-900">
                                        Company
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            type="text"
                                            name="company"
                                            id="company"
                                            autoComplete="organization"
                                            className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <div className="flex justify-between text-sm leading-6">
                                        <label htmlFor="phone" className="block font-semibold text-gray-900">
                                            Phone
                                        </label>
                                        <p id="phone-description" className="text-gray-400">
                                            Optional
                                        </p>
                                    </div>
                                    <div className="mt-2.5">
                                        <input
                                            type="tel"
                                            name="phone"
                                            id="phone"
                                            autoComplete="tel"
                                            aria-describedby="phone-description"
                                            className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <div className="flex justify-between text-sm leading-6">
                                        <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                                            How can we help you?
                                        </label>
                                        <p id="message-description" className="text-gray-400">
                                            Max 500 characters
                                        </p>
                                    </div>
                                    <div className="mt-2.5">
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={4}
                                            aria-describedby="message-description"
                                            className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            defaultValue={''}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-10 flex justify-end border-t border-gray-900/10 pt-8">
                                <button
                                    type="submit"
                                    className="mt-2 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 sm:w-auto"
                                >
                                    Send message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
