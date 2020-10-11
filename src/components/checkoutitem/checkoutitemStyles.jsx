import styled from 'styled-components';

import ChevronLeft from '@material-ui/icons/ChevronLeft'
import ChevronRight from '@material-ui/icons/ChevronRight'

export const Left = styled(ChevronLeft)`
    &:hover{
        cursor: pointer;
    }
`

export const Right = styled(ChevronRight)`
    &:hover{
        cursor: pointer;
    }
`

export const ItemContainer = styled.div`
    display: flex;
    margin: 20px 0;
`

export const Image = styled.img`
    object-fit: contain;
    width: 180px;
    height: 180px;
`

export const ItemInfo = styled.div`
    padding-left: 20px;
`

export const Title = styled.p`
    font-size: 17px;
    font-weight: 800;
`

export const Price = styled.p`
    font-size: 20px;
    font-weight: 600;
`

export const Rating = styled.div`
    display: flex;
`

export const Button = styled.button`
    background: #f0c14b;
    border: 1px solid;
    margin-top: 10px;
    border-color: #a88734 #9c7e31 #846a29;
    color: #111;
`


export const QuantityOptions = styled.div`
    display: flex;
    margin: 12px 0;
    align-items: center;
`
