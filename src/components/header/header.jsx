import React, { useState } from 'react'

import { GlobalContainer, AmazonLogo, Search, NavContainer, NavItem, Subline, MainLine, SearchIco, SearchInput, CartContainer, CartIcon, CartItemsCount} from './headerStyles'



const Header = () => {
    const [search, setSearch] = useState('')

    return(
        <GlobalContainer>
            <AmazonLogo src='https://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='' />
            <Search>
                <SearchInput type='text' value={search} onChange={e => setSearch(e.target.value)} placeholder='Iphone 11 Max' />
                <SearchIco />
            </Search>
            <NavContainer>
                <NavItem>
                    <Subline>Hello</Subline>
                    <MainLine>Sign In</MainLine>
                </NavItem>
                <NavItem>
                    <Subline>Returns</Subline>
                    <MainLine>& Orders</MainLine>
                </NavItem>
                <NavItem>
                    <Subline>Your</Subline>
                    <MainLine>Prime</MainLine>
                </NavItem>
                <CartContainer>
                    <CartIcon />
                    <CartItemsCount>0</CartItemsCount>
                </CartContainer>
            </NavContainer>
        </GlobalContainer>
    )
}

export default Header;