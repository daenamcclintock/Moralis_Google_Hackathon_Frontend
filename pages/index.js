import Image from "next/image"
import styles from "../styles/Home.module.css"
import { useMoralisQuery, useMoralis } from "react-moralis"
import Footer from "../components/Footer/Footer"
import Protocol from "../components/Landing/Protocol/Protocol"
import Partners from "../components/Landing/Partners/Partners"
import Rewards from "../components/Landing/Rewards/Rewards"
import Hero from "../components/Landing/Hero/Hero"

const Home = () => {
  const { isWeb3Enabled } = useMoralis()
  // const { data: listedNfts, isFetching: fetchingListedNfts } = useMoralisQuery(
  //   // TableName
  //   // Function for the query
  //   "ActiveItem",
  //   (query) => query.limit(10).descending("tokenId")
  // )

  return (

    <div className="container mx-auto">
            <h1 className="py-4 px-4 font-bold text-2xl"></h1>
            <div className="flex flex-wrap">
                {isWeb3Enabled ? (
                    <div>Display Shopify Store Data Here</div>
                )
                     : (
                    <div>Web3 Currently Not Enabled. Please connect your wallet.</div>
                )}
            </div>
            <Hero />
            <Partners />
            <Protocol />
            <Rewards />
            <Footer />
        </div>
  )
}

export default Home
