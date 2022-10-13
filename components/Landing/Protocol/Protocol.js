import React from 'react'
import { ProtocolContainer, ProtocolTitleContainer, ProtocolTitle, CryptoCardsContainer, ProtocolDescriptionConstainer, ProtocolDescription } from './ProtocolStyles'
import { CryptoCards, Button } from '@web3uikit/core'
import { useRouter } from 'next/router';
import Link from 'next/link';

const Protocol = () => {
  const router = useRouter()

  const onCryptoCardClick = () => {
    // router.push('https://polygon.technology/')
  }

  return (
    <>
    <ProtocolTitleContainer>
      <ProtocolTitle>Polygon Blockchain</ProtocolTitle>
    </ProtocolTitleContainer>
    <ProtocolContainer>
        <CryptoCardsContainer>
        <a href={'https://polygon.technology/'} rel="noopener noreferrer" target="_blank">
          <CryptoCards 
              chain="polygon" 
              bgColor="linear-gradient(113.54deg, rgba(117, 183, 251, 0.531738) 14.91%, rgba(215, 38, 243, 0.6) 42.57%, rgba(252, 84, 255, 0.336) 45.98%, rgba(209, 103, 255, 0.03) 55.76%), linear-gradient(160.75deg, #AB42CB 41.37%, #45FFFF 98.29%)"
              chainType="Network" 
              onClick={onCryptoCardClick}
          />
        </a>
        </CryptoCardsContainer>
        <ProtocolDescriptionConstainer>
          <ProtocolDescription>
            Polygon is a decentralized layer two Ethereum scaling platform that enables developers to build scalable user-friendly dApps with low transaction fees while inheriting the security of the Ethereum blockchain.
          </ProtocolDescription>
        </ProtocolDescriptionConstainer>
    </ProtocolContainer>
    </>
  )
}

export default Protocol