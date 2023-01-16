import Head from 'next/head'
import type { NextPage } from 'next';
import Header from '../components/Header'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Banner from '../components/Banner'

const Home: NextPage = () => {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>MSNT Telecom</title>
      </Head>

      <header>
        <Header />
      </header>

      {/* Hero */}
      <Hero />

      {/* Banner */}
      <main className="max-w-md">
      <Banner />
      </main>

      {/* Footer */}
      <Footer />

    </div>
  )
};

export default Home;
