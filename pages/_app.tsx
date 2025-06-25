import '@/styles/globals.css'
import Header from '@/components/Header'
import { AppProps } from 'next/app'
import { ThemeProvider } from '@/context/theme-store'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Header />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}