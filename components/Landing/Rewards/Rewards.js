import React from 'react'
import { RewardsContainer, RewardsTitleContainer, RewardsTitle, SectionDiv, Section } from './RewardsStyles'
import { Button, Widget } from 'web3uikit'
import Link from 'next/link'

const Rewards = () => {

  const onLivePriceClick = () => {
    console.log("This is the live price!")
  }

  const navigatePools = () => {
    console.log("Navigating to pools page!")
  }

  const navigateGames = () => {
    console.log("Navigating to games!")
  }

  const navigateCasino = () => {
    console.log("Navigating to games!")
  }

  const navigateBetting = () => {
    console.log("Navigating to games!")
  }

  const navigateOtherUtility = () => {
    console.log("Navigating to games!")
  }

  return (
    <>
      <RewardsTitleContainer>
        <RewardsTitle>Rewards</RewardsTitle>
      </RewardsTitleContainer>
      <RewardsContainer>
        <SectionDiv>
            <Section>
                <Widget info="TKZ Price Appreciation" title="TOKENZ">
                  <Link href={'https://www.coingecko.com/'} target='_blank'>
                    <Button
                      text='Live Price'
                      customize={{
                        onHover: 'darken',
                      }}
                      theme="custom"
                      onClick={onLivePriceClick}
                    />
                  </Link>
                </Widget>
                <Widget info="Provide Liquidity" title="TOKEN STAKING">
                  <Link href={'/pools'}>
                    <Button
                        text='Liquidity Pools'
                        customize={{
                          onHover: 'darken',
                        }}
                        theme="custom"
                        onClick={navigatePools}
                      />
                  </Link>
                </Widget>
            </Section>
            <Section>
                <Widget info="" title="WEB3 GAMING">
                  <Link href={''}>
                    <Button
                        text='Games'
                        customize={{
                          onHover: 'darken',
                        }}
                        theme="custom"
                        onClick={navigateGames}
                      />
                  </Link>
                </Widget>
                <Widget title="TOKEN GAMBLING">
                  <Link href={''}>
                    <Button
                        text='Casino'
                        customize={{
                          onHover: 'darken',
                        }}
                        theme="custom"
                        onClick={navigateCasino}
                      />
                  </Link>
                </Widget>
                <Widget title="TOKENZ BETTING">
                  <Link href={''}>
                    <Button
                        text='Bet'
                        customize={{
                          onHover: 'darken',
                        }}
                        theme="custom"
                        onClick={navigateBetting}
                      />
                  </Link>
                </Widget>
                <Widget title="OTHER UTILITY">
                  <Link href={''}>
                    <Button
                        text='Casino'
                        customize={{
                          onHover: 'darken',
                        }}
                        theme="custom"
                        onClick={navigateOtherUtility}
                      />
                  </Link>
                </Widget>
            </Section>
        </SectionDiv>
      </RewardsContainer>
    </>
  )
}

export default Rewards