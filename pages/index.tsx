import Head from 'next/head'
import type { NextPage } from 'next';
import Image from 'next/image';
import Map from '../images/map.png'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Banner from '../components/Banner.js'
import React from 'react';

const Home: NextPage = () => {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>MSNT Telecom</title>
      </Head>

      {/* Hero */}
      <Hero />

      {/* Banner */}
      <main className="w-500 h-500">
        <Banner />
      </main>

      {/* Map */}
      <div className="relative">
        <Image className="" alt="" src={Map} />
      </div>


      {/* Footer */}
      <Footer />

    </div>
  )
};

export default Home;
