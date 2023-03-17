import Head from 'next/head'
import type { NextPage } from 'next';
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Banner from '../components/Banner.js'
import React from 'react';
import Contact from '../components/Contact'

const Home: NextPage = () => {
  return (
    <div className="bg-white">
      <Head>
        <title>MSNT Telecom</title>
      </Head>

      {/* Hero */}
      <Hero />

      {/* Map */}
      <div className="relative">
        <Contact />
      </div>

      {/* Banner */}
      <main className="w-500 h-500">
        <Banner />
      </main>

      {/* Footer */}
      <Footer />

    </div>
  )
};

export default Home;
