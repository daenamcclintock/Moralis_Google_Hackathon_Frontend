import React from 'react'
import { ConnectButton } from "web3uikit"
import Link from "next/link"
import { HeaderContainer, Tag, Logo } from './HeaderStyles'
import { Canvas, useFrame, Suspense } from '@react-three/fiber'
import Coin from '../Landing/Coin/Coin'

const Header = () => {
  return (
    <>
    <nav className="border-b-2 flex flex-row justify-between items-center">
        <div className="flex flex-row justify-between items-center">
            <Canvas>
                <ambientLight color={0xffffff} intensity={0.5} />
                <pointLight color={0xff4422} intensity={1} position={[-1, -1, 3]} />
                <pointLight color={0x44ff88} intensity={1} position={[1, 2, 3]} />
                <pointLight color={0xdd3311} intensity={1} position={[0, 3, 2]} />
                <Coin position={[0, 0.5, 3]} />
            </Canvas>
            <Logo src='/images/Tokenz.png' />
        </div>
        <HeaderContainer className="flex flex-row items-center">
            <Link href="/">
                <Tag className="mr-4 p-6">Home</Tag>
            </Link>
            <Link href="/dashboard">
                <Tag className="mr-4 p-6">Dashboard</Tag>
            </Link>
            <Link href="/shops">
                <Tag className="mr-4 p-6">Shops</Tag>
            </Link>
            <Link href="/pools">
                <Tag className="mr-4 p-6">Pools</Tag>
            </Link>
            <ConnectButton moralisAuth={false} />
        </HeaderContainer>
    </nav>
    </>
  )
}

export default Header