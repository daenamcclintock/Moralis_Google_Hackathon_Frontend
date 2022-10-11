import React from 'react'
import { HeroContainer, HeroTitleContainer, HeroTitle } from './HeroStyles'
import { Hero } from '@web3uikit/core'

const Heros = () => {
  return (
    <>
      <Hero
        // backgroundURL='http://clevadesk.com/wp-content/uploads/2018/11/home-page-hero-background-1030x378.jpeg'
        // backgroundURL='/images/shopify.png'
        backgroundColor='darkgrey'
        title='Google x Moralis Hackathon'
        textColor='white'
        height='66vh'
        padding='10px'
        align='right'
        // customImage={{url: "/images/shopify.png"}}
      />
    </>
  )
}

export default Heros