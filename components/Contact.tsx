import React, { useRef } from 'react';
import { Skill } from "../typings"
import { urlFor } from '../sanity';
import ClientSubmitForm from '../components/HomeForm'

type Props = {
    skills: Skill[];
}

// type Inputs = {
//     firstName: string;
//     lastName: string;
//     email: string;
//     company: string;
//     phone: string; 
//     message: string;
// }

const Contact = ({ skills }: Props) => {

    // const form = useRef();

    // const {
    //     handleSubmit,
    //     register,
    //     formState: { errors }, 
    // } = useForm<Inputs>(); 


    // const sendEmail = (e) => {
    //     e.preventDefault();
    
    //     emailjs
    //     .sendForm(
    //         `${process.env.EMAIL_SERVICE_ID}`, 
    //         `${process.env.EMAIL_TEMPLATE_ID}`,
    //         form.current, 
    //         `${process.env.EMAIL_PUBLIC_KEY}`)
    //       .then((result) => {
    //           console.log(result.text);
    //       }, (error) => {
    //           console.log(error.text);
    //       });
    //   };

    // const onSubmit: SubmitHandler<Inputs> = (formData) => {
    //     sendEmail; 
    // }


return (
    <div className="relative bg-white">

        <div className="lg:absolute lg:inset-0 lg:left-1/2">
            <img
                className="h-64 w-full bg-white object-scale-down sm:h-80 lg:absolute lg:h-full"
                src={urlFor(skills[2].image).url()}
                alt=""
            />
        </div>

        <ClientSubmitForm/>

        
    </div>
)
}

export default Contact
