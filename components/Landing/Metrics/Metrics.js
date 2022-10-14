import React from 'react'
import { MetricsContainer, MetricsTitleContainer, MetricsTitle } from './MetricsStyles'
import { Information } from 'web3uikit'

const Metrics = () => {
  return (
    <>
    <MetricsTitleContainer>
      <MetricsTitle>Metrics</MetricsTitle>
    </MetricsTitleContainer>
    <MetricsContainer className='gap-4 content-evenly'>
        <Information
          topic='Number of Users'
          information='1000'
        />
        <Information
          topic='Amount of Tokens'
          information='500'
        />
        <Information
          topic='Token Market Cap'
          information='$200M'
        />
    </MetricsContainer>
    </>
  )
}

export default Metrics