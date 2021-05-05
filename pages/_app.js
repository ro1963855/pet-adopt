
import { ApolloProvider } from '@apollo/client'
import { useApollo } from '../lib/apolloClient'
import Head from 'next/head'
import { wrapper } from '../store/store'
import Header from '../layouts/Header'
import 'bootstrap/dist/css/bootstrap.css'

function MyApp({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps)

  return (
    <ApolloProvider client={apolloClient}>
      <Head>
        <title>領養你的寵物</title>
        <meta name="description" content="幫助大家在各地收容所領養到想要的寵物" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header></Header>
        <Component {...pageProps} />
      </main>
    </ApolloProvider>
  )
}

export default wrapper.withRedux(MyApp)
