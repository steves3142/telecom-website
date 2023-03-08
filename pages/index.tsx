import Head from 'next/head'
import type { NextPage } from 'next';
import Header from '../components/Header'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Banner from '../components/Banner.js'
import React from 'react';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>MSNT Telecom</title>
      </Head>
      
      <div className="bg-gray-100">
        {/* Hero */}
        <Hero />
        <main>
          {/* Banner */}
          <section >
            <Banner />
          </section>
        </main>

        {/* Footer */}
        <section className="relative bottom-0 left-0 right-0">
          <Footer />
        </section>

      </div>
    </div>
  )
};

export default Home;
