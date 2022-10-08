import React from 'react'
import { ConnectButton } from "web3uikit"
import Link from "next/link"
import { HeaderContainer, Links } from './HeaderStyles'

const Header = () => {
  return (
    <nav className="p-5 border-b-2 flex flex-row justify-between items-center">
        <h1 className="py-4 px-4 font-bold text-3xl">Moralis x Google Hackathon App</h1>
        <HeaderContainer className="flex flex-row items-center">
            <Link href="/">
                <Links className="mr-4 p-6">Home</Links>
            </Link>
            <Link href="/">
                <Links className="mr-4 p-6">Dashboard</Links>
            </Link>
            <Link href="/shops">
                <Links className="mr-4 p-6">Shops</Links>
            </Link>
            <Link href="/pools">
                <Links className="mr-4 p-6">Pools</Links>
            </Link>
            <ConnectButton moralisAuth={false} />
        </HeaderContainer>
    </nav>
  )
}

export default Header