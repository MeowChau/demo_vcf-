import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css';
import 'swiper/css/bundle';
import 'react-modal-video/css/modal-video.css';
import 'react-toastify/dist/ReactToastify.css';
import 'react-photo-view/dist/react-photo-view.css';
import 'react-circular-progressbar/dist/styles.css';
import 'react-rangeslider/lib/index.css'
import 'animate.css';

import '@/assets/css/animate.css';
import '@/assets/css/font-awesome.min.css';
import '@/assets/css/flaticon-set.css';

import '@/assets/css/nice-select.css';
import '@/assets/css/validnavs.css';
import '@/assets/css/helper.css';
import '@/assets/css/unit-test.css';
import '@/assets/css/style.css';

import Dependency from '@/components/utilities/Dependency';
import { ToastContainer } from 'react-toastify';
import { Manrope, Outfit, Montserrat } from "next/font/google";

const manrope = Manrope({ subsets: ["latin", "vietnamese"], variable: '--font-manrope' });
const outfit = Outfit({ subsets: ["latin"], variable: '--font-outfit' });
const montserrat = Montserrat({ subsets: ["latin", "vietnamese"], variable: '--font-montserrat' });

export const metadata = {
  title: "Diễn đàn CEO Việt Nam",
  openGraph: {
    title: "Diễn đàn CEO Việt Nam",
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} ${manrope.variable} ${outfit.variable} ${montserrat.variable}`}>
        <style dangerouslySetInnerHTML={{__html: `
          body, .wrapper {
            background-color: #ffffff !important;
          }
          @media (min-width: 1400px) {
            .container {
              max-width: 1440px !important;
            }
          }
          @media (min-width: 1600px) {
            .container {
              max-width: 1560px !important;
            }
          }
        `}} />
        <ToastContainer />
        <Dependency />
        {children}
      </body>
    </html>
  );
}
