// app/layout.js
import './globals.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Head from 'next/head';

export const metadata = {
  title: 'ClickCart - Your Online Shopping Destination',
  description: 'ClickCart offers a wide variety of products at unbeatable prices. Shop now and enjoy fast shipping and excellent customer service.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/favicon.ico" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@type': 'WebSite',
            name: metadata.title,
            description: metadata.description,
            url: 'https://appscrip-task-vinay-sohaliya-k7g9.vercel.app/', 
          })}
        </script>
      </Head>
      <body suppressHydrationWarning={true}>
        <Header />
        <hr />
        {children}
        <Footer />
      </body>
    </html>
  );
}
