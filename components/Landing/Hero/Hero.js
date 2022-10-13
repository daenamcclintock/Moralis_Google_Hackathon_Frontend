import React from 'react'
import { HeroContainer, HeroTitleContainer, HeroTitle } from './HeroStyles'
import { Hero } from '@web3uikit/core'
import Coin from '../Coin/Coin'
import Box from '../Coin/Box'
import Three from '../Coin/Three'
import { Canvas, useFrame, Suspense } from '@react-three/fiber'

const Heros = () => {
  return (
    <>
      <Hero
        // backgroundURL='http://clevadesk.com/wp-content/uploads/2018/11/home-page-hero-background-1030x378.jpeg'
        // backgroundURL='/images/shopify.png'
        backgroundColor='rgb(138, 2, 217)'
        title='Tokenz'
        subTitle='Shopify Token Rewards'
        textColor='white'
        height='66vh'
        padding='20px'
        align='right'
        // customImage={{url: "/images/DeFi.png"}}
      >
        {/* <Canvas>
          <ambientLight color={0xffffff} intensity={0.5} />
          <pointLight color={0xff4422} intensity={1} position={[-1, -1, 3]} />
          <pointLight color={0x44ff88} intensity={1} position={[1, 2, 3]} />
          <pointLight color={0xdd3311} intensity={1} position={[0, 3, 2]} />
          <Three position={[0, 0.3, 3]} />
        </Canvas> */}
      </Hero>
      {/* <Canvas>
        <ambientLight color={0xffffff} intensity={0.5} />
        <pointLight color={0xff4422} intensity={1} position={[-1, -1, 3]} />
        <pointLight color={0x44ff88} intensity={1} position={[1, 2, 3]} />
        <pointLight color={0xdd3311} intensity={1} position={[0, 3, 2]} />
        <Suspense>
        <Coin position={[-3, 1, 2]}/>
        </Suspense>
      </Canvas> */}
    </>
  )
}

export default Heros