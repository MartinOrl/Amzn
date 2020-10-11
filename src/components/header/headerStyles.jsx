import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'

export const GlobalContainer = styled.div`
    height: 100px;
    display: flex;
    align-items: center;
    background-color: #131921;
    position: sticky;
    top: 0;
    z-index: 100;
`

export const AmazonLogo = styled.img`
    width: 100px;
    object-fit: contain;
    margin: 0 20px;
    margin-top: 18px;
`

export const Search = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    border-radius: 24px;
`

export const SearchInput = styled.input`
    height: 12px;
    padding: 10px;
    border: none;
    width: 100%;
`

export const NavContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
`

export const NavItem = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 16px;
    color: white;
`

export const Subline = styled.span`
    font-size: 16px;
`

export const MainLine = styled.span`
    font-size: 16px;
    font-weight: 800;
`

export const SearchIco = styled(SearchIcon)`
    padding: 5px;
    height: 22px !important;
    background-color: #cd9042;
`

export const CartIcon = styled(ShoppingBasketIcon)`
`

export const CartContainer = styled.div`
    display: flex;
    align-items: center;
    color: white;
`

export const CartItemsCount = styled.span`
    margin: 0 10px;
`