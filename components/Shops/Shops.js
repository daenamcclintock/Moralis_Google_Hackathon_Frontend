import React from 'react'
import { ButtonDiv, CardDiv, ImageDiv, Image, Link, ShopsContainer, StoreDescriptionDiv, StoreNameDiv, StoresDiv } from './ShopsStyles'
import { Button, Card } from "@web3uikit/core"

const Shops = (props) => {

  const shopifyStores = [
    {storeName: 'My Store', description: 'This store sells electronics', category: 'electronics', image: 'https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/08/shopify-themes.jpg?auto=format&q=60&fit=max&w=930', link: 'https://www.shopify.com/'},
    {storeName: 'My Store', description: 'This store sells clothes', category: 'clothes', image: 'https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/08/shopify-themes.jpg?auto=format&q=60&fit=max&w=930', link: 'https://www.shopify.com/'},
    {storeName: 'My Store', description: 'This store sells shoes', category: 'shoes', image: 'https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/08/shopify-themes.jpg?auto=format&q=60&fit=max&w=930', link: 'https://www.shopify.com/'},
    {storeName: 'My Store', description: 'This store sells collectibles', category: 'collectibles', image: 'https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/08/shopify-themes.jpg?auto=format&q=60&fit=max&w=930', link: 'https://www.shopify.com/'},
    {storeName: 'My Store', description: 'This store sells handmade crafts', category: 'crafts', image: 'https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/08/shopify-themes.jpg?auto=format&q=60&fit=max&w=930', link: 'https://www.shopify.com/'},
    {storeName: 'My Store', description: 'This store sells used iphones', category: 'electronics', image: 'https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/08/shopify-themes.jpg?auto=format&q=60&fit=max&w=930', link: 'https://www.shopify.com/'},
  ] 

  const { isWeb3Enabled } = props

  return (
    <ShopsContainer>
        <StoresDiv className="grid grid-cols-3 gap-4 content-evenly">
            {shopifyStores.map((store) => {
                    return (
                        <CardDiv className="m-5">
                            <Link href={store.link} rel="noopener noreferrer" target="_blank">
                                <Card
                                    onClick={''}
                                >
                                    <StoreNameDiv>
                                        {store.storeName}
                                    </StoreNameDiv>
                                    <StoreDescriptionDiv>
                                        {store.description}
                                    </StoreDescriptionDiv>
                                    <ImageDiv>
                                        <Image src={store.image}/>
                                    </ImageDiv>
                                    <ButtonDiv>
                                        <Link href={store.link} rel="noopener noreferrer" target="_blank" >
                                            <Button
                                                text='View Store'
                                                customize={{
                                                    backgroundColor: '#9EC7EA',
                                                    onHover: 'darken',
                                                }}
                                                theme="custom"
                                            />
                                        </Link>
                                    </ButtonDiv>
                                </Card>
                            </Link>
                        </CardDiv>
                    )
                })
            }
        </StoresDiv>
    </ShopsContainer>
  )
}

export default Shops