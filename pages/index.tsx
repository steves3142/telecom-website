import Head from 'next/head'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import React from 'react';
import Contact from '../components/Contact'
import Header from '../components/Header'
import type { GetStaticProps } from 'next';
import { Project, Skill } from "../typings"
import { fetchProjects } from '../utils/fetchProjects';
import { fetchSkills } from '../utils/fetchSkills';

type Props = {
  projects: Project[];
  skills: Skill[];
}

const Home = ({ projects, skills }: Props) => {
  return (
    <div className="bg-white">
      <Head>
        <title>MSNT Telecom</title>
      </Head>

      {/* Hero */}
      <Hero skills={skills}/>

      {/* Nav Bar */}

      <div className="sticky top-0 z-10">
        <Header skills={skills}/>
      </div>

      {/* Map */}
      <div className="relative">
        <Contact skills={skills}/>
      </div>

      {/* Banner */}
      <main className="w-500 h-500">
        <Banner projects={projects} />
      </main>

      {/* Footer */}
      <Footer />

    </div>
  )
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const projects: Project[] = await fetchProjects();
  const skills: Skill[] = await fetchSkills();

  return {
    props: {
      projects,
      skills,
    },
    // Next.js will attempt to re-generate the page:
    //- When a request comes in 
    //- At most once every 10 seconds
    revalidate: 10,
  };
};
