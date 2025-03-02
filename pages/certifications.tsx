import React from "react"
import Footer from "../components/Footer"
import HeroCert from "../components/HeroCert"
import Header from "../components/Header"
import type { GetStaticProps } from "next" 
import { Skill } from "../typings"
import { fetchSkills } from "../utils/fetchSkills"

type Props = {
    skills: Skill[];
  }

const Certifications = ( { skills }: Props) => {
    return (
        <div>
            <HeroCert skills={skills} />
            
            <div className="sticky top-0 z-10">
                <Header/>
            </div>


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
                            <span className="mt-2 block text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                                Overview
                            </span>
                        </h1>
                        <p className="mt-8 text-xl leading-8 text-gray-500">
                            MSNT is committed to providing a safe workplace for its employeess by mandating strict
                            adherence to accident prevention policy. MSNT educates its employees on how to recognize unsafe conditions and prevent accidents
                            in the workplace. Employees have daily safety meetings upon starting shifts at sites and are encouraged to monitor work processes 
                            for insufficiencies or areas of improvement.
                        </p>
                    </div>
                    <div className="prose prose-lg prose-indigo mx-auto mt-6 text-gray-500">
                        <h2>Safety Training Requirements</h2>
                        <p className="mt-8 text-xl leading-8 text-gray-500">
                            All employee personnel working on sites must have satisfactorily
                            completed the following safety training courses based on trade as offered by the Company(s):
                        </p>
                        <ul className="mt-8 text-xl leading-8 text-gray-500" role="list">
                            <li>OSHA 10 & 30-HOUR CONSTRUCTION SAFETY</li>
                            <li>FIRST AID / CPR</li>
                            <li>LADDER SAFETY</li>
                            <li>RF AWARENESS</li>
                            <li>CRANE, DERRICK & HOIST SAFETY</li>
                            <li>TRAFFIC CONTROL & FLAG PERSONNEL</li>
                            <li>First Aid & CPR</li>
                            <li>Blood Borne Pathogens</li>
                            <li>Fundamentals of RP Radiation</li>
                            <li>HAZMAT</li>
                            <li>Aerial Work Platform Operator</li>
                        </ul>
                        <p className="mt-8 text-xl leading-8 text-gray-500">
                            All personnel who perform controlled descent must also have satisfactorily completed the following safety training
                            courses as offered by the Company(s):
                        </p>
                        <ul className="mt-8 text-xl leading-8 text-gray-500" role="list">
                            <li>FALL PROTECTION (through COMTRAIN or equivalent) – Instructor; Authorized Climber & Rescuer; Competent Climber
                                & Competent Rigger</li>
                            <li>NWSA – TTT-1 & TTT-2</li>
                        </ul>
                    </div>
                </div>
            </div>

            <Footer skills={skills}/>
        </div>
    )
}

export default Certifications; 

export const getStaticProps: GetStaticProps<Props> = async () => {
    const skills: Skill[] = await fetchSkills();
  
    return {
      props: {
        skills,
      },
      // Next.js will attempt to re-generate the page:
      //- When a request comes in 
      //- At most once every 10 seconds
      revalidate: 10,
    };
  };
  