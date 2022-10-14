import React from 'react'
import { ShopsContainer } from './ShopsStyles'
import { Card, Illustration } from "@web3uikit/core"

const Shops = (props) => {

  const shopifyStores = [
    {storeName: 'My Store', description: 'This store sells electronics', category: 'electronics', image: '', link: 'https://www.shopify.com/'},
    {storeName: 'My Store', description: 'This store sells clothes', category: 'clothes', image: '', link: 'https://www.shopify.com/'},
    {storeName: 'My Store', description: 'This store sells shoes', category: 'shoes', image: '', link: 'https://www.shopify.com/'},
  ] 

  const { isWeb3Enabled } = props

  return (
    <ShopsContainer>
        <div className="grid grid-cols-3 gap-4 content-evenly">
                {isWeb3Enabled ? (
                    shopifyStores.map((store) => {
                        return (
                        <div className="m-5" style={{width: '250px'}}>
                            <a href={store.link} rel="noopener noreferrer" target="_blank">
                            <Card 
                                title={store.storeName}
                                description={store.description}
                                onClick={''}
                            >
                                <div>
                                <Illustration height={'180px'} logo={'token'} width={'100%'} />
                                {/* <img src={store.image}/> */}
                                </div>
                            </Card>
                            </a>
                        </div>
                        )
                    })
                )
                    : null
                }
            </div>
    </ShopsContainer>
  )
}

export default Shops