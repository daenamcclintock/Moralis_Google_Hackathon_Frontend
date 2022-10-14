import Image from "next/image"
import styles from "../styles/Home.module.css"
import { useMoralisQuery, useMoralis } from "react-moralis"
import Footer from "../components/Footer/Footer"
import Protocol from "../components/Landing/Protocol/Protocol"
import Partners from "../components/Landing/Partners/Partners"
import Rewards from "../components/Landing/Rewards/Rewards"
import Heros from "../components/Landing/Hero/Hero"
import Metrics from "../components/Landing/Metrics/Metrics"
import { LandingContainer } from "../components/Landing/LandingStyles"
import PopularStores from "../components/PopularStores/PopularStores"

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
        <Heros />
        <PopularStores isWeb3Enabled={isWeb3Enabled}/>
        <Metrics />
        <Partners />
        <Protocol />
        <Rewards />
        <Footer />
    </LandingContainer>
  )
}

export default Home
