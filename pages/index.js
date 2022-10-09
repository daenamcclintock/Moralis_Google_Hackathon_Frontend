import Image from "next/image"
import styles from "../styles/Home.module.css"
import { useMoralisQuery, useMoralis } from "react-moralis"
import Footer from "../components/Footer/Footer"
import Protocol from "../components/Landing/Protocol/Protocol"
import Partners from "../components/Landing/Partners/Partners"
import Rewards from "../components/Landing/Rewards/Rewards"
import Hero from "../components/Landing/Hero/Hero"
import Metrics from "../components/Landing/Metrics/Metrics"
import { LandingContainer } from "../components/Landing/LandingStyles"

const Home = () => {
  const { isWeb3Enabled } = useMoralis()
  // const { data: listedNfts, isFetching: fetchingListedNfts } = useMoralisQuery(
  //   // TableName
  //   // Function for the query
  //   "ActiveItem",
  //   (query) => query.limit(10).descending("tokenId")
  // )

  return (
    <LandingContainer>
        <div className="flex flex-wrap">
            {isWeb3Enabled ? (
                <div>Display Shopify Store Data Here</div>
            )
                  : (
                <div>Web3 Currently Not Enabled. Please connect your wallet.</div>
            )}
        </div>
        <Hero />
        <Metrics />
        <Partners />
        <Protocol />
        <Rewards />
        <Footer />
    </LandingContainer>
  )
}

export default Home
