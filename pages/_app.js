import '../styles/globals.css';
import Header from '../components/header';
import Footer from '../components/footer';
import Head from 'next/head';
import Script from 'next/script';

export default function App({ Component, pageProps }) {
  return (
    <div className="appContainer">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />

      <Script 
      strategy="afterInteractive"
      src="https://www.googletagmanager.com/gtag/js?id=G-TSP37PYT9E"
      />

      <Script id="google-analytics" strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-TSP37PYT9E');`,
        }}
      />
      
    </div>
  );
  }