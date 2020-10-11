import React from 'react'
import Product from '../product/product'

import { HomeContainer, Container, HomeImage, Row } from './homeStyles'

export default function Home() {
    return (
        <HomeContainer>
            <Container>
                <HomeImage src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'  alt='' />
                <Row>
                    <Product 
                        id='123456789'
                        title='The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback'
                        price={11.96}
                        imgUrl='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL.__AC_SY400_.jpg'
                        rating={5}
                    />
                    <Product
                        id='987654321'
                        title='Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl'
                        price={239.0}
                        imgUrl='https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg'
                        rating={4} 
                    />
                </Row>
                <Row>
                    <Product 
                        id='11568799'
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
                        price={199.99}
                        imgUrl='https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg'
                        rating={3}
                    />
                    <Product 
                        id='52138796'
                        title='Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric'
                        price={98.99}
                        imgUrl='https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$'
                        rating={5}
                    />
                    <Product 
                        id='54321875'
                        title='New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)'
                        price={598.99}
                        imgUrl='https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg'
                        rating={4}
                    />
                </Row>
                <Row>
                    <Product 
                        id='21356897'
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                        price={1094.98}
                        imgUrl='https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg'
                        rating={4}
                    />
                </Row>
            </Container>
        </HomeContainer>
    )
}
