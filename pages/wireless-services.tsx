import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroWireless from "../components/HeroWireless";
import type { GetStaticProps } from 'next';
import { Experience, Skill, PageInfo } from "../typings"
import { fetchExperiences } from "../utils/fetchExperiences";
import { fetchSkills } from '../utils/fetchSkills';
import { urlFor } from '../sanity';
import { CheckIcon, XMarkIcon } from '@heroicons/react/20/solid'

const navigation = [
  { name: 'Solutions', href: '#' },
  { name: 'Pricing', href: '#' },
  { name: 'Docs', href: '#' },
  { name: 'Company', href: '#' },
]
const plans = [

  {
    title: 'TELECOMMUNICATION SERVICES',
    featured: true,
    description: '',
    //   priceMonthly: 19,
    //   priceYearly: 220,
    mainFeatures: [
      { id: 1, value: 'New site construction' },
      { id: 2, value: 'Upgrades & Modification' },
      { id: 3, value: 'Monopole, Self-Support & Guyed tower erection' },
      { id: 4, value: 'Small Cell site build' },
      { id: 5, value: 'IDAS & ODAS System installation' },
      { id: 6, value: 'Site Decomissioning' },
      { id: 7, value: 'Microwaves Installations & Pathing' },
      { id: 9, value: 'Certified Sweep & PIM testing' },
      { id: 10, value: 'Tower Mapping' },
      { id: 11, value: '24/7 Maintenance' },
      { id: 12, value: 'Temporary Tower' },
    ],
  },
  {
    title: 'CIVIL & OTHER SERVICES',
    featured: true,
    description: '',
    //   priceMonthly: 12,
    //   priceYearly: 140,
    mainFeatures: [
      { id: 1, value: 'Concrete Repair and Restoration' },
      { id: 2, value: 'Rock Saw, Directional Boring, Trenching' },
      { id: 3, value: 'Landscaping' },
      { id: 4, value: 'Mule Tape and Locate Tape Installation' },
      { id: 5, value: 'Utility Coordination & Design' },
      { id: 6, value: 'Outdoor Stealthing installation' },
      { id: 7, value: 'Excavation' },
      { id: 8, value: 'Steel Installation' },
      { id: 9, value: 'Hand Hole and Vault Installation' },
      { id: 10, value: 'Utility Locates' },
      { id: 11, value: 'HVAC Installations, upgrades, and maintenance' }
    ],
  }
]

const faqs = [
  {
    id: 1,
    question: "What'other exams do you offer?",
    answer:
      "Auto-Refractor, Phoropter, Visual Acuity Test, Color Vision Exams (D-15), Low Contrast Visual Acuity, and Low Vision Contrast Test.",
  },
  {
    id: 2,
    question: "What CPT codes are accepted for this device?",
    answer:
      "92081- Limited Visual Field Examination, 92082- Limited Visual Field Examination, 92083 – Extended Visual Field Examination, 92015 – Refraction, 92283 – Color vision examination"
  },
  {
    id: 3,
    question: "How do I correct for refractive error?",
    answer:
      "Xenon-VR’s lenses are tunable, shape-changing lenses. With patent-pending Liquid Lens Technology, refractive error can be corrected for and adapted to each patient’s refractive needs."
  },
  {
    id: 4,
    question: "Do I need an eye-patch or eye dilation?",
    answer:
      "Xenon-VR devices do not require an eye patch and is a non-mydriatic device. Virtual testing can be presented to one eye at a time, while the other eye remains inactive."
  },
  {
    id: 5,
    question: "What is the regulatory status of the device?",
    answer:
      "Xenon-1 is a Class 1 Medical device and is 510k registered."
  },
  {
    id: 6,
    question: "How many research studies have been done on the Xenon-1 device?",
    answer:
      "Yes, several ongoing studies are being conducted by two different academic institutions in the United States."
  },
]

