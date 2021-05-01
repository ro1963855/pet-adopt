import Head from 'next/head'

function Header() {
  return (
    <Head>
      <title>領養你的寵物</title>
      <meta name="description" content="幫助大家在各地收容所領養到想要的寵物" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}

export default Header