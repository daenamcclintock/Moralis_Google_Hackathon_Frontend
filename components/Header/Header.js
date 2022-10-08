import React from 'react'
import { ConnectButton } from "web3uikit"
import Link from "next/link"
import { HeaderContainer, Tag } from './HeaderStyles'

const Header = () => {
  return (
    <nav className="p-5 border-b-2 flex flex-row justify-between items-center">
        <h1 className="py-4 px-4 font-bold text-3xl">Moralis x Google Hackathon App</h1>
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
  )
}

export default Header