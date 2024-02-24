import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import '../i18n/i18n'
// import type { AppProps } from 'next/app'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Provider from '@/share/services/provider'
import { ToastContainer, toast } from "react-toastify";
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    AOS.init({
         once: false,
    })
 }, [])

  return <div>
    <Provider>
      <ToastContainer/>
      <Component {...pageProps} />      
      </Provider>
    </div>
}

export default MyApp
