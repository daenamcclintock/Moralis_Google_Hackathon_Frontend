import React from 'react'
import Shops from '../components/Shops/Shops'
import { useMoralisQuery, useMoralis } from "react-moralis"

const ShopsPage = () => {

  const { isWeb3Enabled } = useMoralis()

  return (
    <Shops isWeb3Enabled={isWeb3Enabled}/>
  )
}

export default ShopsPage