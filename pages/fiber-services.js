import React from "react";
import HeroHeader from "../components/HeroHeader";
import Header from "../components/Header"; 
import Footer from "../components/Footer";
import HeroFiber from "../components/HeroFiber";
import { CheckIcon, XMarkIcon } from '@heroicons/react/20/solid'


const navigation = [
    { name: 'Solutions', href: '#' },
    { name: 'Pricing', href: '#' },
    { name: 'Docs', href: '#' },
    { name: 'Company', href: '#' },
  ]
  const plans = [
    {
      title: 'KEY SERVICES',
      featured: false,
      description: '',
      //   priceMonthly: 5,
      //   priceYearly: 56,
      mainFeatures: [
        { id: 1, value: 'Underground Fiber Construction' },
        { id: 2, value: 'Aerial Fiber Construction' },
        { id: 3, value: 'Fiber Splicing' },
        { id: 4, value: 'FTTx / Commercial building laterals' },
        { id: 5, value: 'Trenching & Micro Trenching' },
        { id: 6, value: 'Directional Boring' },
        { id: 7, value: 'Fiber testing' },
        { id: 8, value: 'Integration and Turnup' },
      ],
    },
    {
      title: 'Markets Served', 
      featured: true,
      description: '',
      //   priceMonthly: 19,
      //   priceYearly: 220,
      mainFeatures: [
        { id: 1, value: 'Southern California' },
        { id: 2, value: 'New Jersey / New York metropolitan area' },
        { id: 3, value: 'North Carolina' }
      ],
    }
  ]
  const features = [
    {
      title: 'Tax Savings',
      tiers: [
        { title: 'starter', value: true },
        { title: 'popular', featured: true, value: true },
        { title: 'intermediate', value: true },
      ],
    },
    {
      title: 'Easy to use accounting',
      tiers: [
        { title: 'starter', value: true },
        { title: 'popular', featured: true, value: true },
        { title: 'intermediate', value: true },
      ],
    },
    {
      title: 'Multi-accounts',
      tiers: [
        { title: 'starter', value: '3 accounts' },
        { title: 'popular', featured: true, value: 'Unlimited accounts' },
        { title: 'intermediate', value: '7 accounts' },
      ],
    },
    {
      title: 'Invoicing',
      tiers: [
        { title: 'starter', value: '3 invoices' },
        { title: 'popular', featured: true, value: 'Unlimited invoices' },
        { title: 'intermediate', value: '10 invoices' },
      ],
    },
    {
      title: 'Exclusive offers',
      tiers: [
        { title: 'starter', value: false },
        { title: 'popular', featured: true, value: true },
        { title: 'intermediate', value: true },
      ],
    },
    {
      title: '6 months free advisor',
      tiers: [
        { title: 'starter', value: false },
        { title: 'popular', featured: true, value: true },
        { title: 'intermediate', value: true },
      ],
    },
    {
      title: 'Mobile and web access',
      tiers: [
        { title: 'starter', value: false },
        { title: 'popular', featured: true, value: true },
        { title: 'intermediate', value: false },
      ],
    },
  ]
  const perks = [
    {
      title: '24/7 customer support',
      tiers: [
        { title: 'starter', value: true },
        { title: 'popular', featured: true, value: true },
        { title: 'intermediate', value: true },
      ],
    },
    {
      title: 'Instant notifications',
      tiers: [
        { title: 'starter', value: true },
        { title: 'popular', featured: true, value: true },
        { title: 'intermediate', value: true },
      ],
    },
    {
      title: 'Budgeting tools',
      tiers: [
        { title: 'starter', value: true },
        { title: 'popular', featured: true, value: true },
        { title: 'intermediate', value: true },
      ],
    },
    {
      title: 'Digital receipts',
      tiers: [
        { title: 'starter', value: true },
        { title: 'popular', featured: true, value: true },
        { title: 'intermediate', value: true },
      ],
    },
    {
      title: 'Pots to separate money',
      tiers: [
        { title: 'starter', value: false },
        { title: 'popular', featured: true, value: true },
        { title: 'intermediate', value: true },
      ],
    },
    {
      title: 'Free bank transfers',
      tiers: [
        { title: 'starter', value: false },
        { title: 'popular', featured: true, value: true },
        { title: 'intermediate', value: false },
      ],
    },
    {
      title: 'Business debit card',
      tiers: [
        { title: 'starter', value: false },
        { title: 'popular', featured: true, value: true },
        { title: 'intermediate', value: false },
      ],
    },
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
    // More questions...
  ]
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

