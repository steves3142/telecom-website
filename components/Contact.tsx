import React, { useRef } from 'react';
import { Skill } from "../typings"
import { urlFor } from '../sanity';
import ClientSubmitForm from '../components/HomeForm'


type Props = {
    skills: Skill[];
}

const Contact = ({ skills }: Props) => {

    return (
        <div className="relative bg-white">

            {/* Map */}
            <div className="lg:absolute lg:inset-0 lg:left-1/2">
                <img
                    className="h-64 w-full bg-white object-scale-down sm:h-80 lg:absolute lg:h-full"
                    src={urlFor(skills[2].image).url()}
                    alt=""
                />
            </div>

            <ClientSubmitForm />


        </div>
    )
}

export default Contact
