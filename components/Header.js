import React from 'react'
import { ConnectButton } from "web3uikit"
import Link from "next/link"

const Header = () => {
  return (
    <nav className="p-5 border-b-2 flex flex-row justify-between items-center">
            <h1 className="py-4 px-4 font-bold text-3xl">Moralis x Google Hackathon App</h1>
            <div className="flex flex-row items-center">
                <Link href="/">
                    <a className="mr-4 p-6">Home</a>
                </Link>
                <Link href="/shops">
                    <a className="mr-4 p-6">Shops</a>
                </Link>
                <Link href="/pools">
                    <a className="mr-4 p-6">Pools</a>
                </Link>
                <ConnectButton moralisAuth={false} />
            </div>
        </nav>
  )
}

export default Header