import { DM_Sans } from 'next/font/google';
import localFont from 'next/font/local';
import Footer from './components/layout/footer';
import Navbar from './components/layout/navbar';
import './globals.css';

// Load local fonts
const integralcf = localFont({
  src: './integralcf-bold.otf',
  variable: '--font-integralcf'
})

// Load Google fonts DM Sans
const dm_sans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans'
});

export const metadata = {
  title: 'Gradsea.io - NFT Marketplace',
  description: 'Gradsea.io - The premier NFT marketplace. Sell and buy your NFTs token on our platform.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${dm_sans.variable} ${integralcf.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
};