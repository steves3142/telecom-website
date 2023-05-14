import React from "react";
import HeroContact from "../components/HeroContact";
import Footer from "../components/Footer";
import type { GetStaticProps } from 'next';
import { Skill } from "../typings"
import { fetchSkills } from '../utils/fetchSkills';
import ContactForm from '../components/ContactForm'

type Props = {
    skills: Skill[];
}

const Contact = ( { skills  }: Props) => {
    return (
        <div>
            <HeroContact skills={skills} />

            <ContactForm /> 

            <Footer skills={skills}/>
        </div>
    )
}

export default Contact; 

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
  