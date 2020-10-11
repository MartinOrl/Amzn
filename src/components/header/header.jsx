import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { getCartItemCount } from '../../redux/cartUtils'
import { useStateValue } from '../../redux/store'

import { GlobalContainer, AmazonLogo, Search, NavContainer, NavItem, Subline, MainLine, SearchIco, SearchInput, CartContainer, CartIcon, CartItemsCount} from './headerStyles'



const Header = () => {
    const [search, setSearch] = useState('')
    // eslint-disable-next-line
    const [{cart, user}, dispatch] = useStateValue();

    return(
        <GlobalContainer>
            <Link to='/'>
                <AmazonLogo src='https://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='' />
            </Link>
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
                <Link to='/checkout' style={{margin: 'auto 8px', textDecoration:'none'}}>
                    <CartContainer>
                        <CartIcon />
                        <CartItemsCount>{getCartItemCount(cart)}</CartItemsCount>
                    </CartContainer>
                </Link>
            </NavContainer>
        </GlobalContainer>
    )
}

export default Header;