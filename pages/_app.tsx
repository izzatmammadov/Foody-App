import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import '../i18n/i18n'
import type { AppProps } from 'next/app'
import Provider from '@/share/services/provider'

function MyApp({ Component, pageProps }: AppProps) {

  return <div>
    <Provider>
      <Component {...pageProps} />      
      </Provider>
    </div>
}

export default MyApp
