import Head from 'next/head'
import type { NextPage } from 'next';
import Header from '../components/Header'
import Footer from '../components/Footer'
import Hero from '../components/Hero'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>MSNT Telecom</title>
      </Head>

      <header>
        <Header />
      </header>

      {/* Hero */}

      <Hero />

      {/* Footer */}
      <Footer />

    </div>
  )
};

export default Home;
