import '../styles/style.css'
import Head from 'next/head'

function Aellica({ Component, pageProps }) {
  return(
		<>
			<Head>
				<link rel="shortcut icon" href="/favicon.ico" />
			</Head>
			<Component {...pageProps} />
		</>
	)
}

export default Aellica;