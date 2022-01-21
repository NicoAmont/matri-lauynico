import Head from 'next/head';
import Layout from '../components/Layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  
  return(
      <Layout className="scrollbar-hide">
        <Head>
          <title>Matri La~Ni</title>
          <meta name="Matrimonio Laura y Nicolas" content="" />
          <link rel="shortcut icon" type="image/x-icon" href="/ln.png"/>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css"/>
        </Head>
        <Component {...pageProps} />
      </Layout>

  ) 
}

export default MyApp