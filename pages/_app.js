import DefaultLayout from '@/components/DefaultLayout'
import '@/styles/globals.css'
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
export default function App({ Component, pageProps }) {
  return <DefaultLayout>
    <Component {...pageProps} />
  </DefaultLayout>
}
