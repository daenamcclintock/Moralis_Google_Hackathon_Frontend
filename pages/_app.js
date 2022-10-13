import "../styles/globals.css"
import { MoralisProvider } from "react-moralis"
import Header from "../components/Header/Header"
import Head from "next/head"
import { NotificationProvider } from "web3uikit"
import { Popover } from '@typeform/embed-react'

const APP_ID = process.env.NEXT_PUBLIC_APP_ID
const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL

function MyApp({ Component, pageProps }) {
    return (
      <div>
          <Head>
              <title>Tokenz</title>
              <meta name="description" content="Hackathon" />
              <link rel="icon" href="/favicon.ico" />
          </Head>
          <MoralisProvider appId={APP_ID} serverUrl={SERVER_URL}>
              <NotificationProvider>
                  <Header />
                  <Component {...pageProps} />
              </NotificationProvider>
          </MoralisProvider>
          <Popover id="TbWRpr46" />
      </div>
    )
}

export default MyApp
