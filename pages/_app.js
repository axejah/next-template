import '@/styles/globals.css'
import '@/css/pico.min.css'
import { SessionProvider } from 'next-auth/react'

export default function App({ Component, pageProps }) {
  return( 
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
    )
}
