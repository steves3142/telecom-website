import Head from 'next/head'
import type { NextPage } from 'next';
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div>
    <Head>
      <title>MSNT Telecom</title>
    </Head>
    
    <header>
      <Header />
    </header>

    </div>
  )
};

export default Home;
