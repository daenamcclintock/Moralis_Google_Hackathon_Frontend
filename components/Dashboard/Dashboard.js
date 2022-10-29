import React, { useState } from 'react'
import Footer from "../Footer/Footer"
import { Information } from 'web3uikit'
import { DashboardContainer, DashboardTitle } from './DashboardStyles'

const user = {
  address: '0x25b041f8cdb3E8B6EDa71Ff4B312fab8b7e6D820',
  email: 'test@email.com',
  tokenYtd: 50,
  transactions: [
    {
      store: 'Store1',
      tokensToBeIssued: 3,
      user: '0x25b041f8cdb3E8B6EDa71Ff4B312fab8b7e6D820'
    },
    {
      store: 'Store2',
      tokensToBeIssued: 1,
      user: '0x25b041f8cdb3E8B6EDa71Ff4B312fab8b7e6D820'
    },
    {
      store: 'Store3',
      tokensToBeIssued: 5,
      user: '0x25b041f8cdb3E8B6EDa71Ff4B312fab8b7e6D820'
    },
  ]
}

const Dashboard = () => {
  return (
    <DashboardContainer>
      <DashboardTitle>My Dashboard</DashboardTitle>
      <Information 
        topic="Tokens YTD"
        information='10'
      />
      <Footer/>
    </DashboardContainer>
  )
}

export default Dashboard