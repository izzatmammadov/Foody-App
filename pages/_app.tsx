import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import '../i18n/i18n'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
