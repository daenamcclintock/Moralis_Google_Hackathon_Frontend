import React from 'react'
import { PartnersContainer, PartnersTitleContainer , PartnersTitle} from './PartnersStyles'
import { Information, Card, Logo } from 'web3uikit'

const Partners = () => {
  return (
    <>
    <PartnersTitleContainer>
      <PartnersTitle>Parters</PartnersTitle>
    </PartnersTitleContainer>
    <PartnersContainer className='gap-4 content-evenly'>
    </PartnersContainer>
    </>
  )
}

export default Partners