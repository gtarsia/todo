import 'styles/globals.css'
import type { AppProps } from 'next/app'
import { setAutoFreeze } from 'immer'

setAutoFreeze(false)

function MyApp({ Component, pageProps }: AppProps) {
  if (typeof window !== "undefined") {
    import('drag-drop-touch')
  }
  return <Component {...pageProps} />
}

export default MyApp