const files = [
  {
    title: 'IMG_4985.HEIC',
    size: '3.9 MB',
    source:
      'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
  },
  {
    title: 'IMG_4985.HEIC',
    size: '3.9 MB',
    source:
      'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
  },
  {
    title: 'IMG_4985.HEIC',
    size: '3.9 MB',
    source:
      'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
  },
  {
    title: 'IMG_4985.HEIC',
    size: '3.9 MB',
    source:
      'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
  },
  {
    title: 'IMG_4985.HEIC',
    size: '3.9 MB',
    source:
      'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
  },
  {
    title: 'IMG_4985.HEIC',
    size: '3.9 MB',
    source:
      'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
  },
  {
    title: 'IMG_4985.HEIC',
    size: '3.9 MB',
    source:
      'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
  },
  {
    title: 'IMG_4985.HEIC',
    size: '3.9 MB',
    source:
      'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
  },

]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

type Props = {
  experiences: Experience[];
  skills: Skill[];
}

const Wireless = ({ skills, experiences }: Props) => {
  return (
    <div>
      <HeroWireless skills={skills} />

      <main>
        <div>
          <div>
            <div className="sticky top-0 z-10">
              <Header />
            </div>
            {/* Pricing section */}
            <div>
              <div className="bg-blue-800">
                {/* Overlapping background */}

                <div className="mx-auto max-w-2xl px-4 pt-16 text-center sm:px-6 sm:pt-32 lg:max-w-7xl lg:px-8">
                  <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                    <span className="block lg:inline">MSNT </span>
                    <span className="block lg:inline">Services</span>
                  </h1>
                  <p className="mt-4 text-xl text-blue-100">
                    Find the services that best suits your next project.
                  </p>
                </div>

                <h2 className="sr-only">Plans</h2>

                {/* Cards */}
                <div className="relative mx-auto mt-8 max-w-2xl px-4 pb-8 sm:mt-12 sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-0">
                  {/* Decorative background */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 top-4 bottom-6 left-8 right-8 hidden rounded-tl-lg rounded-tr-lg bg-blue-900 lg:block"
                  />

                  <div className="relative space-y-6 lg:grid lg:grid-cols-2 lg:space-y-0">
                    {plans.map((plan) => (
                      <div
                        key={plan.title}
                        className={classNames(
                          plan.featured ? 'bg-white ring-2 ring-blue-800 shadow-md' : 'bg-blue-800 lg:bg-transparent',
                          'pt-6 px-6 pb-3 rounded-lg lg:px-8 lg:pt-12'
                        )}
                      >
                        <div>
                          <h3
                            className={classNames(
                              plan.featured ? 'text-blue-700' : 'text-white',
                              'text-base font-semibold'
                            )}
                          >
                            {plan.title}
                          </h3>
                          <div className="flex flex-col items-start sm:flex-row sm:items-center sm:justify-between lg:flex-col lg:items-start">
                            <div className="mt-3 flex items-center">
                              <p
                                className={classNames(
                                  plan.featured ? 'text-blue-700' : 'text-white',
                                  'text-4xl font-bold tracking-tight'
                                )}
                              >
                                {/* ${plan.priceMonthly} */}

                              </p>

                              <div className="ml-4">
                                {/* <p className={classNames(plan.featured ? 'text-gray-700' : 'text-white', 'text-sm')}>
                                USD / mo
                              </p>
                              <p className={classNames(plan.featured ? 'text-gray-500' : 'text-indigo-200', 'text-sm')}>
                                Billed yearly (${plan.priceYearly})
                              </p> */}



                              </div>
                            </div>
                            <a
                              className={classNames(
                                plan.featured
                                  ? 'bg-blue-700 text-white hover:bg-blue-800'
                                  : 'bg-white text-blue-700 hover:bg-blue-50',
                                'mt-6 w-full inline-block py-2 px-8 border border-transparent rounded-md shadow-sm text-center text-sm font-medium sm:mt-0 sm:w-auto lg:mt-6 lg:w-full'
                              )}
                            >
                              {/* Buy  */}
                              {plan.title}
                            </a>
                          </div>
                        </div>
                        <h4 className="sr-only">Features</h4>
                        <ul
                          role="list"
                          className={classNames(
                            plan.featured
                              ? 'border-gray-200 divide-gray-200'
                              : 'border-blue-600 divide-blue-600 divide-opacity-75',
                            'mt-7 border-t divide-y lg:border-t-0'
                          )}
                        >
                          {plan.mainFeatures.map((mainFeature) => (
                            <li key={mainFeature.id} className="flex items-center py-3">
                              <CheckIcon
                                className={classNames(
                                  plan.featured ? 'text-blue-600' : 'text-blue-300',
                                  'w-5 h-5 flex-shrink-0'
                                )}
                                aria-hidden="true"
                              />
                              <span
                                className={classNames(
                                  plan.featured ? 'text-gray-600' : 'text-white',
                                  'ml-4 text-sm font-medium'
                                )}
                              >
                                {mainFeature.value}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>


            {/* Logos of Wireless Clients*/}
            <div className="mx-auto max-w-2xl py-12 px-4 sm:px-6 lg:max-w-7xl lg:py-32 lg:px-8">
              <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
                {/* <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <img className="h-12" src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg" alt="Tuple" />
                </div>
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <img className="h-12" src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg" alt="Mirage" />
                </div>
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <img
                    className="h-12"
                    src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
                    alt="StaticKit"
                  />
                </div>
                <div className="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
                  <img
                    className="h-12"
                    src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg"
                    alt="Transistor"
                  />
                </div>
                <div className="col-span-2 flex justify-center md:col-span-3 lg:col-span-1">
                  <img
                    className="h-12"
                    src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg"
                    alt="Workcation"
                  />
                </div> */}
              </div>
            </div>

            {/* Content Sectiion */}

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
                    <span className="mt-2 block text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                      Case Studies
                    </span>
                  </h1>
                  <p className="mt-8 text-xl leading-8 text-gray-500">
                    Interested in what our specialties are? Check out some of our prior work with previous clients. 
                  </p>
                  <p className="mt-8 text-xl leading-8 text-gray-500">
                    All materials contained in this website are the property of MSNT or its subsidiaries or affiliated companies
                    and/or third-party licensors. All trade names and trademarks are proprietary to MSNT or its affiliates or
                    licensors. No material from this website or any Internet site owned, operated, licensed or controlled by MSNT or
                    our affiliates may be copied or reproduced distributed in any way.
                  </p>
                </div>
              </div>
            </div>


            {/* FAQs */}
            {/* <section aria-labelledby="faq-heading" className="bg-gray-900">
              <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="max-w-2xl lg:mx-auto lg:text-center">
                  <h2 id="faq-heading" className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    Frequently asked questions
                  </h2>
                  <p className="mt-4 text-gray-400">


                  </p>
                </div>
                <div className="mt-20">
                  <dl className="space-y-10 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-10 lg:space-y-0">
                    {faqs.map((faq) => (
                      <div key={faq.id}>
                        <dt className="font-semibold text-white">{faq.question}</dt>
                        <dd className="mt-3 text-gray-400">{faq.answer}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </section> */}
          </div>

          {/* Images with details */}

          {/* <ul role="list" className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
            {files.map((file) => (
              <li key={file.source} className="relative">
                <div className="group aspect-h-21 aspect-w-30 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                  <img src={file.source} alt="" className="pointer-events-none object-cover group-hover:opacity-75" />
                  <button type="button" className="absolute inset-0 focus:outline-none">
                    <span className="sr-only">View details for {file.title}</span>
                  </button>
                </div>
                <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">{file.title}</p>
                <p className="pointer-events-none block text-sm font-medium text-gray-500">{file.size}</p>
              </li>
            ))} */}

            <ul role="list" className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
              {experiences.map((picture) => (
                <li key={picture._id} className="relative">
                  <div className="group aspect-h-21 aspect-w-30 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                    <img src={urlFor(picture.companyImage).url()} alt="" className="pointer-events-none object-cover group-hover:opacity-75" />
                    <button type="button" className="absolute inset-0 focus:outline-none">
                      
                    </button>
                  </div>
                </li>
              ))}


            </ul>

        </div>
      </main>

      <Footer skills={skills} />
    </div>
  )
}

export default Wireless;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();

  return {
    props: {
      experiences,
      skills,
    },
    // Next.js will attempt to re-generate the page:
    //- When a request comes in 
    //- At most once every 10 seconds
    revalidate: 10,
  };
};