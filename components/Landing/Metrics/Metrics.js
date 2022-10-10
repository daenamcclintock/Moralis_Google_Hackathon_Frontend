import React from 'react'
import { MetricsContainer, MetricsTitleContainer, MetricsTitle } from './MetricsStyles'

const Metrics = () => {
  return (
    <>
    <MetricsTitleContainer>
      <MetricsTitle>Metrics</MetricsTitle>
    </MetricsTitleContainer>
    <MetricsContainer>
        Metrics: amount of users, amount of tokens, market cap
    </MetricsContainer>
    </>
  )
}

export default Metrics