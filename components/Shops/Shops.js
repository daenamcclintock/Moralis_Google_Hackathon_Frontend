import React from 'react'
import { ShopsContainer } from './ShopsStyles'
import { Button, Card, Illustration } from "@web3uikit/core"

const Shops = (props) => {

  const shopifyStores = [
    {storeName: 'My Store', description: 'This store sells electronics', category: 'electronics', image: '', link: 'https://www.shopify.com/'},
    {storeName: 'My Store', description: 'This store sells clothes', category: 'clothes', image: '', link: 'https://www.shopify.com/'},
    {storeName: 'My Store', description: 'This store sells shoes', category: 'shoes', image: '', link: 'https://www.shopify.com/'},
    {storeName: 'My Store', description: 'This store sells collectibles', category: 'collectibles', image: '', link: 'https://www.shopify.com/'},
    {storeName: 'My Store', description: 'This store sells handmade crafts', category: 'crafts', image: '', link: 'https://www.shopify.com/'},
    {storeName: 'My Store', description: 'This store sells used iphones', category: 'electronics', image: '', link: 'https://www.shopify.com/'},
  ] 

  const { isWeb3Enabled } = props

  return (
    <ShopsContainer>
        <div className="grid grid-cols-3 gap-4 content-evenly">
            {shopifyStores.map((store) => {
                    return (
                    <div className="m-5" style={{width: '250px'}}>
                        <a href={store.link} rel="noopener noreferrer" target="_blank">
                            <Card
                                onClick={''}
                            >
                                <div>
                                    {store.storeName}
                                </div>
                                <div>
                                    {store.description}
                                </div>
                                <div>
                                    <Illustration height={'180px'} logo={'token'} width={'100%'} />
                                    {/* <img src={store.image}/> */}
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'center'}}>
                                    <a href={store.link} rel="noopener noreferrer" style={{ textDecoration: 'none' }} target="_blank" >
                                        <Button
                                            text='View Store'
                                            customize={{
                                                backgroundColor: '#9EC7EA',
                                                onHover: 'darken',
                                            }}
                                            theme="custom"
                                        />
                                    </a>
                                </div>
                            </Card>
                        </a>
                    </div>
                    )
                })
            }
        </div>
    </ShopsContainer>
  )
}

export default Shops