export default function Fiber() {
    return (
        <div>
            <Header />
            {/* <div className="bg-gray-700">
            <HeroHeader />
            </div> */}
            <HeroFiber />

            <main>
      <div>
        <div>
          {/* Pricing section */}
          <div>
            <div className="bg-indigo-600">
              {/* Overlapping background */}

              <div className="mx-auto max-w-2xl px-4 pt-16 text-center sm:px-6 sm:pt-32 lg:max-w-7xl lg:px-8">
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                  <span className="block lg:inline">MSNT </span>
                  <span className="block lg:inline">Services</span>
                </h1>
                <p className="mt-4 text-xl text-indigo-100">
                  Everything you need, nothing you don't. Find the services that best suits your business.
                </p>
              </div>

              <h2 className="sr-only">Plans</h2>

              {/* Toggle */}
              <div className="mt-12 flex justify-center sm:mt-16">
                <div className="flex rounded-lg bg-indigo-700 p-0.5">
                  <button
                    type="button"
                    className="whitespace-nowrap rounded-md border-indigo-700 bg-white py-2 px-6 text-sm font-medium text-indigo-700 shadow-sm hover:bg-indigo-50 focus:z-10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-700"
                  >
                    Monthly billing
                  </button>
                  <button
                    type="button"
                    className="ml-0.5 whitespace-nowrap rounded-md border border-transparent py-2 px-6 text-sm font-medium text-indigo-200 hover:bg-indigo-800 focus:z-10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-700"
                  >
                    Yearly billing
                  </button>
                </div>
              </div>

              {/* Cards */}
              <div className="relative mx-auto mt-8 max-w-2xl px-4 pb-8 sm:mt-12 sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-0">
                {/* Decorative background */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 top-4 bottom-6 left-8 right-8 hidden rounded-tl-lg rounded-tr-lg bg-indigo-700 lg:block"
                />

                <div className="relative space-y-6 lg:grid lg:grid-cols-3 lg:space-y-0">
                  {plans.map((plan) => (
                    <div
                      key={plan.title}
                      className={classNames(
                        plan.featured ? 'bg-white ring-2 ring-indigo-700 shadow-md' : 'bg-indigo-700 lg:bg-transparent',
                        'pt-6 px-6 pb-3 rounded-lg lg:px-8 lg:pt-12'
                      )}
                    >
                      <div>
                        <h3
                          className={classNames(
                            plan.featured ? 'text-indigo-600' : 'text-white',
                            'text-base font-semibold'
                          )}
                        >
                          {plan.title}
                        </h3>
                        <div className="flex flex-col items-start sm:flex-row sm:items-center sm:justify-between lg:flex-col lg:items-start">
                          <div className="mt-3 flex items-center">
                            <p
                              className={classNames(
                                plan.featured ? 'text-indigo-600' : 'text-white',
                                'text-4xl font-bold tracking-tight'
                              )}
                            >
                              ${plan.priceMonthly}
                            </p>
                            <div className="ml-4">
                              <p className={classNames(plan.featured ? 'text-gray-700' : 'text-white', 'text-sm')}>
                                USD / mo
                              </p>
                              <p className={classNames(plan.featured ? 'text-gray-500' : 'text-indigo-200', 'text-sm')}>
                                Billed yearly (${plan.priceYearly})
                              </p>
                            </div>
                          </div>
                          <a
                            href="#"
                            className={classNames(
                              plan.featured
                                ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                                : 'bg-white text-indigo-600 hover:bg-indigo-50',
                              'mt-6 w-full inline-block py-2 px-8 border border-transparent rounded-md shadow-sm text-center text-sm font-medium sm:mt-0 sm:w-auto lg:mt-6 lg:w-full'
                            )}
                          >
                            Buy {plan.title}
                          </a>
                        </div>
                      </div>
                      <h4 className="sr-only">Features</h4>
                      <ul
                        role="list"
                        className={classNames(
                          plan.featured
                            ? 'border-gray-200 divide-gray-200'
                            : 'border-indigo-500 divide-indigo-500 divide-opacity-75',
                          'mt-7 border-t divide-y lg:border-t-0'
                        )}
                      >
                        {plan.mainFeatures.map((mainFeature) => (
                          <li key={mainFeature.id} className="flex items-center py-3">
                            <CheckIcon
                              className={classNames(
                                plan.featured ? 'text-indigo-500' : 'text-indigo-200',
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

            {/* Feature comparison */}
            <section aria-labelledby="mobile-comparison-heading" className="lg:hidden">
              <h2 id="mobile-comparison-heading" className="sr-only">
                Feature comparison
              </h2>

              <div className="mx-auto mt-16 max-w-2xl space-y-16 px-4 sm:px-6">
                {plans.map((plan, planIndex) => (
                  <div key={plan.title} className="border-t border-gray-200">
                    <div
                      className={classNames(
                        plan.featured ? 'border-indigo-600' : 'border-transparent',
                        '-mt-px pt-6 border-t-2 sm:w-1/2'
                      )}
                    >
                      <h3
                        className={classNames(plan.featured ? 'text-indigo-600' : 'text-gray-900', 'text-sm font-bold')}
                      >
                        {plan.title}
                      </h3>
                      <p className="mt-2 text-sm text-gray-500">{plan.description}</p>
                    </div>
                    <h4 className="mt-10 text-sm font-bold text-gray-900">Catered for business</h4>

                    <div className="relative mt-6">
                      {/* Fake card background */}
                      <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden sm:block">
                        <div
                          className={classNames(
                            plan.featured ? 'shadow-md' : 'shadow',
                            'absolute right-0 w-1/2 h-full bg-white rounded-lg'
                          )}
                        />
                      </div>

                      <div
                        className={classNames(
                          plan.featured ? 'ring-2 ring-indigo-600 shadow-md' : 'ring-1 ring-black ring-opacity-5 shadow',
                          'relative py-3 px-4 bg-white rounded-lg sm:p-0 sm:bg-transparent sm:rounded-none sm:ring-0 sm:shadow-none'
                        )}
                      >
                        <dl className="divide-y divide-gray-200">
                          {features.map((feature) => (
                            <div
                              key={feature.title}
                              className="flex items-center justify-between py-3 sm:grid sm:grid-cols-2"
                            >
                              <dt className="pr-4 text-sm font-medium text-gray-600">{feature.title}</dt>
                              <dd className="flex items-center justify-end sm:justify-center sm:px-4">
                                {typeof feature.tiers[planIndex].value === 'string' ? (
                                  <span
                                    className={classNames(
                                      feature.tiers[planIndex].featured ? 'text-indigo-600' : 'text-gray-900',
                                      'text-sm font-medium'
                                    )}
                                  >
                                    {feature.tiers[planIndex].value}
                                  </span>
                                ) : (
                                  <>
                                    {feature.tiers[planIndex].value === true ? (
                                      <CheckIcon className="mx-auto h-5 w-5 text-indigo-600" aria-hidden="true" />
                                    ) : (
                                      <XMarkIcon className="mx-auto h-5 w-5 text-gray-400" aria-hidden="true" />
                                    )}

                                    <span className="sr-only">
                                      {feature.tiers[planIndex].value === true ? 'Yes' : 'No'}
                                    </span>
                                  </>
                                )}
                              </dd>
                            </div>
                          ))}
                        </dl>
                      </div>

                      {/* Fake card border */}
                      <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden sm:block">
                        <div
                          className={classNames(
                            plan.featured ? 'ring-2 ring-indigo-600' : 'ring-1 ring-black ring-opacity-5',
                            'absolute right-0 w-1/2 h-full rounded-lg'
                          )}
                        />
                      </div>
                    </div>

                    <h4 className="mt-10 text-sm font-bold text-gray-900">Other perks</h4>

                    <div className="relative mt-6">
                      {/* Fake card background */}
                      <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden sm:block">
                        <div
                          className={classNames(
                            plan.featured ? 'shadow-md' : 'shadow',
                            'absolute right-0 w-1/2 h-full bg-white rounded-lg'
                          )}
                        />
                      </div>

                      <div
                        className={classNames(
                          plan.featured ? 'ring-2 ring-indigo-600 shadow-md' : 'ring-1 ring-black ring-opacity-5 shadow',
                          'relative py-3 px-4 bg-white rounded-lg sm:p-0 sm:bg-transparent sm:rounded-none sm:ring-0 sm:shadow-none'
                        )}
                      >
                        <dl className="divide-y divide-gray-200">
                          {perks.map((perk) => (
                            <div key={perk.title} className="flex justify-between py-3 sm:grid sm:grid-cols-2">
                              <dt className="text-sm font-medium text-gray-600 sm:pr-4">{perk.title}</dt>
                              <dd className="text-center sm:px-4">
                                {perk.tiers[planIndex].value === true ? (
                                  <CheckIcon className="mx-auto h-5 w-5 text-indigo-600" aria-hidden="true" />
                                ) : (
                                  <XMarkIcon className="mx-auto h-5 w-5 text-gray-400" aria-hidden="true" />
                                )}

                                <span className="sr-only">{perk.tiers[planIndex].value === true ? 'Yes' : 'No'}</span>
                              </dd>
                            </div>
                          ))}
                        </dl>
                      </div>

                      {/* Fake card border */}
                      <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden sm:block">
                        <div
                          className={classNames(
                            plan.featured ? 'ring-2 ring-indigo-600' : 'ring-1 ring-black ring-opacity-5',
                            'absolute right-0 w-1/2 h-full rounded-lg'
                          )}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>


          </div>

          <section aria-labelledby="comparison-heading" className="lg:block">
              <h2 className="sr-only">
                Feature comparison
              </h2>
            </section>

          

          {/* Logos of Wireless Clients*/}
          <div className="mx-auto max-w-2xl py-12 px-4 sm:px-6 lg:max-w-7xl lg:py-32 lg:px-8">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
              <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
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
              </div>
            </div>
          </div>

          {/* FAQs */}
          <section aria-labelledby="faq-heading" className="bg-gray-900">
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
          </section>
        </div>
      </div>
    </main>

          <Footer />
      </div>
  )
}