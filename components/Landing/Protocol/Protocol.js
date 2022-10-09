import React from 'react'
import { ProtocolContainer, CryptoCardsContainer } from './ProtocolStyles'
import { CryptoCards, Button } from '@web3uikit/core'

const Protocol = () => {

  const onCryptoCardClick = () => {
    return (
      <a href='https://polygon.technology/'>Polygon</a>
    )
  }

  return (
    <ProtocolContainer>
        Protocol
        <CryptoCardsContainer>
          <CryptoCards 
              chain="polygon" 
              bgColor="linear-gradient(113.54deg, rgba(117, 183, 251, 0.531738) 14.91%, rgba(215, 38, 243, 0.6) 42.57%, rgba(252, 84, 255, 0.336) 45.98%, rgba(209, 103, 255, 0.03) 55.76%), linear-gradient(160.75deg, #AB42CB 41.37%, #45FFFF 98.29%)"
              chainType="Network" 
              onClick={onCryptoCardClick}
          />
        </CryptoCardsContainer>
    </ProtocolContainer>
  )
}

export default Protocol