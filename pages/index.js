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
import PopularStores from "../components/Landing/PopularStores/PopularStores"
import { useEffect, useState } from "react"
import { collection, getDocs } from "firebase/firestore"
import firestore from "../firebaseConfig"

const Home = () => {
    // const [userAddress, setUserAddress] = useState(null)
    const { isWeb3Enabled, user, userAddress } = useMoralis()
    // const { data: listedNfts, isFetching: fetchingListedNfts } = useMoralisQuery(
    //   // TableName
    //   // Function for the query
    //   "ActiveItem",
    //   (query) => query.limit(10).descending("tokenId")
    // )

    const getData = async () => {
        try {
            const querySnapshot = await getDocs(collection(firestore, "transactions"))
            querySnapshot.forEach((doc) => {
                console.log("firestore", doc.data())
            })
        } catch (e) {
            console.error("Error adding document: ", e)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        if (isWeb3Enabled) {
            // setUserAddress(user.attributes.ethAddress)
            console.log(userAddress)
            console.log(user)
        }
    }, [isWeb3Enabled])

    return (
        <LandingContainer>
            <Heros />
            <PopularStores isWeb3Enabled={isWeb3Enabled} />
            <Metrics />
            <Partners />
            <Protocol />
            <Rewards />
            <Footer />
        </LandingContainer>
    )
}

export default Home
