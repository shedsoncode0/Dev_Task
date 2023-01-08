import '../styles/globals.css'
import Layout from '../components/Layout'
import { AppProvider } from '../contexts/AppContext'
import { AnimatePresence } from 'framer-motion'

function MyApp({ Component, pageProps, router }) {
  return (
    <AppProvider>
      <Layout>
        <AnimatePresence >
          <Component key={router.pathName} {...pageProps} />
        </AnimatePresence>
      </Layout>
    </AppProvider>
  ) 
    
}

export default MyApp
