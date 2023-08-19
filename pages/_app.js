import '../styles/globals.css';
import Header from '../components/header';
import Footer from '../components/footer';
import Head from 'next/head';


export default function App({ Component, pageProps }) {
  return (
    <div className="appContainer">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
  }