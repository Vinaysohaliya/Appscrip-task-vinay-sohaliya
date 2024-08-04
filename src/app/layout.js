import './globals.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { Poppins } from 'next/font/google'

const poppins = Poppins({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
})

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={poppins.className}>
            <head>
                <title>Page Title</title>
                <meta name="description" content="Page Description" />
            </head>
            <body>
                <Header />
                <hr />
                {children}
                <Footer />
            </body>
        </html>
    );
}
