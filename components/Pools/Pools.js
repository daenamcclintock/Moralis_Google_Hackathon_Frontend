import React from 'react'
import { PoolsContainer } from './PoolsStyles'
import { SwapWidget } from '@uniswap/widgets'
import '@uniswap/widgets/fonts.css'
import Web3 from 'web3'

const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));

const jsonRpcUrlMap = { 
  1: ['https://mainnet.infura.io/v3/a0e90a9193b34bfd8a93b53c0555bb5f'], 
}

const MY_TOKEN_LIST = [
  {
  "name": "Dai Stablecoin",
  "address": "0x6B175474E89094C44Da98b954EedeAC495271d0F",
  "symbol": "DAI",
  "decimals": 18,
  "chainId": 1,
  "logoURI": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png"
},
  {
  "name": "Tether USD",
  "address": "0xdAC17F958D2ee523a2206206994597C13D831ec7",
  "symbol": "USDT",
  "decimals": 6,
  "chainId": 1,
  "logoURI": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png"
},
{
  "name": "USD Coin",
  "address": "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
  "symbol": "USDC",
  "decimals": 6,
  "chainId": 1,
  "logoURI": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png"
},
]

const Pools = () => {
  return (
    <PoolsContainer className="Uniswap">
        {/* <SwapWidget provider={web3} jsonRpcUrlMap={jsonRpcUrlMap} tokenList={MY_TOKEN_LIST} /> */}
        Pools
    </PoolsContainer>
  )
}

export default Pools